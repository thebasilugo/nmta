// Data management file for NMTA website
// This file contains all content arrays and functions for updating site content

// Site Configuration
const siteConfig = {
	siteName: "Nigerian Movie & Television Awards",
	shortName: "NMTA",
	eventDate: "August 15, 2026",
	eventLocation: "Lagos, Nigeria",
	foundedYear: 2010,
	currentEdition: 16,
};

// Contact Information
const contactInfo = {
	email: "info@nmtawards.com",
	phone: "+234 805 555 4261",
	address: "111, Old Ojo Road, Amuwo-Odofin, Lagos, Nigeria",
	socialMedia: [
		{
			platform: "Facebook",
			url: "https://web.facebook.com/nollywoodmoviesandtelvisionawards",
			handle: "@nollywoodmoviesandtelevisionawards",
		},
		{
			platform: "Twitter",
			url: "https://x.com/Official_NMTA",
			handle: "@Official_NMTA",
		},
		{
			platform: "Instagram",
			url: "https://www.instagram.com/official_nmta/",
			handle: "@official_nmta",
		},
		{
			platform: "TikTok",
			url: "https://www.tiktok.com/@official_nmta",
			handle: "@official_nmta",
		},
	],
};

// Navigation Links
const navigationLinks = [
	{ name: "Home", url: "index.html", order: 1 },
	{ name: "Movies & Shows", url: "movies-shows.html", order: 2 },
	{ name: "Awards", url: "awards.html", order: 3 },
	{ name: "News & Blog", url: "news-blog.html", order: 4 },
	{ name: "About", url: "about.html", order: 5 },
];

// jury members
const juryMembers = [
	{ name: "Ogova Oondego", imageurl: "#", country: "Kenya" },
	{ name: "Sadiq Tafawa Balewa", imageurl: "#", country: "Nigeria" },
	{ name: "Tade Ogidan", imageurl: "#", country: "Nigeria" },
	{ name: "Bond Emeruwa", imageurl: "#", country: "Nigeria" },
	{ name: "Rikkya Atta", imageurl: "#", country: "Nigeria" },
	{ name: "Fred Amata", imageurl: "#", country: "Nigeria" },
];

//patron/advisory board
const patronAndAdvisory = [
	{ name: "zeb ejiro", imageurl: "" },
	{ name: "mobert ajaegbu", imageurl: "" },
	{ name: "andy boyo", imageurl: "" },
	{ name: "pete edochie", imageurl: "" },
	{ name: "tunde kelani", imageurl: "" },
	{ name: "mahmoud alli balogun", imageurl: "" },
];

