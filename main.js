var SpeechRecognition = window.webkitSpeechRecognition;
var content
var recognition = new SpeechRecognition()
function start() {
    recognition.start()
}
recognition.onresult = function (event) {
    content = event.results[0][0].transcript.toLowerCase()
    if (content == "selfie") {
        speak()
    }
}
function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData); synth.speak(utterThis);
    setTimeout(function () {
        imgId = "selfie1";
        takeSelfie();
        speakData = "Tirando sua selfie em 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function () {
        imgId = "selfie2";
        takeSelfie();
        speakData = "Tirando sua selfie em 15 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function () {
        imgId = "selfie3";
        takeSelfie();
    }, 15000);
}
camera = document.getElementById("camera")
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function takeSelfie(){
    Webcam.snep(function(data_uri) {
        if (imgId == "selfie1"){
            document.getElementById("result_1").innerHTML = '<img src = '+ data_uri+' id = "selfie1">'
        }if (imgId == "selfie2"){
            document.getElementById("result_2").innerHTML = '<img src = '+ data_uri+' id = "selfie2">'
        }if (imgId == "selfie3"){
            document.getElementById("result_3").innerHTML = '<img src = '+ data_uri+' id = "selfie3">'
        }
    })
}