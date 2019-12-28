function close_by_id(id){
    document.getElementById(id).style.display = 'none';
}

function show_by_id(id){
    //TODO: update this list as needed for more portfolio items
    hide_these(["undergrad_thesis_description","race_rev_description","cepc0904_description","r4edu_description","educafe_description"])
    document.getElementById(id).style.display = 'block';
}


function show_these(elementList){
    for (var e in elementList) {
        document.getElementById(elementList[e]).style.display = 'block';
    }
}

function hide_these(elementList){
    for (var e in elementList) {
        document.getElementById(elementList[e]).style.display = 'none';
    }
}

function filter_content(selection) {
    var selectedOption = selection.options[selection.selectedIndex].value;
    
    //all
    if(selectedOption == 1){ //All
        show_these(["undergrad_thesis", "cepc_0904", "race_rev","r4edu","educafe"])
    }

    //teaching
    else if(selectedOption == 2){ //
        hide_these(["race_rev","undergrad_thesis"]);
        show_these(["cepc_0904","r4edu","educafe"]);   
    }

    // Software & Code
    else if(selectedOption == 3){
        hide_these(["cepc_0904"]);
        show_these(["race_rev","undergrad_thesis","r4edu","educafe"]);
    }
    
    // Publications & Papers
    else if(selectedOption == 4){
        hide_these(["cepc_0904","r4edu","educafe"]);
        show_these(["race_rev","undergrad_thesis"]);
    }

    //comp ling
    else if(selectedOption == 5){
        hide_these(["cepc_0904","r4edu","educafe"]);
        show_these(["race_rev","undergrad_thesis"]);
    }

    //design and data viz
    else if(selectedOption == 6){
        hide_these(["undergrad_thesis"]);
        show_these(["race_rev","cepc_0904","r4edu","educafe"]);
    }

    //current projects
    else if(selectedOption == 7){
        //TODO
    }

    //past projects
    else if(selectedOption == 8){
        //TODO
    }
    
    //undergrad_thesis, topicnet, race_rev
    //TODO: make it shift by colunn not just row 
    //(maybe we can make the outline here and set each individual inner html)
}