// Award Categories - Extended
const awardCategories = [
	{
		id: "nmoty2026",
		title: "Nollywood Man",
		description:
			"Honoring an outstanding male figure who has made significant contributions to the Nollywood industry.",
		criteria: [
			"Industry Impact",
			"Career Achievement",
			"Leadership",
			"Innovation",
		],
		image:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{
				year: 2025,
				winner: "Richard Mofe-Damijo",
				film: "Lifetime Achievement",
			},
			{ year: 2024, winner: "Kunle Afolayan", film: "Industry Leadership" },
		],
	},
	{
		id: "bf2026",
		title: "Best Film",
		description:
			"Recognizing the most outstanding film production in Nollywood cinema.",
		criteria: [
			"Storytelling",
			"Direction",
			"Acting",
			"Technical Excellence",
			"Cultural Impact",
		],
		image:
			"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "The Lagos Story", director: "Chioma Eze" },
			{ year: 2024, winner: "Midnight in Nigeria", director: "Akin Thomas" },
		],
	},
	{
		id: "bd2026",
		title: "Best Director",
		description:
			"Honoring exceptional achievement in film direction within the Nigerian cinema.",
		criteria: [
			"Vision",
			"Execution",
			"Innovation",
			"Leadership",
			"Storytelling",
		],
		image:
			"https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Chioma Eze", film: "The Lagos Story" },
			{ year: 2024, winner: "Akin Thomas", film: "Midnight in Nigeria" },
		],
	},
	{
		id: "ba2026",
		title: "Best Actor",
		description:
			"Celebrating outstanding male lead performances in Nigerian cinema.",
		criteria: [
			"Performance Quality",
			"Character Development",
			"Screen Presence",
			"Emotional Range",
		],
		image:
			"https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Emmanuel Okafor", film: "The Last Stand" },
			{ year: 2024, winner: "Michael Afolayan", film: "City of Dreams" },
		],
	},
	{
		id: "bac2026",
		title: "Best Actress",
		description:
			"Recognizing exceptional female lead performances in Nigerian cinema.",
		criteria: [
			"Performance Quality",
			"Character Development",
			"Screen Presence",
			"Emotional Range",
		],
		image:
			"https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Aisha Ibrahim", film: "Desert Rose" },
			{ year: 2024, winner: "Grace Okonjo", film: "The Promise" },
		],
	},
	{
		id: "basr2026",
		title: "Best Actor in Supporting Role",
		description:
			"Honoring outstanding male supporting performances that enhance the story.",
		criteria: [
			"Character Impact",
			"Scene Presence",
			"Role Development",
			"Ensemble Contribution",
		],
		image:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "David Adeleke", film: "Family Ties" },
			{ year: 2024, winner: "Joseph Okafor", film: "The Gathering" },
		],
	},
	{
		id: "baisr2026",
		title: "Best Actress in Supporting Role",
		description:
			"Celebrating exceptional female supporting performances in Nigerian cinema.",
		criteria: [
			"Character Impact",
			"Scene Presence",
			"Role Development",
			"Ensemble Contribution",
		],
		image:
			"https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Sarah Mensah", film: "The Gathering" },
			{ year: 2024, winner: "Fatima Bello", film: "Midnight Dreams" },
		],
	},
	{
		id: "bca2026",
		title: "Best Child Actor",
		description:
			"Recognizing exceptional performances by young talents in Nigerian cinema.",
		criteria: [
			"Performance Quality",
			"Natural Ability",
			"Character Portrayal",
			"Screen Presence",
		],
		image:
			"https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{
				year: 2025,
				winner: "Tunde Adebayo (Age 10)",
				film: "The Future Ahead",
			},
			{
				year: 2024,
				winner: "Amina Ibrahim (Age 12)",
				film: "Tomorrow's Promise",
			},
		],
	},
	{
		id: "bsf2026",
		title: "Best Short Film",
		description:
			"Honoring excellence in short-form storytelling within Nigerian cinema.",
		criteria: [
			"Storytelling",
			"Direction",
			"Technical Excellence",
			"Innovation",
			"Impact",
		],
		image:
			"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "The Last Bus", director: "Ngozi Okafor" },
			{ year: 2024, winner: "Morning Light", director: "Samuel Johnson" },
		],
	},
	{
		id: "bfnla2026",
		title: "Best Film by a Nigerian Living Abroad",
		description:
			"Celebrating outstanding films created by Nigerian filmmakers in the diaspora.",
		criteria: [
			"Storytelling",
			"Cultural Representation",
			"Technical Excellence",
			"Global Perspective",
		],
		image:
			"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Bridges", director: "Chinedu Okonkwo (UK)" },
			{ year: 2024, winner: "Between Worlds", director: "Amara Okoli (USA)" },
		],
	},
	{
		id: "btvs2026",
		title: "Best TV Series",
		description:
			"Recognizing excellence in Nigerian television series production.",
		criteria: [
			"Storytelling",
			"Character Development",
			"Production Quality",
			"Audience Impact",
		],
		image:
			"https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Lagos Nights", director: "Funke Akindele" },
			{ year: 2024, winner: "The Compound", director: "Desmond Elliot" },
		],
	},
	{
		id: "btm2026",
		title: "Best Telemovie",
		description:
			"Honoring outstanding made-for-television movies in Nigerian entertainment.",
		criteria: [
			"Storytelling",
			"Acting",
			"Production Quality",
			"Audience Impact",
		],
		image:
			"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "One Night Stand", director: "Kemi Adetiba" },
			{ year: 2024, winner: "The Last Letter", director: "Tope Oshin" },
		],
	},
	{
		id: "ba2026",
		title: "Best Animation",
		description: "Celebrating excellence in Nigerian animated productions.",
		criteria: [
			"Animation Quality",
			"Storytelling",
			"Innovation",
			"Cultural Relevance",
		],
		image:
			"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Turtle Tales", director: "Adebayo Studios" },
			{
				year: 2024,
				winner: "The Legend of Makoko",
				director: "Lagos Animation",
			},
		],
	},
	{
		id: "bffdba2026",
		title: "Best Foreign Film in Diaspora by an African",
		description:
			"Recognizing outstanding films created by African filmmakers living abroad.",
		criteria: [
			"Storytelling",
			"Cultural Representation",
			"Technical Excellence",
			"Global Impact",
		],
		image:
			"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{
				year: 2025,
				winner: "Crossing Borders",
				director: "Nana Kwame (Ghana/UK)",
			},
			{
				year: 2024,
				winner: "Motherland",
				director: "Aisha Diallo (Senegal/France)",
			},
		],
	},
	{
		id: "bsoty2026",
		title: "Best Skit",
		description:
			"Honoring excellence in short-form comedy and entertainment skits.",
		criteria: [
			"Creativity",
			"Performance",
			"Cultural Relevance",
			"Audience Impact",
		],
		image:
			"https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Market Day", creator: "Comedy Central NG" },
			{ year: 2024, winner: "The Interview", creator: "Laugh Factory Lagos" },
		],
	},
	{
		id: "doty2026",
		title: "Documentary",
		description:
			"Celebrating outstanding documentary filmmaking in Nigerian cinema.",
		criteria: ["Subject Matter", "Research", "Storytelling", "Social Impact"],
		image:
			"https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Lagos Waterways", director: "Tunde Johnson" },
			{ year: 2024, winner: "The Lost Children", director: "Amina Abba" },
		],
	},
	{
		id: "ais2026",
		title: "Achievement in Screenplay",
		description:
			"Recognizing exceptional writing and storytelling in Nigerian cinema.",
		criteria: [
			"Story Structure",
			"Dialogue",
			"Character Development",
			"Originality",
		],
		image:
			"https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Oluwaseun Afolabi", film: "The Journey Home" },
			{ year: 2024, winner: "Chinua Achebe Jr.", film: "Legacy" },
		],
	},
	{
		id: "aie2026",
		title: "Achievement in Editing",
		description: "Honoring excellence in film editing within Nigerian cinema.",
		criteria: [
			"Technical Skill",
			"Storytelling",
			"Pacing",
			"Visual Continuity",
		],
		image:
			"https://images.unsplash.com/photo-1574717024453-354056afd6fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Tunde Kelani", film: "Sacred Waters" },
			{ year: 2024, winner: "Ngozi Onwurah", film: "The Silent One" },
		],
	},
	{
		id: "aic2026",
		title: "Achievement in Cinematography",
		description: "Celebrating exceptional visual storytelling and camera work.",
		criteria: [
			"Visual Composition",
			"Lighting",
			"Camera Movement",
			"Visual Storytelling",
		],
		image:
			"https://images.unsplash.com/photo-1500940405973-72f790c6582a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Hassan Mohammed", film: "Lagos Nights" },
			{ year: 2024, winner: "Tunde Kelani", film: "Sacred Waters" },
		],
	},
	{
		id: "aipd2026",
		title: "Achievement in Production Design",
		description:
			"Recognizing excellence in creating visual worlds and environments.",
		criteria: [
			"Set Design",
			"Visual Aesthetics",
			"Period Authenticity",
			"Creative Vision",
		],
		image:
			"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Adebayo Studios", film: "The Royal Palace" },
			{ year: 2024, winner: "Creative Designs Ltd", film: "Colonial Days" },
		],
	},
	{
		id: "aic2026",
		title: "Achievement in Costume",
		description: "Honoring exceptional costume design in Nigerian cinema.",
		criteria: [
			"Design Quality",
			"Historical Accuracy",
			"Character Enhancement",
			"Visual Impact",
		],
		image:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Fashion Forward Studios", film: "Royal Garments" },
			{ year: 2024, winner: "Traditional Designs", film: "Village Square" },
		],
	},
	{
		id: "aim2026",
		title: "Achievement in Make-up",
		description:
			"Celebrating excellence in make-up artistry in Nigerian cinema.",
		criteria: [
			"Technical Skill",
			"Character Enhancement",
			"Creative Vision",
			"Execution",
		],
		image:
			"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "Beauty Works", film: "The Transformation" },
			{ year: 2024, winner: "Face Art Studios", film: "Tribal Marks" },
		],
	},
	{
		id: "aisd2026",
		title: "Achievement in Sound Design",
		description:
			"Recognizing exceptional sound design and audio mixing in Nigerian cinema.",
		criteria: [
			"Sound Quality",
			"Creative Sound Design",
			"Technical Excellence",
			"Storytelling Enhancement",
		],
		image:
			"https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
		previousWinners: [
			{ year: 2025, winner: "SoundMasters Ltd", film: "The Beat" },
			{ year: 2024, winner: "AudioCraft", film: "Silent Echoes" },
		],
	},
];

