//****--- navbar ---****//
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

//* open menu  *//
openMenu.addEventListener("click", () => {
  menu.classList.add("open");
});

//* close menu  *//
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

//* scroll sticky nav  *//
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  scrollY > 70 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
})

//****--- prodouct card ---****//
const prodouctData = [
  {
    title: "Lemon Juice",
    price: "5.00",
    star: "4.8",
    img: "./images/juice-3.png",
  },
  {
    title: "Apple Juice",
    price: "6.00",
    star: "4.5",
    img: "./images/juice-4.png",
  },
  {
    title: "Mango Juice",
    price: "4.00",
    star: "4.6",
    img: "./images/juice-5.png",
  },
];

const containerCard = document.getElementById("cards-container");

prodouctData.map((item) => {
  const prodouctCard = `
  <div class="prodouct-card" data-aos="zoom-in">
            <div class="prodouct-img">
              <img src=${item.img} alt="">
            </div>
            <div class="prodouct-content">
              <h3>${item.title}</h3>
              <span>$${item.price}</span>
              <span class="card-star">${item.star} <i class='bx bxs-star'></i></span>
              <button class="contained-btn">
              Add to Card</i>
            </button>
            </div>
          </div>
  `;
  containerCard.innerHTML += prodouctCard
});
