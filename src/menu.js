class Menu {
  constructor(options) {
    let elem;

    function getElem() {
      if (!elem) render();
      return elem;
    }

    function render() {
      elem = document.createElement('div');
      elem.className = "menu";

      const titleElem = document.createElement('span');
      elem.appendChild(titleElem);
      titleElem.className = "title";
      titleElem.textContent = options.title;

      elem.onmousedown = function() {
        return false;
      };

      elem.onclick = function(event) {
        if (event.target.closest('.title')) {
          toggle();
        }
      }

    }

    function renderItems() {
      const items = options.items || [];
      const list = document.createElement('ul');
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
      elem.appendChild(list);
    }

    function open() {
      if (!elem.querySelector('ul')) {
        renderItems();
      }
      elem.classList.add('open');
    };

    function close() {
      elem.classList.remove('open');
    };

    function toggle() {
      if (elem.classList.contains('open')) close();
      else open();
    };

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
  }
}
