function* makeRangeIterator(min, max) {
  let iterationCount = 0;
  for (let i = min; i <= max; i++) {
    iterationCount++;
    yield i;
    if (iterationCount === 7) break;
  }
  return iterationCount;
}

const min = +prompt("Введите число от", 0);
const max = +prompt("Введите число до", 0);

const range = makeRangeIterator(min, max);
for (i of range) {
  console.log(i); // выведет от
}
