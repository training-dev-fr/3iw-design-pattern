import Input from "./Field/Input.js";
import Text from "./Field/Text.js";

let form = document.querySelector(".form");

document.querySelector(".builder > .input").addEventListener("click",function(){
    let input = new Input();
    form.innerHTML += input.element;
});

document.querySelector(".builder > .text").addEventListener("click",function(){
    let text = new Text();
    form.innerHTML += text.element;
});