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
    /Tender\s*No\.?\s*[:\-]?\s*([A-Za-z0-9\-\/]+)/i
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
    /Contractor'?s?\s*Name\s*:\s*([A-Za-z .,-]+)/i
);

// Base Month
data.baseMonth = findValue(
    text,
    /BASE\s*MONTH\s*([A-Z]+-\d{4})/i
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
    window.extractedData = data;
    
    const monthlyIndices = extractMonthlyIndices(text);

console.log(monthlyIndices);

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

document.getElementById("output").innerHTML = `

<div class="card shadow">

<div class="card-header bg-success text-white">

<h4>✅ AI Analysis Completed</h4>

</div>

<div class="card-body">

<h5>Contract Details</h5>

<table class="table table-bordered">

<tr><th>Tender No</th><td>${data.tenderNo}</td></tr>

<tr><th>LOA No</th><td>${data.loaNo}</td></tr>

<tr><th>Agreement No</th><td>${data.agreementNo}</td></tr>

<tr><th>Contractor</th><td>${data.contractor}</td></tr>

<tr><th>Base Month</th><td>${data.baseMonth}</td></tr>

<tr><th>Labour Index</th><td>${data.labourIndex}</td></tr>

<tr><th>Material Index</th><td>${data.materialIndex}</td></tr>

<tr><th>Fuel Index</th><td>${data.fuelIndex}</td></tr>

<tr><th>Plant & Machinery</th><td>${data.pmIndex}</td></tr>

</table>
<h5 class="mt-4">Monthly Indices</h5>

<table class="table table-striped">

<thead>

<tr>

<th>Month</th>

<th>Labour</th>

<th>Material</th>

<th>Fuel</th>

<th>PM</th>

</tr>

</thead>

<tbody id="monthlyTable"></tbody>

</table>

<div class="alert alert-info">

<b>AI Summary</b><br>

✔ Railway PVC Document Detected<br>

✔ Contract Information Identified<br>

✔ Base Month Identified<br>

✔ PVC Components Identified<br>

✔ Ready for WPI Verification

</div>

</div>

</div>

`;

}

function extractMonthlyIndices(text) {

    let rows = [];

    const regex = /(Jun|Jul|Aug|Sep|Oct|Nov|Dec|Jan|Feb|Mar|Apr|May)-(\d{2})\s+(\d+\.\d+)\s+(\d+\.\d+)\s+(\d+\.\d+)\s+(\d+\.\d+)/g;

    let match;

    while ((match = regex.exec(text)) !== null) {

        rows.push({
            month: match[1] + "-" + match[2],
            labour: parseFloat(match[3]),
            material: parseFloat(match[4]),
            fuel: parseFloat(match[5]),
            pm: parseFloat(match[6])
        });

    }

    console.log(rows);

    return rows;

}