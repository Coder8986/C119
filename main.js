function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}
function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    Synth = window.speechSynthesis;
}

function clear_canvas() {
    background("white");
}

function classifyCanvas() {
   classifier.classify(canvas,gotResults);
}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    }

    else{
        console.log(result);

        document.getElementById("Label").innerHTML = "Label:" + result[0].label;

        document.getElementById("Confidence").innerHTML = "Confidence:" + Math.round(result[0].confidence * 100) + "%";

        UtterThis = new SpeechSynthesisUtterance(result[0].label);
        Synth.speak(UtterThis);

    }
}

function draw() {
    stroke(0);
    strokeWeight(13)

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);

    }
}

