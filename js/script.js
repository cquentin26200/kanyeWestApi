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
  li.style.padding = "2rem";
  li.style.border = "1px solid black";
  ul.appendChild(li);
  const allLi = document.querySelectorAll("li");
         allLi.filter(function (e) {
             console.log(e)
         })


  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.marginLeft = "36.7rem";
  li.appendChild(div);

  const up = document.createElement("button");
  up.innerHTML = "UP";
  div.appendChild(up);

  const down = document.createElement("button");
  down.innerHTML = "DOWN";
  div.appendChild(down);
}

button.addEventListener("click", useApi);
