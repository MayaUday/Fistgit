document.title = 'title';
console.log(document.head);
console.log(document.body);

// GETELEMENTBYID //
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

// GETELEMNENTBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
items[1].style.fontWeight = 'bold';
items[1].style.color = 'green'; // 2 nd element in the list to font color green
items[2].style.backgroundColor = 'green'; //3 rd element in the list to green background color

for(var i=0;i<items.length;i++){
         items[i].style.fontWeight = 'bold';
}

// GETELEMENTBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
//console.log(items[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.color = 'green';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = 'lightblue';
    li[i].style.fontWeight = 'bold';
}

// QUERYSELECTOR //

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green'; //changing 2nd item to green background color
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none'; //Making 3rd item invisible

// QUERYSELECTORALL //
  var listitems = document.querySelectorAll('#items li');
  listitems[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}


