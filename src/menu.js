class Menu {
  constructor(options) {
    this._element = options.element;
    this._title = options.title;
    this._items = options.items;
  }

  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }

  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
  }

  init() {
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

  add(elem) {
    this._items = this._items.concat(elem);
    const item = d.createElement('li');
    item.textContent = elem;
    this._element.querySelector('.menu').appendChild(item);
  }
  remove() {
    if (this._element.querySelector('.menu').children.length) {
      this._element.querySelector('.menu').children[this._element.querySelector('.menu').children.length - 1].remove();
      this._items.pop();
    }
  }
  toggle() {
    this._element.querySelector('.menu').classList.toggle('hidden');
  }
  open() {
    if (this._element.querySelector('.menu').classList.contains('hidden'))
      this._element.querySelector('.menu').classList.remove('hidden');
  }

  close() {
    if (!this._element.querySelector('.menu').classList.contains('hidden'))
      this._element.querySelector('.menu').classList.add('hidden');
  }
}

const menu = new Menu({

  title: 'Сладости',
  items: [
    'Торт',
    'Пончик',
    'Пирожное',
    'Шоколадка',
    'Мороженое'
  ]
});
menu.init();
d.body.addEventListener('click', e => {
e.target.id === 'menu-toggle' ? menu.toggle() :
e.target.id === 'menu-open' ? menu.open() :
e.target.id === 'menu-close' ? menu.close() :
e.target.id === 'remove-item' ? menu.remove() :
(e.target.id === 'add-item' &&
  d.getElementById('field-adding').value.trim() !== '') ?
(menu.add(d.getElementById('field-adding').value.trim()),
  d.getElementById('field-adding').value = '') : false;
})
}))(document);
