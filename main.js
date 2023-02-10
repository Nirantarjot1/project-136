stats="";
input_text="";

function setup(){
    canvas=createCanvas(480,360);
    canvas.position(450,250);
    video=createCapture(VIDEO);
    video.hide();
    video.size(300 , 290)
}

function start(){
object_detector=ml5.objectdetector("cocossd" , modelLoaded);
document.getElementById("stats").innerHTML="Status : Detecting Objects !";
input_text=document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("model loaded !");
    stats=true;
}

function draw(){
    image(video , 0 , 0 , 300 , 290 );
}