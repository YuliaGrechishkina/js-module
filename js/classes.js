
export const classes = () => {
//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//поле, хранящее радиус окружности;
//get-свойство, возвращающее радиус окружности;
//set-свойство, устанавливающее радиус окружности;
//get-свойство, возвращающее диаметр окружности;
//метод, вычисляющий площадь окружности;
//метод, вычисляющий длину окружности.
//Продемонстрировать работу свойств и методов. 
    document.getElementById("circleClass").onclick = function circleClass() {        
        class Circle {
            constructor(radius) {
                this.radius = radius;
            }

            get circleRadius() {
                return this.radius;
            }
            set circleRadius(newRadius) {
                this.radius = newRadius;
            }
            get circleDiameter() {
                return this.radius * 2;
            }
            circleArea() {
                return 3.14159265359 * (this.radius**2);
            }
            circleLenght() {
                return 3.14159265359 * this.circleDiameter;
            }
        }
        const circle = new Circle(4);
        const changeRadius = +prompt(`Введите радиус окружности, см.`, "4");
        circle.circleRadius = changeRadius;
        alert(` Длина окружности ${changeRadius} см.\n Диаметр окружности = ${circle.circleDiameter.toFixed(2)} см.\n Площадь окружности = ${circle.circleArea().toFixed(2)} см.\n Длина окружности = ${circle.circleLenght().toFixed(2)} см.`);
    };


//Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
//поле, которое хранит цвет маркера;
//поле, которое хранит количество чернил в маркере (в процентах);
//метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
//Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
//Продемонстрировать работу написанных методов. 
document.getElementById("markerClass").onclick = function markerClass() { 
    class Marker {
        constructor(_color, _ink) {//где правильно начинать наименование с _? this._color - защищенное?
          this.color = _color;
          this.ink = _ink;
        }
        print(text) {
          console.log(text.length);
          let styles = `color: ${this.color}`;
          let textLength = Math.floor((100 / 0.5) * this.ink);
          let spaces = 0;
          for (let i = 0; i < textLength; i++) {
            if (text[i] == " ") {
              spaces++;
            }
          }
          text = text.substr(0, textLength + spaces);
          console.log(textLength);
          document.write(`<p style= "${styles}">${text}</p>`);
        }
      }
      let  redMarker = new Marker("red", 0.9);
      let greenMarker = new Marker("green", 0.5);
     let yellowMarker = new Marker("yellow", 0.7);
      greenMarker.print(
        "А вы знаете, что первым IT-специалистом была женщина - британка Ада Лавлейс? Именно она в 19 веке написала алгоритм для аналитического агрегатора, - так сказать, предка современного компьютера."
      );
      redMarker.print(
        " Эта машина была инновацией в свое время и могла решить уравнение Бернулли, то есть высчитать закон сохранения энергии, находящейся в движении жидкости."
      );
      yellowMarker.print("Ада, не зная в то время, что начинает огромное it-движение, разработала последовательность операций для решения задачи, что, по сути, и является написанием программы.");
      class FillMarker extends Marker {
        constructor(_color, _ink, _newInk) {
          super(_color, _ink);
          this.newInk = _newInk;
        }
        print(text) {
          console.log(text.length);
          let styles = `color: ${this.color}`;
          let textLength = Math.floor((100 / 0.5) * (this.ink + this.newInk));
          let spaces = 0;
          for (let i = 0; i < textLength; i++) {
            if (text[i] == " ") {
              spaces++;
            }
          }
          text = text.substr(0, textLength + spaces);
          console.log(textLength);
          document.write(`<p style= "${styles}">${text}</p>`);
        }
      }
      let blueMarker = new FillMarker("blue", 0.4, 0.1);
      blueMarker.print("Это говорит о том, что программирование подвластно любому человеку вне зависимости от пола, было бы желание.");
     
};


//Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
//Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
document.getElementById("employeeClass").onclick = function employeeClass() { 
  const mainDiv = document.getElementById("content");
  const tableDiv = document.createElement("div");
  tableDiv.setAttribute("id", "content__tableDiv");
  tableDiv.className = "content__tableDiv";
  const tableTag = document.createElement("table");
  tableTag.setAttribute("id", "content__table");
  tableTag.className = "content__table";

  tableDiv.append(tableTag);
  mainDiv.append(tableDiv);

    class Employee {
      constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
      }
    }
    const arrEmployee = [
      new Employee("Фродо Бэггинс", "Хоббит", 6000),
      new Employee("Сэм Гэмджи", "Помощник хоббита", 5000),
      new Employee("Гэндальф", "Волшебник", 5000),
      new Employee("Гимли", "Гном", 4000),
      new Employee("Леголас", "Эльф", 4000),
      new Employee("Арагорн", "Странник", 3000),
      new Employee("Саурон", "Тёмный Властелин", 6000),
      new Employee("Голлум ", "Просто прелесть", 4000),
    ];
    class EmpTable {
      constructor(arr) {
        this.arr = arr;
      }
      getHtml() {
        const table = document.getElementById("content__table");
        const array = this.arr;
        const head = document.createElement("tr");
        head.setAttribute("style", "font-size: 18px;");
        const th1 = document.createElement("th");
        th1.textContent = "Имя";
        const th2 = document.createElement("th");
        th2.textContent = "Должность";
        const th3 = document.createElement("th");
        th3.textContent = "З/П($)";
        head.append(th1);
        head.append(th2);
        head.append(th3);
        table.append(head);
        for (let i in array) {
          let tr = document.createElement("tr");
          table.append(tr);
          for (let j in array[i]) {
            let td = document.createElement("td");
            td.textContent = array[i][j];
            tr.append(td);
            td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
          }
        }
        table.setAttribute("border", "2");
        table.setAttribute("bordercolor", "orangered");
        table.setAttribute("width", "100%");
        table.setAttribute("style", "margin: auto; background-color: lightgrey; margin-bottom: 30px;");
      }
    }
    const tableObj = new EmpTable(arrEmployee);
    tableObj.getHtml();
    
};

};


