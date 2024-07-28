const newCreate = document.querySelector('.new');
const listInput = document.querySelector('.list-input');

 newCreate.addEventListener('click',()=>{
     let newElement = document.createElement('li');
     newElement.appendChild(listInput);
   //  newElement.classList.add('')
 })