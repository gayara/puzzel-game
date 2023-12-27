// var rows = 3;
// var columns =3;

var currTile;
var otherTile;

var turns = 0;


// var imgOrder =["1","2","3","4","5","6","7","8","9"];
var imgOrder =["4","7","5","2","6","3","1","8","9"];

window.onload = function(){
    for (let rows=0; rows < 3; rows++){   //for input images(9)
        for(let cols =0; cols < 3; cols++){
            let tile = document.createElement("img");
            tile.id = rows.toString() + "-" + cols.toString();
            tile.src = imgOrder.shift()+ ".jpg";

            //drag
            tile.addEventListener("dragstart",dragStart); //click image to drag
            tile.addEventListener("dragover",dragOver);// moving image around while clicked
            tile.addEventListener("dragenter",dragEnter); //draging image onto another one
            tile.addEventListener("dragleave",dragLeave); // drag image leaving another image
            tile.addEventListener("drop",dragDrop);// drag an image over another image, drop the image
            tile.addEventListener("dragend",dragEnd); //after drag drop,swap the tow tile

            document.getElementById("board").append(tile);
        }
    }

}
function dragStart(){
    currTile = this; // this refers to image tile being dragged

}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){
   
}
function dragDrop(){
    otherTile = this;
// this refers to the image tile being drop on
}
function dragEnd(){

    if(!otherTile.src.includes("9.jpg")){
        return;
    }

    let currCoords = currTile.id.split("-"); // 0-0 --> ["0","0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-"); // 0-0 --> ["0","0"]
    let r1 = parseInt(otherCoords[0]);
    let c1 = parseInt(otherCoords[1]);

    let moveLeft = r == r1 && c1 == c-1;
    let moveRight = r == r1 && c1 == c+1;

    let moveUp = c == c1 && r1 == r-1;
    let moveDown = c == c1 && r1 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    
 if(isAdjacent){
   let currImg = currTile.src;
   let otherImg = otherTile.src;

   currTile.src = otherImg;
   otherTile.src = currImg;

   turns += 1;
   document.getElementById("turns").innerText = turns;

 }
}