class Video{
    constructor(item){
        this.title = item.title;
        this.video = item.video;
    }

    displayList(){
        return `
                <div class="card">
                    <div class="title">${element.title}</div>
                    <video src="${element.picture}" />
                </div>
            `;
    }

    displayDiapo(){
        return `
                <div class="diapo">
                    <div class="title">${element.title}</div>
                    <video src="${element.picture}" />
                </div>
            `;
    }
}