import Input from "./Field/Input.js";
import Text from "./Field/Text.js";

class Factory{
    constructor(type,name,label){
        if(type === "Input"){
            return new Input(name,label);
        }
        if(type === "Text"){
            return new Text(name,label);
        }
    }
}

export default Factory;