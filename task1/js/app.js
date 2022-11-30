// функция от большего к меньшему если _max больше _min
function* makeRangeIterator(min, max) {
  let iterationCount = 0;
  for (let i = min; i <= max; i++) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
// функция от большего к меньшему если _min больше _max
function* makeRangeIterator2(min, max) {
  let iterationCount = 0;
  for (let i = min; i >= max; i--) {
    iterationCount--;
    yield i;
  }
  return iterationCount;
}

let min = +prompt("Введите число от", 0);
let max = +prompt("Введите число до", 0);

const range = makeRangeIterator(min, max);
const range1 = makeRangeIterator2(min, max);

if (Math.abs(min - max) < 5) {
  do {
    min = +prompt("Введите число от", 0);
    max = +prompt("Введите число до", 0);
  } while (Math.abs(min - max) < 5);
  for (let i = min; i <= max; i++) {
    console.log(i);
  }
  for (let i = min; i >= max; i--) {
    console.log(i);
  }
} else if (min < max) {
  for (i of range) {
    console.log(i); // выведет от
  }
} else if (min > max) {
  for (i of range1) {
    console.log(i); // выведет от
  }
}
