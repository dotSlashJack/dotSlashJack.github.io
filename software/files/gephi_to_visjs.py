#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gephi_to_visjs
Turns a Gephi file into a visjs html file
There is a json export plugin for gephi that also works in a similar capacity
See original visjs files and docs at https://visjs.github.io/vis-network/docs/network/
Special thanks to gephi and visjs for their software and code!
@author: jack
version 1.0.0
Last updated: March 3, 2020
"""

import argparse
import pandas as pd
import requests
import os

parser = argparse.ArgumentParser()
parser.add_argument("-n", "--nodeCSV", 
                    help="The path to the CSV containing the nodes exported from Gephi", 
                    required=True)
parser.add_argument("-e", "--edgeCSV", 
                    help="The path to the CSV containing the edges exported from Gephi",
                    required=True)
parser.add_argument("-o", "--outputFile", 
                    help="File name to save the output as (must inclde .html extension",
                    required=True)
parser.add_argument("-types", "--nodeTypes", 
                    help="If node types are not numerical (1,2,3...), provide the types, in order, and the program will handle it for you\n usage ex: -types primary secondary tertiary",
                    nargs='+')
args = parser.parse_args()

nodeCSV, edgeCSV, outputFile, node_levels = args.nodeCSV, args.edgeCSV, args.outputFile, args.nodeTypes
node_levels = [x.lower() for x in node_levels]
print(node_levels)

def download(file):
    url = "https://jackhester.com/software/files/"+file
    dl = requests.get(url)
    open(file, 'wb').write(dl.content)
    
# convert node CSV output from Gephi to list of nodes for vis.js
nodes = []
def node_csv_to_list(nodeCSV):
    df = pd.read_csv(nodeCSV).dropna()
    rows = df.iterrows()
    
    for i, row in rows:
        try:
            node_type = str(row["node-type"]).lower()
            if node_levels != None: # convert node types to a number for compatibility with nodejs
                node_type = node_levels.index(node_type)
            r = 'id: '+ str(i)+ ', label: \"'+ row["id"]+ ' \", group: '+ str(node_type)
            nodes.append('{'+r+'}')
        except:
            try:
                node_type = str(row["node_type"]).lower()
                if node_levels != None:
                    node_type = node_levels.index(node_type)
                r = 'id: '+ str(i)+ ', label: \"'+ row["id"]+ ' \", group: '+ str(node_type)
                nodes.append('{'+r+'}')
            except:
                print("ERROR: Problem parsing the node CSV. You should check to make sure there aren't missing cells.")
                print('You may also need to change the column title \"node-type\" to \"node_type\" as the \"-\" character may be causing an error.')
        
    return(nodes)

# get Gephi edges from CSV and convert to visjs format
edges = []
def edge_csv_to_list(edgeCSV):
    df = pd.read_csv(edgeCSV) # no dropna here b/c some cols likely empty
    rows = df.iterrows()
    for i, row in rows:
        target = str(row['Target'])
        source = str(row['Source'])
        r = 'from: '+source+', to: '+target
        edges.append('{'+r+'}')
    return(edges)

# put list of nodes into html template file
# l is list of node rows to put into html
def generate_html(node_list, edge_list):
    node_list
    edge_list
    # query wd and if necessary template files not present then download from internet
    files = os.listdir(os.getcwd())
    needed_files = ['vis.min.js','visjs_template.html','vis.min.css']
    for item in needed_files:
        if item not in files:
            download(item)
    with open('visjs_template.html') as t:
        template = t.read()
        first, last = template.split('//<--insertHere-->')
        #last = template.split('//<!--insert here-->')[1]
        with open(outputFile, 'w+') as of:
            of.write(first)

            of.write('var nodes = [\n')
            for node in node_list:
                of.write(node+',\n')
            of.write('];\n\n')
            
            of.write('var edges = [\n')
            for edge in edge_list:
                of.write(edge+',\n')
            of.write('];\n\n')
            
            of.write(last)
        of.close()
    t.close()

        
print("This program will take in the gephi nodes and gephi edges CSV files and create a vis.js html file.")
print("If you have not already downloaded vis.min.css and vis.min.js and the template file, this software will do that for you.\n")
print("Please note: the vis.min.js, vis.min.css, and template files are not my own. They are hosted on my website to ensure version stability.")
print("These files were credit of visjs (see https://visjs.github.io/vis-network/docs/network/ and https://github.com/visjs/vis-network).")
generate_html( node_csv_to_list(nodeCSV), edge_csv_to_list(edgeCSV) )
print()
