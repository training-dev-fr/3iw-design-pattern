class PokerManager{
    constructor(){
        if(!PokerManager.table){
            PokerManager.table = [{listPlayer: [this]}];
        }else if(PokerManager.table[PokerManager.table.length - 1].listPlayer.length <6){
            PokerManager.table[PokerManager.table.length - 1].listPlayer.push(this);
        }else{
            PokerManager.table.push({listPlayer: [this]});
        }
        return PokerManager.table;
    }
}

export default PokerManager;