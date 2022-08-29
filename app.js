//Task #1

const isEmpty = (object) => {
  const emptyValues = ["", null, undefined];

  return Object.values(object).every(
    (value) => emptyValues.includes(value) || isNaN(value)
  );
};

// console.log(isEmpty({}));
// console.log(isEmpty({ a: undefined }));
// console.log(isEmpty({ a: 1 }));
// console.log(isEmpty({ a: 1, b: undefined }));

//Task #2

const isEqualDeep = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  const isObject = (obj) => obj != null && typeof obj === "object";

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  for (let i in firstObj) {
    if (isObject(firstObj[i]) && isObject(secondObj[i])) {
      return isEqualDeep(firstObj[i], secondObj[i]);
    } else if (firstObj[i] !== secondObj[i]) {
      return false;
    }
  }
  return true;
};

const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };

// console.log(isEqualDeep(data, data2)); //true
// console.log(isEqualDeep(data, data3)); //false

// Task #3

const objectIntersection = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const obj = {};

  firstObjKeys.forEach((key) => {
    if (firstObj[key] === secondObj[key]) {
      return obj[key] = firstObj[key];
    }
  });

  return obj;
};

const data4 = { a: 1, b: 2 };
const data5 = { c: 1, b: 2 };
console.log(objectIntersection(data4, data5));