/* =======================================
   Official CPI & WPI Extractor
======================================= */

let officialData = {
    labour: {},
    material: {},
    fuel: {},
    pm: {}
};

function extractCPI(text){

    const regex =
    /Consumer Price Index for Industrial Workers[\s\S]*?(\d+\.\d+)\s+(\d+\.\d+)/;

    const m = text.match(regex);

    if(m){

        officialData.labour.base = parseFloat(m[1]);

        officialData.labour.current = parseFloat(m[2]);

    }

    console.log(officialData);

}

function extractWPI(text){

    console.log("Reading WPI...");

}

function compareOfficialData(){

    console.log("Comparing Official Data...");

}