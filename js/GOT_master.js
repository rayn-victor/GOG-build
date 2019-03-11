(() => {
    //stub
    console.log('fired!');
    //collect variables, grab function, for each sigil add and eventlistener, then
    //toggle the light box.
    const   sigils      = document.querySelectorAll('.sigil-container');
            lightbox    = document.querySelector('.lightbox');
            video       = document.querySelector('video');


    function openLightBox() {
        lightbox.classList.add('lightbox-on');
    }

    function closeLightBox() {
        lightbox.classList.remove('lightbox-on');
    }

    sigils.forEach(sigil => sigil.addEventListener('click', openLightBox));

    /*add event listener for when video ends, it fires up ended*/
    video.addEventListener('ended', closeLightBox)

})();
