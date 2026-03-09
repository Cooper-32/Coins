let collection = JSON.parse(localStorage.getItem("collection")) || {
    twoEuro: {
        sum: 0,
        pieces: 0
    },
    oneEuro: {
        sum: 0,
        pieces: 0
    },
    fiftyCent: {
        sum: 0,
        pieces: 0
    },
    twentyCent: {
        sum: 0,
        pieces: 0
    },
    tenCent: {
        sum: 0,
        pieces: 0
    },
    fiveCent: {
        sum: 0,
        pieces: 0
    },
    twoCent: {
        sum: 0,
        pieces: 0
    },
    oneCent: {
        sum: 0,
        pieces: 0
    },
};

let display = {
    twoEur: document.getElementById("infoTwo"),
    oneEur: document.getElementById("infoOne"),
    fiftyC: document.getElementById("infoFifty"),
    twentyC: document.getElementById("infoTwenty"),
    tenC: document.getElementById("infoTen"),
    fiveC: document.getElementById("infoFive"),
    twoC: document.getElementById("infoTwoC"),
    oneC: document.getElementById("infoOneC"),
};

function add(multiplier) {
    if (multiplier === 2) {
        collection.twoEuro.pieces++;
        collection.twoEuro.sum = multiplier * collection.twoEuro.pieces;
        display.twoEur.innerHTML = `${collection.twoEuro.sum.toFixed(2)}€ | ${collection.twoEuro.pieces} Stk.`;
    }
    else if (multiplier === 1) {
        collection.oneEuro.pieces++;
        collection.oneEuro.sum++;
        display.oneEur.innerHTML = `${collection.oneEuro.sum.toFixed(2)}€ | ${collection.oneEuro.pieces} Stk.`;
    }
    else if (multiplier === 0.5) {
        collection.fiftyCent.pieces++;
        collection.fiftyCent.sum = multiplier * collection.fiftyCent.pieces;
        display.fiftyC.innerHTML = `${collection.fiftyCent.sum.toFixed(2)}€ | ${collection.fiftyCent.pieces} Stk.`;
    }
    else if (multiplier === 0.2) {
        collection.twentyCent.pieces++;
        collection.twentyCent.sum = multiplier * collection.twentyCent.pieces;
        display.twentyC.innerHTML = `${collection.twentyCent.sum.toFixed(2)}€ | ${collection.twentyCent.pieces} Stk.`;
    }
    else if (multiplier === 0.1) {
        collection.tenCent.pieces++;
        collection.tenCent.sum = multiplier * collection.tenCent.pieces;
        display.tenC.innerHTML = `${collection.tenCent.sum.toFixed(2)}€ | ${collection.tenCent.pieces} Stk.`;
    }
    else if (multiplier === 0.05) {
        collection.fiveCent.pieces++;
        collection.fiveCent.sum = multiplier * collection.fiveCent.pieces;
        display.fiveC.innerHTML = `${collection.fiveCent.sum.toFixed(2)}€ | ${collection.fiveCent.pieces} Stk.`;
    }
    else if (multiplier === 0.02) {
        collection.twoCent.pieces++;
        collection.twoCent.sum = multiplier * collection.twoCent.pieces;
        display.twoC.innerHTML = `${collection.twoCent.sum.toFixed(2)}€ | ${collection.twoCent.pieces} Stk.`;
    }
    else if (multiplier === 0.01) {
        collection.oneCent.pieces++;
        collection.oneCent.sum = multiplier * collection.oneCent.pieces;
        display.oneC.innerHTML = `${collection.oneCent.sum.toFixed(2)}€ | ${collection.oneCent.pieces} Stk.`;
    }
    total();
}

