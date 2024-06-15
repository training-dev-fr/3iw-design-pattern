import Field from "./Field.js";

class Text extends Field{
    constructor(name,label){
        super(name,label,`<textarea name="${name}"></textarea>`);
       ;
    }
}

export default Text;