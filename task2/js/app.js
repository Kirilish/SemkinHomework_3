const correctPin = "1234";
const maxAttempts = 3;
let attempts = 0;
let pinCorrect = false;

const correctPuk = "1234";
const maxAttemptsPuk = 3;
let attemptsPuk = 0;
let pukCorrect = false;

while (attempts < maxAttempts && !pinCorrect) {
  const pinInput = prompt(
    `Введите ваш PIN код. ${maxAttempts - attempts} попытки на ввод.`
  );
  pinCorrect = pinInput === correctPin;
  attempts++;
}
if (!pinCorrect) {
  alert("PIN код оказался не верен. Введиет PUK код");
  while (attemptsPuk < maxAttemptsPuk && !pukCorrect) {
    const pukInput = prompt(
      `Введите ваш PUK код. ${maxAttemptsPuk - attemptsPuk} попытки на ввод.`
    );
    pukCorrect = pukInput === correctPuk;
    attemptsPuk++;
  }
  if (!pukCorrect) {
    alert("PIN и PUK код оказались не верными. Вы не вошли в систему");
  } else {
    alert("Вы успешно вошли");
  }
} else {
  alert("Вы успешно вошли");
}
