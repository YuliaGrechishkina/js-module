export const functions = () => {
    //Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
    document.getElementById("returnNumbers").onclick = function returnNumbers() {
        const returnNumberFirst = +prompt("Введите первое число", "");
        const returnNumberSec = +prompt("Введите второе число", "");

        function returnNumberResult(returnNumberFirst, returnNumberSec) {
            if (returnNumberFirst > returnNumberSec) {
                return 1;
            } else if (returnNumberFirst < returnNumberSec) {
                return -1;
            } else if (returnNumberFirst == returnNumberSec) {
                return 0;
            }
        }
        alert(returnNumberResult(returnNumberFirst, returnNumberSec));
    };

    //Написать функцию, которая вычисляет факториал переданного ей числа.
    document.getElementById("factorial").onclick = function factorial() {
        function factorial(n) {
            return n < 1 ? 1 : n * factorial(n - 1);
        }
        alert(`Факториал равен ${factorial(+prompt("Введите число"))}`);
    };

    //Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
    document.getElementById(
        "combineNumbers"
    ).onclick = function combineNumbers() {
        const combineNumberFirst = +prompt("Введите первое число", "");
        const combineNumberSec = +prompt("Введите второе число", "");
        const combineNumberThird = +prompt("Введите третье число", "");
        alert(`${combineNumberFirst}${combineNumberSec}${combineNumberThird}`);
    };

    //Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
    document.getElementById(
        "areaOfRectangle"
    ).onclick = function areaOfRectangle() {
        const lengthOfRectangle = +prompt("Введите длину прямоугольника", "");
        const widthOfRectangle = +prompt("Введите ширину прямоугольника", "");
        let areaOfRectangle = lengthOfRectangle * widthOfRectangle;
        if (widthOfRectangle == 0) {
            areaOfRectangle = lengthOfRectangle * lengthOfRectangle;
        } else if (lengthOfRectangle == 0) {
            areaOfRectangle = widthOfRectangle * widthOfRectangle;
        }
        alert(`Площадь прямоугольника = ${areaOfRectangle}`);
    };

    //Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
    document.getElementById("PerfectNumber").onclick = function PerfectNumber() {
        const yourNumber = +prompt("Введите число", "");
        const yourPerfectNumber = (yourNumber) => {
            let i;
            let sum = 0;
            for (i = 1; i < yourNumber; i++) {
                if (yourNumber % i == 0) {
                    sum += i;
                }
            }
            if (sum === yourNumber) {
                return `Число: ${yourNumber}  является совершенным`;
            } else if ((sum |= yourNumber)) {
                return `Число: ${yourNumber} НЕ является совершенным`;
            }
        };
        alert(yourPerfectNumber(yourNumber));
    };

    //Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
    /*document.getElementById(
          "PerfectNumberSec"
      ).onclick = function PerfectNumberSec() {
          const yourFirstNumber = +prompt("Введите первое число", "");
          const yourSecondNumber = +prompt("Введите второе число", "");
          const yourPerfectNumber = (yourFirstNumber) => {
              let i;
              let sum = 0;
              for (i = 1; i < yourFirstNumber; i++) {
                  if (yourFirstNumber % i == 0) {
                      sum += i;
                  }
              }
              if (sum === yourFirstNumber) {
                  return true;
              } else if ((sum |= yourFirstNumber)) {
                  return false;
              }
          };
      };*/
};