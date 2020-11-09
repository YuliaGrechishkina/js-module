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
})({"cycles.js":[function(require,module,exports) {
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

//export const cyclesHomework = () => {
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
  var maxNumber = 100;

  while (guessNumber) {
    var N = minNumber + (maxNumber - minNumber) / 2;

    var _guessNumber = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E >, < \u0438\u043B\u0438 = ".concat(N));

    if (_guessNumber == "<") {
      maxNumber = N - 1;
    } else if (_guessNumber == ">") {
      minNumber = N + 1;
    } else if (_guessNumber == "=") {
      alert("\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430. \u0412\u044B \u0437\u0430\u0433\u0430\u0434\u0430\u043B\u0438 \u0447\u0438\u0441\u043B\u043E ".concat(N));
    }
  }
}; //};
},{}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56665" + '/');

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
},{}]},{},["../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","cycles.js"], null)
//# sourceMappingURL=/cycles.87470b7e.js.map