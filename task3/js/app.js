let min = +prompt("Введите первое значение");
let max = +prompt("Введите второе значение");
for (let i = min; i <= max; i++) {
  if (i === 0) {
    console.log(i);
    console.log("Чило 0");
  } else {
    console.log(i);
    console.log(i > 100 ? "больше 100" : i < 100 ? "меньше 100" : "равно 100");
    console.log(i & 1 ? "не чётное," : "чётное,");
    console.log(i > 0 ? "положителное." : "отрицательное.");
  }
}
