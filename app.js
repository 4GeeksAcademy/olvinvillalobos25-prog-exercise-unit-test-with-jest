const sum = (a, b) => a + b;

let oneEuroIs = {Yen: 156.5, Dollar: 1.07, Pound: 0.87};

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.Dollar;
};

const fromDollarToYen = (Dollar) => {
    return (Dollar / oneEuroIs.Dollar) * oneEuroIs.Yen;
};

const fromYenToPound = (Yen) => {
    return (Yen / oneEuroIs.Yen) * oneEuroIs.Pound;
};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

