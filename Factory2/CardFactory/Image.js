class Image{
    constructor(item){
        this.title = item.title;
        this.picture = item.picture;
    }

    displayList(){
        return `
                <div class="card">
                    <div class="title">${element.title}</div>
                    <img src="${element.picture}" />
                </div>
            `;
    }

    displayDiapo(){
        return `
                <div class="diapo">
                    <div class="title">${element.title}</div>
                    <img src="${element.picture}" />
                </div>
            `;
    }
}