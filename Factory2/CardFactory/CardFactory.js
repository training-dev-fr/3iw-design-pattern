class CardFactory{
    constructor(item){
        if(item.type === "image"){
            return new Image(item);
        }else if(item.type === "video"){
            return new Video(item);
        }
    }
}