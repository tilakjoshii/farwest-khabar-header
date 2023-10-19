
// for DARK MODE

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


let menuicon = document.querySelector('.hem');
let clk = document.querySelector('.clk');
let cross = document.querySelector('.show');
let navbar = document.querySelector('.navbar1');
clk.onclick=()=>{
    cross.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let clk1 = document.querySelector('.clk1');
clk1.onclick=()=>{
    cross.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let clk2 = document.querySelector('.clk2');
let dropdown1 = document.querySelector('.drop1');
clk2.onclick=()=>{
    dropdown1.classList.toggle('block');
}
let clk3 = document.querySelector('.clk3');
let dropdown2 = document.querySelector('.drop2');
clk3.onclick=()=>{
    dropdown2.classList.toggle('block');
}