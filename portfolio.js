// window.onload = function() {
//     generateProjectGrid();
//     onLoad_commands();
// };

const projects = [
    {
        id: 'covid_meter',
        imgSrc: 'tiles/covid_meter.png',
        title: 'COVID-19 Risk Meter',
        description: 'Using data trends to estimate the current threat posed by COVID in the Truckee Meadows region',
        link: 'portfolio-docs/covid-meter.html'
    },
    {
        id: 'aphasia_ema',
        imgSrc: 'tiles/aphasia_ema.png',
        title: 'EMA in Aphasia',
        description: 'Investigating the feasibility of using smartwatch prompts to measuring anomia during daily life',
        link: 'portfolio-docs/aphasia-ema.html'
    },
    {
        id: 'summer_at_brown',
        imgSrc: 'tiles/summer_at_brown.png',
        title: 'Teaching: Research Methods',
        description: 'Designed and taught a new research methods course for the Brown University Summer@Brown program',
        link: 'portfolio-docs/summer-at-brown.html'
    },
    {
        id: 'horizon_sat',
        imgSrc: 'tiles/horizon.png',
        title: 'CubeSat: Project Horizon',
        description: 'Designing and deploying Northeastern\'s first satellite',
        link: 'portfolio-docs/project-horizon.html'
    },
    {
        id: 'nlp_suite',
        imgSrc: 'tiles/nlp_suite.png',
        title: 'NLP Toolbox',
        description: 'A suite of over 150 natural language processing tools',
        link: 'portfolio-docs/nlp-suite.html'
    },
    {
        id: 'undergrad_thesis',
        imgSrc: 'tiles/nlp_thesis.png',
        title: 'Mining Drug Side-Effects from Online Forums',
        description: 'Developed a new method for analyzing the structure of complex networks',
        link: 'portfolio-docs/adv-drug-mine.html'
    },
    {
        id: 'propulsion',
        imgSrc: 'tiles/prop.png',
        title: 'Propulsion Software and Test Stand',
        description: 'Developement of software, electronics, and control systems for a hybrid rocket engine',
        link: 'portfolio-docs/propulsion-stand.html'
    },
    {
        id: 'eo_dash',
        imgSrc: 'tiles/eodash_hack.png',
        title: 'Earth Observing Dashboard Hackathon',
        description: 'Creating new tools and methods for the NASA/JAXA/ESA Earth Observing Dashboard',
        link: 'portfolio-docs/eo-dash-hack.html'
    },
    {
        id: 'lyme_predict',
        imgSrc: 'tiles/gis_lyme.png',
        title: 'Predicting Lyme Disease by County',
        description: 'Using regression analysis and ArcGIS to predict Lyme Disease cases in the Northeast',
        link: 'portfolio-docs/lyme-predict.html'
    },
    {
        id: 'sky_tavern',
        imgSrc: 'tiles/sky_tavern.png',
        title: 'Teaching: Kids to Ski',
        description: 'Taught at the largest not-for-profit community ski program in the US',
        link: 'portfolio-docs/sky-tavern.html'
    },
    {
        id: 'hello_proj',
        imgSrc: 'tiles/hello.png',
        title: 'The HELLO Project',
        description: 'Addressing the region\'s senior citizen loneliness epidemic and higher-than-average suicide rate',
        link: 'portfolio-docs/hello.html'
    },
    {
        id: 'marketing_evolution',
        imgSrc: 'tiles/marketing_evolution.png',
        title: 'ROI Prototype App',
        description: 'Checking ROI any time from your Apple Watch',
        link: 'portfolio-docs/roi-app.html'
    },
    {
        id: 'disability_research',
        imgSrc: 'tiles/critical_juncture.png',
        title: 'Disability Research',
        description: 'Looking at accessibility and inclusion',
        link: 'portfolio-docs/disability-research.html'
    },
    {
        id: 'safetrace',
        imgSrc: 'tiles/safetrace.png',
        title: 'SafeTrace API',
        description: 'Privacy-first contact tracing',
        link: 'portfolio-docs/safetrace-api.html'
    },
    {
        id: 'jh_notes',
        imgSrc: 'tiles/jh-notes.png',
        title: 'JH Notes',
        description: 'dealer\'s choice of other things',
        link: 'portfolio-docs/jh-notes.html'

    }
];

// Dynamically generate project grid items
function generateProjectGrid() {
    const gridContainer = document.getElementById('project-grid');
    projects.forEach(project => {
        const html = `
            <div id="${project.id}" class="grid-item">
                <div class="container">
                    <div class="inner-container">
                        <img src="${project.imgSrc}" alt="${project.title}" class="image">
                        <div class="overlay">
                            <div class="text">${project.title}
                                <div class="text-hidden">${project.description}</div>
                            </div>
                        </div>
                        <div class="bottomtext">
                            <a href="${project.link}" class="more-link">more</a>
                        </div>
                    </div>
                </div>
            </div>`;
        gridContainer.innerHTML += html;
    });
}

function onLoad_commands(){
    typeWriter();
    generateProjectGrid();
}

var i = 0;
var txt = 'I\'m an interdisciplinary researcher, and these are my projects.';
var speed = 60;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typewrite").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

function close_by_id(id){
    document.getElementById(id).style.display = 'none';
}

function show_by_id(id){
    // Hide other descriptions
    hide_these(["undergrad_thesis_description","nlp_suite_description","cepc0911_description","r4edu_description","educafe_description"])
    document.getElementById(id).style.display = 'block';
}

function show_these(elementList){
    elementList.forEach(element => {
        document.getElementById(element).style.display = 'block';
    });
}

function hide_these(elementList){
    elementList.forEach(element => {
        document.getElementById(element).style.display = 'none';
    });
}

// function filter_content(selection) {
//     var selectedOption = selection.options[selection.selectedIndex].value;
//     // Implement the filter logic as required
// }
