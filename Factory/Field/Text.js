import Field from "./Field.js";

class Text extends Field{
    constructor(name,label){
        super(name,label,`<textarea name="${name}"></textarea>`);
       ;
    }

    prepare(){
        let content = `
        <div class="form-group">
            <label>Placeholder</label>
            <input type="text" name="placeholder"/>
        </div>`
        return super.prepare(content);
    }
}

export default Text;