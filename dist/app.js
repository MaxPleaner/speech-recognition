SpeechRecognition = () => new webkitSpeechRecognition();

initSpeech = ({speech, continuous_mode}) => {
  speech.onstart = () => {
    window.isSpeaking = true
    setSpeechResultText({text: "Listening for input"})
  }
  recognition.onspeechend = function() {
    window.isSpeaking = false
    recognition.stop();
  }
  speech.onresult = (event) => { doResult({event}) };
  speech.onerror = (err) => {
    console.dir(err)
    setSpeechResultText({text: err})
  }
  if (continuous_mode) {
    speech.continuous = true;
    speech.interimResults = true;
  }
  return speech;
};

getTranscript = ({event}) => event['results'][0][0]['transcript']

setSpeechResultText = ({text}) => {
  $("#speechResult").text(text)
}

doResult = ({event}) => {
  var text = `Result: ${getTranscript({event})}`
  setSpeechResultText({text})
};
