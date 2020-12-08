export const DOM = () => {

    //Создать страницу, которая выводит нумерованный список песен:
    document.getElementById("listOfSongs").onclick = function listOfSongs() {
        let playList = [
            {
                author: "LED ZEPPELIN",
                song: "STAIRWAY TO HEAVEN"
            },
            {
                author: "QUEEN",
                song: "BOHEMIAN RHAPSODY"
            },
            {
                author: "LYNYRD SKYNYRD",
                song: "FREE BIRD"
            },
            {
                author: "DEEP PURPLE",
                song: "SMOKE ON THE WATER"
            },
            {
                author: "JIMI HENDRIX",
                song: "ALL ALONG THE WATCHTOWER"
            },
            {
                author: "AC/DC",
                song: "BACK IN BLACK"
            },
            {
                author: "QUEEN",
                song: "WE WILL ROCK YOU"
            },
            {
                author: "METALLICA",
                song: "ENTER SANDMAN"
            }
        ];
const ul = document.createElement("ul");
ul.style.cssText = 'color: orangered; width: 200px; height: 550px; text-align: center; font-weight: bold; margin-bottom: 5px; ';
const mainDiv = document.getElementById("songs");
mainDiv.append(ul);
for (let i in playList) {
  const li = document.createElement("li");
  const pBtn = document.createElement("p");
  pBtn.append(playList[i].author);
  pBtn.append(" : ");
  pBtn.append(playList[i].song);
  li.append(pBtn);
  ul.append(li);
      };
        };

//Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
//На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. 
//При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
document.getElementById("modalWindow").onclick = function modalWindow() {
const mainDiv = document.getElementById("open");
const btn = document.createElement("button");
const p = document.createElement("p");
p.textContent = "Открыть";
btn.append(p);
mainDiv.append(btn);
btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "modal__div");
  const p = document.createElement("p");
  p.textContent = `Какой-то текст, ничего интересного, нажмите "Закрыть"`;
  p.style.cssText = 'color: orangered; font-weight: bold; margin-bottom: 5px; ';
  div.append(p);
  const innerBtn = document.createElement("button");
  const innerBtnP = document.createElement("p");
  innerBtnP.textContent = "Закрыть";
  innerBtn.append(innerBtnP);
  div.append(innerBtn);
  mainDiv.append(div);
  btn.disabled = true;
  innerBtn.addEventListener("click", () => {
    div.remove();
    btn.disabled = false;
  });
});
};

// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
document.getElementById("trafficLight").onclick = function trafficLight() {
    document.getElementById('showTrafficLight').style.display = "block";
       
    const lights = document.querySelector('#lights');
    const redCircle = document.querySelectorAll('.circle')[0];
    const yellowCircle = document.querySelectorAll('.circle')[1];
    const greenCircle = document.querySelectorAll('.circle')[2];
        
    lights.addEventListener('click', () => {
              if (redCircle.classList.contains('circle--red')) {
                redCircle.classList.remove('circle--red');
                yellowCircle.classList.add('circle--yellow');
            } else if (yellowCircle.classList.contains('circle--yellow')) {
                yellowCircle.classList.remove('circle--yellow');
                greenCircle.classList.add('circle--green');
            } else if (greenCircle.classList.contains('circle--green')) {
                greenCircle.classList.remove('circle--green');
                redCircle.classList.add('circle--red');
            }
         } );
        };
   
};
