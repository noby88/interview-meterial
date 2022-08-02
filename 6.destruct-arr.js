const list = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

{
  const [x, y] = list;
  // What are the values of X and Y
  console.log('the values are', x, 'and', y);

  // How could you extract the rest into a variable named Z
  {
    const [x, y, ...z] = list;
    console.log('the rest', z);
  }
}