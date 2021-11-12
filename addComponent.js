export default class AddComponent {
  constructor(content) {
    if (typeof content !== "undefined") {
      this.content = content;
      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      li.innerHTML = `<span class="delete">x</span><input class="checkbox" type="checkbox"><label>${content}</label>`;
      ul.appendChild(li);
      document.querySelector(".doListText").value = null;
    }
  }
}
