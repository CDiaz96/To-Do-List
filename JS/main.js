
let list = document.getElementById('toDo');
let clear = document.getElementById('clear');
let save = document.getElementById('save');
let remove = document.getElementById('remove');
let todolist=document.getElementById('toDo');
let itemCount=0;

save.onclick=function(){
//this function creates a new list item and adds a new to do by creating a new element
  let textValue=document.getElementById('text').value;
  let listItem=document.createElement('li');
  listItem.className='listItem';
  listItem.innerHTML=textValue;
  todolist.append(listItem);
  itemCount++;
  document.getElementById('count').innerHTML=itemCount;

}

clear.onclick=function(){
//this function is clearing the list items and reseting the Ul
 todolist.innerHTML="";
 itemCount=0;
 document.getElementById('count').innerHTML=itemCount;

}

todolist.addEventListener('click',clearListItem);
function clearListItem(event){
//declared a fuction that listens to when the list item is clicked and targets the specific item to add the CSS styling. Used https://stackoverflow.com/questions/30786154/javascript-get-clicked-element-addeventlistener
  event.target.classList.toggle("deletedItem");
  if(event.target.classList.contains("deletedItem"))
  itemCount--;
  else{
    itemCount++;
  }
  document.getElementById('count').innerHTML=itemCount;

}

remove.addEventListener('click',removeListItem);
function removeListItem(event){
  document.querySelectorAll('.listItem').forEach((item) => {
      if (item.classList.contains('deletedItem')){
        item.parentNode.removeChild(item);
      }
  });
}








//make a button
//attach it to an onclick
//find all of the items with a deleted item class using .class
//clear it out by adding the class.
