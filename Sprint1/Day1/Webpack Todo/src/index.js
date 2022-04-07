import "../src/index.css";
import img from "../src/Applelogo.png"
const image = document.createElement("img");
image.src = img;
const h1 = document.createElement("h1");
h1.textContent = "To DO List";
const inp = document.createElement("input");
const button = document.createElement("button");
button.innerText = "Add"
document.querySelector("#box").append(image,h1,inp,button);
button.addEventListener("click",add);
function add(){ 
    const h2 = document.createElement("h2");
    h2.innerText = inp.value;
    document.querySelector("#box").append(h2)
     
}





