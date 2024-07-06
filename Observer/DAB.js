export default class DAB{
    constructor(){
        this.withdrawCallbackList = [];
    }

    withdraw(amount){
        for(let callback of this.withdrawCallbackList){
            callback(amount);
        }
        return amount;
    }

    addWithdrawObserver(callback){
        this.withdrawCallbackList.push(callback);
    }
}