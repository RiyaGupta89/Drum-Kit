function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop your music from running all together
    audio.currentTime = 0;
    audio.play();
    document.addEventListener('keydown', playSound)
    key.classList.add("playing");
    } 
    function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        
        this.classList.remove("playing");
    }
    
    const keys = document.querySelectorAll('.drum');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    document.addEventListener("keydown", playSound);

    
