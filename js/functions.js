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
    //В ПРОЦЕССЕ
        /*document.getElementById(
          "PerfectNumberSec"
      ).onclick = function PerfectNumberSec() {
          const yourFirstNumber = +prompt("Введите первое число", "");
          const yourSecondNumber = +prompt("Введите второе число", "");
          const NumbersArr=[];
                   const yourPerfectNumber = (yourNumber) => {
              let i;
              let sum = 0;
              for (i = 1; i < yourNumber; i++) {
                  if (yourNumber % i == 0) {
                      sum += i;
                  }
              }
              if (sum === yourNumber) {
                  return true;
              } 
                  return false;
              }
                    
              
              const isYourNumberPerfect = (yourFirstNumber,yourFirstNumber) => {
            let i;
            let sum = 0;
            for (i = yourFirstNumber; i < yourFirstNumber; i++) {
                let result = PerfectNumbers(i)
                if (result===true){
                    NumbersArr.push(i);
                   alert( `Найдены следующие совершенные числа: ${NumbersArr}`);            
                
      };
    };
};
                   };*/
               
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
document.getElementById("clock").onclick = function clock() {          
    let hours = +prompt("Введите время (час)", "");
    while(hours>23){
        alert(`В сутках не может быть более 24 часов`);
        hours = +prompt("Введите время (час)", "");
     }
     let minut = +prompt("Введите время (минуты)", "");
    while(minut>59){
        alert(`В часе не может быть более 60 минут`);
        minut =  +prompt("Введите время (минуты)", "");
     }
     let sec = +prompt("Введите время (секунды)", "");
    while(sec>59){
        alert(`В минуте не может быть более 60 секунд`);
        sec =  +prompt("Введите время (секунды)", "");
     }
    alert (`${hours} : ${minut} : ${sec}`);     
                };

//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
document.getElementById("timeInSeconds").onclick = function timeInSeconds() {
    let hours = +prompt("Введите время (час)", "");
    while(hours>23){
        alert(`В сутках не может быть более 24 часов`);
        hours = +prompt("Введите время (час)", "");
     }
     let minut = +prompt("Введите время (минуты)", "");
    while(minut>59){
        alert(`В часе не может быть более 60 минут`);
        minut =  +prompt("Введите время (минуты)", "");
     }
     let sec = +prompt("Введите время (секунды)", "");
    while(sec>59){
        alert(`В минуте не может быть более 60 секунд`);
        sec =  +prompt("Введите время (секунды)", "");
     }
 let result = hours*3600+minut*60+sec;
    alert (`Это будет ${result} секунд`);     
            };

 //Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
     document.getElementById("time").onclick = function time() {
                const sec = +prompt("Введите время (секунды)", "");
    alert(Math.floor(sec / 3600) + " : " + (Math.floor(sec / 60) - (Math.floor(sec / 3600) * 60)) + " : " + sec % 60);  
                        };

//Написать функцию, которая считает разницу между датами. 
//Функция принимает 6 параметров, которые описывают 2 даты, b возвращает результат в виде строки «чч:мм:сс». 
//При выполнении задания используйте функции из предыдущих 2-х
document.getElementById("timeInterval").onclick = function timeInterval() {
    let firstHours = +prompt("Введите время (час)", "");
    while(firstHours>23){
        alert(`В сутках не может быть более 24 часов`);
        firstHours = +prompt("Введите время (час)", "");
     }
     let firsMminut = +prompt("Введите время (минуты)", "");
    while(firsMminut>59){
        alert(`В часе не может быть более 60 минут`);
        firsMminut =  +prompt("Введите время (минуты)", "");
     }
     let firstSec = +prompt("Введите время (секунды)", "");
    while(firstSec>59){
        alert(`В минуте не может быть более 60 секунд`);
        firstSec =  +prompt("Введите время (секунды)", "");
     }
     let firstResult = firstHours*3600+firsMminut*60+firstSec;

     let secondHours = +prompt("Введите время (час)", "");
    while(firstHours>23){
        alert(`В сутках не может быть более 24 часов`);
        fsecondHours = +prompt("Введите время (час)", "");
     }
     let secondMminut = +prompt("Введите время (минуты)", "");
    while(secondMminut>59){
        alert(`В часе не может быть более 60 минут`);
        secondMminut =  +prompt("Введите время (минуты)", "");
     }
     let secondSec = +prompt("Введите время (секунды)", "");
    while(secondSec>59){
        alert(`В минуте не может быть более 60 секунд`);
        secondSec =  +prompt("Введите время (секунды)", "");
     }
     let secondResult = secondHours*3600+secondMminut*60+secondSec;

     let differenceInSeconds = secondResult-firstResult;

     alert(Math.floor(differenceInSeconds / 3600) + " : " + (Math.floor(differenceInSeconds / 60) - (Math.floor(differenceInSeconds / 3600) * 60)) + " : " + differenceInSeconds % 60);  
};
        }