document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("verifyBtn");

    if(btn){

        btn.addEventListener("click", verifyIndices);

    }

});

async function verifyIndices(){

    document.getElementById("verifyResult").innerHTML =
    "<div class='alert alert-info'>Reading latest official indices...</div>";

    try{

        const response = await fetch("indices.json");

        const official = await response.json();

        document.getElementById("verifyResult").innerHTML =

        "<div class='alert alert-success'>"

        +"<h5>Official Data Loaded</h5>"

        +"Source : "+official.source+"<br>"

        +"Updated : "+official.updatedOn

        +"</div>";

    }

    catch(e){

        document.getElementById("verifyResult").innerHTML =

        "<div class='alert alert-danger'>Unable to read official data.</div>";

    }

}