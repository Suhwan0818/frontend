export default class ButtonComponent {
    constructor(content, clearButton) {
      if (content == "submit") {
        this.doListText = document.querySelector("form");
        this.doListText.innerHTML += `
          <button type="submit" class="inputList">
            ${content}
          </button>`;
          this.doListText.innerHTML += `
          <button type="submit" class = "clearCss" id="clear">
            전체 삭제
          </button>`;
      }
    }
  
    addToDo(e) {
      e.preventDefault();
      let toDoValue = document.querySelector("#doListText");
      if (toDoValue.value !== "") return toDoValue.value;
    }
  
    clearTodoList(e) {
      e.preventDefault();
      const $ul = document.querySelector("ul");
      $ul.innerHTML = "";
    }
  }