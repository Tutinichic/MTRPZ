function calculate(a, b, c) {
  const labInfo = `\nТвоє рівняння: (${a}) x^2 + (${b}) x + (${c}) = 0\n`;
  let solution, x1, x2;

  const D = b * b - 4 * a * c;

  if (D < 0) {
    solution = "Тут немає коренів, спробуй ще -_(ツ)_/¯";
  } else if (D === 0) {
    x1 = -b / (2 * a);
    solution = `Лише один корінь, й того достатньо :( \nx1 = ${x1}\n`;
  } else {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    solution = `Джекпот, ви виграли два корені :) \nx1 = ${x1}, x2 = ${x2}\n`;
  }

  console.log(labInfo);
  console.log(solution);
}