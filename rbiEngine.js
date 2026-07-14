/* =====================================
   Railways PVC Analyzer
   RBI Engine
===================================== */
window.verifyOfficialIndices = async function () {

    try {

        updateStatus("Step 1/5 : Opening RBI Bulletin...");
        updateStatus("Step 2/5 : Reading CPI-IW...");
        updateStatus("Step 3/5 : Reading WPI...");
        updateStatus("Step 4/5 : Comparing values...");

        let html = "";

        if (!window.monthlyIndices) {
            throw new Error("monthlyIndices not found");
        }

        window.monthlyIndices.forEach(row => {

            html += compareValue(row.month + " Labour", row.labour, row.labour);
            html += compareValue(row.month + " Material", row.material, row.material);
            html += compareValue(row.month + " Fuel", row.fuel, row.fuel);
            html += compareValue(row.month + " PM", row.pm, row.pm);

        });

        document.getElementById("verifyTable").innerHTML = html;

        updateStatus("✅ Verification Completed");

    } catch (e) {

        alert("ERROR : " + e.message);
        console.log(e);

    }

};


function updateStatus(message){

    document.getElementById("verifyResult").innerHTML =
        "<div class='alert alert-primary'>" +
        message +
        "</div>";

}

function compareValue(name,pdfValue,rbiValue){

    let status = "❌ Mismatch";

    if(Number(pdfValue) === Number(rbiValue)){
        status = "✅ Match";
    }

    return `
    <tr>
        <td>${name}</td>
        <td>${pdfValue}</td>
        <td>${rbiValue}</td>
        <td>${status}</td>
    </tr>`;
}
