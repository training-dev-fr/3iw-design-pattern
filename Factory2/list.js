const loadData = async () => {
    let result = await fetch("./data.json");
    let data = result.json();
    return data;
}

const displayList = async () => {
    let data = await loadData();

    let domList = "";
    for(let element of data){
       let item = new CardFactory(element);
       domList += item.displayList();
    }

    document.querySelector(".list").innerHTML(domList);
}