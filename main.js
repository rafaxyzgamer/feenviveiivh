Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#camera');
camera = document.getElementById("camera");
function tirarFoto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bfXA1MEJ4/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function checar() {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}



function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("nomeObjeto").innerHTML = results[0].label;
        document.getElementById("precisaoObjeto").innerHTML = results[0].confidence.toFixed(3);
    }
}