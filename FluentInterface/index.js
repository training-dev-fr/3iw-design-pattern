import Manipulator from "./Manipulator.js";

let manipulator = new Manipulator("#test");
manipulator.setAttributes("href","http://google.fr").setAttributes("innerHTML","google").addEvent("click",() => { console.log("click")});