"use strict";

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");

let a = Math.floor(Math.random() * 30);
let b = Math.floor(Math.random() * 30);

function func() {
  box1.textContent = a;
  box2.textContent = b;
}
func();

btn.addEventListener("click", function () {
  let inpval = input.value;

  let qosh = a + b;
  // console.log(qosh);

  if (qosh == inpval) {
    confirm(`Tugri Topding `);
  } else {
    confirm(`Topolmading tugri Javob: ${inpval}`);
  }
});

// console.log(a, b);
