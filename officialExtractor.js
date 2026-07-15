/* =========================================
   Official PDF Extractor
========================================= */

function extractOfficialPDF(text, type) {

    if (type === "cpi") {

        extractOfficialCPI(text);

    }
    else if (type === "wpi") {

        extractOfficialWPI(text);

    }

}

function extractOfficialCPI(text) {

    console.log("Reading Official CPI...");
    console.log(text.substring(0,1000));

}

function extractOfficialWPI(text) {

    console.log("Reading Official WPI...");
    console.log(text.substring(0,1000));

}