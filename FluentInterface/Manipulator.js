export default class Manipulator{
    constructor(selector){
        this.element = document.querySelector(selector);
    }

    setAttributes(name,value){
        this.element[name] = value;
        return this;
    }

    addEvent(event,callback){
        this.element.addEventListener(event,callback);
        return this;
    }
}