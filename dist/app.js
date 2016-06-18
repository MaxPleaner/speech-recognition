SpeechRecognition = () => new webkitSpeechRecognition();

initSpeech = ({speech, continuous_mode}) => {
  speech.onresult = (event) => { doResult({event}) };
  if (continuous_mode) {
    speech.continuous = true;
    speech.interimResults = true;
  }
  return speech;
};

window.globalMuffler = 0

doResult = ({event}) => {
  readTranscript({event})
};

readTranscript = ({event}) => { alert(event['results'][0][0]['transcript']) }

initSpeech({speech: SpeechRecognition()}).start();
