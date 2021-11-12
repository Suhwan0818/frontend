// export default function deleteOrCheck(e) {
//   let remove = e.target.parentNode;
//   let parentNode = remove.parentNode;
//   parentNode.removeChild(remove);
// }

export default class deleteOrCheck {
  constructor(e) {
    if (e.target.className === "delete") {
      this.deleteToDo(e);
    } else {
      this.checkToDo(e);
    }
  }

  deleteToDo(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }

  checkToDo(e) {
    const todo = e.target.nextSibling;
    if (e.target.checked) {
      todo.style.color = "#dddddd";
    } else {
      todo.style.color = "#000000";
    }
  }
}
