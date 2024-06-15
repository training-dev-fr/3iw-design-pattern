import Input from "./Field/Input.js";
import Text from "./Field/Text.js";

class GenericField{
    constructor(type,name,label){
        if(type === "Input"){
            return new Input(name,label);
        }
        if(type === "Text"){
            return new Text(name,label);
        }
    }
}

class GenericFieldGenerator{
    constructor(){

    }

    createInput(name,label){
        return new Input(name,label);
    }

    createText(name,label){
        return new Text(name,label);
    }
}

export {GenericField,GenericFieldGenerator};