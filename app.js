//console.log(document.title);
//console.log(document.body);
//document.title=123;
//console.log(document.title);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='items';
//console.log(document.forms[0]);
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML="<h3>Hello</h3>"
//console.log(headerTitle);
//var header=document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000';

//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent='Hello';
//items[1].style.fontWeight='bold'
//items[1].style.backgroundColor='yellow';

//for(var i=0;i<items.length;i++)
//{
  //  items[i].style.backgroundColor='violet';

//}
//var li=document.getElementsByTagName('li');

//console.log(li);
//li[1].textContent='Hello';
//li[1].style.fontWeight='bold'
//li[1].style.backgroundColor='yellow';
//li[2].style.backgroundColor='green';
//for(var i=0;i<li.length;i++)
//{
   // li[i].style.fontWeight='bold';

//}

//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #000';


//var input=document.querySelector('input');
//input.value='hello'

//var item=document.querySelector('.list-group-item');
//item.style.color='red';
//var lastitem=document.querySelector('.list-group-item:last-child'
//);
//lastitem.style.color='blue'

//var second=document.querySelector('.list-group-item:nth-child(2)');
//second.style.color='yellow';


//var itemList= document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='red';
//console.log(itemList.parentNode.parentNode.parentNode);

//Create Element

//Create a div

var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText=document.createTextNode('Hello World');

newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);

var button=document.getElementById('button').addEventListener('click',function(){
  console.log("123");
})