// Featured Stories - Extended
let featuredStories = [
	{
		id: "fs001",
		date: "May 15, 2025",
		title: "Rising Stars: New Faces in Nollywood",
		summary:
			"Discover the fresh talent making waves in the Nigerian film industry.",
		content: "Full article content here...",
		author: "Sarah Johnson",
		category: "Industry News",
		image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0",
		url: "#",
		featured: true,
	},
	{
		id: "fs002",
		date: "May 10, 2025",
		title: "NMTA Awards 2025: Nominations Announced",
		summary:
			"See who's in the running for Nigeria's biggest night in entertainment.",
		content: "Full article content here...",
		author: "Michael Adebayo",
		category: "Awards News",
		image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
		url: "#",
		featured: true,
	},
	{
		id: "fs003",
		date: "May 5, 2025",
		title: "Nollywood-Hollywood Collaboration Announced",
		summary: "Major studios partner for upcoming international blockbuster.",
		content: "Full article content here...",
		author: "Linda Ikeji",
		category: "Industry News",
		image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31",
		url: "#",
		featured: true,
	},
	{
		id: "fs004",
		date: "May 3, 2025",
		title: "New Film Fund Launches for Nigerian Filmmakers",
		summary: "₦500 million fund established to support emerging directors.",
		content: "Full article content here...",
		author: "James Eze",
		category: "Industry News",
		image: "https://images.unsplash.com/photo-1486693128850-a77436e7ba3c",
		url: "#",
		featured: true,
	},
	{
		id: "fs005",
		date: "May 1, 2025",
		title: "Nigerian Films Break Box Office Records",
		summary: "Local productions dominate cinema earnings nationwide.",
		content: "Full article content here...",
		author: "Chioma Nnadi",
		category: "Box Office",
		image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd",
		url: "#",
		featured: true,
	},
];

