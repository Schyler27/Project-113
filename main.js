function preload(){

}

function setup(){
    canvas = createCanvas(650 , 500);
    canvas.position(75 , 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 100 , 80 , 300 , 250);
    
    stroke(170 , 10 , 10);
    fill(170 , 10 , 10);

    circle(40 , 40 , 50);
    circle(460 , 40 , 50);
    circle(40 , 360 , 50);
    circle(460 , 360 , 50);

    stroke(50 , 170 , 80);
    fill(50 , 170 , 80);

    rect(63 , 28 , 375 , 25);
    rect(63 , 350 , 375 , 25);
    rect(28 , 63 , 25 , 275);
    rect(450 , 63 , 25 , 275);
}

function take_snapshot(){
    save('picture_frame.png');
}
