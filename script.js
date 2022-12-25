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

function updateRhombus(val1){
    let value1 = parseInt(val1);
    x = value1/Math.sqrt(2);
    
    region = new Path2D();
    region.moveTo(10, 10);
    region.lineTo(10+x, 10+x);
    region.lineTo(10+x+value1, 10+x);
    region.lineTo(10+value1, 10);
    region.lineTo(10, 10);
    region.closePath();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#6280e3";
    ctx.fill(region, "evenodd");
}

function updatePShape(v1, v2, v3){
    let val1 = parseInt(v1);
    let val2 = parseInt(v2);
    let val3 = parseInt(v3);
    if (isNaN(val1) === true){
        val1 = 150; val2 = 0; val3 = 0;
    }
    x = val1/Math.sqrt(2);
    
    region = new Path2D();
    region.moveTo(10+val3, 10);
    region.lineTo(10+x+val2, 10+x);
    region.lineTo(10+x+val1+val2, 10+x);
    region.lineTo(10+val1+val3, 10);
    region.lineTo(10+val3, 10);
    region.closePath();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#6280e3";
    ctx.fill(region, "evenodd");
}

function updateTabs(type){
    let classes = document.getElementsByClassName("shape");
    for (let i = 0; i < classes.length; i++){
        document.getElementById(classes[i].id).style.display = "none";
    }
    document.getElementById(type).style.display = "block";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
