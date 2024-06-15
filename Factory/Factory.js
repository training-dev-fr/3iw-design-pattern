import Input from "./Field/Input.js";
import Text from "./Field/Text.js";

class Factory{
    constructor(name){
        if(name === "Input"){
            return new Input();
        }
        if(name === "Text"){
            return new Text();
        }
    }
}

export default Factory;