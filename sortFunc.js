//Sort func [{name: 'name', age:18}, {name: 'name', age:18}] by name/age (asc/dsc)
const sortFunc = (arr, sortType, sortBy) => {
  if (arr && sortType === "dsc" && sortBy === "age") {
    return [...arr.sort((a, b) => b.age - a.age)];
  }
  if (arr && sortType === "asc" && sortBy === "age") {
    return [...arr.sort((a, b) => a.age - b.age)];
  }
  if (arr && sortType === "dsc" && sortBy === "name") {
    return [
      ...arr.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      }),
    ];
  }
  if (arr && sortType === "asc" && sortBy === "name") {
    return [
      ...arr.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    ];
  }
  alert("Enter all needed arguments correctly");
};

const testSortArr = [
  { name: "Valera", age: 20 },
  { name: "Ghena", age: 18 },
  { name: "Alex", age: 30 },
];

console.log("Sort by age dsc: ", sortFunc(testSortArr, "dsc", "age"));
console.log("Sort by age asc: ", sortFunc(testSortArr, "asc", "age"));
console.log("Sort by name asc: ", sortFunc(testSortArr, "asc", "name"));
console.log("Sort by name dsc: ", sortFunc(testSortArr, "dsc", "name"));
