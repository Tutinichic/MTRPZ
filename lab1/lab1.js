const readline = require("readline");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INTERACTIVE = 2;

(function () {
  if (process.argv.length === INTERACTIVE) {
    interactive();
  }
})();

async function interactive() {
  const a = await getABC("a");
  const b = await getABC("b");
  const c = await getABC("c");
  calculate(a, b, c);
  readlineInterface.close();
}

function getABC(ourABC) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(`${ourABC}:`, (yourNum) => {
        const number = Number(yourNum);
        let errorMsg;
  
        if (isNaN(number)) {
          errorMsg = `Ми очікували від тебе число, a не це - ${yourNum} `;
          console.log(errorMsg);
          resolve(getABC(ourABC));
        } else if (number === 0 && ourABC === "a") {
          errorMsg = `Помилочка, "a" не може дорівнювати 0`;
          console.log(errorMsg);
          resolve(getABC(ourABC));
        } else {
          resolve(number);
        }
      });
    });
  }  

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