function subtract(multiplier) {
    if (multiplier === 2) {
        collection.twoEuro.pieces--;
        collection.twoEuro.sum = multiplier * collection.twoEuro.pieces;
        display.twoEur.innerHTML = `${collection.twoEuro.sum.toFixed(2)}€ | ${collection.twoEuro.pieces} Stk.`;
    }
    else if (multiplier === 1) {
        collection.oneEuro.pieces--;
        collection.oneEuro.sum--;
        display.oneEur.innerHTML = `${collection.oneEuro.sum.toFixed(2)}€ | ${collection.oneEuro.pieces} Stk.`;
    }
    else if (multiplier === 0.5) {
        collection.fiftyCent.pieces--;
        collection.fiftyCent.sum = multiplier * collection.fiftyCent.pieces;
        display.fiftyC.innerHTML = `${collection.fiftyCent.sum.toFixed(2)}€ | ${collection.fiftyCent.pieces} Stk.`;
    }
    else if (multiplier === 0.2) {
        collection.twentyCent.pieces--;
        collection.twentyCent.sum = multiplier * collection.twentyCent.pieces;
        display.twentyC.innerHTML = `${collection.twentyCent.sum.toFixed(2)}€ | ${collection.twentyCent.pieces} Stk.`;
    }
    else if (multiplier === 0.1) {
        collection.tenCent.pieces--;
        collection.tenCent.sum = multiplier * collection.tenCent.pieces;
        display.tenC.innerHTML = `${collection.tenCent.sum.toFixed(2)}€ | ${collection.tenCent.pieces} Stk.`;
    }
    else if (multiplier === 0.05) {
        collection.fiveCent.pieces--;
        collection.fiveCent.sum = multiplier * collection.fiveCent.pieces;
        display.fiveC.innerHTML = `${collection.fiveCent.sum.toFixed(2)}€ | ${collection.fiveCent.pieces} Stk.`;
    }
    else if (multiplier === 0.02) {
        collection.twoCent.pieces--;
        collection.twoCent.sum = multiplier * collection.twoCent.pieces;
        display.twoC.innerHTML = `${collection.twoCent.sum.toFixed(2)}€ | ${collection.twoCent.pieces} Stk.`;
    }
    else if (multiplier === 0.01) {
        collection.oneCent.pieces--;
        collection.oneCent.sum = multiplier * collection.oneCent.pieces;
        display.oneC.innerHTML = `${collection.oneCent.sum.toFixed(2)}€ | ${collection.oneCent.pieces} Stk.`;
    }
    total();
}

function total()  {
      let result = collection.twoEuro.sum + collection.oneEuro.sum + collection.fiftyCent.sum + collection.twentyCent.sum + collection.tenCent.sum + collection.fiveCent.sum + collection.twoCent.sum + collection.oneCent.sum;
    let resultPcs = collection.twoEuro.pieces + collection.oneEuro.pieces + collection.fiftyCent.pieces + collection.twentyCent.pieces + collection.tenCent.pieces + collection.fiveCent.pieces + collection.twoCent.pieces + collection.oneCent.pieces;
    document.getElementById("total").innerHTML = `Total: ${result.toFixed(2)}€ | ${resultPcs} Stk.`;
    localStorage.setItem("collection", JSON.stringify(collection));
    localStorage.setItem("totalSum", result);
    localStorage.setItem("totalPcs", resultPcs);
}

function onload() {
    setTimeout(()=> {
        let totalSum = parseFloat(localStorage.getItem("totalSum")) || 0.00;
        let totalPcs = parseFloat(localStorage.getItem("totalPcs")) || 0;
        document.getElementById("total").innerHTML = `Total: ${totalSum.toFixed(2)}€ | ${totalPcs} Stk.`;
        display.twoEur.innerHTML = `${collection.twoEuro.sum.toFixed(2)}€ | ${collection.twoEuro.pieces} Stk.`;
        display.oneEur.innerHTML = `${collection.oneEuro.sum.toFixed(2)}€ | ${collection.oneEuro.pieces} Stk.`;
        display.fiftyC.innerHTML = `${collection.fiftyCent.sum.toFixed(2)}€ | ${collection.fiftyCent.pieces} Stk.`;
        display.twentyC.innerHTML = `${collection.twentyCent.sum.toFixed(2)}€ | ${collection.twentyCent.pieces} Stk.`;
        display.tenC.innerHTML = `${collection.tenCent.sum.toFixed(2)}€ | ${collection.tenCent.pieces} Stk.`;
        display.fiveC.innerHTML = `${collection.fiveCent.sum.toFixed(2)}€ | ${collection.fiveCent.pieces} Stk.`;
        display.twoC.innerHTML = `${collection.twoCent.sum.toFixed(2)}€ | ${collection.twoCent.pieces} Stk.`;
        display.oneC.innerHTML = `${collection.oneCent.sum.toFixed(2)}€ | ${collection.oneCent.pieces} Stk.`;
    }, 150);
}

document.getElementById("total").addEventListener("dblclick", ()=> {
    localStorage.setItem("collection", 0);
    localStorage.setItem("totalSum", 0);
    localStorage.setItem("totalPcs", 0);
    document.getElementById("total").innerHTML = `Total: 0.00€ | 0 Stk.`;
    display.twoEur.innerHTML = `0.00€ | 0 Stk.`;
    display.oneEur.innerHTML = `0.00€ | 0 Stk.`;
    display.fiftyC.innerHTML = `0.00€ | 0 Stk.`;
    display.twentyC.innerHTML = `0.00€ | 0 Stk.`;
    display.tenC.innerHTML = `0.00€ | 0 Stk.`;
    display.fiveC.innerHTML = `0.00€ | 0 Stk.`;
    display.twoC.innerHTML = `0.00€ | 0 Stk.`;
    display.oneC.innerHTML = `0.00€ | 0 Stk.`;
});