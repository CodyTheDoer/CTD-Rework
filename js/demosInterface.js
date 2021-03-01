let activeDemos = [];

function floatDemoLaunch(demo){
    let demoIFrame = document.querySelector('iframe');
    demoIFrame = `demos/"${demo}".html`;
};

function parseAndUpdateDemos(demos){
    let demoParse = demos;
    while(demoParse.length > 5){
        let demoStart = demoParse.indexOf(`["`);
        let demoEnd = demoParse.indexOf(`],`);
        let pendingDemoFull = demoParse.slice(demoStart+1, demoEnd);
        pendingDemoFull.replace(/^"(.+(?="$))"$/, '$1'); //regex to clean up double quotes.
        let demoNameEnd = pendingDemoFull.indexOf(`",`);
        let demoName = pendingDemoFull.slice(1, demoNameEnd);
        let demoTrimmed = pendingDemoFull.slice(demoNameEnd+3)
        let demoToolsEnd = demoTrimmed.indexOf(`",`);
        let demoTools = demoTrimmed.slice(1, demoToolsEnd);
        let demoDescriptorEnd = demoTrimmed.lastIndexOf(`"`);
        let demoDescriptor = demoTrimmed.slice(demoToolsEnd+4, demoDescriptorEnd);
        let demoArray = [demoName, demoTools, demoDescriptor]
        activeDemos.push(demoArray);
        demoParse = demoParse.slice(demoParse.indexOf(`],`)+3);
    };
}

function externalDemoLaunch(demo){
    window.open(`demos/"${demo}".html`, `${demo}`);
};

function floatDemoPopulate(){
    for(i=0; i<activeDemos.length; i++){
        const floatDemo = document.getElementsByClassName("float Demos Container");
        let div = document.createElement("div");
        div.setAttribute('class','float Demos');
        div.setAttribute('id',`${activeDemos[i][0]}`);
        div.innerHTML = `
            <div class="floatHeader">
                ${activeDemos[i][0]} - ${activeDemos[i][1]}
            </div>
            <br>
            ${activeDemos[i][2]}
            <br>
            <button onclick='floatDemoLaunch("${activeDemos[i][0]}")'>${activeDemos[i][0]} - Embeded</button>
            <button onclick='externalDemoLaunch("${activeDemos[i][0]}")'>${activeDemos[i][0]} - New Window</button>
            <br>
        `;
        floatDemo[0].appendChild(div);
    }
};

function externalDemoLoader(){
    fetch('/demos/activeDemos')
    .then(response => response.text())
    .then((data) => {
        parseAndUpdateDemos(data);
        floatDemoPopulate();
    })
}













