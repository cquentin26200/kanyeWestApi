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
body.appendChild(main);

async function getApi() {
  return fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => data.quote);
}

getApi();

const ul = document.createElement("ul");
main.appendChild(ul);

button.addEventListener("click", () => {
  const li = document.createElement("li");
  ul.appendChild(li);
});

async function useApi() {
  const sentence = await getApi();
  console.log(sentence);
}

useApi();
