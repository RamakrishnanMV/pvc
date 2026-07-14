/* =====================================
   Railways PVC Analyzer
   extractor.js
===================================== */

function extractDocument(text) {

    updateStep(3, "🔍 Extracting Information...");

    let data = {};

    // Tender Number
    data.tenderNo = findValue(
        text,
        /Tender\s*No\.?\s*[:\-]?\s*([A-Za-z0-9\/\-.]+)/i
    );

    // LOA Number
    data.loaNo = findValue(
        text,
        /LOA\s*No\.?\s*[:\-]?\s*([A-Za-z0-9\/\-.]+)/i
    );

    // Agreement Number
    data.agreementNo = findValue(
        text,
        /(Agreement|Agt)\s*No\.?\s*[:\-]?\s*([A-Za-z0-9\/\-.]+)/i,
        2
    );

    // Contractor
    data.contractor = findValue(
        text,
        /Contractor\s*:?[\s\S]{0,50}?([A-Z][A-Za-z .,&-]+)/i
    );

    // Base Month
    data.baseMonth = findValue(
        text,
        /BASE\s*MONTH\s*([A-Za-z]+\s*-\s*\d{2,4}|[A-Za-z]+\-\d{2,4}|[A-Za-z]+\s+\d{4})/i
    );

    // Labour Index
    data.labourIndex = findValue(
        text,
        /BASE\s*MONTH[\s\S]{0,80}?(\d+\.\d+)/i
    );

    // Material Index
    data.materialIndex = findNthNumber(text, "BASE MONTH", 2);

    // Fuel Index
    data.fuelIndex = findNthNumber(text, "BASE MONTH", 3);

    // Plant & Machinery Index
    data.pmIndex = findNthNumber(text, "BASE MONTH", 4);

    updateStep(3, "✅ Information Extracted");

    showExtractedData(data);

    // Next module
    if (typeof findOfficialIndices === "function") {
        findOfficialIndices(data);
    }

}

function findValue(text, regex, group = 1) {

    const match = text.match(regex);

    return match ? match[group].trim() : "Not Found";

}

function findNthNumber(text, keyword, position) {

    const index = text.toUpperCase().indexOf(keyword.toUpperCase());

    if (index === -1) return "Not Found";

    const sample = text.substring(index, index + 200);

    const numbers = sample.match(/\d+\.\d+/g);

    if (!numbers) return "Not Found";

    return numbers[position - 1] || "Not Found";

}

function showExtractedData(data) {

    let html = "";

    html += "========== CONTRACT DETAILS ==========\n\n";

    html +=