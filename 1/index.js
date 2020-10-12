//3 and 5

const multiplicity = (arr) => {
  
  const multiplesOfThree = [],
        multiplesOfFive = [];
  let i;
  const arrLength = arr.length;

  for (i = 2; i < arrLength; i++) {
    if (arr[i] !== 0 && arr[i] % 3 == 0) {
      multiplesOfThree.push(arr[i]);
    }
    if (arr[i] !== 0 && arr[i] % 5 == 0) {
      multiplesOfFive.push(arr[i]);
    }
  }
  console.log('multiplicity', {
    multiplesOfThree: multiplesOfThree,
    multiplesOfFive: multiplesOfFive,
  })
  return {
    multiplesOfThree: multiplesOfThree,
    multiplesOfFive: multiplesOfFive,
  };
};

multiplicity([1, 2, 3, 4, 5, 6, 7, 8, 9]);

///....
const what = (arr) => {
  let i;
  const result = [],
        arrLength = arr.length;
  for (i = 1; i < arrLength; i++) {
    if (Math.sqrt(arr[i]) % 2 === 0) {
       result.push(arr[i]);
    }
  }
  console.log( 'what', result)
  return result.length;
};

what([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// ...
const pythagoreanTriplet = (n) => {

    const { pow } = Math;
    const result = [];

    for (let a = 3; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            for (let c = b + 1; c < n; c++) {
                let aSquared = pow(a, 2);
                let bSquared = pow(b, 2);
                let cSquared = pow(c, 2);
                if (aSquared + bSquared == cSquared) {
                    result.push({a, b, c});
                }
            }
        }
    }
    console.log('pythagoreanTriplet', result);
    return result;
};
pythagoreanTriplet(100)