document.getElementById("SayYourName").onclick = function SayYourName() {
    const name = prompt("Ваше имя?", "");
    alert('Привет,' + name);
}

document.getElementById("SayYourBthYear").onclick = function SayYourBthYear() {
    const today = 2020
    const BthYear = prompt("Ваш год рождения?");
    const age = today - BthYear;
    alert('Вам' + age);
}

document.getElementById("SquareSide").onclick = function SquareSide() {
    const SquareSide = prompt("Сторона квадрата?", "");
    const perimeter = SquareSide * 4;
    alert('Периметр квадрата' + perimeter);
}

document.getElementById("CircleRadius").onclick = function CircleRadius() {
    const CircleRadius = prompt("Радиус окружности?", "");
    const CircleArea = 3.14 * (CircleRadius * CircleRadius);
    alert('Радиус окружности' + CircleArea);
}

document.getElementById("Travel").onclick = function Travel() {
    const distance = prompt("Расстояние в км между двумя городами?", "");
    const hours = prompt("За сколько часов зотите добраться?", "");
    const speed = distance / hours;
    alert('Если хотите успеть вовремя,едьте со скоростью' + distance + 'км в час');
}

document.getElementById("CurrencyConverter").onclick = function CurrencyConverter() {
    const crossCourse = 0.85;
    const USD = prompt("Введите сумму в долл. США");
    const EURO = USD * crossCourse;
    alert('За Ваши доллары Вы можете получить' + EURO + 'евро');
}

document.getElementById("largeFlashDrive").onclick = function largeFlashDrive() {
    const largeFlashDrive = prompt("Объем Вашей флешкив Гб?", "");
    const fileSize = 820;
    const numberFiles = (largeFlashDrive * 1000) / fileSize;
    alert('На Вашу флешку поместится' + numberFiles + 'файлов размером в 820 Мб');
}

document.getElementById("chocolate").onclick = function chocolate() {
    const money = prompt("Сколько денег вы готовы отдать за шоколад?", "");
    const price = prompt("А сколько стоит 1 шоколадка?", "");
    const amount = money / price;
    const change = money % price;
    if (amount > 1) {
        alert('Вам хватает на' + amount + 'плитки шоколада')
    } else {
        alert(`К сожалению, с таким финансовым сосеянием, Вы останетесь без сладкого`);
    }
}


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

document.getElementById("deposit").onclick = function deposit() {
    const deposit = prompt("Пожалуйста,ведите сумму, которую планируете положить на депозит", "");
    const interestRate = (0.05);
    let accruedInterest = ((deposit * interestRate * 61) / 365.242);
    alert(`Сумма начисленных процентов за 2 месяца составит` + accruedInterest);

}