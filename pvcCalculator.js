function calculateLabourPVC(W, LB, LQ, LC) {

    const pvc = W * ((LQ - LB) / LB) * (LC / 100);

    return Number(pvc.toFixed(2));

}