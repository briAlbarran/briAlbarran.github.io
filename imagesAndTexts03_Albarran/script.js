// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
	{ src: 'images/01image.jpg',
	  alt: 'pocky love',
	 caption: 'When I started digitally at a young age, I fell in love around the same time.'
	},
	{ src: 'images/02image.jpg',
	  alt: 'First Valentines Day',
	 caption:'This drawing was a gift for Valentines Day, it was the first ever gift I given him during a holiday.'
	},
	{ src: 'images/03image.jpg',
	  alt: 'First Youtube Pfp',
	 caption: 'He supported me to create my YouTube channel and thats when I created my profile picture for it.'
	},
	{ src: 'images/04image.jpg',
	  alt: 'Third Valentines Day',
	 caption: 'In the third year of our relationship, I redrew the first gift I gave him.'
	},
	{ src: 'images/05image.jpg',
	  alt: 'Speedpaint',
	 caption: 'When my YouTube channel was growing, I used this drawing as a speed paint video. It didnt have many views but it is important to me.'
	},
	{ src: 'images/06image.jpg',
	  alt: 'Twitter Comic',
	 caption: 'I decided to create a Twitter account that he encouraged me to do. I decided to draw this to gain viewers and followers.'
	},
	{ src: 'images/07image.jpg',
	  alt: 'Ill drawing',
	 caption: 'A year later, I became ill. He stuck by my side throughout it all. I drew this when I was recovering.'
	},
	{ src: 'images/08image.jpg',
	  alt: 'Old Friends',
	 caption: 'We formed a friend group that we enjoyed playing with. A portrait of our friends and us, he helped make the background.'
	},
	{ src: 'images/09image.jpg',
	  alt: 'Birthday Gift',
	 caption: 'When my birthday came around, one of my friends commissioned a drawing for me as a gift with all of us celebrating.'
	},
	{ src: 'images/10image.jpg',
	  alt: 'Pokemon Worlds',
	 caption: 'This year we went to a convention called Pokemon Worlds 2025 together. We made stickers and this was one of them.'
	}
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src;
	mainImage.alt = slide.alt;
	caption.textContent = slide.caption;
}
// Advance on click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);