function shapegeneration(){
    const num=parseInt(document.getElementById("no-of-shape").value);
    const place=document.getElementById("shape-generation");
    const shape=document.querySelector('input[name="shape"]:checked').value;
    for(let i=1;i<=num;i++){
        const div=document.createElement('div');
        if(shape=="circle"){
            div.classList.add("circle");
        }else if(shape=="square"){
            div.classList.add("square");
        }else if(shape=="rectangle"){
            div.classList.add("rectangle");
        }else{
            alert("Please select a shape and enter a valid number!");
        }
        place.appendChild(div);
    }
}