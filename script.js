const inputText = document.getElementById('inputText');// here we have taken input text from the textarea
const voiceSelect = document.getElementById('voiceSelect'); // here we have taken the voice from the select
    
function populateVoiceList(){

    //In this function we are going to populate the select(options)

        const voices = window.speechSynthesis.getVoices(); // getting all the available voices from the window
        voiceSelect.innerHTML = '';
    
        voices.forEach((voice, index) => { // for each voice we are going to give voice and index
            const option = document.createElement('option'); // created an option element 
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})`;
    
            voiceSelect.appendChild(option);//here we have inserted the voices into options
        });
}
    
populateVoiceList(); //here we have called the function

window.speechSynthesis.onvoiceschanged = populateVoiceList; //on voicechanged again we have called the function

let speak = () => { //on button click

    const textToSpeak = inputText.value;//getting value from textarea
    const selectedVoiceIndex = voiceSelect.value;//getting the voice from the select

    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices[selectedVoiceIndex];//getting the voice by the index defined earlier

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = selectedVoice;//giving the voice to the text


    window.speechSynthesis.speak(utterance);
}




