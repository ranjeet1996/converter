"use strict";
const initialValue = document.querySelector("#IntialValue");
const finalValue = document.querySelector("#finalValue");
const convert = document.querySelector("#convert");
const swap = document.querySelector("#swap");
const reset = document.querySelector("#Reset");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

convert.addEventListener("click", function () {
  const Intial = initialValue.value;
  const final = finalValue.value;

  const inputvalue = input.value;
  const ans = convertBase(Intial, final, inputvalue);

  output.value = ans;
});
const swapOnClickEventHandler = () => {
  const temp = initialValue.value;
  initialValue.value = finalValue.value;
  finalValue.value = temp;
  const temp1 = input.value;
  input.value = output.value;
  output.value = temp1;
};

const resetOnClickEventHnler = () => {
  if (input.value !== "" && output.value !== "") {
    input.value = "";
    output.value = "";
  }
};

function convertBase(fromBase, toBase, num) {
  const number = parseInt(num, fromBase);
  const res = number.toString(toBase);
  return res;
}

swap.addEventListener("click", swapOnClickEventHandler);

reset.addEventListener("click", resetOnClickEventHnler);
