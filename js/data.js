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
}

// Contact Information
const contactInfo = {
  email: "info@nmtawards.com",
  phone: "+234 805 556 4261",
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
}

// Navigation Links
const navigationLinks = [
  { name: "Home", url: "index.html", order: 1 },
  { name: "Movies & Shows", url: "movies-shows.html", order: 2 },
  { name: "Awards", url: "awards.html", order: 3 },
  { name: "News & Blog", url: "news-blog.html", order: 4 },
  { name: "About", url: "about.html", order: 5 },
]

// jury members with detailed information
const juryMembers = [
  {
    name: "Ogova Oondego",
    imageurl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    country: "Kenya",
    affiliation: "Kenya Film Commission",
    role: "Film Director & Producer",
    bio: "Award-winning filmmaker with over 20 years of experience in African cinema. Known for his groundbreaking work in East African storytelling and cultural preservation through film.",
  },
  {
    name: "Sadiq Tafawa Balewa",
    imageurl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    country: "Nigeria",
    affiliation: "Nigerian Film Corporation",
    role: "Film Executive & Producer",
    bio: "Veteran film executive and producer who has been instrumental in shaping modern Nollywood. His contributions to the industry span over three decades.",
  },
  {
    name: "Tade Ogidan",
    imageurl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    country: "Nigeria",
    affiliation: "OGD Pictures",
    role: "Director & Screenwriter",
    bio: "Renowned Nigerian filmmaker known for his compelling narratives and technical excellence. His films have won numerous awards both locally and internationally.",
  },
  {
    name: "Bond Emeruwa",
    imageurl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
    country: "Nigeria",
    affiliation: "Independent Filmmaker",
    role: "Director & Actor",
    bio: "Multi-talented filmmaker and actor who has made significant contributions to contemporary Nigerian cinema with his innovative storytelling approach.",
  },
  {
    name: "Rikkya Atta",
    imageurl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    country: "Nigeria",
    affiliation: "Nollywood Actress Guild",
    role: "Actress & Producer",
    bio: "Accomplished actress and producer known for her powerful performances and commitment to promoting women's voices in African cinema.",
  },
  {
    name: "Fred Amata",
    imageurl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    country: "Nigeria",
    affiliation: "Directors Guild of Nigeria",
    role: "Director & Actor",
    bio: "Veteran actor and director with decades of experience in Nollywood. He has been a mentor to many upcoming filmmakers and continues to shape the industry.",
  },
]

//patron/advisory board with detailed information
const patronAndAdvisory = [
  {
    name: "Zeb Ejiro",
    imageurl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    affiliation: "Klink Studios",
    role: "Pioneer Director & Producer",
    bio: "One of the founding fathers of modern Nollywood, Zeb Ejiro has directed over 200 films and mentored countless filmmakers. His work laid the foundation for Nigeria's film industry.",
  },
  {
    name: "Mobert Ajaegbu",
    imageurl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
    affiliation: "Film Producers Association",
    role: "Producer & Industry Executive",
    bio: "Veteran producer and industry executive who has been instrumental in establishing professional standards in Nollywood production and distribution.",
  },
  {
    name: "Andy Boyo",
    imageurl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    affiliation: "Independent Producer",
    role: "Producer & Director",
    bio: "Acclaimed producer and director known for his high-quality productions and commitment to storytelling excellence in Nigerian cinema.",
  },
  {
    name: "Pete Edochie",
    imageurl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    affiliation: "Actors Guild of Nigeria",
    role: "Veteran Actor",
    bio: "Legendary Nigerian actor and cultural icon, Pete Edochie is widely regarded as one of Africa's finest actors. His performances have defined excellence in Nollywood for decades.",
  },
  {
    name: "Tunde Kelani",
    imageurl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
    affiliation: "Mainframe Film & Television Productions",
    role: "Director & Producer",
    bio: "Award-winning filmmaker known for his artistic vision and cultural storytelling. His films have been celebrated at international film festivals worldwide.",
  },
  {
    name: "Mahmoud Alli Balogun",
    imageurl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    affiliation: "National Film Institute",
    role: "Film Scholar & Educator",
    bio: "Distinguished film scholar and educator who has contributed significantly to film education and research in Nigeria. His academic work has shaped film theory in Africa.",
  },
]

