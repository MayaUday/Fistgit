document.title = 'title';
console.log(document.head);
console.log(document.body);

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');
items[1].style.fontWeight = 'bold';
items[1].style.color = 'green'; // 2 nd element in the list to font color green
items[2].style.backgroundColor = 'green'; //3 rd element in the list to green background color

for(var i=0;i<items.length;i++){
         items[i].style.fontWeight = 'bold';
}