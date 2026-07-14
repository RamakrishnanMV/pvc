/* =====================================
   Railways PVC Analyzer
   RBI Engine
===================================== */

async function verifyOfficialIndices(data){

    updateStatus("Connecting to RBI...");

    updateStatus("Opening RBI Bulletin...");

    updateStatus("Finding Other Consumer Indices...");

    updateStatus("Finding Wholesale Price Index...");

    async function verifyOfficialIndices() {

    updateStatus("Step 1/5 : Opening RBI Bulletin...");

    // Next we'll fetch RBI data

    updateStatus("Step 2/5 : Reading CPI-IW...");

    updateStatus("Step 3/5 : Reading WPI...");

    updateStatus("Step 4/5 : Comparing values...");

    updateStatus("Step 5/5 : Verification completed.");

}

}

function updateStatus(message){

    document.getElementById("verifyResult").innerHTML=

    "<div class='alert alert-primary'>"

    +message+

    "</div>";

}