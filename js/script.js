//Detecting button press

for (n=0; n<document.querySelectorAll(".drum").length; n++) {

    document.querySelectorAll("button")[n].addEventListener("click", function () {
  
      let buttonInnerHTML = this.innerHTML;
  
      makeSound(buttonInnerHTML);
  
      buttonAnimation(buttonInnerHTML);
  
    });
  
  }
  
  
  //Detecting keyboard press
  
  document.addEventListener("keydown", function() {
  
    makeSound(event.key);
    buttonAnimation(event.key);
  
  });
  
  function makeSound(key) {
  
    switch (key) {
      case "w":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        let kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
      case "s":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
  
      default: console.log(buttonInnerHTML);
  
    }
  
  }
  
  function buttonAnimation(currentKey) {
  
    let activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  
