const math = require("mathjs");

// Probabilities that I will win when It's my turn to roll up to a maximum number of...
let pME = {
  1: 0
};

// Probabilities that I will win when THEY have to roll up to a maximum number of...
let pTHEM = {
  1: 1
};

function probCalc(n) {
  // Validation
  if (n <= 0) {
    throw console.error("Number not accepted (maximum roll below 1)");
  }

  // Geometric Sequence notation: a = first term, r = common ratio
  // Creating array for a terms, r is always (1/n)^2
  let a = [];
  let r = math.fraction(1, Math.pow(n, 2));

  // Calculating components of 'a' caused by MY roll
  for (let i = 1; i < n; i++) {
    if (i == 1) {
      a.push(math.multiply(math.fraction(1, n), 0));
    } else {
      a.push(math.multiply(math.fraction(1, n), pTHEM[i]));
    }
  }

  // Calculating components of 'a' caused by THEIR roll
  for (let i = 1; i < n; i++) {
    if (i == 1) {
      a.push(math.multiply(math.fraction(1, math.pow(n, 2)), 1));
    } else {
      a.push(math.multiply(math.fraction(1, math.pow(n, 2)), pME[i]));
    }
  }

  // Calculate the infinite geometric series SUM(1 -> INFINITY) = a / (1-r)
  let final = math.divide(math.sum(a), math.subtract(1, r));

  // Store probabilities to be used by future iterations
  pME[n] = final;
  pTHEM[n] = math.subtract(1, final);

  console.log(`Max roll of ${n}, probability of winning ${final.n}/${final.d}`);
}

function calculateThroughRange(range) {
  for (let j = 2; j <= range; j++) {
    probCalc(j);
  }
}

calculateThroughRange(5);

// (Data stored as object of math.fraction numbers in variable pME)
