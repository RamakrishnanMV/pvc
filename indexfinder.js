/* =====================================
   Railways PVC Analyzer
   indexfinder.js
===================================== */

async function findOfficialIndices(data) {

    updateStep(4, "🔍 Finding Official Indices...");

    try {

        const result = {
            labour: data.labourIndex,
            material: data.materialIndex,
            fuel: data.fuelIndex,
            pm: data.pmIndex,
            status: "Local Data"
        };

        updateStep(4, "✅ Indices Identified");

        if (typeof calculatePVC === "function") {
            calculatePVC(data, result);
        }

    } catch (e) {

        console.log(e);

        updateStep(4, "❌ Index Lookup Failed");

    }

}