// Award Categories - Extended
const awardCategories = [
  {
    id: "bp2026",
    title: "Best Picture",
    description: "Honoring the year's most outstanding Nigerian film production.",
    criteria: ["Production Quality", "Story", "Direction", "Overall Impact"],
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
    description: "Recognizing exceptional achievement in film direction.",
    criteria: ["Vision", "Execution", "Innovation", "Leadership"],
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
    description: "Celebrating outstanding male lead performances in Nigerian cinema.",
    criteria: ["Performance", "Character Development", "Screen Presence"],
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
    description: "Recognizing exceptional female lead performances in Nigerian cinema.",
    criteria: ["Performance", "Character Development", "Screen Presence"],
    image:
      "https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
    previousWinners: [
      { year: 2025, winner: "Aisha Ibrahim", film: "Desert Rose" },
      { year: 2024, winner: "Grace Okonjo", film: "The Promise" },
    ],
  },
  {
    id: "bsp2026",
    title: "Best Supporting Performance",
    description: "Honoring outstanding supporting roles that enhance the story.",
    criteria: ["Character Impact", "Scene Presence", "Role Development"],
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
    previousWinners: [
      { year: 2025, winner: "David Adeleke", film: "Family Ties" },
      { year: 2024, winner: "Sarah Mensah", film: "The Gathering" },
    ],
  },
  {
    id: "bsc2026",
    title: "Best Screenplay",
    description: "Celebrating exceptional storytelling and script writing.",
    criteria: ["Story Structure", "Dialogue", "Character Development"],
    image:
      "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
    previousWinners: [
      { year: 2025, winner: "Oluwaseun Afolabi", film: "The Journey Home" },
      { year: 2024, winner: "Chinua Achebe Jr.", film: "Legacy" },
    ],
  },
  {
    id: "bci2026",
    title: "Best Cinematography",
    description: "Recognizing excellence in visual storytelling and camera work.",
    criteria: ["Visual Composition", "Lighting", "Camera Movement"],
    image:
      "https://images.unsplash.com/photo-1500940405973-72f790c6582a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
    previousWinners: [
      { year: 2025, winner: "Hassan Mohammed", film: "Lagos Nights" },
      { year: 2024, winner: "Tunde Kelani", film: "Sacred Waters" },
    ],
  },
  {
    id: "bve2026",
    title: "Best Visual Effects",
    description: "Honoring innovative use of visual effects in storytelling.",
    criteria: ["Technical Excellence", "Integration", "Creative Impact"],
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
    previousWinners: [
      { year: 2025, winner: "TechVision Studios", film: "Future Lagos" },
      { year: 2024, winner: "Digital Dreams", film: "The Ancient Ones" },
    ],
  },
  {
    id: "bst2026",
    title: "Best Sound",
    description: "Celebrating excellence in sound design and audio mixing.",
    criteria: ["Sound Design", "Music Integration", "Audio Quality"],
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
    previousWinners: [
      { year: 2025, winner: "SoundMasters Ltd", film: "The Beat" },
      { year: 2024, winner: "AudioCraft", film: "Silent Echoes" },
    ],
  },
]

