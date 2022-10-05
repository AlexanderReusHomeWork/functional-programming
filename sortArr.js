//Sort array with numbers even asc odd dsc [4,5,3,6,7,1,2,9,8]=>[2,4,6,8,9,7,5,3,1]

const sortEvenOdd = (arr) => {
  const even = arr.filter((elem) => elem % 2 === 0).sort((a, b) => a - b);
  const odd = arr.filter((elem) => elem % 2 !== 0).sort((a, b) => b - a);

  return [...even, ...odd];
};
console.log("Sort even odd nums: ", sortEvenOdd([4, 5, 3, 6, 7, 1, 2, 9, 8]));
