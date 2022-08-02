const fish = { a: 1, b: 2, c: 3 };

// Extracting A dn B into separate variables with destructuring
{
  const { a, b } = fish;

  console.log('destructed', a, b);
}
