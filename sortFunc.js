//Sort func [{name: 'name', age:18}, {name: 'name', age:18}] by name/age (asc/dsc)
const sortFunc = (arr, sortType, sortBy) => {
  if (arr) {
    return sortType === "dsc"
      ? [
          ...arr.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) {
              return 1;
            }
            if (a[sortBy] > b[sortBy]) {
              return -1;
            }
            return 0;
          }),
        ]
      : [
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
  { name: "Valera", age: 20, workHours: 8, surname: "Petrov" },
  { name: "Ghena", age: 18, workHours: 10, surname: "Matrov" },
  { name: "Alex", age: 30, workHours: 4, surname: "Fetrov" },
];

console.log("Sort by number dsc: ", sortFunc(testSortArr, "dsc", "workHours"));
console.log("Sort by number asc: ", sortFunc(testSortArr, "asc", "age"));
console.log("Sort by string asc: ", sortFunc(testSortArr, "asc", "surname"));
console.log("Sort by string dsc: ", sortFunc(testSortArr, "dsc", "name"));
