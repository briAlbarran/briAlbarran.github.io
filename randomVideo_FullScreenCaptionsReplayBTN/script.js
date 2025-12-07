const videoPart1 = [
		{ src: "videos/video01.mp4",  caption: "Social media is used for scrolling or viewing what influencers are up to, whether it is gaming or talking about topics related to their interests." },
		{ src: "videos/video02.mp4",  caption: "People often play games to escape reality." },
		{ src: "videos/video03.mp4",  caption: "People often watch live events to see what will happen as it happens." },
		{ src: "videos/video04.mp4",  caption: "Watching movies help calm us down and enjoy the moment." }
	];

const videoPart2 = [
		{ src: "videos/video05.mp4", caption: "People collect figurines to express themselves and spread joy to others." },
		{ src: "videos/video06.mp4", caption: "Plushies comfort people with stress and often give them a sort of entertainment by relieving them and calming the holder down." },
		{ src: "videos/video07.mp4", caption: "Collecting cards can be suspenseful and exciting. Each unopened pack contains lots of possibilities." },
		{ src: "videos/video08.mp4", caption: "Action figures are similar to figurines, but they have the added benefit of being poseable, making them perfect for creating stories." }
	];
	

const videoPart3 = [
		{ src: "videos/video09.mp4",      caption: "Readers, like gamers, use books to escape the real world. They enter the book often as the main character." },
		{ src: "videos/video10.mp4",      caption: "Writing is a way to create whole words and scenarios, as well as the characters will populate those worlds." },
		{ src: "videos/video11.mp4",      caption: "DnD allows each person to play and create a story together. This real-time scenario building is very exciting." },
		{ src: "videos/video12.mp4", 	  caption: "Drawing is another way to be creative, and a way to visualize characters and bring them to life." }
	];
	

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log("Random word:", array[randomIndex]);
  return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	//titleOverlay.style.display = "none"; REMOVED
 	titleOverlay.classList.add("playing"); //NEW
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
	
	
  playlist = [
    picker(videoPart1),
    picker(videoPart2),
    picker(videoPart3),
  ];
	
  currentIndex = 0;
  playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
	});
}

// Advance when a video ends
player.addEventListener("ended", () => {
  currentIndex++;
  if (currentIndex < playlist.length) {
    playCurrent();
  } else {
    console.log("All three parts finished.");
	replayBtn.style.display = "block";
  }
});
