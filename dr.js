const math = require("mathjs");

// Probabilities that I will win when It's my turn to roll up to a maximum number of...
let pME = {
  1: 0,
  2: math.fraction(1, 3)
};

// Probabilities that I will win when THEY have to roll up to a maximum number of...
let pTHEM = {
  1: 1,
  2: math.fraction(2, 3)
};

function probCalc(n) {
  console.log(`calculating for ${n}`);
  let probFragments = [];
  for (let i = 2; i < n; i++) {
    probFragments.push(math.multiply(math.fraction(1, n), pTHEM[i]));
  }

  let a = [];
  let r = math.fraction(1, Math.pow(n, 2));

  a.push(math.fraction(1, math.pow(n, 2)));
  for (let i = 2; i < n; i++) {
    a.push(math.multiply(math.fraction(1, math.pow(n, 2)), pME[i]));
  }

  for (let i = 2; i < n; i++) {
    a.push(math.multiply(math.fraction(1, math.pow(n, 3)), pTHEM[i]));
  }
  let sumOfSeries = math.divide(math.sum(a), math.subtract(1, r));

  probFragments.push(sumOfSeries);

  let final = math.sum(probFragments);

  // Set probabilities to be used by future iterations
  pME[n] = final;
  pTHEM[n] = math.subtract(1, final);
}

function calculateThrough() {
  for (let j = 3; j <= 10001; j++) {
    probCalc(j);
  }
}

calculateThrough();

console.log(pME);
