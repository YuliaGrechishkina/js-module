// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/basics.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basics = void 0;

var basics = function basics() {
  //Основы JS
  //Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
  document.getElementById("SayYourName").onclick = function SayYourName() {
    var name = prompt("Ваше имя?", "");
    alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!"));
  }; //Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.


  document.getElementById("SayYourBthYear").onclick = function SayYourBthYear() {
    var today = 2020;
    var BthYear = prompt("Ваш год рождения?");
    var age = today - BthYear;
    alert("\u0412\u0430\u043C ".concat(age));
  }; //Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.


  document.getElementById("SquareSide").onclick = function SquareSide() {
    var SquareSide = prompt("Сторона квадрата?", "");
    var perimeter = SquareSide * 4;
    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 ".concat(perimeter));
  }; //Запросите у пользователя радиус окружности и выведите площадь такой окружности.


  document.getElementById("CircleRadius").onclick = function CircleRadius() {
    var CircleRadius = prompt("Радиус окружности?", "");
    var CircleArea = 3.1415926535 * (CircleRadius * CircleRadius);
    alert("\u0420\u0430\u0434\u0438\u0443\u0441 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 ".concat(CircleArea));
  }; //Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.


  document.getElementById("Travel").onclick = function Travel() {
    var distance = prompt("Расстояние в км между двумя городами?", "");
    var hours = prompt("За сколько часов зотите добраться?", "");
    var speed = distance / hours;
    alert("\u0415\u0441\u043B\u0438 \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0441\u043F\u0435\u0442\u044C \u0432\u043E\u0432\u0440\u0435\u043C\u044F,\u0435\u0434\u044C\u0442\u0435 \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E ".concat(distance, " \u043A\u043C \u0432 \u0447\u0430\u0441"));
  }; //Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.


  document.getElementById("CurrencyConverter").onclick = function CurrencyConverter() {
    var crossCourse = 0.85;
    var USD = prompt("Введите сумму в долл. США");
    var EURO = USD * crossCourse;
    alert("\u0417\u0430 \u0412\u0430\u0448\u0438 \u0434\u043E\u043B\u043B\u0430\u0440\u044B \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C ".concat(EURO, " \u0435\u0432\u0440\u043E"));
  }; //Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.


  document.getElementById("largeFlashDrive").onclick = function largeFlashDrive() {
    var largeFlashDrive = prompt("Объем Вашей флешкив Гб?", "");
    var fileSize = 820;
    var numberFiles = largeFlashDrive * 1000 / fileSize;
    alert("\u041D\u0430 \u0412\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0441\u044F ".concat(numberFiles, "  \u0444\u0430\u0439\u043B\u043E\u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u0432 820 \u041C\u0431"));
  }; //Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.


  document.getElementById("chocolate").onclick = function chocolate() {
    var money = prompt("Сколько денег вы готовы отдать за шоколад?", "");
    var price = prompt("А сколько стоит 1 шоколадка?", "");
    var amount = money / price;
    var change = money % price;

    if (amount > 1) {
      alert("\u0412\u0430\u043C \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043D\u0430 ".concat(amount, " \u043F\u043B\u0438\u0442\u043A\u0438 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0430"));
    } else {
      alert("\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0441 \u0442\u0430\u043A\u0438\u043C \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u043C \u0441\u043E\u0441\u0435\u044F\u043D\u0438\u0435\u043C, \u0412\u044B \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0435\u0441\u044C \u0431\u0435\u0437 \u0441\u043B\u0430\u0434\u043A\u043E\u0433\u043E");
    }
  }; //Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).


  document.getElementById("numbers").onclick = function numbers() {
    var number = prompt("Пожалуйста,ведите трёхзначное число", "");
    var reverse = 0;

    while (number > 0) {
      var digit = number % 10;
      reverse = reverse * 10 + digit;
      number = parseInt(number / 10);
    }

    alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442 ".concat(reverse));
  }; //Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.


  document.getElementById("deposit").onclick = function deposit() {
    var deposit = prompt("Пожалуйста,ведите сумму, которую планируете положить на депозит", "");
    var interestRate = 0.05;
    var accruedInterest = deposit * interestRate * 61 / 365.242;
    alert("\u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u0437\u0430 2 \u043C\u0435\u0441\u044F\u0446\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442 ".concat(accruedInterest));
  }; //End

};

exports.basics = basics;
},{}],"js/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = void 0;

