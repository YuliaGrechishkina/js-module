export const basics = () => {
    //Основы JS

    //Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
    document.getElementById("SayYourName").onclick = function SayYourName() {
        const name = prompt("Ваше имя?", "");
        alert(`Привет, ${name}!`);
    };

    //Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
    document.getElementById(
        "SayYourBthYear"
    ).onclick = function SayYourBthYear() {
        const today = 2020;
        const BthYear = prompt("Ваш год рождения?");
        const age = today - BthYear;
        alert(`Вам ${age}`);
    };

    //Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
    document.getElementById("SquareSide").onclick = function SquareSide() {
        const SquareSide = prompt("Сторона квадрата?", "");
        const perimeter = SquareSide * 4;
        alert(`Периметр квадрата ${perimeter}`);
    };

    //Запросите у пользователя радиус окружности и выведите площадь такой окружности.
    document.getElementById("CircleRadius").onclick = function CircleRadius() {
        const CircleRadius = prompt("Радиус окружности?", "");
        const CircleArea = 3.1415926535 * (CircleRadius * CircleRadius);
        alert(`Радиус окружности ${CircleArea}`);
    };

    //Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
    document.getElementById("Travel").onclick = function Travel() {
        const distance = prompt("Расстояние в км между двумя городами?", "");
        const hours = prompt("За сколько часов зотите добраться?", "");
        const speed = distance / hours;
        alert(`Если хотите успеть вовремя,едьте со скоростью ${distance} км в час`);
    };

    //Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
    document.getElementById(
        "CurrencyConverter"
    ).onclick = function CurrencyConverter() {
        const crossCourse = 0.85;
        const USD = prompt("Введите сумму в долл. США");
        const EURO = USD * crossCourse;
        alert(`За Ваши доллары Вы можете получить ${EURO} евро`);
    };

    //Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
    document.getElementById(
        "largeFlashDrive"
    ).onclick = function largeFlashDrive() {
        const largeFlashDrive = prompt("Объем Вашей флешкив Гб?", "");
        const fileSize = 820;
        const numberFiles = (largeFlashDrive * 1000) / fileSize;
        alert(`На Вашу флешку поместится ${numberFiles}  файлов размером в 820 Мб`);
    };

    //Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
    document.getElementById("chocolate").onclick = function chocolate() {
        const money = prompt("Сколько денег вы готовы отдать за шоколад?", "");
        const price = prompt("А сколько стоит 1 шоколадка?", "");
        const amount = money / price;
        const change = money % price;
        if (amount > 1) {
            alert(`Вам хватает на ${amount} плитки шоколада`);
        } else {
            alert(
                `К сожалению, с таким финансовым сосеянием, Вы останетесь без сладкого`
            );
        }
    };

    //Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
    document.getElementById("numbers").onclick = function numbers() {
        let number = prompt("Пожалуйста,ведите трёхзначное число", "");
        let reverse = 0;
        while (number > 0) {
            let digit = number % 10;
            reverse = reverse * 10 + digit;
            number = parseInt(number / 10);
        }
        alert(`Ваше число наоборот ${reverse}`);
    };

    //Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
    document.getElementById("deposit").onclick = function deposit() {
        const deposit = prompt(
            "Пожалуйста,ведите сумму, которую планируете положить на депозит",
            ""
        );
        const interestRate = 0.05;
        let accruedInterest = (deposit * interestRate * 61) / 365.242;
        alert(
            `Сумма начисленных процентов за 2 месяца составит ${accruedInterest}`
        );
    };

    //End
};