// Festival Stories
const festivalStories = [
	{
		id: "fest001",
		title: "Africa Magic Viewers' Choice Awards (AMVCA) 2025",
		summary:
			"The most prestigious awards celebrating excellence in African film and television.",
		content: "Full article content here...",
		imageUrl:
			"https://img.freepik.com/free-photo/oscar-statuette-film-popcorn_23-2147699798.jpg",
		date: "June 15, 2025",
		location: "Lagos, Nigeria",
		url: "#",
	},
	{
		id: "fest002",
		title: "Lagos International Film Festival 2025",
		summary:
			"Showcasing the best of Nigerian cinema alongside international films.",
		content: "Full article content here...",
		imageUrl:
			"https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg",
		date: "July 20, 2025",
		location: "Lagos, Nigeria",
		url: "#",
	},
	{
		id: "fest003",
		title: "Nigerian Films at TIFF 2025",
		summary:
			"Nigerian filmmakers make waves at the Toronto International Film Festival.",
		content: "Full article content here...",
		imageUrl:
			"https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg",
		date: "September 5, 2025",
		location: "Toronto, Canada",
		url: "#",
	},
];

// Data Management Functions

// Add new award category
function addAwardCategory(category) {
	if (!category.id) {
		category.id = `ac${Date.now()}`;
	}
	awardCategories.push(category);
	return category.id;
}

// Update award category
function updateAwardCategory(id, updates) {
	const index = awardCategories.findIndex((cat) => cat.id === id);
	if (index !== -1) {
		awardCategories[index] = { ...awardCategories[index], ...updates };
		return true;
	}
	return false;
}

// Add new featured story
function addFeaturedStory(story) {
	if (!story.id) {
		story.id = `fs${Date.now()}`;
	}
	story.date = story.date || new Date().toLocaleDateString();
	featuredStories.unshift(story);
	if (featuredStories.length > 10) {
		featuredStories = featuredStories.slice(0, 10); // Keep only 10 most recent stories
	}
	return story.id;
}

// Update featured story
function updateFeaturedStory(id, updates) {
	const index = featuredStories.findIndex((story) => story.id === id);
	if (index !== -1) {
		featuredStories[index] = { ...featuredStories[index], ...updates };
		return true;
	}
	return false;
}

