/* =====================================
   Railways PVC Analyzer
   pdfreader.js
===================================== */

async function readPDF(file) {

    try {

        updateStep(2, "📖 Reading PDF...");

        const arrayBuffer = await file.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({
            data: arrayBuffer
        }).promise;

        let fullText = "";

        for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {

            updateStep(2, "📖 Reading Page " + pageNo + " of " + pdf.numPages);

            const page = await pdf.getPage(pageNo);

            const textContent = await page.getTextContent();

            const pageText = textContent.items
                .map(item => item.str)
                .join(" ");

            fullText += "\n\n========== PAGE " + pageNo + " ==========\n\n";
            fullText += pageText;

        }

updateStep(2, "✅ PDF Read Successfully");

// showOutput(fullText);

analysisCompleted();

try {
    extractDocument(fullText);
} catch (e) {
    console.error("Extractor Error:", e);
    alert(e.message);
}

    }

    catch (error) {

        console.error(error);

        alert("Unable to read PDF.");

        updateStep(2, "❌ Error Reading PDF");

    }

}