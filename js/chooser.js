console.log("Hello World!")

const t = new Map()
t.set("highlander",{"image":"highlander.jpg"})
t.set("mk",{"image":"mk_arena.jpg"})
t.set("conan",{"image":"conan-the-barbarian-1982-720x405-538807710.jpg"})
t.set("blade",{"image":"blood-rain.jpg"})

const selectTag = document.querySelector('select');

selectTag.addEventListener('change', (event) => {
    mute()
    selected = selectTag.value
    audio_control = document.getElementById("audio_" + selected)
    audio_control.controls.on
    audio_control.controls = false
    audio_control.muted = false
    audio_control.autoplay = true

    if (selected != 3) {
        // Present the link to the sword reveal
        table = document.getElementById("theme")
        table.style.display = "none"

        image =  document.getElementById("theme_image")

        set_enter_image(image,audio_control)
        image.style.display = "block"
    } 
    console.log(`Selected option: ${event.target.value}`);
});

function set_enter_image(selected,audio_control) {
    const src = selected.src.split("/")

    //src[0] = src[0] + "/"
    switch (audio_control.id) {
        case "audio_1":
            console.log("mk");
            theme = t.get("mk")
            src[4] = theme.image
            x = src.join("/")
            selected.src = x
            break;
        case "audio_2":
            console.log("highlander");
            theme = t.get("highlander")
            src[4] = theme.image
            x = src.join("/")
            selected.src = x 
            break;
        case "audio_4":
            console.log("conan");
            theme = t.get("conan")
            src[4] = theme.image
            x = src.join("/")
            selected.src = x 
            break;
        case "audio_5":
            console.log("blade");
            theme = t.get("blade")
            src[4] = theme.image
            x = src.join("/")
            selected.src = x 
            break;

    }
}

function mute() {
    num_themes = document.getElementById("theme").length
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


