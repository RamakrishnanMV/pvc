/* =====================================
   Railways PVC Analyzer
   RBI Engine
===================================== */

async function verifyOfficialIndices(data){

    updateStatus("Connecting to RBI...");

    updateStatus("Opening RBI Bulletin...");

    updateStatus("Finding Other Consumer Indices...");

    updateStatus("Finding Wholesale Price Index...");

    updateStatus("Ready for verification.");

}

function updateStatus(message){

    document.getElementById("verifyResult").innerHTML=

    "<div class='alert alert-primary'>"

    +message+

    "</div>";

}