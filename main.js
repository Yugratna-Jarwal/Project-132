status="";
function preload()
{
    img=loadImage('Almirah.jpg');
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting object";
}
function modelLoaded()
{
    console.log("model is loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects=results;
}