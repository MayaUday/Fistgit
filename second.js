document.title = 'title';
console.log(document.head);
console.log(document.body);

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');
items[1].style.fontWeight = 'bold';
items[1].style.color = 'green';