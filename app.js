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