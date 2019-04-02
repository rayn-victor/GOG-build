(() => {
	console.log("Ready to jam!!!");

	let		drumsticks  = document.querySelector(".drumsticks");
        dropzones   = document.querySelector(".dropzones");
      	aud	     	= document.querySelector(".aud");
      	aud2      = document.querySelector(".aud2");
        aud3      = document.querySelector(".aud3");
        aud4      = document.querySelector(".aud4");
        aud5      = document.querySelector(".aud5");
        aud6      = document.querySelector(".aud6");
        aud7      = document.querySelector(".aud7");
        aud8      = document.querySelector(".aud8");
        aud9      = document.querySelector(".aud9");
        aud10      = document.querySelector(".aud10");

  let crashDropzone 	   = document.querySelector('#crash');
  	  hiTomDropzone 	   = document.querySelector('#hi-tom');
      snareDropzone      = document.querySelector('#snare');
      medTomDropzone     = document.querySelector('#med-tom');
      floorTomDropzone   = document.querySelector('#floor-tom');
      bassDrumDropzone   = document.querySelector('#bass-drum');
      crash2Dropzone     = document.querySelector('#crash2');
      rideDropzone     = document.querySelector('#ride');
      openHatDropzone     = document.querySelector('#open-hat');
      kickDropzone     = document.querySelector('#kick');

  /*function createDrumstick(drumstick) {
    let newDrumstick = `<img draggable id="drumstick1" class="drumstick" src="images/drumstick1.svg" alt="drumstick">`;

        drumsticks.innerHTML += newDrumstick;

    initDrag();
  } */

  function initDrag() {
    drumsticks.querySelector('img');
    img.addEventListener("dragstart", function(e) {
      console.log('about to make some noise!')
    });
  }

  dropzones.addEventListener("dragover", function(e) {
      e.preventDefault();
      console.log("that's the beat!");
  });

  crashDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud.currentTime = 0;
      aud.play();
  });

  hiTomDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud2.currentTime = 0;
      aud2.play();
  });

  snareDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud3.currentTime = 0;
      aud3.play();
  });

  medTomDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud4.currentTime = 0;
      aud4.play();
  });

  floorTomDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud5.currentTime = 0;
      aud5.play();
  });

  bassDrumDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud6.currentTime = 0;
      aud6.play();
  });

  crash2Dropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud7.currentTime = 0;
      aud7.play();
  });

  rideDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud8.currentTime = 0;
      aud8.play();
  });

  openHatDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud9.currentTime = 0;
      aud9.play();
  });

  kickDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      aud10.currentTime = 0;
      aud10.play();
  });

  /*createDrumstick(0);*/

  /*piano sounds*/
  function pianoPlonk(event) {

      let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      if (!audio) { return; }
      audio.currentTime = 0;
      audio.play();

      //animation on play
      let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
      key.classList.add('pianoKeyTransition');
    };

    function removePianoTransition(event) {
      // debugger;
      if (event.propertyName !== "transform") {
        return;
      } else {
        event.target.classList.remove('pianoKeyTransition');
      }
    };

    const keys = Array.from(document.querySelectorAll('.rows'));
    keys.forEach(key => key.addEventListener("transitionend", removePianoTransition));

    //play piano
    window.addEventListener("keydown", pianoPlonk);

})();