// Add new festival story
function addFestivalStory(festival) {
	if (!festival.id) {
		festival.id = `fest${Date.now()}`;
	}
	festivalStories.push(festival);
	return festival.id;
}

// Update festival story
function updateFestivalStory(id, updates) {
	const index = festivalStories.findIndex((fest) => fest.id === id);
	if (index !== -1) {
		festivalStories[index] = { ...festivalStories[index], ...updates };
		return true;
	}
	return false;
}

// Update contact information
function updateContactInfo(updates) {
	Object.assign(contactInfo, updates);
}

// Update social media link
function updateSocialMedia(platform, updates) {
	const index = contactInfo.socialMedia.findIndex(
		(sm) => sm.platform.toLowerCase() === platform.toLowerCase()
	);
	if (index !== -1) {
		contactInfo.socialMedia[index] = {
			...contactInfo.socialMedia[index],
			...updates,
		};
		return true;
	}
	return false;
}

// Update the awards page to show more details
function populateAwardCategoryDetails(category) {
	return `
			<div class="bg-secondary rounded-lg p-6 shadow-lg">
					<div class="mb-6">
							<img src="${category.image}" alt="${category.title}" class="w-full h-48 object-cover rounded-lg mb-4">
							<h2 class="text-2xl font-bold mb-2">${category.title}</h2>
					</div>
					
					<a href="#" class="inline-block bg-accent text-primary px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
							Submit Entry
					</a>
			</div>
	`;
}

/* function populateAwardCategoryDetails(category) {
	return `
			<div class="bg-secondary rounded-lg p-6 shadow-lg">
					<div class="mb-6">
							<img src="${category.image}" alt="${
		category.title
	}" class="w-full h-48 object-cover rounded-lg mb-4">
							<h2 class="text-2xl font-bold mb-2">${category.title}</h2>
							<p class="text-gray-300 mb-4">${category.description}</p>
					</div>
					
					<div class="mb-6">
							<h3 class="text-xl font-semibold mb-3">Judging Criteria</h3>
							<ul class="list-disc list-inside text-gray-300">
									${category.criteria.map((criterion) => `<li>${criterion}</li>`).join("")}
							</ul>
					</div>
					
					<div class="mb-4">
							<h3 class="text-xl font-semibold mb-3">Previous Winners</h3>
							<div class="space-y-3">
									${category.previousWinners
										.map(
											(winner) => `
											<div class="bg-primary rounded p-3">
													<div class="font-semibold">${winner.year}</div>
													<div class="text-gray-300">
															${winner.winner}
															${winner.film ? `<span class="text-accent"> • ${winner.film}</span>` : ""}
															${
																winner.director
																	? `<span class="text-accent"> • Dir: ${winner.director}</span>`
																	: ""
															}
													</div>
											</div>
									`
										)
										.join("")}
							</div>
					</div>
					
					<a href="#" class="inline-block bg-accent text-primary px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
							Submit Entry
					</a>
			</div>
	`;
}

*/

// Update the getLatestStories function to return more stories
function getLatestStories(count = 5) {
	return featuredStories.filter((story) => story.featured).slice(0, count);
}

// Get upcoming festivals
function getUpcomingFestivals() {
	const now = new Date();
	return festivalStories
		.filter((festival) => new Date(festival.date) > now)
		.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Add a function to get the full social media data
function getSocialMediaData(platform) {
	const socialMedia = contactInfo.socialMedia;
	return (
		socialMedia.find(
			(sm) => sm.platform.toLowerCase() === platform.toLowerCase()
		) || null
	);
}

// Export all data and functions
window.nmtaData = {
	config: siteConfig,
	contact: contactInfo,
	navigation: navigationLinks,
	awards: awardCategories,
	stories: featuredStories,
	festivals: festivalStories,
	addAwardCategory,
	updateAwardCategory,
	addFeaturedStory,
	updateFeaturedStory,
	addFestivalStory,
	updateFestivalStory,
	updateContactInfo,
	updateSocialMedia,
	getLatestStories,
	getUpcomingFestivals,
	populateAwardCategoryDetails,
	getSocialMediaData,
};

window.nmtaData = nmtaData;

nmtaData.updateContactInfo({
	phone: "+234 904 357 6347",
	email: "contact@nmtawards.com",
});
