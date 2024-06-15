import Factory from "./Factory.js";

let form = document.querySelector(".form");

document.querySelectorAll(".tool").forEach(element => {
    element.addEventListener("click", function(){
        let field = new Factory(element.dataset.tool);
        form.innerHTML += field.element;
    });
});



// document.querySelector(".builder > .input").addEventListener("click",function(){
//     let input = new Input();
//     form.innerHTML += input.element;
// });
// 
// document.querySelector(".builder > .text").addEventListener("click",function(){
//     let text = new Text();
//     form.innerHTML += text.element;
// });