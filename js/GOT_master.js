(() => {
    //stub
    console.log('fired!');
    //collect variables, grab function, for each sigil add and eventlistener, then
    //toggle the light box.
    const   sigils      = document.querySelectorAll('.sigil-container');
            lightbox    = document.querySelector('.lightbox');
            video       = document.querySelector('video');
            lbClose     = document.querySelector('.lightbox-off')


    function openLightBox() {
        //debugger;
        //make sure we have the right video source
        let targetHouse = this.className.split(" ")[1];

        //this gives us a lowercase house name --> the second class on allof the shields in stark, baratheon
        //clip this to uppercase
        let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

        video.src = `video/House-${targetVid}.mp4`;
        lightbox.classList.add('lightbox-on');
        video.load();
        video.play();
    }

    function closeLightBox() {
        lightbox.classList.remove('lightbox-on');

        //rewind current video and pause it
        
        video.currentTime = 0;
        video.pause();
    }

    sigils.forEach(sigil => sigil.addEventListener('click', openLightBox));

    /*add event listener for when video ends, it fires up ended*/
    video.addEventListener('ended', closeLightBox)
    lbClose.addEventListener('click', closeLightBox)

})();
