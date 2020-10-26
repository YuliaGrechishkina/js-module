document.getElementById("SayYourName").onclick = function SayYourName() {
    let name = prompt("Ваше имя?", "");
    alert('Привет,' + name);
}

document.getElementById("SayYourBthYear").onclick = function SayYourBthYear() {
    const today = 2020
    let BthYear = prompt("Ваш год рождения?");
    let age = today - BthYear;
    alert('Вам' + age);
}

document.getElementById("SquareSide").onclick = function SquareSide() {
    let SquareSide = prompt("Сторона квадрата?", "");
    let perimeter = SquareSide * 4;
    alert('Периметр квадрата' + perimeter);
}

document.getElementById("CircleRadius").onclick = function CircleRadius() {
    let CircleRadius = prompt("Радиус окружности?", "");
    let CircleArea = 3.14 * (CircleRadius * CircleRadius);
    alert('Радиус окружности' + CircleArea);
}

document.getElementById("Travel").onclick = function Travel() {
    let distance = prompt("Расстояние в км между двумя городами?", "");
    let hours = prompt("За сколько часов зотите добраться?", "");
    let speed = distance / hours;
    alert('Если хотите успеть вовремя,едьте со скоростью' + distance + 'км в час');
}

document.getElementById("CurrencyConverter").onclick = function CurrencyConverter() {
    const crossCourse = 0.85;
    let USD = prompt("Введите сумму в долл. США");
    let EURO = USD * crossCourse;
    alert('За Ваши доллары Вы можете получить' + EURO + 'евро');
}

document.getElementById("largeFlashDrive").onclick = function largeFlashDrive() {
    let largeFlashDrive = prompt("Объем Вашей флешкив Гб?", "");
    let fileSize = 820;
    let numberFiles = (largeFlashDrive * 1000) / fileSize;
    alert('На Вашу флешку поместится' + numberFiles + 'файлов размером в 820 Мб');
}

document.getElementById("chocolate").onclick = function chocolate() {
    let money = prompt("Сколько денег вы готовы отдать за шоколад?", "");
    let price = prompt("А сколько стоит 1 шоколадка?", "");
    let amount = money / price;
    let change = money % price;
    if (amount > 1) {
        alert('Вам хватает на' + amount + 'плитки шоколада')
    } else {
        alert(`К сожалению, с таким финансовым сосеянием, Вы останетесь без сладкого`);
    }
}


document.getElementById("numbers").onclick = function numbers() {
    let number = prompt("Пожалуйста,ведите трёхзначное число", "");
    let reverse = 0;
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
    let accruedInterest = ((deposit * interestRate * 61) / 365);
    alert(`Сумма начисленных процентов за 2 месяца составит` + accruedInterest);

}