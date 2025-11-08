//increments the number in a node's text
import  header  from "./header.js";
import main from "./main.js";

function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");


  const headerTag = header();

  body.appendChild(headerTag);

  const mainTag = main();
  body.appendChild(mainTag);

  const icncrementButton = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  const decrementButton = body.querySelector("#decrement");

  icncrementButton.addEventListener("click", () => {
    increment(counter);
  });
  decrementButton.addEventListener("click", () => {
    decrement(counter);  
  });
  
  return body;
}

