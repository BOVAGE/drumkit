let btnArr = document.querySelectorAll(".drum");

// adds eventlistener to all the drum buttons to listen to clicks
for (var i = 0; i < btnArr.length; i++) {
	btnArr[i].addEventListener("click", function () { 
		// gets the content of the button clicked (w,a,s,d,j,k,l)
		var drumLetter = this.innerHTML;
		playSound(drumLetter);
		respondToPress(drumLetter);
	}); 
}

// adds eventlistener to the document to listen to keypress
document.addEventListener("keypress", function (event) {
	console.log(event);
	playSound(event.key);
	respondToPress(event.key);
})

function playSound (character) {
	// checks whether the character is equal to (w,a,s,d,j,k,l) and plays the corresponding sound
	switch (character) {
			case "w":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
				break;
			case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
				break;
			case "s":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
				break;
			case "d":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
				break;
			case "j":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;
			case "k":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
				break;
			case "l":
				var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();
				break;
			default:
				console.log(drumLetter)
		}
}

function respondToPress (key) {
	var activeButton = document.querySelector("." + key);
	activeButton.classList.add("pressed");
	
	// delays the execution of the function for 200 milliseconds
	setTimeout(() => {
		activeButton.classList.remove("pressed");
	}, 200);
}