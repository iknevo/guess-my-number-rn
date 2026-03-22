export function generateRandomNumber(min, max, execlude) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randomNumber === execlude) {
    return generateRandomNumber(min, max, execlude);
  } else return randomNumber;
}
