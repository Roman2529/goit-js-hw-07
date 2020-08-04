//----------------01

// const itemsRef = document.querySelectorAll('.item').length;
// console.log(`В списке ${itemsRef} категории`);


//-------------------02

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];
// const elIngredients = ingredients.map((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   return item;
// });
// document.querySelector("#ingredients").append(...elIngredients);

//------------------03

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const createGalleryEl = (image) => {
//   const elem = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   elem.appendChild(img);
//   return elem;
// };

// const createGallery = images.map((image) => createGalleryEl(image));
// document.querySelector("#gallery").append(...createGallery);

//--------------------04

const decrementFn = document.querySelector('[decrement]');
const incrementFn = document.querySelector('[increment]');

const counterValue = (value) => {
    
    if (event.target.getAttribute('data-action') === 'decrement') {
        document.querySelector('#value').textContent--;
    } else {
        document.querySelector('#value').textContent++;
    };
    return value;
};

document.addEventListener('click', counterValue);

// //--------------------05

// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');

// inputRef.addEventListener("input", (event) => {
//     outputRef.textContent = event.target.value;
// });

// -------------------06

// const inputValid = document.querySelector("#validation-input");
// inputValid.addEventListener("blur", (event) => {
//     if (event.target.value.length == inputValid.getAttribute("data-length")) {
//         inputValid.classList.add("valid");
//         inputValid.classList.remove("invalid");
//     } else {
//         inputValid.classList.remove("valid");
//         inputValid.classList.add("invalid");
//     }
// })

//--------------------07

// const inputRef = document.querySelector('#font-size-control');
// const spanText = document.querySelector("#text");
// inputRef.addEventListener("mouseup", (event) => {
//     spanText.style.fontSize = event.target.value + "px";
// })

// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);


