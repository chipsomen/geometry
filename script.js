const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = document.getElementById("1").value; //width
let y = document.getElementById("2").value; //height
let region;

ctx.fillStyle = "#6280e3";
ctx.fillRect(10, 10, x, y);

function updateShape(attribute, val) {
  if (attribute == "width") {
    x = val;
  } else if (attribute == "height") {
    y = val;
  } else if (attribute == "side"){
      x = val;
      y = val;
  } else if (attribute == "createRect"){
      x = 150;
      y = 200;
  } else if (attribute == "createSq"){
      x = 150;
      y = x;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#6280e3";
  ctx.fillRect(10, 10, x, y);
}

function updateRhombus(val){
    value = parseInt(val);
    x = value/Math.sqrt(2);
    
    region = new Path2D();
    region.moveTo(10, 10);
    region.lineTo(10+x, 10+x);
    region.lineTo(10+x+value, 10+x);
    region.lineTo(10+value, 10);
    region.lineTo(10, 10);
    region.closePath();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#6280e3";
    ctx.fill(region, "evenodd");
}

function updateTabs(type){
    let classes = document.getElementsByClassName("shape")
    for (let i = 0; i < classes.length; i++){
        document.getElementById(classes[i].id).style.display = "none";
    }
    document.getElementById(type).style.display = "block";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}









