// document.title = 'title';
// console.log(document.head);
// console.log(document.body);

// // GETELEMENTBYID //
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

// // GETELEMNENTBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// items[1].style.fontWeight = 'bold';
// items[1].style.color = 'green'; // 2 nd element in the list to font color green
// items[2].style.backgroundColor = 'green'; //3 rd element in the list to green background color

// for(var i=0;i<items.length;i++){
//          items[i].style.fontWeight = 'bold';
// }

// // GETELEMENTBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// //console.log(items[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.color = 'green';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = 'lightblue';
//     li[i].style.fontWeight = 'bold';
// }

// // QUERYSELECTOR //

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green'; //changing 2nd item to green background color
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none'; //Making 3rd item invisible

// // QUERYSELECTORALL //
//   var listitems = document.querySelectorAll('#items li');
//   listitems[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }

var itemlist = document.querySelector('#items');
// parentElement //
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement);

// lastelementchild //
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'Hello 4'
// lastchild //
console.log(itemlist.lastChild);

// firstelementchild //
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Hello 1';
// firstchild
console.log(itemlist.firstChild);

// nextsibling //
console.log(itemlist.nextSibling);

// nextelementsibling //
console.log(itemlist.nextElementSibling)

// previoussibling //
console.log(itemlist.previousSibling);

// previouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'grclassNameeen';

// createelement
var newDiv1 = document.createElement('div');
newDiv1.id = 'newDiv1';
newDiv1.className = 'newDiv1';

var newDiv2 = document.createElement('div');
newDiv2.id = 'newDiv2';
newDiv2.className = 'newDiv2';

// setAttribute //
newDiv1.setAttribute('title','New Div1');
newDiv2.setAttribute('title','New Div2');

// createtextnode //
var newDivText1 = document.createTextNode('HEllo word');
var newDivText2 = document.createTextNode('HEllo word');

// appendchild //
newDiv1.appendChild(newDivText1);
newDiv2.appendChild(newDivText2);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

var container1 = document.querySelector('div #main');
var ul = document.querySelector('div ul');

console.log(newDiv1); 
console.log(newDiv2);

container.insertBefore(newDiv1,h1);
container1.insertBefore(newDiv2,ul);




