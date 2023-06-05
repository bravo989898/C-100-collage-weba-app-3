var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

camera = document.getElementById("camera");
 Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if (Content == "take my selfie"){
        console.log("taking selfie....")
        speak()
    }  
}

function speak() {

    Webcam.attach(camera);
    var synth = window.speechSynthesis;
    speak_data = "  taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
  
    setTimeout(function(){
        
        img_id = "selfie_1";
        take_snapshot();
        speak_data = "taking your selfie in next 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    }, 5000);

    setTimeout(function(){
        
        img_id = "selfie_2";
        take_snapshot();
        speak_data = "taking your selfie in next 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    }, 10000);

    setTimeout(function(){
        
        img_id = "selfie_3";
        take_snapshot();
        
    }, 15000);
}

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){

        if(img_id == "selfie_1"){
            document.getElementById("img_1").innerHTML = '<img id="selfie_1" src="'+data_uri+'"/>';
        }

        if(img_id == "selfie_2"){
            document.getElementById("img_2").innerHTML = '<img id="selfie_2" src="'+data_uri+'"/>';
        }

        if(img_id == "selfie_3"){
            document.getElementById("img_3").innerHTML = '<img id="selfie_3" src="'+data_uri+'"/>';
        }

    });
     }

 camera = document.getElementById("camera");
 Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 

 




