const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio("tunes/a.wav");

const playTune = (key)=>{
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150);
}

const pressedKey = (key)=>{
    if(allKeys.includes(key.key)) playTune(key.key);
}

pianoKeys.forEach(key=>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click",()=>playTune(key.dataset.key));
});

const handleVolume = (e)=>{
    audio.volume = e.target.value;
}

const showHideKeys = (e)=>{
    pianoKeys.forEach(key=>key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("input",showHideKeys);
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey);