import deleteOrCheck from "./deleteOrCheck.js";
import ButtonComponent from "./ButtonComponent.js";
import AddComponent from "./addComponent.js";

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
    new deleteOrCheck(e);
  });
}
init();
