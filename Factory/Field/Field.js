class Field{
    constructor(name,label,element){
        this.name = name;
        this.label = label;
        this.element = `
            <label>${this.label}</label>
            ${element}
        `;
    }

    prepare(content){
        return `
            <div class="form-group">
                <label>Label</label>
                <input type="text" name="label"/>
            </div>
            <div class="form-group">
                <label>Nom</label>
                <input type="text" name="name"/>
            </div>
            ${content}
            <div class="form-group">
                <button class="submit">Valider</button>
            </div>
        `;
    }
}

export default Field;