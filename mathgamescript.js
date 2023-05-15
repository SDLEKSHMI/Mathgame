var play=false;
var score;
var timer;
var correctAnswer;
var action;
//click on start
document.getElementById("start").onclick = function()
{
    if (play==true)
    {
        location.reload();
    }
    else
    {
        play=true;

        //setting score to 0
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        //reseting 
        
        show("time");
        timer=60;
        document.getElementById("timereset").innerHTML=timer;

        //hiding game over
        hide("gameover");

        //changing start game to reset game
        document.getElementById("start").innerHTML="Reset Game";

        //Starting countdown
        startCountdown();

        //generating new QA

        generateQA();

    }
    
}

function generateQA()
{
    var x= 1+ Math.round(9*Math.random());
    var y= 1+ Math.round(9*Math.random());
    correctAnswer=x*y;
    document.getElementById("question").innerHTML = x+"X"+y;
    var correctOption=1+ Math.round(3*Math.random());
    document.getElementById("box"+correctOption).innerHTML=correctAnswer;
    for(i=1;i<5;i++)
    {
        var incorrectOption=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
        if(i!=correctOption)
        {
            document.getElementById("box"+i).innerHTML=incorrectOption;
        }
        
    }
}
//clicking boxes

for(i=1;i<5;i++)
    {   document.getElementById("box"+i).onclick = function()
        {
        if(play==true)
            {
            if(this.innerHTML==correctAnswer)
            {
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                hide("correct");   
                }, 1000);
                generateQA(); 
            }
            else
            {
                show("wrong");
                hide("correct");
             setTimeout(function(){
                hide("wrong");   
                }, 1000);
            }
        }
    }
}
function startCountdown(){
    action = setInterval(function(){
        timer-= 1;
        document.getElementById("timereset").innerHTML = timer;
        if(timer== 0){// game over
            stopCountdown();
            show("gameover");
         document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";   
            hide("timereset");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("start").innerHTML = "Start Game";
        }
    }, 1000);    
}
//stop counter

function stopCountdown(){
    clearInterval(action);   
}

//hide an element

function hide(Id){
    document.getElementById(Id).style.display = "none";   
}

//show an element

function show(Id){
    document.getElementById(Id).style.display = "block";   
}
