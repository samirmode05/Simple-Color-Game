var numSq = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var disColor = document.getElementById("dis");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeList = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons Event Listener
    setModeButtons();

    //square Listener
    setSquareButtons();

    reset();
}

resetButton.addEventListener("click",function(){
    reset();
})
function setSquareButtons(){
    for(i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor == pickedColor){
                document.getElementById("mssg").textContent = "Correct!"
                changeColor(squares);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else{
                this.style.backgroundColor = "#232323";
                document.getElementById("mssg").textContent = "Try Again!"
            }
        });
    }
}

function setModeButtons(){
    for(i=0;i<modeList.length;i++){
        modeList[i].addEventListener("click",function(){
            modeList[0].classList.remove("selected");
            modeList[1].classList.remove("selected");
            this.classList.add("selected");
        
            this.textContent === "Easy" ? numSq =3 : numSq=6;
            reset();
        });    
    }
}

function reset(){
    colors = generateRandomColors(numSq);
    pickedColor = pickColor();
    disColor.textContent = pickedColor;
    document.getElementById("mssg").textContent = "";
    resetButton.textContent = "New Colors";

    for(i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

function changeColor(color){
    for(i=0;i<color.length;i++){
    color[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*numSq);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
