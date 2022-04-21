const body = document.body;
body.style.margin = "0";

body.innerHTML = `
<header>
<h1>kanye west</h1>
<p>welcome to the best quote app</p>
<button>add quote</button>
</header`;

const header = document.querySelector("header");
header.style.background = "#40a0ff";
header.style.textAlign = "center";
header.style.padding = "2rem";
header.style.textTransform = "uppercase";

const title = document.querySelector("header h1");
title.style.marginTop = "0";

const button = document.querySelector("header button");
button.style.textTransform = "uppercase";

const main = document.createElement("main");
main.style.maxWidth = "700px";
main.style.margin = "0 auto";
body.appendChild(main);

async function getApi() {
  return fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => data.quote);
}

getApi();

const ul = document.createElement("ul");
ul.style.listStyle = "none";
main.appendChild(ul);

async function useApi() {
  const sentence = await getApi();
  const li = document.createElement("li");
  li.classList.add("allLi");
  li.style.padding = "2rem";
  li.style.border = "1px solid black";
  ul.appendChild(li);

  const secondUl = document.createElement("ul");
  secondUl.classList.add("secondUl")
  li.appendChild(secondUl);

  const thirstUl = document.createElement("ul");
  thirstUl.style.display = "flex";
  thirstUl.style.flexDirection = "column";
  thirstUl.style.alignItems = "center";
  thirstUl.style.marginLeft = "36.7rem";
  li.appendChild(secondUl);

  const quote = document.createElement("li");
  quote.classList.add("quotes");
  secondUl.appendChild(quote);
  quote.innerHTML = sentence;  
  li.appendChild(thirstUl)

  const up = document.createElement("button");
  up.classList.add("allUp");
  up.innerHTML = "UP";
  thirstUl.appendChild(up);

  const down = document.createElement("button");
  down.innerHTML = "DOWN";
  thirstUl.appendChild(down);

  const allList = document.querySelectorAll("ul");
  allList.forEach(element => element.style.listStyle = "none");

  up.addEventListener("click", (event) => {
    let tmp = event.target.parentElement.parentElement.previousElementSibling.children[0].children[0].textContent;
    event.target.parentElement.parentElement.previousElementSibling.children[0].children[0].innerHTML = event.target.parentElement.parentElement.children[0].children[0].textContent;
    event.target.parentElement.parentElement.children[0].children[0].innerHTML = tmp;
  })

  down.addEventListener("click", (event) => {
    let tmp = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
    event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].innerHTML = event.target.parentElement.parentElement.children[0].children[0].textContent;
    event.target.parentElement.parentElement.children[0].children[0].innerHTML = tmp;
  })
  
}

button.addEventListener("click", useApi);







