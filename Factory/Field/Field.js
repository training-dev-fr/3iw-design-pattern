class Field{
    constructor(name,label,element){
        this.name = name;
        this.label = label;
        this.element = `
            <label>${this.label}</label>
            ${element}
        `;
    }
}

export default Field;