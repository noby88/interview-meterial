const a = {
  name: 'Peter',
  age: 25,
  driving: {
    license: true,
    accidents: 3,
  },
};

const b = a;
{
  // const b = { name: a.name, age: a.age, driving: a.driving }
}

b.name = 'John';
b.driving.accidents = 99;

console.table([a, b]);
