const a = {
  name: 'Peter',
  age: 25,
  driving: {
    licence: true,
    accidents: 3,
  },
};

const b = a;

b.name = 'John';
b.driving.accidents = 99;

console.log(a);
console.log(b);
