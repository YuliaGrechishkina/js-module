//Основы JS

//Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
document.getElementById("SayYourName").onclick = function SayYourName() {
    const name = prompt("Ваше имя?", "");
    alert("Привет, " + name);
}

//Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
document.getElementById("SayYourBthYear").onclick = function SayYourBthYear() {
    const today = 2020
    const BthYear = prompt("Ваш год рождения?");
    const age = today - BthYear;
    alert("Вам " + age);
}

//Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
document.getElementById("SquareSide").onclick = function SquareSide() {
    const SquareSide = prompt("Сторона квадрата?", "");
    const perimeter = SquareSide * 4;
    alert("Периметр квадрата " + perimeter);
}

//Запросите у пользователя радиус окружности и выведите площадь такой окружности.
document.getElementById("CircleRadius").onclick = function CircleRadius() {
    const CircleRadius = prompt("Радиус окружности?", "");
    const CircleArea = 3.1415926535 * (CircleRadius * CircleRadius);
    alert("Радиус окружности " + CircleArea);
}

//Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
document.getElementById("Travel").onclick = function Travel() {
    const distance = prompt("Расстояние в км между двумя городами?", "");
    const hours = prompt("За сколько часов зотите добраться?", "");
    const speed = distance / hours;
    alert("Если хотите успеть вовремя,едьте со скоростью " + distance + " км в час");
}

//Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
document.getElementById("CurrencyConverter").onclick = function CurrencyConverter() {
    const crossCourse = 0.85;
    const USD = prompt("Введите сумму в долл. США");
    const EURO = USD * crossCourse;
    alert("За Ваши доллары Вы можете получить " + EURO + " евро");
}

//Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
document.getElementById("largeFlashDrive").onclick = function largeFlashDrive() {
    const largeFlashDrive = prompt("Объем Вашей флешкив Гб?", "");
    const fileSize = 820;
    const numberFiles = (largeFlashDrive * 1000) / fileSize;
    alert("На Вашу флешку поместится " + numberFiles + " файлов размером в 820 Мб");
}

//Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
document.getElementById("chocolate").onclick = function chocolate() {
    const money = prompt("Сколько денег вы готовы отдать за шоколад?", "");
    const price = prompt("А сколько стоит 1 шоколадка?", "");
    const amount = money / price;
    const change = money % price;
    if (amount > 1) {
        alert("Вам хватает на " + amount + " плитки шоколада")
    } else {
        alert("К сожалению, с таким финансовым сосеянием, Вы останетесь без сладкого");
    }
}

//Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
document.getElementById("numbers").onclick = function numbers() {
    const number = prompt("Пожалуйста,ведите трёхзначное число", "");
    const reverse = 0;
    while (number > 0) {
        let digit = number % 10;
        reverse = (reverse * 10) + digit;
        number = parseInt(number / 10);
    }
    alert("Ваше число наоборот " + reverse);
}

//Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
document.getElementById("deposit").onclick = function deposit() {
    const deposit = prompt("Пожалуйста,ведите сумму, которую планируете положить на депозит", "");
    const interestRate = (0.05);
    let accruedInterest = ((deposit * interestRate * 61) / 365.242);
    alert("Сумма начисленных процентов за 2 месяца составит " + accruedInterest);

}

//////////////////////////////////////////////////

//Types

//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
document.getElementById("age").onclick = function age() {
    const age = prompt("Сколько Вам лет?", 0);
    if (0 <= age && age < 2) {
        alert("Вы младенец");
    } else if (2 <= age && age < 12) {
        alert("Вы ребенок");
    } else if (2 <= age && age < 18) {
        alert("Вы подросток");
    } else if (18 <= age && age < 60) {
        alert("Вы взрослый");
    } else if (age >= 60) {
        alert("Вы пенсионер");
    }
}

//Запросить у пользователя число и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
document.getElementById("guessTheNumber").onclick = function guessTheNumber() {
    const number = prompt("Введите число от 0  до 9", 0);
    switch (number) {
        case "0":
            alert("спецсимвол, который расположен на этой клавише )");
            break;
        case "1":
            alert("спецсимвол, который расположен на этой клавише !");
            break;
        case "2":
            alert("спецсимвол, который расположен на этой клавише @");
            break;
        case "3":
            alert("спецсимвол, который расположен на этой клавише #");
            break;
        case "4":
            alert("спецсимвол, который расположен на этой клавише $");
            break;
        case "5":
            alert("спецсимвол, который расположен на этой клавише %");
            break;
        case "6":
            alert("спецсимвол, который расположен на этой клавише ^");
            break;
        case "7":
            alert("спецсимвол, который расположен на этой клавише &");
            break;
        case "8":
            alert("спецсимвол, который расположен на этой клавише *");
            break;
        case "9":
            alert("спецсимвол, который расположен на этой клавише (");
            break;
    }
}

//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
document.getElementById("threeDigitNumber").onclick = function threeDigitNumber() {
    const threeDigitNumber = prompt("Введите трехзначное число", "");
    const threeDigitNumber1 = parseInt(threeDigitNumber / 100);
    const threeDigitNumber2 = parseInt(threeDigitNumber / 10) % 10;
    const threeDigitNumber3 = (threeDigitNumber % 10);
    if (threeDigitNumber1 === threeDigitNumber2 || threeDigitNumber2 === threeDigitNumber3 || threeDigitNumber1 === threeDigitNumber3)
        alert("Найдено совпадение цифр");
    else
        alert("cовпадений не найдено");

}

