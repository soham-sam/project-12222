function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(560,150);
    poseNet =ml5.poseNet(video,modelLoad);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#969A97');
}

function moselLoad() {
    console.log('poseNet is intialized!');
}

function gotPoses(results) 
{
    if(results.length>0)
    {
        console.log(results);
    }
}