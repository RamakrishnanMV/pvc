document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("verifyBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            window.verifyOfficialIndices();
        });
    }

});