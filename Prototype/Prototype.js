// let arr = [1,2,3,4,5];
// 
// let newArr = arr.filter(item => item > 3);
// 
// let finalArray = [];
// for(let item of arr){
//     if(item > 3){
//         finalArray.push(item);
//     }
// }
// 
// console.log(newArr);

// Array.prototype.filter2 = function (predicate){
//     let finalArray = [];
//     for(let item of this){
//         if(predicate(item)){
//             finalArray.push(item);
//         }
//     }
//     return finalArray;
// }
// 
// let arr = [1,2,3,4,5];
// 
// let result = arr.filter2(item => item > 3);
// 
// console.log(result);

// class User{
//     constructor(){
//         
//     }
// }
// 
// console.log(typeof User);


function callHttp(req, callback) {
    let req = new XMLHttpRequest();
    req.open(req.method, req.url);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            callback();
            console.log(1);
        }
        console.log(2)
    }
    console.log(3);
}

callHttp({method: "GET",url: "monsite.fr"},() => {
    console.log(4);
})
console.log(5);

fetch("monsite.fr")
.then(() => console.log(4))
console.log(5)

let p = new Promise((resolve, reject) => {
    let i = 6;
    setTimeout(() => {
        if(i>5){
            resolve();
        }else{
            reject();
        }
    },500);
});