//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
document.getElementById("leapYear").onclick = function leapYear() {
    const year = prompt("Введите год", "");
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                alert("Год  " + year + " не високосный");
            } else
                alert("Год  " + year + " не високосный");
        } else
            alert("Год  " + year + " високосный");
    }
    alert("Год  " + year + " не високосный");
}

//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
document.getElementById("palindrome").onclick = function palindrome() {
    const str = prompt("Введите число", "");
    var j = 0,
        le = str.length - 1,
        pal = true;
    while (j <= le - j) {
        pal = pal && (str.charAt(j) == str.charAt(le - j));
        j++
    }
    alert('Введённое число ' + str + (pal ? ' ' : ' не ') + 'является палиндромом');
}

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
document.getElementById("CurrenciesConverter").onclick = function CurrenciesConverter() {
    const USD = prompt("Введите сумму в долл. США");
    const currency = prompt("Выберите валюту конвертации: EUR - 1, UAN - 2 или AZN - 3");
    switch (currency) {
        case '1':
            alert("За Ваши " + "USD" + " Вы получите " + USD * 0.86 + " EUR ");
            break;
        case '2':
            alert("За Ваши " + "USD" + " Вы получите " + USD * 28.50 + " UAN ");
            break;
        case '3':
            alert("За Ваши " + "USD" + " Вы получите " + USD * 1.70 + " AZN ");
            break;
    }
}

//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
document.getElementById("discount").onclick = function discount() {
    const purchaseAmount = prompt("Введите сумму покупки");
    if (purchaseAmount >= 0 && purchaseAmount < 200) {
        alert("Извините, на такую суму скидка не предусмотрена");
    } else if (purchaseAmount >= 200 && purchaseAmount < 300) {
        alert("Ваша скидка = 3%. " + " Сумма к оплате " + (purchaseAmount - purchaseAmount * 0.03));
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        alert("Ваша скидка = 5%. " + " Сумма к оплате " + (purchaseAmount - purchaseAmount * 0.05));
    } else if (purchaseAmount >= 500) {
        alert("Ваша скидка = 7%. " + " Сумма к оплате " + (purchaseAmount - purchaseAmount * 0.07));
    }
}

//Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
document.getElementById("geometry").onclick = function geometry() {
    const circumFerence = prompt("Введите длину окружности");
    const squarePerimeter = prompt("Введите периметр квадрата");
    const circleRadius = (circumFerence / (2 * 3.1415926535));
    const squareSide = (squarePerimeter / 4);
    if (circleRadius <= (squareSide / 2)) {
        alert("Такая окружность поместится в указанный квадрат");
    } else if (circleRadius > (squareSide / 2)) {
        alert("Такая окружность  не поместится в указанный квадрат");
    }
}

//Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
document.getElementById("interview").onclick = function interview() {
    const firstQuestion = prompt("Куда на курортных пляжах просят не заплывать отдыхающих? 1 - За горизонт. 2 -  За буйки. 3 - В камыши.");
    const secondQuestion = prompt("При падении чего принято загадывать желание? 1 - Температуры. 2 -  Курса гривны. 3 - Звезды.");
    const thirdQuestion = prompt("Какое из этих животных чаще всего подвержено бреду? 1 - Сивая кобыла. 2 -  Лапчатый гусь. 3 - Дареный конь.");
    let score = 0;
    if (firstQuestion == 2) { score += 2 };
    if (secondQuestion == 3) score += 2;
    if (thirdQuestion == 1) score += 2;
    alert("Поздравляем, Вы набрали " + score + " баллов");
}

//Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
document.getElementById("сalendar").onclick = function сalendar() {
    let date = prompt("Введите дату (день - месяц - год)");
    date = date.split('-');
    let oldDate = new Date(date[2], date[1] - 1, date[0]);
    oldDate.setDate(oldDate.getDate() + 1);
    alert(oldDate);
}

//////////////////////////////////////////////////////////////////////////////

//Cycles

//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
document.getElementById("calculateAmount").onclick = function calculateAmount() {
    let rangeStart = +prompt("Введите первое число диапазона");
    let rangeEnd = +prompt("Введите последнее число диапазона");
    let sum = 0;
    while (rangeStart <= rangeEnd) {
        sum += rangeStart;
        rangeStart++;
    }
    alert
        ("Сумма всех чисел диапазона равна " + sum);

}

//Запросить 2 числа и найти только наибольший общий делитель.
document.getElementById("commonDivisor").onclick = function commonDivisor() {
    const firstNumber = +prompt("Введите первое число");
    const secondNumber = +prompt("Введите второе число");
    if (firstNumber == 0);
    alert(secondNumber);
    while (secondNumber != 0) {
        if (firstNumber > secondNumber)
            firstNumber = firstNumber - secondNumber;
        else
            secondNumber = secondNumber - firstNumber;
    }
    alert("Наибольший общий делитель " + firstNumber);
}

//Запросить у пользователя число и вывести все делители этого числа.
document.getElementById("allDivisors").onclick = function allDivisors() {
    const insertNumber = +prompt("Введите число");
    let i = 0;
    while (i++ <= insertNumber) {
        if (insertNumber % i == 0)
            alert("Делители этого числа " + i);
    }
}

//Определить количество цифр в введенном числе.
document.getElementById("numberDigits").onclick = function numberDigits() {
    const yourNumber = prompt("Введите число", "");
    let length = yourNumber.length;
    alert("Количество цифр в введенном числе " + length);
}

//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
document.getElementById("mathTricks").onclick = function mathTrickss() {

}