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

    // Store extracted values here
    window.officialIndices = window.officialIndices || {};

    const lines = text.split("\n");

    const monthRegex = /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[- ]?\d{2}/i;

    lines.forEach(line => {

        const monthMatch = line.match(monthRegex);

        if (!monthMatch) return;

        const month = monthMatch[0].replace(" ", "-");

        const numbers = line.match(/\d+(\.\d+)?/g);

        if (!numbers || numbers.length === 0) return;

        // Usually the last number on the line is the CPI-IW index
        const labour = parseFloat(numbers[numbers.length - 1]);

        window.officialIndices[month] = {
            labour: labour
        };

    });

    console.log("Official CPI Extracted");
    console.table(window.officialIndices);

}

function extractOfficialWPI(text) {

    console.log("Reading Official WPI...");
    console.log(text.substring(0,1000));

}