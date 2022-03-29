"use strict";

const inp = document.querySelector("#inp");

const button = document.querySelector(".add");
const box = document.querySelector(".box");

const qoshish = document.querySelector(".qoshish");
const delet = document.querySelector(".delete");

button.addEventListener("click", function () {
  let inpval = inp.value;
  // console.log(inpval);

  let create = document.createElement("div");
  console.log(create);
  create.classList.add("create");

  box.append(create);
  create.innerHTML = `  <div class="con">
  <p class="pqosh">${inpval}</p>
  <button class="delet">delete</button>
</div>`;
});
