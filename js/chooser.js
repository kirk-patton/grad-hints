console.log("Hello World!")

const selectTag = document.querySelector('select');

selectTag.addEventListener('change', (event) => {
    mute()
    selected = selectTag.value
    audio_control = document.getElementById("audio_" + selected)
    audio_control.controls.on
    audio_control.controls = false
    audio_control.muted = false
    audio_control.autoplay = true
    console.log(`Selected option: ${event.target.value}`);
});

num_themes = document.getElementById("theme").length
selected = document.getElementById("theme").value


function mute() {
    ittr=1
    while (ittr <= num_themes ) {
        // set all the audio controlls to muted...
        audio_control = document.getElementById("audio_" + ittr)
        if (audio_control === null) {
            break 
        }
        audio_control.controls = false
        audio_control.muted = true
        ittr++;
    }
}



