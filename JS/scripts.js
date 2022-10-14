const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector(".price-total") 
const menuButton = document.querySelector(".m-menu") 
const menu = document.querySelector(".menu") 
let cost = 800;
let totalprice = 0;   
schemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains("booked")){
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length;
    totalprice = totalSeats * cost;
    totalPriceTag.textContent = totalprice;
    console.log();
  }
});

menuButton.addEventListener('click', ()=>{
  console.log('Клинкули по меню')
  menu.classList.toggle('is-open')
})