var types = function types() {
  //Types
  //Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
  document.getElementById("age").onclick = function age() {
    var age = prompt("Сколько Вам лет?", 0);

    if (0 <= age && age < 2) {
      alert("\u0412\u044B \u043C\u043B\u0430\u0434\u0435\u043D\u0435\u0446");
    } else if (2 <= age && age < 12) {
      alert("\u0412\u044B \u0440\u0435\u0431\u0435\u043D\u043E\u043A");
    } else if (2 <= age && age < 18) {
      alert("\u0412\u044B \u043F\u043E\u0434\u0440\u043E\u0441\u0442\u043E\u043A");
    } else if (18 <= age && age < 60) {
      alert("\u0412\u044B \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0439");
    } else if (age >= 60) {
      alert("\u0412\u044B \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u0435\u0440");
    }
  }; //Запросить у пользователя число и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).


  document.getElementById("guessTheNumber").onclick = function guessTheNumber() {
    var number = prompt("Введите число от 0  до 9", 0);

    switch (number) {
      case "0":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 )");
        break;

      case "1":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 !");
        break;

      case "2":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 @");
        break;

      case "3":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 #");
        break;

      case "4":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 $");
        break;

      case "5":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 %");
        break;

      case "6":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 ^");
        break;

      case "7":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 &");
        break;

      case "8":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 *");
        break;

      case "9":
        alert("\u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0448\u0435 (");
        break;
    }
  }; //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.


  document.getElementById("threeDigitNumber").onclick = function threeDigitNumber() {
    var threeDigitNumber = prompt("Введите трехзначное число", "");
    var threeDigitNumber1 = parseInt(threeDigitNumber / 100);
    var threeDigitNumber2 = parseInt(threeDigitNumber / 10) % 10;
    var threeDigitNumber3 = threeDigitNumber % 10;
    if (threeDigitNumber1 === threeDigitNumber2 || threeDigitNumber2 === threeDigitNumber3 || threeDigitNumber1 === threeDigitNumber3) alert("\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u0446\u0438\u0444\u0440");else alert("C\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
  }; //Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.


  document.getElementById("leapYear").onclick = function leapYear() {
    var year = prompt("Введите год", "");

    if (year % 4 == 0) {
      if (year % 100 == 0) {
        if (year % 400 == 0) {
          alert("\u0413\u043E\u0434 ".concat(year, " \u043D\u0435 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439"));
        } else alert("\u0413\u043E\u0434 ".concat(year, " \u043D\u0435 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439"));
      } else alert("\u0413\u043E\u0434 ".concat(year, " \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439"));
    }
  }; //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


  document.getElementById("palindrome").onclick = function palindrome() {
    var str = prompt("Введите число", "");
    var j = 0,
        le = str.length - 1,
        pal = true;

    while (j <= le - j) {
      pal = pal && str.charAt(j) == str.charAt(le - j);
      j++;
    }

    alert("Введённое число " + str + (pal ? " " : " не ") + "является палиндромом");
  }; // Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.


  document.getElementById("CurrenciesConverter").onclick = function CurrenciesConverter() {
    var USD = prompt("Введите сумму в долл. США");
    var currency = prompt("Выберите валюту конвертации: EUR - 1, UAN - 2 или AZN - 3");

    switch (currency) {
      case "1":
        alert("\u0417\u0430 \u0412\u0430\u0448\u0438 ".concat(USD, " \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ").concat(USD * 0.86, " EUR"));
        break;

      case "2":
        alert("\u0417\u0430 \u0412\u0430\u0448\u0438 ".concat(USD, " \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ").concat(USD * 28.5, " UAN"));
        break;

      case "3":
        alert("\"\u0417\u0430 \u0412\u0430\u0448\u0438 ".concat(USD, " \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ").concat(USD * 1.7, " AZN"));
        break;
    }
  }; //Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.


  document.getElementById("discount").onclick = function discount() {
    var purchaseAmount = prompt("Введите сумму покупки");

    if (purchaseAmount >= 0 && purchaseAmount < 200) {
      alert("\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043D\u0430 \u0442\u0430\u043A\u0443\u044E \u0441\u0443\u043C\u0443 \u0441\u043A\u0438\u0434\u043A\u0430 \u043D\u0435 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0430");
    } else if (purchaseAmount >= 200 && purchaseAmount < 300) {
      alert("\u0412\u0430\u0448\u0430 \u0441\u043A\u0438\u0434\u043A\u0430 = 3%. \u0421\u0443\u043C\u043C\u0430 \u043A \u043E\u043F\u043B\u0430\u0442\u0435 ".concat(purchaseAmount - purchaseAmount * 0.03));
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
      alert("\u0412\u0430\u0448\u0430 \u0441\u043A\u0438\u0434\u043A\u0430 = 5%. \u0421\u0443\u043C\u043C\u0430 \u043A \u043E\u043F\u043B\u0430\u0442\u0435 ".concat(purchaseAmount - purchaseAmount * 0.05));
    } else if (purchaseAmount >= 500) {
      alert("\u0412\u0430\u0448\u0430 \u0441\u043A\u0438\u0434\u043A\u0430 = 7%. \u0421\u0443\u043C\u043C\u0430 \u043A \u043E\u043F\u043B\u0430\u0442\u0435 ".concat(purchaseAmount - purchaseAmount * 0.07));
    }
  }; //Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.


  document.getElementById("geometry").onclick = function geometry() {
    var circumFerence = prompt("Введите длину окружности");
    var squarePerimeter = prompt("Введите периметр квадрата");
    var circleRadius = circumFerence / (2 * 3.1415926535);
    var squareSide = squarePerimeter / 4;

    if (circleRadius <= squareSide / 2) {
      alert("Такая окружность поместится в указанный квадрат");
    } else if (circleRadius > squareSide / 2) {
      alert("Такая окружность  не поместится в указанный квадрат");
    }
  }; //Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.


  document.getElementById("interview").onclick = function interview() {
    var firstQuestion = prompt("Куда на курортных пляжах просят не заплывать отдыхающих? 1 - За горизонт. 2 -  За буйки. 3 - В камыши.");
    var secondQuestion = prompt("При падении чего принято загадывать желание? 1 - Температуры. 2 -  Курса гривны. 3 - Звезды.");
    var thirdQuestion = prompt("Какое из этих животных чаще всего подвержено бреду? 1 - Сивая кобыла. 2 -  Лапчатый гусь. 3 - Дареный конь.");
    var score = 0;

    if (firstQuestion == 2) {
      score += 2;
    }

    if (secondQuestion == 3) score += 2;
    if (thirdQuestion == 1) score += 2;
    alert("\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C, \u0412\u044B \u043D\u0430\u0431\u0440\u0430\u043B\u0438 ".concat(score, " \u0431\u0430\u043B\u043B\u043E\u0432"));
  }; //Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.


  document.getElementById("сalendar").onclick = function сalendar() {
    var date = prompt("Введите дату (день - месяц - год)");
    date = date.split("-");
    var oldDate = new Date(date[2], date[1] - 1, date[0]);
    oldDate.setDate(oldDate.getDate() + 1);
    alert(oldDate);
  };
};

