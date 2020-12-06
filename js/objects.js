export const objects = () => {
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
//Функция для вывода на экран информации об автомобиле;
//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
 
    document.getElementById("car").onclick = function car() {
        const manufacturer = prompt(`Введите производителя автомобиля`, ``);
        const model = prompt(`Введите модель автомобиля`, ``);
        const yearOfManufacture = +prompt(`Введите год выпуска автомобиля`, 2019);
        const averageSpeed = +prompt(`Введите среднюю скорость автомобиля`, 200);
        const distance = +prompt(`Введите расстояние, которое необходимо преодолеть`, 500);
        let distanceTime = distance/averageSpeed ;
        if(distanceTime >4) {
            distanceTime = distanceTime + Math.floor(distanceTime / 4);
          };
        const showCarInformation ={
        manufacturer: `${manufacturer}`,
        model: `${model}`,
        yearOfManufacture: `${yearOfManufacture}`,
        averageSpeed: `${averageSpeed}`,
              }
      alert(`Информация об автомобиле: производитель - ${showCarInformation.manufacturer} ;
      модель - ${showCarInformation.model};
      год выпуска -  ${showCarInformation.yearOfManufacture} ;
      средняя скорость - ${showCarInformation.averageSpeed}.
      Для преодоления переданного расстояния со средней скоростью понадобится ${distanceTime} часов.`)
            };
  

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: <br>
//Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
//Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
//Функция сокращения объекта-дроби.        
 document.getElementById("WorkingWithFractions").onclick = function WorkingWithFractions() {
    const firstNumerator = +prompt(`Введите первый числитель`, 2);
    const firstDenominator = +prompt(`Введите первый знаменатель`, 4);
    const secondNumerator = +prompt(`Введите второй числитель`, 4);
    const secondDenominator = +prompt(`Введите второй знаменатель`, 8);

    let addingResult =(firstNumerator/firstDenominator)+(secondNumerator/secondDenominator);
let subtractionResult = (firstNumerator/firstDenominator)-(secondNumerator/secondDenominator);
let multiplicationResult = (firstNumerator/firstDenominator)*(secondNumerator/secondDenominator);
let divisionResult  = (firstNumerator/firstDenominator)/(secondNumerator/secondDenominator);

alert(`Результат сложения:${addingResult}; Результат вычитания: ${subtractionResult}; 
Результат умножения: ${multiplicationResult}; Результат деления: ${divisionResult} . `);
        };


//Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
//Функция вывода времени на экран;
//Функция изменения времени на переданное количество секунд;
//Функция изменения времени на переданное количество минут;
//Функция изменения времени на переданное количество часов. 
document.getElementById("WorkingWithTime").onclick = function WorkingWithTime() {
    let now = new Date();
    alert( `Сейчас ${now} `); 

    const seconds = +prompt(`Введите колличество секунд для изменения времени`, 2);
    const minutes = +prompt(`Введите колличество минут для изменения времени`, 4);
    const hours = +prompt(`Введите колличество часов для изменения времени`, 4);
    now.setSeconds(now.getSeconds() + seconds);
    now.setMinutes(now.getMinutes() + minutes);
    now.setHours(now.getHours() + hours);
alert(`Если прибавить введенные часы, минуты и секунды время будет  ${now}`)
 };
}
