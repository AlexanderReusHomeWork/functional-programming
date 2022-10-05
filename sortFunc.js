//Sort func [{name: 'name', age:18}, {name: 'name', age:18}] by name/age (asc/dsc)
const sortFunc = (arr, sortType, sortBy) => {
  if (arr && sortType === "dsc" && typeof arr[0][sortBy] === "number") {
    return [...arr.sort((a, b) => b[sortBy] - a[sortBy])];
  }
  if (arr && sortType === "asc" && typeof arr[0][sortBy] === "number") {
    return [...arr.sort((a, b) => a[sortBy] - b[sortBy])];
  }
  if (arr && sortType === "dsc" && typeof arr[0][sortBy] === "string") {
    return [
      ...arr.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return -1;
        }
        return 0;
      }),
    ];
  }
  if (arr && sortType === "asc" && typeof arr[0][sortBy] === "string") {
    return [
      ...arr.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        return 0;
      }),
    ];
  }
  alert("Enter all needed arguments correctly");
};

const testSortArr = [
  { name: "Valera", age: 20, workHours: 8 },
  { name: "Ghena", age: 18, workHours: 10 },
  { name: "Alex", age: 30, workHours: 4 },
];

console.log("Sort by number dsc: ", sortFunc(testSortArr, "dsc", "age"));
console.log("Sort by number asc: ", sortFunc(testSortArr, "asc", "age"));
console.log("Sort by string asc: ", sortFunc(testSortArr, "asc", "name"));
console.log("Sort by string dsc: ", sortFunc(testSortArr, "dsc", "name"));
