export const types = () => {
    //Types

    //Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
    document.getElementById("age").onclick = function age() {
        const age = prompt("Сколько Вам лет?", 0);
        if (0 <= age && age < 2) {
            alert(`Вы младенец`);
        } else if (2 <= age && age < 12) {
            alert(`Вы ребенок`);
        } else if (2 <= age && age < 18) {
            alert(`Вы подросток`);
        } else if (18 <= age && age < 60) {
            alert(`Вы взрослый`);
        } else if (age >= 60) {
            alert(`Вы пенсионер`);
        }
    };

    //Запросить у пользователя число и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
    document.getElementById(
        "guessTheNumber"
    ).onclick = function guessTheNumber() {
        const number = prompt("Введите число от 0  до 9", 0);
        switch (number) {
            case "0":
                alert(`спецсимвол, который расположен на этой клавише )`);
                break;
            case "1":
                alert(`спецсимвол, который расположен на этой клавише !`);
                break;
            case "2":
                alert(`спецсимвол, который расположен на этой клавише @`);
                break;
            case "3":
                alert(`спецсимвол, который расположен на этой клавише #`);
                break;
            case "4":
                alert(`спецсимвол, который расположен на этой клавише $`);
                break;
            case "5":
                alert(`спецсимвол, который расположен на этой клавише %`);
                break;
            case "6":
                alert(`спецсимвол, который расположен на этой клавише ^`);
                break;
            case "7":
                alert(`спецсимвол, который расположен на этой клавише &`);
                break;
            case "8":
                alert(`спецсимвол, который расположен на этой клавише *`);
                break;
            case "9":
                alert(`спецсимвол, который расположен на этой клавише (`);
                break;
        }
    };

    //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
    document.getElementById(
        "threeDigitNumber"
    ).onclick = function threeDigitNumber() {
        const threeDigitNumber = prompt("Введите трехзначное число", "");
        const threeDigitNumber1 = parseInt(threeDigitNumber / 100);
        const threeDigitNumber2 = parseInt(threeDigitNumber / 10) % 10;
        const threeDigitNumber3 = threeDigitNumber % 10;
        if (
            threeDigitNumber1 === threeDigitNumber2 ||
            threeDigitNumber2 === threeDigitNumber3 ||
            threeDigitNumber1 === threeDigitNumber3
        )
            alert(`Найдено совпадение цифр`);
        else alert(`Cовпадений не найдено`);
    };

    //Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
    document.getElementById("leapYear").onclick = function leapYear() {
        const year = prompt("Введите год", "");
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    alert(`Год ${year} не високосный`);
                } else alert(`Год ${year} не високосный`);
            } else alert(`Год ${year} високосный`);
        }
    };

    //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
    document.getElementById("palindrome").onclick = function palindrome() {
        const str = prompt("Введите число", "");
        let j = 0,
            le = str.length - 1,
            pal = true;
        while (j <= le - j) {
            pal = pal && str.charAt(j) == str.charAt(le - j);
            j++;
        }
        alert(
            "Введённое число " + str + (pal ? " " : " не ") + "является палиндромом"
        );
    };

    // Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
    document.getElementById(
        "CurrenciesConverter"
    ).onclick = function CurrenciesConverter() {
        const USD = prompt("Введите сумму в долл. США");
        const currency = prompt(
            "Выберите валюту конвертации: EUR - 1, UAN - 2 или AZN - 3"
        );
        switch (currency) {
            case "1":
                alert(`За Ваши ${USD} Вы получите ${USD * 0.86} EUR`);
                break;
            case "2":
                alert(`За Ваши ${USD} Вы получите ${USD * 28.5} UAN`);
                break;
            case "3":
                alert(`"За Ваши ${USD} Вы получите ${USD * 1.7} AZN`);
                break;
        }
    };

    //Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
    document.getElementById("discount").onclick = function discount() {
        const purchaseAmount = prompt("Введите сумму покупки");
        if (purchaseAmount >= 0 && purchaseAmount < 200) {
            alert(`Извините, на такую суму скидка не предусмотрена`);
        } else if (purchaseAmount >= 200 && purchaseAmount < 300) {
            alert(
                `Ваша скидка = 3%. Сумма к оплате ${
          purchaseAmount - purchaseAmount * 0.03
        }`
            );
        } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
            alert(
                `Ваша скидка = 5%. Сумма к оплате ${
          purchaseAmount - purchaseAmount * 0.05
        }`
            );
        } else if (purchaseAmount >= 500) {
            alert(
                `Ваша скидка = 7%. Сумма к оплате ${
          purchaseAmount - purchaseAmount * 0.07
        }`
            );
        }
    };

    //Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
    document.getElementById("geometry").onclick = function geometry() {
        const circumFerence = prompt("Введите длину окружности");
        const squarePerimeter = prompt("Введите периметр квадрата");
        const circleRadius = circumFerence / (2 * 3.1415926535);
        const squareSide = squarePerimeter / 4;
        if (circleRadius <= squareSide / 2) {
            alert("Такая окружность поместится в указанный квадрат");
        } else if (circleRadius > squareSide / 2) {
            alert("Такая окружность  не поместится в указанный квадрат");
        }
    };

    //Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
    document.getElementById("interview").onclick = function interview() {
        const firstQuestion = prompt(
            "Куда на курортных пляжах просят не заплывать отдыхающих? 1 - За горизонт. 2 -  За буйки. 3 - В камыши."
        );
        const secondQuestion = prompt(
            "При падении чего принято загадывать желание? 1 - Температуры. 2 -  Курса гривны. 3 - Звезды."
        );
        const thirdQuestion = prompt(
            "Какое из этих животных чаще всего подвержено бреду? 1 - Сивая кобыла. 2 -  Лапчатый гусь. 3 - Дареный конь."
        );
        let score = 0;
        if (firstQuestion == 2) {
            score += 2;
        }
        if (secondQuestion == 3) score += 2;
        if (thirdQuestion == 1) score += 2;
        alert(`Поздравляем, Вы набрали ${score} баллов`);
    };

    //Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
    document.getElementById("сalendar").onclick = function сalendar() {
        let date = prompt("Введите дату (день - месяц - год)");
        date = date.split("-");
        let oldDate = new Date(date[2], date[1] - 1, date[0]);
        oldDate.setDate(oldDate.getDate() + 1);
        alert(oldDate);
    };
};