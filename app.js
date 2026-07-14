/* =====================================
   Railways PVC Analyzer
   app.js
===================================== */

window.addEventListener("load", function () {

    console.log("Railways PVC Analyzer Started");

    const analyzeBtn = document.getElementById("analyzeBtn");

    analyzeBtn.addEventListener("click", analyzeDocument);

});

function analyzeDocument() {

    const fileInput = document.getElementById("pdfFile");

    if (fileInput.files.length === 0) {

        alert("Please select a PDF file.");

        return;

    }

    updateStep(1, "✅ PDF Selected");

    updateStep(2, "📖 Reading PDF...");

    readPDF(fileInput.files[0]);

}

function updateStep(step, message) {

    document.getElementById("step" + step).innerHTML = message;

}

function showOutput(text) {

    document.getElementById("output").textContent = text;

}

function analysisCompleted() {

    updateStep(2, "✅ PDF Read Successfully");

    updateStep(3, "✅ Data Extracted");

    updateStep(4, "⏳ Index Detection (Next Module)");

    updateStep(5, "⏳ PVC Calculation (Next Module)");

}

async function startVerification(){

    const railway =
        document.getElementById("railwayPdf").files[0];

    const cpi =
        document.getElementById("cpiPdf").files[0];

    const wpi =
        document.getElementById("wpiPdf").files[0];

    if(!railway || !cpi || !wpi){

        alert("Please select all three PDFs.");

        return;

    }

    const railwayText = await readPDF(railway);

    const cpiText = await readPDF(cpi);

    const wpiText = await readPDF(wpi);

    extractRailway(railwayText);

    extractCPI(cpiText);

    extractWPI(wpiText);

    compareOfficialData();

}