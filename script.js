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

const coinMap = {
    2: { key: "twoEuro", display: "twoEur" },
    1: { key: "oneEuro", display: "oneEur"},
    0.5: { key: "fiftyCent", display: "fiftyC"},
    0.2: { key: "twentyCent", display: "twentyC"},
    0.1: { key: "tenCent", display: "tenC"},
    0.05: { key: "fiveCent", display: "fiveC"},
    0.02: { key: "twoCent", display: "twoC"},
    0.01: { key: "oneCent", display: "oneC"},
}

function add(multiplier, delta) {
    let coin = coinMap[multiplier];
    collection[coin.key].pieces += delta;
    collection[coin.key].sum = multiplier * collection[coin.key].pieces;
    display[coin.display].innerHTML = `${collection[coin.key].sum.toFixed(2)}€ | ${collection[coin.key].pieces} Stk.`;
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
        let multipliers = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
        for (let i = 0; i <= 7; i++) {
           display[coinMap[multipliers[i]].display].innerHTML = `${collection[coinMap[multipliers[i]].key].sum.toFixed(2)}€ | ${collection[coinMap[multipliers[i]].key].pieces} Stk.`;
        }
        let totalSum = parseFloat(localStorage.getItem("totalSum")) || 0.00;
        let totalPcs = parseFloat(localStorage.getItem("totalPcs")) || 0;
        document.getElementById("total").innerHTML = `Total: ${totalSum.toFixed(2)}€ | ${totalPcs} Stk.`;
    }, 150);
}

document.getElementById("total").addEventListener("dblclick", ()=> {
    localStorage.setItem("collection", 0);
    localStorage.setItem("totalSum", 0);
    localStorage.setItem("totalPcs", 0);
    document.getElementById("total").innerHTML = `Total: 0.00€ | 0 Stk.`;
    let multipliers = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
        for (let i = 0; i <= 7; i++) {
            display[coinMap[multipliers[i]].display].innerHTML = `0.00€ | 0 Stk.`;
        }
});