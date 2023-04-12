song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("music2.mp3");
    song2 = loadMusic("music3.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    console.log("setup complete");
}

function draw()
{
    image(VIDEO, 0, 0, 600, 500);
}