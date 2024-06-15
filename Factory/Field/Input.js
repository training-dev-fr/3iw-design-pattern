import Field from "./Field.js";

class Input extends Field{
    constructor(name,label){
        super(name,label,`<input type="text" name="${name}"/>`);
    }

    prepare(){
        let content = ``;
        return super.prepare(content);
    }

    
}

export default Input;