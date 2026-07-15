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

    alert("START");

    const railway = document.getElementById("railwayPdf").files[0];
    const cpi = document.getElementById("cpiPdf").files[0];
    const wpi = document.getElementById("wpiPdf").files[0];

    alert("Railway = " + (railway ? "YES" : "NO"));
    alert("CPI = " + (cpi ? "YES" : "NO"));
    alert("WPI = " + (wpi ? "YES" : "NO"));

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