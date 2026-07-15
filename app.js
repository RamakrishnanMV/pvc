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

    try {

        const railway = document.getElementById("railwayPdf").files[0];
        const cpi = document.getElementById("cpiPdf").files[0];
        const wpi = document.getElementById("wpiPdf").files[0];

        if (!railway) {
            alert("Please select Railway PVC PDF.");
            return;
        }

        // Progress
        updateStep(1, "✅ Railway PDF Selected");
        updateStep(2, "📖 Reading Railway PDF...");

        // Analyse Railway PDF
        await readPDF(railway);

        updateStep(2, "✅ Railway PDF Read");
        updateStep(3, "✅ Information Extracted");
        updateStep(4, "✅ Monthly Indices Extracted");

        // CPI PDF
        if (cpi) {
            updateStep(5, "📄 Reading CPI-IW PDF...");
            console.log("CPI PDF Selected :", cpi.name);

const cpiText = await readOfficialPDF(cpi);

extractOfficialPDF(cpiText, "cpi");
        }

        // WPI PDF
        if (wpi) {
            console.log("WPI PDF Selected :", wpi.name);

const wpiText = await readOfficialPDF(wpi);

extractOfficialPDF(wpiText, "wpi");
        }

        updateStep(5, "✅ Ready for Official Verification");

        console.log("Verification module ready.");

    }
    catch (err) {

        console.error(err);
        alert("Error : " + err.message);

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