exports.types = types;
},{}],"js/cycles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycles = void 0;

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var cycles = function cycles() {
  //Cycles
  //Подсчитать сумму всех чисел в заданном пользователем диапазоне.
  document.getElementById("calculateAmount").onclick = function calculateAmount() {
    var rangeStart = +prompt("Введите первое число диапазона");
    var rangeEnd = +prompt("Введите последнее число диапазона");
    var sum = 0;

    while (rangeStart <= rangeEnd) {
      sum += rangeStart;
      rangeStart++;
    }

    alert("\u0421\u0443\u043C\u043C\u0430 \u0432\u0441\u0435\u0445 \u0447\u0438\u0441\u0435\u043B \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0440\u0430\u0432\u043D\u0430 ".concat(sum));
  }; //Запросить 2 числа и найти только наибольший общий делитель.


  document.getElementById("commonDivisor").onclick = function commonDivisor() {
    var firstNumber = +prompt("Введите первое число");
    var secondNumber = +prompt("Введите второе число");
    if (firstNumber == 0) ;
    alert(secondNumber);

    while (secondNumber != 0) {
      if (firstNumber > secondNumber) firstNumber = (_readOnlyError("firstNumber"), firstNumber - secondNumber);else secondNumber = (_readOnlyError("secondNumber"), secondNumber - firstNumber);
    }

    alert("\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0438\u0439 \u043E\u0431\u0449\u0438\u0439 \u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C ".concat(firstNumber));
  }; //Запросить у пользователя число и вывести все делители этого числа.


  document.getElementById("allDivisors").onclick = function allDivisors() {
    var insertNumber = +prompt("Введите число");
    var i = 0;

    while (i++ <= insertNumber) {
      if (insertNumber % i == 0) alert("\u0414\u0435\u043B\u0438\u0442\u0435\u043B\u0438 \u044D\u0442\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 ".concat(i));
    }
  }; //Определить количество цифр в введенном числе.


  document.getElementById("numberDigits").onclick = function numberDigits() {
    var yourNumber = prompt("Введите число", "");
    var length = yourNumber.length;
    alert("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u0444\u0440 \u0432 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u043C \u0447\u0438\u0441\u043B\u0435 ".concat(length));
  }; //Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.


  document.getElementById("mathTricks").onclick = function mathTrickss() {
    var zero = 0;
    var posNumber = 0;
    var negNumber = 0;
    var evenNumber = 0;
    var oddNumber = 0;

    for (var i = 1; i <= 10; i++) {
      var yourNumber = +prompt("Введите число: ");

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

    alert("\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u043D\u0443\u043B\u0435\u0439: ".concat(zero, " \n        \u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(posNumber, " \n        \u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(negNumber, " \n        \u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0447\u0435\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(evenNumber, " \n        \u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u043D\u0435\u0447\u0435\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(oddNumber));
  }; //Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. <br> И так до тех пор, пока пользователь не откажется.


  document.getElementById("LoopCalculator").onclick = function LoopCalculator() {
    while (true) {
      var firstNumber = +prompt("Введите первое число", "");
      var arithmeticOperation = prompt("Введите арифметическое действие: +,-,*,/", "");
      var secondNumber = +prompt("Введите второе число", "");

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
  }; //Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).


  document.getElementById("shiftNumbers").onclick = function shiftNumbers() {
    var nubmer = prompt("Введите число", "");
    var move = +prompt("На сколько цифр нужно сдвинуть введенное число", "");
    alert(nubmer.slice(move).concat(nubmer.slice(0, move)));
  }; //Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.


  document.getElementById("LoopDays").onclick = function LoopDays() {
    var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    var currDay = 0;

    while (confirm("".concat(days[currDay], ". \u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
      currDay = (currDay + 1) % days.length;
    }
  }; //Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.


  document.getElementById("multiplicationTable").onclick = function multiplicationTable() {
    do {
      var a = 1;
      var b = 9;

      var _check = b - a;

      if (_check >= 0) {
        for (var c = a; c <= b; c++) {
          for (var d = 1; d <= 10; d++) {
            document.write("<br>" + c + " x " + d + " = " + c * d);
          }

          document.write("<p>");
        }
      } else {
        alert("First number is higher than the second, PLease try again.");
      }
    } while (check < 0);
  }; //Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его


  document.getElementById("GuessNumber").onclick = function GuessNumber() {
    alert("Загадайте число от 1 до 100");
    var minNumber = 0;
    var maxNumber = 101;

    do {
      var N = Math.round(minNumber + (maxNumber - minNumber) / 2);
      var guessNumber = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E >, < \u0438\u043B\u0438 = ".concat(N));

      if (guessNumber == "<") {
        maxNumber = N - 1;
      } else if (guessNumber == ">") {
        minNumber = N + 1;
      } else if (guessNumber == "=") {
        alert("\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430. \u0412\u044B \u0437\u0430\u0433\u0430\u0434\u0430\u043B\u0438 \u0447\u0438\u0441\u043B\u043E ".concat(N));
        break;
      }
    } while (minNumber !== false);
  };
};

exports.cycles = cycles;
},{}],"js/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functions = void 0;

var functions = function functions() {
  //Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
  document.getElementById("returnNumbers").onclick = function returnNumbers() {
    var returnNumberFirst = +prompt("Введите первое число", "");
    var returnNumberSec = +prompt("Введите второе число", "");

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
  }; //Написать функцию, которая вычисляет факториал переданного ей числа.


  document.getElementById("factorial").onclick = function factorial() {
    function factorial(n) {
      return n < 1 ? 1 : n * factorial(n - 1);
    }

    alert("\u0424\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B \u0440\u0430\u0432\u0435\u043D ".concat(factorial(+prompt("Введите число"))));
  }; //Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.


  document.getElementById("combineNumbers").onclick = function combineNumbers() {
    var combineNumberFirst = +prompt("Введите первое число", "");
    var combineNumberSec = +prompt("Введите второе число", "");
    var combineNumberThird = +prompt("Введите третье число", "");
    alert("".concat(combineNumberFirst).concat(combineNumberSec).concat(combineNumberThird));
  }; //Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


  document.getElementById("areaOfRectangle").onclick = function areaOfRectangle() {
    var lengthOfRectangle = +prompt("Введите длину прямоугольника", "");
    var widthOfRectangle = +prompt("Введите ширину прямоугольника", "");
    var areaOfRectangle = lengthOfRectangle * widthOfRectangle;

    if (widthOfRectangle == 0) {
      areaOfRectangle = lengthOfRectangle * lengthOfRectangle;
    } else if (lengthOfRectangle == 0) {
      areaOfRectangle = widthOfRectangle * widthOfRectangle;
    }

    alert("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 = ".concat(areaOfRectangle));
  }; //Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.


  document.getElementById("PerfectNumber").onclick = function PerfectNumber() {
    var yourNumber = +prompt("Введите число", "");

    var yourPerfectNumber = function yourPerfectNumber(yourNumber) {
      var i;
      var sum = 0;

      for (i = 1; i < yourNumber; i++) {
        if (yourNumber % i == 0) {
          sum += i;
        }
      }

      if (sum === yourNumber) {
        return "\u0427\u0438\u0441\u043B\u043E: ".concat(yourNumber, "  \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u043C");
      } else if (sum |= yourNumber) {
        return "\u0427\u0438\u0441\u043B\u043E: ".concat(yourNumber, " \u041D\u0415 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u043C");
      }
    };

    alert(yourPerfectNumber(yourNumber));
  }; //Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
  //В ПРОЦЕССЕ

  /* document.getElementById(
     "PerfectNumberSec"
  ).onclick = function PerfectNumberSec() {
     const yourFirstNumber = +prompt("Введите первое число", "");
     const yourSecondNumber = +prompt("Введите второе число", "");
   
              const yourPerfectNumber = (yourFirstNumber , yourSecondNumber) => {
         let i;
         let sum = 0;  
                      for (i = yourFirstNumber; i < yourSecondNumber; i++) {
             if ((yourSecondNumber-yourFirstNumber) % i == 0) {
                 sum += i;
             }
         }
         if (sum === (yourSecondNumber-yourFirstNumber)) {
             alert( `Найдены следующие совершенные числа: ${NumbersArr}`);            
         } 
             return false;
         }
                 
               };*/
  //Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
  // Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.


  document.getElementById("clock").onclick = function clock() {
    var hours = +prompt("Введите время (час)", "");

    while (hours > 23) {
      alert("\u0412 \u0441\u0443\u0442\u043A\u0430\u0445 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 24 \u0447\u0430\u0441\u043E\u0432");
      hours = +prompt("Введите время (час)", "");
    }

    var minut = +prompt("Введите время (минуты)", "");

    while (minut > 59) {
      alert("\u0412 \u0447\u0430\u0441\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 60 \u043C\u0438\u043D\u0443\u0442");
      minut = +prompt("Введите время (минуты)", "");
    }

    var sec = +prompt("Введите время (секунды)", "");

    while (sec > 59) {
      alert("\u0412 \u043C\u0438\u043D\u0443\u0442\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 60 \u0441\u0435\u043A\u0443\u043D\u0434");
      sec = +prompt("Введите время (секунды)", "");
    }

    alert("".concat(hours, " : ").concat(minut, " : ").concat(sec));
  }; //Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.


  document.getElementById("timeInSeconds").onclick = function timeInSeconds() {
    var hours = +prompt("Введите время (час)", "");

    while (hours > 23) {
      alert("\u0412 \u0441\u0443\u0442\u043A\u0430\u0445 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 24 \u0447\u0430\u0441\u043E\u0432");
      hours = +prompt("Введите время (час)", "");
    }

    var minut = +prompt("Введите время (минуты)", "");

    while (minut > 59) {
      alert("\u0412 \u0447\u0430\u0441\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 60 \u043C\u0438\u043D\u0443\u0442");
      minut = +prompt("Введите время (минуты)", "");
    }

    var sec = +prompt("Введите время (секунды)", "");

    while (sec > 59) {
      alert("\u0412 \u043C\u0438\u043D\u0443\u0442\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 60 \u0441\u0435\u043A\u0443\u043D\u0434");
      sec = +prompt("Введите время (секунды)", "");
    }

    var result = hours * 3600 + minut * 60 + sec;
    alert("\u042D\u0442\u043E \u0431\u0443\u0434\u0435\u0442 ".concat(result, " \u0441\u0435\u043A\u0443\u043D\u0434"));
  }; //Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».


  document.getElementById("time").onclick = function time() {
    var sec = +prompt("Введите время (секунды)", "");
    alert(Math.floor(sec / 3600) + " : " + (Math.floor(sec / 60) - Math.floor(sec / 3600) * 60) + " : " + sec % 60);
  }; //Написать функцию, которая считает разницу между датами. 
  //Функция принимает 6 параметров, которые описывают 2 даты, b возвращает результат в виде строки «чч:мм:сс». 
  //При выполнении задания используйте функции из предыдущих 2-х


  document.getElementById("timeInterval").onclick = function timeInterval() {
    var firstHours = +prompt("Введите время (час)", "");

    while (firstHours > 23) {
      alert("\u0412 \u0441\u0443\u0442\u043A\u0430\u0445 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 24 \u0447\u0430\u0441\u043E\u0432");
      firstHours = +prompt("Введите время (час)", "");
    }

    var firsMminut = +prompt("Введите время (минуты)", "");

    while (firsMminut > 59) {
      alert("\u0412 \u0447\u0430\u0441\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 60 \u043C\u0438\u043D\u0443\u0442");
      firsMminut = +prompt("Введите время (минуты)", "");
    }

    var firstSec = +prompt("Введите время (секунды)", "");

    while (firstSec > 59) {
      alert("\u0412 \u043C\u0438\u043D\u0443\u0442\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 60 \u0441\u0435\u043A\u0443\u043D\u0434");
      firstSec = +prompt("Введите время (секунды)", "");
    }

    var firstResult = firstHours * 3600 + firsMminut * 60 + firstSec;
    var secondHours = +prompt("Введите время (час)", "");

    while (firstHours > 23) {
      alert("\u0412 \u0441\u0443\u0442\u043A\u0430\u0445 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 24 \u0447\u0430\u0441\u043E\u0432");
      fsecondHours = +prompt("Введите время (час)", "");
    }

    var secondMminut = +prompt("Введите время (минуты)", "");

    while (secondMminut > 59) {
      alert("\u0412 \u0447\u0430\u0441\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 60 \u043C\u0438\u043D\u0443\u0442");
      secondMminut = +prompt("Введите время (минуты)", "");
    }

    var secondSec = +prompt("Введите время (секунды)", "");

    while (secondSec > 59) {
      alert("\u0412 \u043C\u0438\u043D\u0443\u0442\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u0435\u0435 60 \u0441\u0435\u043A\u0443\u043D\u0434");
      secondSec = +prompt("Введите время (секунды)", "");
    }

    var secondResult = secondHours * 3600 + secondMminut * 60 + secondSec;
    var differenceInSeconds = secondResult - firstResult;
    alert(Math.floor(differenceInSeconds / 3600) + " : " + (Math.floor(differenceInSeconds / 60) - Math.floor(differenceInSeconds / 3600) * 60) + " : " + differenceInSeconds % 60);
  };
};

exports.functions = functions;
},{}],"js/objects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objects = void 0;

var objects = function objects() {
  // Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
  //Функция для вывода на экран информации об автомобиле;
  //Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
  document.getElementById("car").onclick = function car() {
    var manufacturer = prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F", "");
    var model = prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F", "");
    var yearOfManufacture = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F", 2019);
    var averageSpeed = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0440\u0435\u0434\u043D\u044E\u044E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F", 200);
    var distance = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0442\u044C", 500);
    var distanceTime = distance / averageSpeed;

    if (distanceTime > 4) {
      distanceTime = distanceTime + Math.floor(distanceTime / 4);
    }

    ;
    var showCarInformation = {
      manufacturer: "".concat(manufacturer),
      model: "".concat(model),
      yearOfManufacture: "".concat(yearOfManufacture),
      averageSpeed: "".concat(averageSpeed)
    };
    alert("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435: \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C - ".concat(showCarInformation.manufacturer, " ;\n      \u043C\u043E\u0434\u0435\u043B\u044C - ").concat(showCarInformation.model, ";\n      \u0433\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430 -  ").concat(showCarInformation.yearOfManufacture, " ;\n      \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C - ").concat(showCarInformation.averageSpeed, ".\n      \u0414\u043B\u044F \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0441\u043E \u0441\u0440\u0435\u0434\u043D\u0435\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F ").concat(distanceTime, " \u0447\u0430\u0441\u043E\u0432."));
  }; // Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: <br>
  //Функция сложения 2-х объектов-дробей;
  // Функция вычитания 2-х объектов-дробей;
  //Функция умножения 2-х объектов-дробей;
  // Функция деления 2-х объектов-дробей;
  //Функция сокращения объекта-дроби.        


  document.getElementById("WorkingWithFractions").onclick = function WorkingWithFractions() {
    var firstNumerator = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C", 2);
    var firstDenominator = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u0437\u043D\u0430\u043C\u0435\u043D\u0430\u0442\u0435\u043B\u044C", 4);
    var secondNumerator = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0442\u043E\u0440\u043E\u0439 \u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C", 4);
    var secondDenominator = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0442\u043E\u0440\u043E\u0439 \u0437\u043D\u0430\u043C\u0435\u043D\u0430\u0442\u0435\u043B\u044C", 8);
    var addingResult = firstNumerator / firstDenominator + secondNumerator / secondDenominator;
    var subtractionResult = firstNumerator / firstDenominator - secondNumerator / secondDenominator;
    var multiplicationResult = firstNumerator / firstDenominator * (secondNumerator / secondDenominator);
    var divisionResult = firstNumerator / firstDenominator / (secondNumerator / secondDenominator);
    alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u043B\u043E\u0436\u0435\u043D\u0438\u044F:".concat(addingResult, "; \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u044B\u0447\u0438\u0442\u0430\u043D\u0438\u044F: ").concat(subtractionResult, "; \n\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u044F: ").concat(multiplicationResult, "; \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F: ").concat(divisionResult, " . "));
  }; //Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
  //Функция вывода времени на экран;
  //Функция изменения времени на переданное количество секунд;
  //Функция изменения времени на переданное количество минут;
  //Функция изменения времени на переданное количество часов. 


  document.getElementById("WorkingWithTime").onclick = function WorkingWithTime() {
    var now = new Date();
    alert("\u0421\u0435\u0439\u0447\u0430\u0441 ".concat(now, " "));
    var seconds = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0435\u043A\u0443\u043D\u0434 \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438", 2);
    var minutes = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0438\u043D\u0443\u0442 \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438", 4);
    var hours = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0447\u0430\u0441\u043E\u0432 \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438", 4);
    now.setSeconds(now.getSeconds() + seconds);
    now.setMinutes(now.getMinutes() + minutes);
    now.setHours(now.getHours() + hours);
    alert("\u0415\u0441\u043B\u0438 \u043F\u0440\u0438\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0447\u0430\u0441\u044B, \u043C\u0438\u043D\u0443\u0442\u044B \u0438 \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0432\u0440\u0435\u043C\u044F \u0431\u0443\u0434\u0435\u0442  ".concat(now));
  };
};

exports.objects = objects;
},{}],"js/arrays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrays = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var arrays = function arrays() {
  //Создать массив «Список покупок». 
  //Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
  //Написать несколько функций для работы с таким массивом.
  //Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
  //Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
  //необходимо увеличивать количество в существующей покупке, а не добавлять новую.
  //Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
  document.getElementById("shoppingList").onclick = function shoppingList() {
    var shoppingList = [{
      name: "Апельсин",
      quantity: 4,
      bought: true
    }, {
      name: "Яблоко",
      quantity: 5,
      bought: false
    }, {
      name: "Арбуз",
      quantity: 1,
      bought: false
    }, {
      name: "Груша",
      quantity: 2,
      bought: true
    }, {
      name: "Лимон",
      quantity: 3,
      bought: false
    }];

    function displayingShoppingList(array) {
      var sortedList = "";
      array.sort(function (a, b) {
        return a.bought === b.bought ? 0 : a.bought ? 1 : -1;
      });

      var _iterator = _createForOfIteratorHelper(array),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (i.bought === false) {
            i.bought = "нужно купить";
          }

          if (i.bought === true) {
            i.bought = "куплено";
          }

          sortedList += "".concat(i.name, ", ").concat(i.quantity, " \u0448\u0442., ").concat(i.bought, "\n");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return sortedList;
    }

    alert(displayingShoppingList(shoppingList));

    function addingPurchase(array) {
      var newPurchase = prompt('Введите название продукта', '');
      var amount = +prompt('Введите нужное количество', 2);
      var statusBought = null;

      for (var i = 0; i < array.length; i++) {
        if (newPurchase === i.name) {
          statusBought = i;
        }

        ;
      }

      ;

      if (statusBought === null) {
        return shoppingList.push({
          name: newPurchase,
          quantity: amount,
          bought: true
        });
      } else {
        array[Number(statusBought)].quantity -= amount;
      }

      if (array[Number(statusBought)].quantity <= 0) {
        return array[Number(statusBought)].bought = true;
      } else if (array[Number(statusBought)].quantity > 0 && statusBought !== null) {
        return array[Number(statusBought)].bought += " (".concat(amount, " \u0443\u0436\u0435 \u043A\u0443\u043F\u043B\u0435\u043D\u043E)");
      }
    }

    addingPurchase(shoppingList);
    alert(displayingShoppingList(shoppingList));
  }; //Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
  //Распечатка чека на экран;
  //Подсчет общей суммы покупки;
  //Получение самой дорогой покупки в чеке;
  //Подсчет средней стоимости одного товара в чеке.


  document.getElementById("checkInTheStore").onclick = function checkInTheStore() {
    var check = [{
      name: "Апельсин",
      quantity: 4,
      price: 2
    }, {
      name: "Яблоко",
      quantity: 5,
      price: 3
    }, {
      name: "Арбуз",
      quantity: 1,
      price: 4
    }, {
      name: "Груша",
      quantity: 2,
      price: 1
    }, {
      name: "Лимон",
      quantity: 3,
      price: 2
    }];

    function displayingCheckInTheStore(array) {
      var displayingCheck = "";

      var _iterator2 = _createForOfIteratorHelper(array),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;
          displayingCheck += "".concat(i.name, ", ").concat(i.quantity, "\u0448\u0442. : ").concat(i.price, " \u0433\u0440\u043D./\u0448\u0442.\n");
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return displayingCheck;
    }

    alert(displayingCheckInTheStore(check));

    function totalPurchase(array) {
      var displayingCheck = "";
      var purchase = 0;

      for (var i = 0; i < array.length; i++) {
        var amount = array[i].quantity * array[i].price;
        displayingCheck += "".concat(array[i].name, " * ").concat(array[i].quantity, "\u0448\u0442. = ").concat(amount, " \u0433\u0440\u043D.\n");
        purchase += array[i].quantity * array[i].price;
      }

      displayingCheck += "\u0412\u0441\u0435\u0433\u043E: ".concat(purchase, "\u0433\u0440\u043D.");
      return displayingCheck;
    }

    alert("\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432 \u0447\u0435\u043A\u0435:\n".concat(totalPurchase(check)));

    function theMostExpensivePurchase(array) {
      var displayingCheck = "";
      var purchase = 0;
      var theMostExpensive = array[0];

      for (var i = 0; i < array.length; i++) {
        var amount = array[i].quantity * array[i].price;
        displayingCheck += "".concat(array[i].name, " * ").concat(array[i].quantity, "\u0448\u0442. = ").concat(amount, " \u0433\u0440\u043D.\n");
        purchase += array[i].quantity * array[i].price;

        if (array[i].price * array[i].quantity > theMostExpensive.price * theMostExpensive.quantity) {
          theMostExpensive = array[i];
        }
      }

      displayingCheck += "\u0412\u0441\u0435\u0433\u043E: ".concat(purchase, "\u0433\u0440\u043D.\n");
      displayingCheck += "\u0421\u0430\u043C\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0430: ".concat(theMostExpensive.name, " - ").concat(theMostExpensive.quantity * theMostExpensive.price, "\u0433\u0440\u043D.\n");
      return displayingCheck;
    }

    alert(theMostExpensivePurchase(check));

    function averageCostProduct(array) {
      var displayingCheck = "";
      var purchase = 0;
      var totalQuantity = 0;
      var averageCost = 0;

      for (var i = 0; i < array.length; i++) {
        var amount = array[i].quantity * array[i].price;
        displayingCheck += "".concat(array[i].name, " * ").concat(array[i].quantity, "\u0448\u0442. = ").concat(amount, " \u0433\u0440\u043D.\n");
        purchase += array[i].quantity * array[i].price;
        totalQuantity += array[i].quantity;
        averageCost = purchase / totalQuantity;
      }

      displayingCheck += "\u0412\u0441\u0435\u0433\u043E: ".concat(purchase, "\u0433\u0440\u043D.\n");
      displayingCheck += "\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0430 \u0432 \u0447\u0435\u043A\u0435: ".concat(averageCost, "\u0433\u0440\u043D.\n");
      return displayingCheck;
    }

    alert(averageCostProduct(check));
  }; //Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
  //Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
  //Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() 
  //в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.


  document.getElementById("arrayOfStyles").onclick = function arrayOfStyles() {
    var cssStyles = [{
      name: "color",
      value: "green"
    }, {
      name: "font-size",
      value: "44px"
    }, {
      name: "font-weght",
      value: "900"
    }, {
      name: "font-style",
      value: "italic"
    }, {
      name: "text-decoration",
      value: "underline"
    }, {
      name: "text-transform",
      value: "uppercase"
    }, {
      name: "text-align",
      value: "center"
    }];

    var displayingCssStyles = function displayingCssStyles(array, text) {
      var addStyle = "<p style=\"";

      var _iterator3 = _createForOfIteratorHelper(array),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var i = _step3.value;
          addStyle += "".concat(i.name, ": ").concat(i.value, ";\n");
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      addStyle += "\"> ".concat(text, " </p>");
      document.write(addStyle);
    };

    displayingCssStyles(cssStyles, 'Hello, world');
  }; //Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. 
  //Написать несколько функций для работы с ним^
  //Вывод на экран всех аудиторий;
  //Вывод на экран аудиторий для указанного факультета;
  //Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
  //Функция сортировки аудиторий по количеству мест;
  //Функция сортировки аудиторий по названию (по алфавиту).


  document.getElementById("audience").onclick = function audience() {
    var audienceSeats = [{
      name: 1,
      seats: 5,
      faculty: "Юристы"
    }, {
      name: 2,
      seats: 10,
      faculty: "Географы"
    }, {
      name: 3,
      seats: 15,
      faculty: "Биологи"
    }, {
      name: 4,
      seats: 20,
      faculty: "Математики"
    }];

    var displayingAudiences = function displayingAudiences(array) {
      var allAudiences = '';

      for (var i in array) {
        allAudiences += "".concat(array[i].faculty, ": \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F ").concat(array[i].name, " , \u043C\u0435\u0441\u0442 ").concat(array[i].seats, "\n");
      }

      return allAudiences;
    };

    alert(displayingAudiences(audienceSeats));
    var facultyName = +prompt("Введите число, соответствующее Вашему факультету: 1- Юристы, 2 - Географы, 3 - Биологи, 4 - Математики", "");
    var yourFacultyAudience = audienceSeats.find(function (item) {
      return item.name == facultyName;
    });
    alert("\u0412\u0430\u0448\u0430 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F:  ".concat(yourFacultyAudience.name));

    var sortingBySeats = function sortingBySeats(array) {
      array.sort(function (a, b) {
        return a.seats > b.seats ? 1 : -1;
      });
      var yourSeats = '';

      var _iterator4 = _createForOfIteratorHelper(array),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var i = _step4.value;
          yourSeats += "".concat(i.faculty, ": \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F  ").concat(i.name, " \u043D\u0430 (").concat(i.seats, " \u043C\u0435\u0441\u0442)\n");
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return yourSeats;
    };

    alert(sortingBySeats(audienceSeats));

    var sortingByAudienceName = function sortingByAudienceName(array) {
      array.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      });
      var result = '';

      var _iterator5 = _createForOfIteratorHelper(array),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var i = _step5.value;
          result += "".concat(i.faculty, ": \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F - ").concat(i.name, " \u043D\u0430 (").concat(i.seats, " \u043C\u0435\u0441\u0442)\n");
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return result;
    };

    alert(sortingByAudienceName(audienceSeats));
  };
};

exports.arrays = arrays;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _basics = require("../js/basics");

var _types = require("../js/types.js");

var _cycles = require("../js/cycles.js");

var _functions = require("../js/functions.js");

var _objects = require("../js/objects.js");

var _arrays = require("../js/arrays.js");

(0, _basics.basics)();
(0, _types.types)();
(0, _cycles.cycles)();
(0, _functions.functions)();
(0, _objects.objects)();
(0, _arrays.arrays)();
},{"../js/basics":"js/basics.js","../js/types.js":"js/types.js","../js/cycles.js":"js/cycles.js","../js/functions.js":"js/functions.js","../js/objects.js":"js/objects.js","../js/arrays.js":"js/arrays.js"}],"../../../../../../Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54740" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map