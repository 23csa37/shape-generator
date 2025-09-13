const generateShapes = () => {
const count = +document.querySelector("#no-of-shape").value;
const container = document.querySelector("#shape-generation");
const selected = document.querySelector("input[name='shape']:checked")?.value;
for (let i = 0; i < count; i++) {
const shapeDiv = document.createElement("div");
   switch (selected) {
      case "circle":
        shapeDiv.className = "circle";
        break;
      case "square":
        shapeDiv.className = "square";
        break;
      case "rectangle":
        shapeDiv.className = "rectangle";
        break;
    }
 container.appendChild(shapeDiv);
  }
};
document.querySelector("#submit").addEventListener("click", generateShape
