/* =======================================
   Official CPI & WPI Extractor
======================================= */
/* ==========================================
   OFFICIAL CPI / WPI EXTRACTOR
========================================== */

window.officialData = {
    labour: {},
    material: {},
    fuel: {},
    pm: {}
};

function extractOfficialPDF(text, type) {

    if (type === "cpi") {

        extractOfficialCPI(text);

    } else if (type === "wpi") {

        extractOfficialWPI(text);

    }

}

function extractOfficialCPI(text){

    const line = text.split("\n").find(l =>
        l.includes("Consumer Price Index for Industrial Workers")
    );

    if(!line){
        alert("CPI-IW row not found");
        return;
    }

    console.log(line);

    const values = line.match(/\d+\.\d+/g);

    if(values){

        window.officialData.labour.values = values;

        console.log(values);

    }

}

function extractOfficialWPI(text){

    const lines = text.split("\n");

    lines.forEach(line=>{

        if(line.includes("FUEL & POWER")){

            console.log("Fuel Row");

            console.log(line);

        }

        if(line.includes("MANUFACTURE OF MACHINERY")){

            console.log("PM Row");

            console.log(line);

        }

        if(line.includes("All Commodities")){

            console.log("Material Row");

            console.log(line);

        }

    });

}

function compareOfficialData(){

    console.log("PDF Labour");

    console.table(window.monthlyIndices);

    console.log("Official Labour");

    console.table(window.officialData.labour);

}