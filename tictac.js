//var square = document.getElementById('square');
//square.addEventListener("click", listener, false);

//function listener() {
//document.getElementById('display').innerHTML = "X";
//}
var square1 = document.getElementById("square1");
square1.addEventListener("click", change);

var square2 = document.getElementById("square2");
square2.addEventListener("click", change);

var square3 = document.getElementById("square3");
square3.addEventListener("click", change);

var square4 = document.getElementById("square4");
square4.addEventListener("click", change);

var square5 = document.getElementById("square5");
square5.addEventListener("click", change);

var square6 = document.getElementById("square6");
square6.addEventListener("click", change);

var square7 = document.getElementById("square7");
square7.addEventListener("click", change);

var square8 = document.getElementById("square8");
square8.addEventListener("click", change);

var square9 = document.getElementById("square9");
square9.addEventListener("click", change);
var turn = 1;
function change(e){
    changeTheSpot(e.target);
    checkWin();
    updateTurn();
}

var turn = 1;
function changeTheSpot(clickedSquare){
    if(turn%2 === 0){
         clickedSquare.innerHTML = "X"
    }
    else{
        clickedSquare.innerHTML = "O"     
    }
    
}
 
function checkWin(){
    
    if(square1.innerHTML === square2.innerHTML && square3.innerHTML === square1.innerHTML){
        alert(square1.innerHTML +  " won")
    } 
    else if(square4.innerHTML === square5.innerHTML && square6.innerHTML === square4.innerHTML){
        alert(square4.innerHTML + " won")
    }
    
}
var turn = 1

function updateTurn(){     
    turn++
}


