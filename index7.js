//----------------01

// const itemsRef = document.querySelectorAll('.item');

// console.log(`В списке ${itemsRef.length} категории`);
// console.log(itemsRef)
// itemsRef.forEach((item) =>
//     console.log(
//         `Категория: ${item.querySelector('h2').textContent}
//         Количество: ${item.querySelectorAll('li').length}`
//     )
// );


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
// let value = document.querySelector("#value");
// const decrementFn = document.querySelector('[data-action="decrement"]');
// const incrementFn = document.querySelector('[data-action="increment"]');
// let counterValue = 0;

// let decrement = () => {
//     updateData("decrement");
//     updateSpan();
// };
// let increment = () => {
//     updateData("increment");
//     updateSpan();
// };
// let updateData = (str) => {
//     if (str === "decrement") counterValue--
//     else counterValue++
// }

// decrementFn.addEventListener('click', decrement);
// incrementFn.addEventListener('click', increment);

// let updateSpan = () => {
//     value.textContent = counterValue;
// }

// //--------------------05

// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');

// inputRef.addEventListener("input", (event) => {
//     outputRef.textContent = event.target.value;
// });

// -------------------06

// const inputValid = document.querySelector("#validation-input");
// const gettingAtribute = inputValid.getAttribute("data-length");

// inputValid.addEventListener("blur", (event) => {
//     if (event.target.value.length == gettingAtribute) {
//         inputValid.classList.add("valid");
//         inputValid.classList.remove("invalid");
//     } else {
//         inputValid.classList.remove("valid");
//         inputValid.classList.add("invalid");
//     }
// })
// console.log(inputValid)


//--------------------07

// const inputRef = document.querySelector('#font-size-control');
// const spanText = document.querySelector("#text");
// inputRef.addEventListener("mouseup", (event) => {
//     spanText.style.fontSize = event.target.value + "px";
// });

