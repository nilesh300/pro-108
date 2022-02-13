Webcam.set({
    width: 350,
    hieght: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded:');
}

function speak() {
    var synth = window.speechSynthesis
    speak_data_1 = "the first predioction is" + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        

    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        gesture = results[0].label;
        speak();
        if (gesture == "amazing") {
            toSpeak = "This is looking amazing";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128026;";

        }
        if (gesture == "best") {
            toSpeak = "ur the best";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";

        }
        if (gesture == "victory") {
            toSpeak = "victory";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
            document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";

        }

    }
}