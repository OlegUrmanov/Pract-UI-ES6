((d => {
  function Menu(options) {
    this._element = options.element;
    this._title = options.title;
    this._items = options.items;
  }
  Object.defineProperties(Menu.prototype, {
    'title': {
      get() {
        return this._title;
      },
      set(title) {
        this._title = title;
      }
    },
    'items': {
      get() {
        return this._items;
      },
      set(items) {
        this._items = items;
      }
    },
    'init': {
      value() {
        const title = d.createElement('h4');
        const list = d.createElement('ul');
        list.className = 'menu';
        this._element.innerHTML = '';
        title.textContent = this._title;
        this._items.forEach(e => {
          const item = d.createElement('li');
          item.textContent = e;
          list.appendChild(item);
        });
        this._element.appendChild(title);
        this._element.appendChild(list);
      }
    },
    'add': {
      value(elem) {
        this._items = this._items.concat(elem);
        const item = d.createElement('li');
        item.textContent = elem;
        this._element.querySelector('.menu').appendChild(item);
      }
    },
    'remove': {
      value() {
        if (this._element.querySelector('.menu').children.length){
          this._element.querySelector('.menu').children[this._element.querySelector('.menu').children.length-1].remove();
          this._items.pop();
        }
      }
    },
    'toggle': {
      value() {
        this._element.querySelector('.menu').classList.toggle('hidden');
      }
    },
    'open': {
      value() {
        if (this._element.querySelector('.menu').classList.contains('hidden'))
          this._element.querySelector('.menu').classList.remove('hidden');
      }
    },
    'close': {
      value() {
        if (!this._element.querySelector('.menu').classList.contains('hidden'))
          this._element.querySelector('.menu').classList.add('hidden');
      }
    },
  });

  const menu = new Menu({
    element: d.getElementById('test'),
    title: 'Сладости',
    items: [
      "Торт",
      "Пончик",
      "Пирожное",
      "Шоколадка",
      "Мороженое",
    ]
  });
  menu.init();
  d.body.addEventListener('click',e => {
    e.target.id === 'menu-toggle' ? menu.toggle() :
    e.target.id === 'menu-open' ? menu.open() :
    e.target.id === 'menu-close' ? menu.close() :
    e.target.id === 'remove-item' ? menu.remove() :
    (e.target.id === 'add-item' &&
     d.getElementById('field-adding').value.trim() !== '') ?
      (menu.add(d.getElementById('field-adding').value.trim()),
       d.getElementById('field-adding').value = '') : false;
  });

  // console.log(menu);
  // console.log(Object.entries(menu));
  // console.log(Object.keys(menu));
  // console.log(Object.getOwnPropertyNames(menu));
  // console.log(Object.getOwnPropertySymbols(menu));
  // console.log(Object.isExtensible(menu));
}))(document);
