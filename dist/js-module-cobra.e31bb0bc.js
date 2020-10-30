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
})({"index.js":[function(require,module,exports) {
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

document.getElementById("SayYourName").onclick = function SayYourName() {
  var name = prompt("Ваше имя?", "");
  alert("Привет, " + name);
};

document.getElementById("SayYourBthYear").onclick = function SayYourBthYear() {
  var today = 2020;
  var BthYear = prompt("Ваш год рождения?");
  var age = today - BthYear;
  alert("Вам " + age);
};

document.getElementById("SquareSide").onclick = function SquareSide() {
  var SquareSide = prompt("Сторона квадрата?", "");
  var perimeter = SquareSide * 4;
  alert("Периметр квадрата " + perimeter);
};

document.getElementById("CircleRadius").onclick = function CircleRadius() {
  var CircleRadius = prompt("Радиус окружности?", "");
  var CircleArea = 3.1415926535 * (CircleRadius * CircleRadius);
  alert("Радиус окружности " + CircleArea);
};

document.getElementById("Travel").onclick = function Travel() {
  var distance = prompt("Расстояние в км между двумя городами?", "");
  var hours = prompt("За сколько часов зотите добраться?", "");
  var speed = distance / hours;
  alert("Если хотите успеть вовремя,едьте со скоростью " + distance + " км в час");
};

document.getElementById("CurrencyConverter").onclick = function CurrencyConverter() {
  var crossCourse = 0.85;
  var USD = prompt("Введите сумму в долл. США");
  var EURO = USD * crossCourse;
  alert("За Ваши доллары Вы можете получить " + EURO + " евро");
};

document.getElementById("largeFlashDrive").onclick = function largeFlashDrive() {
  var largeFlashDrive = prompt("Объем Вашей флешкив Гб?", "");
  var fileSize = 820;
  var numberFiles = largeFlashDrive * 1000 / fileSize;
  alert("На Вашу флешку поместится " + numberFiles + " файлов размером в 820 Мб");
};

document.getElementById("chocolate").onclick = function chocolate() {
  var money = prompt("Сколько денег вы готовы отдать за шоколад?", "");
  var price = prompt("А сколько стоит 1 шоколадка?", "");
  var amount = money / price;
  var change = money % price;

  if (amount > 1) {
    alert("Вам хватает на " + amount + " плитки шоколада");
  } else {
    alert("К сожалению, с таким финансовым сосеянием, Вы останетесь без сладкого");
  }
};

document.getElementById("numbers").onclick = function numbers() {
  var number = prompt("Пожалуйста,ведите трёхзначное число", "");
  var reverse = 0;

  while (number > 0) {
    var digit = number % 10;
    reverse = (_readOnlyError("reverse"), reverse * 10 + digit);
    number = (_readOnlyError("number"), parseInt(number / 10));
  }

  alert("Ваше число наоборот " + reverse);
};

document.getElementById("deposit").onclick = function deposit() {
  var deposit = prompt("Пожалуйста,ведите сумму, которую планируете положить на депозит", "");
  var interestRate = 0.05;
  var accruedInterest = deposit * interestRate * 61 / 365.242;
  alert("Сумма начисленных процентов за 2 месяца составит " + accruedInterest);
}; //////////////////////////////////////////////////


document.getElementById("age").onclick = function age() {
  var age = prompt("Сколько Вам лет?", 0);

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
};

document.getElementById("guessTheNumber").onclick = function guessTheNumber() {
  var number = prompt("Введите число от 0  до 9", 0);

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
};

document.getElementById("threeDigitNumber").onclick = function threeDigitNumber() {
  var threeDigitNumber = prompt("Введите трехзначное число", "");
  var threeDigitNumber1 = parseInt(threeDigitNumber / 100);
  var threeDigitNumber2 = parseInt(threeDigitNumber / 10) % 10;
  var threeDigitNumber3 = threeDigitNumber % 10;
  if (threeDigitNumber1 === threeDigitNumber2 || threeDigitNumber2 === threeDigitNumber3 || threeDigitNumber1 === threeDigitNumber3) alert("Найдено совпадение цифр");else alert("cовпадений не найдено");
};

document.getElementById("leapYear").onclick = function leapYear() {
  var year = prompt("Введите год", "");

  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        alert("Год  " + year + " не високосный");
      } else alert("Год  " + year + " не високосный");
    } else alert("Год  " + year + " високосный");
  }

  alert("Год  " + year + " не високосный");
};

document.getElementById("palindrome").onclick = function palindrome() {
  var str = prompt("Введите число", "");
  var j = 0,
      le = str.length - 1,
      pal = true;

  while (j <= le - j) {
    pal = pal && str.charAt(j) == str.charAt(le - j);
    j++;
  }

  alert('Введённое число ' + str + (pal ? ' ' : ' не ') + 'является палиндромом');
};

document.getElementById("CurrenciesConverter").onclick = function CurrenciesConverter() {
  var USD = prompt("Введите сумму в долл. США");
  var currency = prompt("Выберите валюту конвертации: EUR - 1, UAN - 2 или AZN - 3");

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
};

document.getElementById("discount").onclick = function discount() {
  var purchaseAmount = prompt("Введите сумму покупки");

  if (purchaseAmount >= 0 && purchaseAmount < 200) {
    alert("Извините, на такую суму скидка не предусмотрена");
  } else if (purchaseAmount >= 200 && purchaseAmount < 300) {
    alert("Ваша скидка = 3%. " + " Сумма к оплате " + (purchaseAmount - purchaseAmount * 0.03));
  } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    alert("Ваша скидка = 5%. " + " Сумма к оплате " + (purchaseAmount - purchaseAmount * 0.05));
  } else if (purchaseAmount >= 500) {
    alert("Ваша скидка = 7%. " + " Сумма к оплате " + (purchaseAmount - purchaseAmount * 0.07));
  }
};

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
};

document.getElementById("interview").onclick = function interview() {
  var firstQuestion = prompt("Куда на курортных пляжах просят не заплывать отдыхающих? 1 - За горизонт. 2 -  За буйки. 3 - В камыши.");
  var secondQuestion = prompt("При падении чего принято загадывать желание? 1 - Температуры. 2 -  Курса гривны. 3 - Звезды.");
  var thirdQuestion = prompt("Какое из этих животных чаще всего подвержено бреду? 1 - Сивая кобыла. 2 -  Лапчатый гусь. 3 - Дареный конь.");
  var score = 0;

  if (firstQuestion == 2) {
    score += 2;
  }

  ;
  if (secondQuestion == 3) score += 2;
  if (thirdQuestion == 1) score += 2;
  alert("Поздравляем, Вы набрали " + score + " баллов");
};

document.getElementById("сalendar").onclick = function сalendar() {
  var date = prompt("Введите дату (день - месяц - год)");
  date = date.split('-');
  var oldDate = new Date(date[2], date[1] - 1, date[0]);
  oldDate.setDate(oldDate.getDate() + 1);
  alert(oldDate);
};
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60521" + '/');

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
},{}]},{},["../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-module-cobra.e31bb0bc.js.map