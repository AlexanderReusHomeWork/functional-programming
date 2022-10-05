//Implement map, filter, every, some,find, indexOf with .reduce(), could be used as other array methods
const testArr = [89, 1, 3, 5, 7, 9, 2, 4, 6, 8];

//Map
const myMap = function (callback) {
  let arr = [];

  this.reduce((_, val) => {
    arr.push(callback(val));
  }, []);

  return arr;
};

Array.prototype.myMap = myMap;
console.log(
  "Map: ",
  testArr.myMap((elem) => elem * 2)
);

//Filter
const myFilter = function (callback) {
  let arr = [];
  this.reduce((_, val) => {
    if (callback(val)) {
      arr.push(val);
    }
  }, []);

  return arr;
};

Array.prototype.myFilter = myFilter;
console.log(
  "Filter: ",
  testArr.myFilter((elem) => elem <= 5)
);

//indexOf
const myIndexOf = function (valueToIndex) {
  let index;
  this.reduce((_, val, i) => {
    if (valueToIndex === val) {
      index = i;
    }
  }, []);

  return index;
};

Array.prototype.myIndexOf = myIndexOf;
console.log("indexOf: ", testArr.myIndexOf(8));

//find
const myFind = function (callback) {
  let foundElem = [];
  this.reduce((_, val) => {
    if (callback(val)) {
      foundElem.push(val);
    }
  }, []);

  return foundElem[0];
};

Array.prototype.myFind = myFind;
console.log(
  "Find: ",
  testArr.myFind((elem) => elem < 5)
);

//some
const mySome = function (callback) {
  let bool = false;
  this.reduce((_, val) => {
    if (callback(val)) {
      bool = true;
    }
  }, []);

  return bool;
};

Array.prototype.mySome = mySome;
console.log(
  "Some: ",
  testArr.mySome((elem) => typeof elem === "number")
);

//every
const myEvery = function (callback) {
  let everyArr = [];
  this.reduce((_, val) => {
    if (callback(val)) {
      everyArr.push(val);
    }
  }, []);

  return this.length === everyArr.length ? true : false;
};

Array.prototype.myEvery = myEvery;
console.log(
  "Every: ",
  testArr.myEvery((elem) => typeof elem === "number")
);
