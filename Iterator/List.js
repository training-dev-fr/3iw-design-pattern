export default class List{
    constructor(listItem){
        this.currentItem = listItem[0];
        this.listItem = listItem;
    }

    next(){
        this.currentItem = this.currentItem.nextItem;
    }
}