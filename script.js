'use strict';

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const bookTitle = document.querySelectorAll('a');
const adv = document.querySelector('.adv');
const list = document.querySelectorAll('ul');
const listItem = document.querySelectorAll('li');
const newListItem = document.createElement('li');

// Меняем порядок книг
books.append(book[2]);
book[1].after(book[0]);
book[3].before(book[4]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
bookTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';
adv.remove();
newListItem.textContent = 'Глава 8: За пределами ES6';

// Меняем порядок в книге 2
list[0].prepend(listItem[1]);
listItem[0].after(listItem[3]);
listItem[3].after(listItem[6]);
listItem[9].after(listItem[2]);
listItem[4].before(listItem[8]);

// Меняем порядок в книге 5
list[5].prepend(listItem[47]);
listItem[46].after(listItem[55]);
listItem[55].after(listItem[49]);
listItem[49].after(listItem[50]);
listItem[54].before(listItem[51]);

// Добавляем 8 главу в 6 книгу
listItem[25].after(newListItem);
