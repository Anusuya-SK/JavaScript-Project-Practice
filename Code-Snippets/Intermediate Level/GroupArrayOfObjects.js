// Group an array of objects by a key: groupBy([{role:'admin'}, {role:'user'}])
// Output: { admin: [...], user:[...] }

const groupBy = (data, key) => {
  return data.reduce((acc, obj) => {
    const groupKey = obj[key];
    if(!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(obj);
    return acc;
  }, {})
}

// Example usage:
const data = [
  { id: 1, customer: 'Alice', status: 'pending' },
  { id: 2, customer: 'Bob', status: 'shipped' },
  { id: 3, customer: 'Charlie', status: 'pending' },
  { id: 4, customer: 'Dave', status: 'delivered' },
  { id: 5, customer: 'Eve', status: 'shipped' }
];

const grouped = groupBy(data, "status");
console.log(grouped);

// Output:
// {
//   pending: [
//     { id: 1, customer: 'Alice', status: 'pending' },
//     { id: 3, customer: 'Charlie', status: 'pending' }
//   ],
//   shipped: [
//     { id: 2, customer: 'Bob', status: 'shipped' },
//     { id: 5, customer: 'Eve', status: 'shipped' }
//   ],
//   delivered: [ { id: 4, customer: 'Dave', status: 'delivered' } ]
// }

/****** Alternate version ******/
const groupBy = (data, key) => {
  let result = {};
  data.forEach(obj => {
    const groupKey = obj[key];
    if(!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(obj);
  })
  return result;
}
const data = [
  { id: 1, customer: 'Alice', status: 'pending' },
  { id: 2, customer: 'Bob', status: 'shipped' },
  { id: 3, customer: 'Charlie', status: 'pending' },
  { id: 4, customer: 'Dave', status: 'delivered' },
  { id: 5, customer: 'Eve', status: 'shipped' }
];
const grouped = groupBy(data, "status");
console.log(grouped);

/****** Alternate version ******/
const groupBy = (data, key) => {
  let result = {};
  for(let obj of data) {
    const groupKey = obj[key];
    if(!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(obj);
  }
  return result;
}
