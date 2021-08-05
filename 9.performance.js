const a = [];

for ( let i = 1; i < 1000000; i++) {
  a.push(i);
}

console.time('foreach');
a.forEach(item => { item = item +1; });
console.timeEnd('foreach');


console.time('vanilla for');
for ( let i = 0; i < a.length; i++ ) {
  a[i] = a[i] + 1;
}
console.timeEnd('vanilla for');
