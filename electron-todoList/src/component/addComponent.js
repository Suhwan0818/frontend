export default class AddComponent {
  constructor(content) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let ul = document.querySelector("ul");
    let li = document.createElement("li");

    if (typeof content !== "undefined") {
      this.content = content;
      li.innerHTML = `<input class="checkbox" type="checkbox"><label>${content}</label><button class="delete">X</button> <div class = "today">${
        month + "/" + date + " " + hours + "시 " + minutes + "분"
      }</div>`;
      ul.appendChild(li);
      document.querySelector(".doListText").value = null;
    }
  }
}
