 noseX = 0
 noseY = 0
 difference = 0
 rightWristX = 0
 leftWristX = 0

function setup(){
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 500)
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('#ADD8E6');
    document.getElementById("spuare_side").innerHTML="width and height of a square will be: "+ difference + "px";
fill ("#eb861a");
strokeWeight(5)
stroke ("#a15d15")
//square (noseX, noseY, difference)
//circle (noseX, noseY, difference)
textSize(difference)
text('Shauryavir', noseX, noseY)
}


function modelLoaded(){
    console.log('poseNet is initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
    }
}

