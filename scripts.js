var clickedTime;
var createdTime;
var reactionTime;
var bestTime = 100000;
var play = 0;
var bestplay = 0;

//primeira opcao
function color(){

    return("#" + Math.random().toString(16).slice(2, 8));
}

//segunda opcao
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeBox(){

    var time = Math.random()*5000;

    setTimeout(function(){ 

        if (Math.random() > 0.5){

            document.getElementById("box").style.borderRadius="100px";
        }
        else{

            document.getElementById("box").style.borderRadius="0px";
        }

        var top = Math.random()*300;
        var left = Math.random()*500;

        document.getElementById("box").style.top=top+"px";
        document.getElementById("box").style.left=left+"px";
        document.getElementById("box").style.display="block";
        document.getElementById("box").style.backgroundColor=color();

        createdTime = Date.now();
        play++;
    }, time);
}

function stopgame(){

    alert("Your record was: " + bestTime + " in the " + play + "º play! CONGRATULATIONS!!");
    location.reload();

}

document.getElementById("stop").onclick=function(){

    stopgame();
}

document.getElementById("box").onclick=function(){

    clickedTime=Date.now();
    reactionTime=(clickedTime-createdTime)/1000;

    if (reactionTime < bestTime){

        bestTime = reactionTime;
        bestplay = play;
    }

    document.getElementById("time").innerHTML=reactionTime;
    this.style.display="none";

    document.getElementById("besttime").innerHTML=bestTime;

    document.getElementById("plays").innerHTML=play;

    makeBox();
}

makeBox();

