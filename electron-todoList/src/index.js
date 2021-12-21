import deleteComponent from "./component/deleteComponent.js";
import ButtonComponent from "./component/buttonComponent.js";
import AddComponent from "./component/addComponent.js";

const $ul = document.querySelector("ul");
const $form = document.querySelector("form");
const $Button = new ButtonComponent("submit", "clear");
const $clear = document.querySelector("#clear");

function init() {
  $form.addEventListener("submit", (e) => {
    new AddComponent($Button.addToDo(e));
  });
  $clear.addEventListener("click", (e) => $Button.clearTodoList(e));
  $ul.addEventListener("click", (e) => {
    new deleteComponent(e);
  });
}
init();