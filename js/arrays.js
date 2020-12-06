export const arrays = () => {
//Создать массив «Список покупок». 
//Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
//Написать несколько функций для работы с таким массивом.
//Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
//Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
//необходимо увеличивать количество в существующей покупке, а не добавлять новую.
//Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
document.getElementById("shoppingList").onclick = function shoppingList() {
  let shoppingList = [{
        name: "Апельсин",
        quantity: 4,
        bought: true,
           },
    {
        name: "Яблоко",
        quantity: 5,
        bought: false,
    },
    {
        name: "Арбуз",
        quantity: 1,
        bought: false,
           },
    {
        name: "Груша",
        quantity: 2,
        bought: true,
    },
    {
        name: "Лимон",
        quantity: 3,
        bought: false,
           },
];

function displayingShoppingList(array) {
    let sortedList = "";
    array.sort((a, b) =>
      a.bought === b.bought ? 0 : a.bought ? 1 : -1
    );
    for (let i of array) {
      if (i.bought === false) {
        i.bought = "нужно купить";
      }
      if (i.bought === true) {
        i.bought = "куплено";
      }
      sortedList += `${i.name}, ${i.quantity} шт., ${i.bought}\n`;
    }
    return sortedList;
  }
  alert(displayingShoppingList(shoppingList));


  function addingPurchase(array) {
    const newPurchase = prompt('Введите название продукта', '');
    const amount = +(prompt('Введите нужное количество', 2));
    let statusBought = null;
    for (let i = 0; i < array.length; i++) {
      if (newPurchase === i.name) {
        statusBought = i;
    };
      };
        if (statusBought === null) {
            return shoppingList.push({
              name: newPurchase,
              quantity: amount,
              bought: true,
            });
          } else {
            array[Number(statusBought)].quantity -= amount;
          }
          if (array[Number(statusBought)].quantity <= 0) {
            return (array[Number(statusBought)].bought = true);
          } else if (array[Number(statusBought)].quantity > 0 && statusBought !== null) {
            return (array[Number(statusBought)
            ].bought += ` (${amount} уже куплено)`);
          }
        }
        addingPurchase(shoppingList);
    alert(displayingShoppingList(shoppingList)); 
 };


 //Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
//Распечатка чека на экран;
//Подсчет общей суммы покупки;
//Получение самой дорогой покупки в чеке;
//Подсчет средней стоимости одного товара в чеке.
document.getElementById("checkInTheStore").onclick = function checkInTheStore() {
    let check = [{
        name: "Апельсин",
        quantity: 4,
        price: 2,
           },
    {
        name: "Яблоко",
        quantity: 5,
        price: 3,
    },
    {
        name: "Арбуз",
        quantity: 1,
        price: 4,
           },
    {
        name: "Груша",
        quantity: 2,
        price: 1,
    },
    {
        name: "Лимон",
        quantity: 3,
        price: 2,
           },
];

function displayingCheckInTheStore(array) {
    let displayingCheck = "";
    for (let i of array) {
        displayingCheck += `${i.name}, ${i.quantity}шт. : ${i.price} грн./шт.\n`;
    }
    return displayingCheck;
  }
  alert(displayingCheckInTheStore(check));

function totalPurchase(array) {
    let displayingCheck = "";
    let purchase = 0;
    for (let i = 0; i < array.length; i++) {
        let amount = array[i].quantity * array[i].price;
        displayingCheck += `${array[i].name} * ${array[i].quantity}шт. = ${amount} грн.\n`;
        purchase += array[i].quantity * array[i].price;
    }
    displayingCheck += `Всего: ${purchase}грн.`;
    return displayingCheck;
}
alert(`Общая сумма покупки в чеке:\n${totalPurchase(check)}`);

function theMostExpensivePurchase(array) {
    let displayingCheck = "";
    let purchase = 0;
    let theMostExpensive = array[0];
    for (let i = 0; i < array.length; i++) {
        let amount = array[i].quantity * array[i].price;
        displayingCheck += `${array[i].name} * ${array[i].quantity}шт. = ${amount} грн.\n`;
        purchase += array[i].quantity * array[i].price;
        if (
            array[i].price * array[i].quantity >
            theMostExpensive.price * theMostExpensive.quantity
        ) {
            theMostExpensive = array[i];
        }
    }
    displayingCheck += `Всего: ${purchase}грн.\n`;
    displayingCheck += `Самая дорогая покупка: ${theMostExpensive.name} - ${
        theMostExpensive.quantity * theMostExpensive.price
    }грн.\n`;
    return displayingCheck;
}
alert(theMostExpensivePurchase(check));

function averageCostProduct(array) {
    let displayingCheck = "";
    let purchase = 0;
    let totalQuantity = 0;
    let averageCost = 0;
    for (let i = 0; i < array.length; i++) {
        let amount = array[i].quantity * array[i].price;
        displayingCheck += `${array[i].name} * ${array[i].quantity}шт. = ${amount} грн.\n`;
        purchase += array[i].quantity * array[i].price;
        totalQuantity += array[i].quantity;
        averageCost = purchase / totalQuantity;
    }
    displayingCheck += `Всего: ${purchase}грн.\n`;
    displayingCheck += `Средняя стоимость товара в чеке: ${averageCost}грн.\n`;
    return displayingCheck;
}
alert(averageCostProduct(check));
};


//Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
//Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
//Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() 
//в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
document.getElementById("arrayOfStyles").onclick = function arrayOfStyles() {
    let cssStyles = [{
        name: "color",
        value: "green",
                 },
    {
        name: "font-size",
        value: "44px",
           },
    {
        name: "font-weght",
        value: "900",
                 },
    {
        name: "font-style",
        value: "italic",
          },
    {
        name: "text-decoration",
        value: "underline",
                  },
{
        name: "text-transform",
        value: "uppercase",
                  },
{
        name: "text-align",
        value: "center",
                             },

];

const displayingCssStyles = (array, text) => {
    let addStyle = `<p style="`;
    for (let i of array) {
        addStyle += `${i.name}: ${i.value};\n`;
    }
    addStyle += `"> ${text} </p>`;
    document.write(addStyle);
}
displayingCssStyles(cssStyles, 'Hello, world');
};

//Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. 
//Написать несколько функций для работы с ним^
//Вывод на экран всех аудиторий;
//Вывод на экран аудиторий для указанного факультета;
//Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
//Функция сортировки аудиторий по количеству мест;
//Функция сортировки аудиторий по названию (по алфавиту).
document.getElementById("audience").onclick = function audience() {
    let audienceSeats = [{
        name: 1,
        seats: 5,
        faculty: "Юристы"
                 },
{
        name: 2,
        seats: 10,
        faculty: "Географы"
                 }, 
 {
        name: 3,
        seats: 15,
        faculty: "Биологи"
                },                         
{
        name: 4,
        seats: 20,
        faculty: "Математики"
                }, 
];

const displayingAudiences = (array) => {
    let allAudiences = '';
    for(let i in array) {
        allAudiences+=`${array[i].faculty}: аудитория ${array[i].name} , мест ${array[i].seats}\n`;
    }
    return allAudiences;
  }
  alert(displayingAudiences(audienceSeats));

  
  const facultyName = +prompt("Введите число, соответствующее Вашему факультету: 1- Юристы, 2 - Географы, 3 - Биологи, 4 - Математики", "");
  let yourFacultyAudience = audienceSeats.find (item=>item.name == facultyName);
 alert (`Ваша аудитория:  ${yourFacultyAudience.name}`)
    
 const sortingBySeats = (array) => {
    array.sort((a, b) => a.seats > b.seats ? 1 : -1);
    let yourSeats = '';
    for (let i of array) {
        yourSeats += `${i.faculty}: аудитория  ${i.name} на (${i.seats} мест)\n`;
    }
    return yourSeats;
}
alert(sortingBySeats(audienceSeats));

const sortingByAudienceName = (array) => {
    array.sort((a, b) => a.name > b.name ? 1 : -1);
    let result = '';
    for (let i of array) {
        result += `${i.faculty}: аудитория - ${i.name} на (${i.seats} мест)\n`;
    }
    return result;
}
alert(sortingByAudienceName(audienceSeats));
};
}; 




