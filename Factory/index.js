import {GenericField,GenericFieldGenerator} from "./Factory.js";
import Modal from "./Modal.js";

let modal = new Modal();

let form = document.querySelector(".form");
let fieldGenerator = new GenericFieldGenerator();

document.querySelectorAll(".tool").forEach(element => {
    element.addEventListener("click", function(){
        let field = new GenericField(element.dataset.tool,"","");
        modal.open(field.prepare());
        //form.innerHTML += field.element;
    });
});

document.querySelectorAll(".tool").forEach(element => {
    element.addEventListener("click", function(){
        if(element.dataset.tool === "Input"){
            let field = fieldGenerator.createInput();
        }
        modal.open(field.prepare());
        //form.innerHTML += field.element;
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