//Object deep clone

const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

const testExample = {
  name: "Jorik",
  living: { country: "Moldova", city: "Chisinau" },
  children: ["Jorik junior", "Jorik II"],
};

const deepCloneVar = deepClone(testExample);
deepCloneVar.name = "Vasya";

console.log("Original: ", testExample);
console.log("Clone: ", deepCloneVar);
