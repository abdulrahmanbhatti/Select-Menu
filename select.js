








let selectText = document.getElementById("selectText");

let options = document.getElementsByClassName("option");

let list = document.querySelector("#list");


selectText.onclick = function(){
    list.classList.toggle("hide")

}


for(option of  options){
    
option.onclick=function(){
    selectText.innerHTML=this.textContent;
     list.classList.toggle("hide")
}
}





