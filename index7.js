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

// const decrementFn = document.querySelector('[decrement]');
// const incrementFn = document.querySelector('[increment]');

// const counterValue = (value) => {
//     if (event.target.getAttribute('data-action') === 'decrement') {
//         document.querySelector('#value').textContent -= 1;
//     } else {
//         document.querySelector('#value').textContent += 1;
//     };
// };
// document.addEventListener('click', counterValue);
// document.addEventListener('click', counterValue);



//--------------------05

// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');

// inputRef.addEventListener("input", (event) => {
//     outputRef.textContent = event.target.value;
// });

//-------------------06

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










// const divi = document.querySelector('.parant')

// const box = document.createElement('p');
// box.textContent = '1';
// box.style.backgroundColor = 'red';
// box.style.display = 'inline-block';
// box.style.margin = '40px';
// box.style.padding = '40px';
// console.log(box);

// const box2 = document.createElement('p');
// box2.textContent = '2';
// box2.style.background = 'blue';
// box2.style.display = 'inline-block';
// box2.style.margin = '40px';
// box2.style.padding = '40px';
// console.log(box2);
// divi.appendChild(box);
// divi.appendChild(box2);
