(function(d){
  class Menu {
    constructor(options){
    this._element = options.element;
    this._title = options.title;
    this._items = options.items;
  }
}
  Object.defineProperties(Menu.prototype, {
    'title': {
      get: function() {
        return this._title;
      },
      set: function(title) {
        this._title = title;
      }
    },
    'items': {
      get: function() {
        return this._items;
      },
      set: function(items) {
        this._items = items;
      }
    },
    'init': {
      value: function() {
        var title = d.createElement('h4'),
            list = d.createElement('ul');
        list.className = 'menu';
        this._element.innerHTML = '';
        title.textContent = this._title;
        this._items.forEach(e => {
          var item = d.createElement('li');
          item.textContent = e;
          list.appendChild(item);
        });
        this._element.appendChild(title);
        this._element.appendChild(list);
      }
    },
    'add': {
      value: function(elem) {
        this._items = this._items.concat(elem);
        var item = d.createElement('li');
        item.textContent = elem;
        this._element.querySelector('.menu').appendChild(item);
      }
    },
    'remove': {
      value: function () {
        if (this._element.querySelector('.menu').children.length){
          this._element.querySelector('.menu').children[this._element.querySelector('.menu').children.length-1].remove();
          this._items.pop();
        }
      }
    },
    'toggle': {
      value: function() {
        this._element.querySelector('.menu').classList.toggle('hidden');
      }
    },
    'open': {
      value: function() {
        if (this._element.querySelector('.menu').classList.contains('hidden'))
          this._element.querySelector('.menu').classList.remove('hidden');
      }
    },
    'close': {
      value: function() {
        if (!this._element.querySelector('.menu').classList.contains('hidden'))
          this._element.querySelector('.menu').classList.add('hidden');
      }
    },
  });

  var menu = new Menu({
    element: d.getElementById('test'),
    title: 'Сладости',
    items: [
      "Пончик",
      "Пирожное",
      "Шоколадка",
      "Мороженое"
    ]
  });
  menu.init();
  d.body.addEventListener('click',function(e) {
    e.target.id === 'menu-toggle' ? menu.toggle() :
    e.target.id === 'menu-open' ? menu.open() :
    e.target.id === 'menu-close' ? menu.close() :
    e.target.id === 'remove-item' ? menu.remove() :
    (e.target.id === 'add-item' &&
     d.getElementById('field-adding').value.trim() !== '') ?
      (menu.add(d.getElementById('field-adding').value.trim()),
       d.getElementById('field-adding').value = '') : false;
  });
})(document);
