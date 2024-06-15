import Field from "./Field.js";

class Input extends Field{
    constructor(name,label){
        super(name,label,`<input type="text" name="${name}"/>`);
    }
}

export default Input;