let imgObject = document.querySelector(".subject");
let pols = "pols.png"
const imgArray = ["normal.png","red.png","blue.png","blue2.png","blue3.png","blue4.png"]
var audio = new Audio("pols.mp3")


let ctr = 0

myInterval = setInterval(imageChanger,100);


function imageChanger()
{
    imgObject.src = imgArray[ctr]
    ctr++

    audio.play();

    if(ctr == 5)
    {
        ctr = 0;
    }
}