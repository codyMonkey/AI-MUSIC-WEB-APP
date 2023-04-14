song1 = "";
song2 = "";
left_wrist_x = 0;
right_Wrist_x = 0;
left_Wrist_y = 0;
right_wrist_y = 0;

function preload()
{
    song1 = loadSound("music2.mp3");
    song2 = loadSound("music3.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    console.log("setup complete");

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('posenet is initialized');
}


function draw()
{
    image(VIDEO, 0, 0, 600, 500);
}

function gotPoses(results)
{
    if(results.length > o)
    {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristx = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.righttWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log(leftwristx, leftwristy);
        console.log(rightwristx, rightwristy);
        console.log("---------------------");

    }
}