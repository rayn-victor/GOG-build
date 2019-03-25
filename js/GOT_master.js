(() => {
    //stub
    console.log('fired!');
    //collect variables, grab function, for each sigil add and eventlistener, then
    //toggle the light box.
    const   sigils      = document.querySelectorAll('.sigil-container');
            lightbox    = document.querySelector('.lightbox');
            video       = document.querySelector('video');
            lbClose     = document.querySelector('.lightbox-off');
            topBanners  = document.querySelector('#houseImages');
            tagline     = document.querySelector('.house-name');
            houseInfo   = document.querySelector('.house-info');


    // this is a container for some dynamic data
    
    const   houseData   = [ //STARK
        //backticks (javascript template string) prevent reading the double or singles quotes as part of the code
        `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.` //this is index zero, only one index
            //add other content with index numbers and make the text show up according to index numbers
    ];


    function openLightBox() {
        //debugger;
        //make sure we have the right video source
        let targetHouse = this.className.split(" ")[1];

        //this gives us a lowercase house name --> the second class on allof the shields in stark, baratheon
        //clip this to uppercase
        let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

        //populate the tagline
        tagline.textContent = `House ${targetVid}`;

        //now populate the house content
        houseInfo.textContent = houseData[0];
        
        

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

    //function for animating banners
    function animateBanners() {
        const offSet = 600;
        let currentOffset = this.dataset.offset * offSet;

        topBanners.style.right = currentOffset + "px";

    }

    sigils.forEach(sigil => sigil.addEventListener('click', openLightBox));
    
    //animate banners
    // sigils.forEach(sigil => sigil.addEventListener('click', animateBanners));

    /*add event listener for when video ends, it fires up ended*/
    lbClose.addEventListener('click', closeLightBox)

})();
