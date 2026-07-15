/* =====================================
/* =====================================
   Railways PVC Analyzer
   app.js
===================================== */

window.addEventListener("load", function () {

    console.log("Railways PVC Analyzer Started");

    document.getElementById("analyzeBtn")
        .addEventListener("click", startVerification);

});

async function startVerification() {

    const railway = document.getElementById("railwayPdf").files[0];
    const cpi = document.getElementById("cpiPdf").files[0];
    const wpi = document.getElementById("wpiPdf").files[0];

    if (!railway) {
        alert("Please select Railway PVC PDF");
        return;
    }

    updateStep(1, "✅ Railway PDF Selected");

    // Demo version: analyse only the Railway PDF
    await readPDF(railway);

    if (cpi) {
        alert("CPI PDF uploaded successfully.");
    }

    if (wpi) {
        alert("WPI PDF uploaded successfully.");
    }

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
    updateStep(4, "✅ Monthly Indices Extracted");
    updateStep(5, "Ready for Official Verification");

}