//Func which get as arguments an array of numbers ex:[2,1,4,5,6,7,2,3,4] and K that is a number
//Func should return the index of 2 numbers from that in sum will be equal to K.
//Should be different index.
//In case if no match should return empty array

const sumK = (arr, k) => {
  let idx = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) idx.push(i, j);
    }
    if (idx.length > 1) break;
  }
  return idx;
};

console.log("Indexes of sum array: ", sumK([2, 1, 4, 5, 6, 7, 2, 3, 4], 5));
