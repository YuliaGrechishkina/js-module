export const cyclesHomework = () => {
    //Cycles

    //Подсчитать сумму всех чисел в заданном пользователем диапазоне.
    document.getElementById(
        "calculateAmount"
    ).onclick = function calculateAmount() {
        let rangeStart = +prompt("Введите первое число диапазона");
        let rangeEnd = +prompt("Введите последнее число диапазона");
        let sum = 0;
        while (rangeStart <= rangeEnd) {
            sum += rangeStart;
            rangeStart++;
        }
        alert(`Сумма всех чисел диапазона равна ${sum}`);
    };

    //Запросить 2 числа и найти только наибольший общий делитель.
    document.getElementById("commonDivisor").onclick = function commonDivisor() {
        const firstNumber = +prompt("Введите первое число");
        const secondNumber = +prompt("Введите второе число");
        if (firstNumber == 0);
        alert(secondNumber);
        while (secondNumber != 0) {
            if (firstNumber > secondNumber) firstNumber = firstNumber - secondNumber;
            else secondNumber = secondNumber - firstNumber;
        }
        alert(`Наибольший общий делитель ${firstNumber}`);
    };

    //Запросить у пользователя число и вывести все делители этого числа.
    document.getElementById("allDivisors").onclick = function allDivisors() {
        const insertNumber = +prompt("Введите число");
        let i = 0;
        while (i++ <= insertNumber) {
            if (insertNumber % i == 0) alert(`Делители этого числа ${i}`);
        }
    };

    //Определить количество цифр в введенном числе.
    document.getElementById("numberDigits").onclick = function numberDigits() {
        const yourNumber = prompt("Введите число", "");
        let length = yourNumber.length;
        alert(`Количество цифр в введенном числе ${length}`);
    };

    //Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
    document.getElementById("mathTricks").onclick = function mathTrickss() {
        let zero = 0;
        let posNumber = 0;
        let negNumber = 0;
        let evenNumber = 0;
        let oddNumber = 0;
        for (let i = 1; i <= 10; i++) {
            let yourNumber = +prompt("Введите число: ");
            if (yourNumber > 0) {
                posNumber += 1;
            } else if (yourNumber < 0) {
                negNumber++;
            } else if (yourNumber == 0) {
                zero += 1;
            }
            if (yourNumber % 2 == 0) {
                evenNumber += 1;
            } else {
                oddNumber += 1;
            }
        }
        alert(
            `Колличество введенных нулей: ${zero} 
        Колличество введенных положительных чисел: ${posNumber} 
        Колличество введенных отрицательных чисел: ${negNumber} 
        Колличество введенных четных чисел: ${evenNumber} 
        Колличество введенных нечетных чисел: ${oddNumber}`
        );
    };

    //Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. <br> И так до тех пор, пока пользователь не откажется.
    document.getElementById(
        "LoopCalculator"
    ).onclick = function LoopCalculator() {
        while (true) {
            const firstNumber = +prompt("Введите первое число", "");
            const arithmeticOperation = prompt(
                "Введите арифметическое действие: +,-,*,/",
                ""
            );
            const secondNumber = +prompt("Введите второе число", "");
            if (arithmeticOperation == "+") {
                result = firstNumber + secondNumber;
            } else if (arithmeticOperation == "-") {
                result = firstNumber - secondNumber;
            } else if (arithmeticOperation == "*") {
                result = firstNumber * secondNumber;
            } else if (arithmeticOperation == "/") {
                result = firstNumber / secondNumber;
            }
            alert(firstNumber + arithmeticOperation + secondNumber + " = " + result);
            if (!confirm("Хотите ли вы решить еще один пример?")) break;
        }
    };

    //Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
    document.getElementById("shiftNumbers").onclick = function shiftNumbers() {
        let nubmer = prompt("Введите число", "");
        let move = +prompt("На сколько цифр нужно сдвинуть введенное число", "");

        alert(nubmer.slice(move).concat(nubmer.slice(0, move)));
    };

    //Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
    document.getElementById("LoopDays").onclick = function LoopDays() {
        const days = [
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
            "Воскресенье",
        ];
        let currDay = 0;

        while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
            currDay = (currDay + 1) % days.length;
        }
    };

    //Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
    document.getElementById(
        "multiplicationTable"
    ).onclick = function multiplicationTable() {
        do {
            let a = 1;
            let b = 9;
            let check = b - a;
            if (check >= 0) {
                for (let c = a; c <= b; c++) {
                    for (let d = 1; d <= 10; d++) {
                        document.write("<br>" + c + " x " + d + " = " + c * d);
                    }
                    document.write("<p>");
                }
            } else {
                alert("First number is higher than the second, PLease try again.");
            }
        } while (check < 0);
    };

    //Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его
    document.getElementById("GuessNumber").onclick = function GuessNumber() {
        alert("Загадайте число от 1 до 100");
        let minNumber = 0;
        let maxNumber = 100;
        while (guessNumber) {
            let N = minNumber + (maxNumber - minNumber) / 2;
            let guessNumber = prompt(`Ваше число >, < или = ${N}`);
            if (guessNumber == "<") {
                maxNumber = N - 1;
            } else if (guessNumber == ">") {
                minNumber = N + 1;
            } else if (guessNumber == "=") {
                alert(`Игра окончена. Вы загадали число ${N}`);
            }
        }
    };
};