// Featured Stories - Extended
let featuredStories = [
  {
    id: "fs001",
    date: "May 15, 2025",
    title: "Rising Stars: New Faces in Nollywood",
    summary: "Discover the fresh talent making waves in the Nigerian film industry.",
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
    summary: "See who's in the running for Nigeria's biggest night in entertainment.",
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
]

// Festival Stories
const festivalStories = [
  {
    id: "fest001",
    title: "Africa Magic Viewers' Choice Awards (AMVCA) 2025",
    summary: "The most prestigious awards celebrating excellence in African film and television.",
    content: "Full article content here...",
    imageUrl: "https://img.freepik.com/free-photo/oscar-statuette-film-popcorn_23-2147699798.jpg",
    date: "June 15, 2025",
    location: "Lagos, Nigeria",
    url: "#",
  },
  {
    id: "fest002",
    title: "Lagos International Film Festival 2025",
    summary: "Showcasing the best of Nigerian cinema alongside international films.",
    content: "Full article content here...",
    imageUrl: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg",
    date: "July 20, 2025",
    location: "Lagos, Nigeria",
    url: "#",
  },
  {
    id: "fest003",
    title: "Nigerian Films at TIFF 2025",
    summary: "Nigerian filmmakers make waves at the Toronto International Film Festival.",
    content: "Full article content here...",
    imageUrl: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg",
    date: "September 5, 2025",
    location: "Toronto, Canada",
    url: "#",
  },
]

// Data Management Functions

// Add new award category
function addAwardCategory(category) {
  if (!category.id) {
    category.id = `ac${Date.now()}`
  }
  awardCategories.push(category)
  return category.id
}

// Update award category
function updateAwardCategory(id, updates) {
  const index = awardCategories.findIndex((cat) => cat.id === id)
  if (index !== -1) {
    awardCategories[index] = { ...awardCategories[index], ...updates }
    return true
  }
  return false
}

// Add new featured story
function addFeaturedStory(story) {
  if (!story.id) {
    story.id = `fs${Date.now()}`
  }
  story.date = story.date || new Date().toLocaleDateString()
  featuredStories.unshift(story)
  if (featuredStories.length > 10) {
    featuredStories = featuredStories.slice(0, 10) // Keep only 10 most recent stories
  }
  return story.id
}

// Update featured story
function updateFeaturedStory(id, updates) {
  const index = featuredStories.findIndex((story) => story.id === id)
  if (index !== -1) {
    featuredStories[index] = { ...featuredStories[index], ...updates }
    return true
  }
  return false
}

// Add new festival story
function addFestivalStory(festival) {
  if (!festival.id) {
    festival.id = `fest${Date.now()}`
  }
  festivalStories.push(festival)
  return festival.id
}

// Update festival story
function updateFestivalStory(id, updates) {
  const index = festivalStories.findIndex((fest) => fest.id === id)
  if (index !== -1) {
    festivalStories[index] = { ...festivalStories[index], ...updates }
    return true
  }
  return false
}

// Update contact information
function updateContactInfo(updates) {
  Object.assign(contactInfo, updates)
}

// Update social media link
function updateSocialMedia(platform, updates) {
  const index = contactInfo.socialMedia.findIndex((sm) => sm.platform.toLowerCase() === platform.toLowerCase())
  if (index !== -1) {
    contactInfo.socialMedia[index] = {
      ...contactInfo.socialMedia[index],
      ...updates,
    }
    return true
  }
  return false
}

// Update the awards page to show more details
function populateAwardCategoryDetails(category) {
  return `
			<div class="bg-secondary rounded-lg p-6 shadow-lg">
					<div class="mb-6">
							<img src="${category.image}" alt="${category.title}" class="w-full h-48 object-cover rounded-lg mb-4">
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
															${winner.director ? `<span class="text-accent"> • Dir: ${winner.director}</span>` : ""}
													</div>
											</div>
									`,
                    )
                    .join("")}
							</div>
					</div>
					
					<a href="#" class="inline-block bg-accent text-primary px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
							Submit Entry
					</a>
			</div>
	`
}

// Update the getLatestStories function to return more stories
function getLatestStories(count = 5) {
  return featuredStories.filter((story) => story.featured).slice(0, count)
}

// Get upcoming festivals
function getUpcomingFestivals() {
  const now = new Date()
  return festivalStories
    .filter((festival) => new Date(festival.date) > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
}

// Add a function to get the full social media data
function getSocialMediaData(platform) {
  const socialMedia = contactInfo.socialMedia
  return socialMedia.find((sm) => sm.platform.toLowerCase() === platform.toLowerCase()) || null
}

// Export all data and functions
const nmtaData = {
  config: siteConfig,
  contact: contactInfo,
  navigation: navigationLinks,
  awards: awardCategories,
  stories: featuredStories,
  festivals: festivalStories,
  juryMembers: juryMembers,
  patronAndAdvisory: patronAndAdvisory,
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
}

nmtaData.updateContactInfo({
  phone: "+234 904 357 6347",
  email: "contact@nmtawards.com",
})

window.nmtaData = nmtaData
