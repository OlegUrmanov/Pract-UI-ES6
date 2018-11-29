class Menu {
  constructor(options) {
    this.options = options
  }

  getElem() {
    if (!this.elem) this.render();
    return this.elem;
  }

  render() {
    this.elem = document.createElement("div");
    this.elem.className = "menu";

    const titleElem = document.createElement("span");
    this.elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = this.options.title;

    this.elem.onmousedown = () => false;

    this.elem.onclick = event => {
      if (event.target.closest(".title")) {
        this.toggle();
      }
    }
  }

  renderItems() {
    const items = this.options.items || [];
    const list = document.createElement("ul");
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    this.elem.appendChild(list);
  }

  //------------ Не работает, а должно.----------

  addItems() {
    let a = document.getElementById('inputArea').value;
    const items = a;
    const li = document.createElement('li');
    li.textContent = a;
    this.elem.querySelector('ul').appendChild(li);
  }

  //-----------------------------------------------
  remove() {
    if (this.elem.querySelector('ul').children.length) {
      this.elem.querySelector('ul').children[this.elem.querySelector('ul').children.length - 1].remove();
    }
  }

  open() {
    if (!this.elem.querySelector("ul")) {
      this.renderItems();
    }
    this.elem.classList.add("open");
  }

  close() {
    this.elem.classList.remove("open");
  }

  toggle() {
    if (this.elem.classList.contains("open")) this.close();
    else this.open();
  }
}
