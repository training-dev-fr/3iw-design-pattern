class Modal{
    constructor(){
        this.element = document.createElement("div");
        this.element.classList.add("modal");

        let modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        let closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.innerHTML = "x";

        closeBtn.addEventListener("click",() => this.close());

        let content = document.createElement("div");
        content.classList.add("content");

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(content);
        this.element.appendChild(modalContent);

        document.querySelector("body").appendChild(this.element);
    }

    open(content){
        this.element.querySelector(".content").innerHTML = content;
        this.element.classList.add("open");
    }

    close(){
        this.element.classList.remove("open");
    }
}

export default Modal;