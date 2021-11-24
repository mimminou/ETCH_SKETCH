const containerDiv = document.querySelector(".Container");

function createGrid(){
    let line = [];
    let x = 1;
    for (let i = 1; i <= 48; i++) {
        line[i] = document.createElement("div");
        line[i].setAttribute('class', "mline");

        for(let iter = 1 ; iter<=40; iter++){
            let div = document.createElement("div");
            div.setAttribute("id", x);
            div.setAttribute("class", "mrow")
            div.style.width="10px";
            div.style.height="10px";
            console.log(x);
            x++;
            line[i].appendChild(div);
            containerDiv.appendChild(line[i]);
        }
    }
    return line;
  }

createGrid();


let allpixels = document.querySelectorAll(".mrow");
console.log(allpixels.length);

let mousePressed = false;

for (let w = 0; w<allpixels.length;w++){
    allpixels[w].addEventListener("mousedown", event =>{
        mousePressed = true;
        event.target.style.backgroundColor="black";

    });
    
    allpixels[w].addEventListener("mouseup", event =>{
        mousePressed = false;
    });


    allpixels[w].addEventListener("mouseover", event => {
        if(mousePressed){
            event.target.style.backgroundColor="black";

        }
    });
}

const mybtn = document.querySelector(".clearer");
mybtn.addEventListener("click", event =>{
    allpixels.forEach(element =>{
        element.style.backgroundColor="whitesmoke";
    })  
})