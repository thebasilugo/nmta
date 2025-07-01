// Main JavaScript file for the NMTA website

// Tailwind Configuration
const tailwindConfig = {
	theme: {
		extend: {
			colors: {
				primary: "#001e38",
				secondary: "#001822",
				accent: "#d4af37", // Gold color for awards theme
				"gold-light": "#f0d78c",
				"gold-medium": "#d4af37",
				"gold-dark": "#b8860b",
				"black-gold": "#1a1500",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Playfair Display", "serif"],
			},
		},
	},
};

// Declare tailwind variable
const tailwind = window.tailwind || { config: {} };

// Enhanced Loading Screen Management
let isNavigating = false;

function showLoadingScreen() {
	if (isNavigating) return;
	isNavigating = true;

	const loadingScreen = document.getElementById("loading-screen");
	if (loadingScreen) {
		loadingScreen.classList.remove("hidden");
		loadingScreen.classList.add("show");
		// Prevent scrolling while loading
		document.body.style.overflow = "hidden";
	}
}

function hideLoadingScreen() {
	const loadingScreen = document.getElementById("loading-screen");
	if (loadingScreen) {
		// Smooth transition out
		setTimeout(() => {
			loadingScreen.classList.remove("show");
			loadingScreen.classList.add("hidden");
			document.body.style.overflow = "";
			isNavigating = false;
		}, 600); // Slightly longer delay for smoother transition
	}
}

// Enhanced page navigation with loading
function navigateWithLoading(url) {
	if (isNavigating) return;

	showLoadingScreen();

	// Preload the target page
	const link = document.createElement("link");
	link.rel = "prefetch";
	link.href = url;
	document.head.appendChild(link);

	setTimeout(() => {
		window.location.href = url;
	}, 400);
}

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
	console.log("NMTA Website initialized");

	// Hide loading screen after page loads with a small delay
	setTimeout(() => {
		hideLoadingScreen();
	}, 300);

	// Initialize Tailwind config
	initializeTailwind();

	// Initialize site-wide elements
	initializeNavigation();
	initializeFooter();

	// Page-specific initializations
	if (isHomePage()) {
		initializeHomePage();
	} else if (isAwardsPage()) {
		initializeAwardsPage();
	}

	// Initialize mobile menu toggle
	initializeMobileMenu();

	// Initialize scroll reveal
	initializeScrollReveal();

	// Initialize enhanced navigation
	initializeEnhancedNavigation();
});

// Initialize Tailwind CSS configuration
function initializeTailwind() {
	// Check if tailwind object exists. If not, declare it.
	if (typeof tailwind === "undefined") {
		window.tailwind = {
			config: {},
		};
	}

	if (typeof window.tailwind !== "undefined") {
		window.tailwind.config = tailwindConfig;
		console.log("Tailwind CSS configured");
	} else {
		console.warn("Tailwind CSS not loaded");
	}
}

// Check if current page is home page
function isHomePage() {
	return (
		window.location.pathname.endsWith("index.html") ||
		window.location.pathname === "/" ||
		window.location.pathname === ""
	);
}

// Check if current page is awards page
function isAwardsPage() {
	return window.location.pathname.endsWith("awards.html");
}

// Initialize navigation menu
function initializeNavigation() {
	const navContainer = document.querySelector("nav ul");
	if (!navContainer) return;

	// Clear existing navigation
	navContainer.innerHTML = "";

	// Sort navigation items by order
	const sortedNav = [...window.nmtaData.navigation].sort(
		(a, b) => a.order - b.order
	);

	// Populate navigation from site data
	sortedNav.forEach((item) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.href = item.url;
		a.textContent = item.name;
		a.className = "hover:text-accent transition-colors";

		// Highlight current page
		if (
			(item.url === "index.html" && isHomePage()) ||
			(item.url === "awards.html" && isAwardsPage()) ||
			(item.url === "about.html" &&
				window.location.pathname.endsWith("about.html"))
		) {
			a.classList.add("text-accent");
		}

		li.appendChild(a);
		navContainer.appendChild(li);
	});
}

// Initialize footer content
function initializeFooter() {
	// Update site name in footer
	const footerSiteNameElements = document.querySelectorAll("footer h3");
	footerSiteNameElements.forEach((el) => {
		if (el.textContent.includes("NMTA")) {
			el.textContent = window.nmtaData.config.shortName;
		}
	});

	// Update contact information
	const contactSection = document.querySelector(".contact-info");
	if (contactSection) {
		const { email, phone, address } = window.nmtaData.contact;
		contactSection.innerHTML = `
      <li><i class="fas fa-envelope mr-2"></i> Email: ${email}</li>
      <li><i class="fas fa-phone mr-2"></i> Phone: ${phone}</li>
      <li><i class="fas fa-map-marker-alt mr-2"></i> Address: ${address}</li>
    `;
	}

	// Update social media links
	const socialMediaContainer = document.querySelector("footer .flex.space-x-4");
	if (socialMediaContainer && window.nmtaData.contact.socialMedia) {
		const socialLinks = socialMediaContainer.querySelectorAll("a");

		// Update each social media link with the correct URL
		window.nmtaData.contact.socialMedia.forEach((platform) => {
			const platformName = platform.platform.toLowerCase();
			let linkElement = null;

			// Find the corresponding link element
			socialLinks.forEach((link) => {
				const ariaLabel = link.getAttribute("aria-label").toLowerCase();
				if (ariaLabel === platformName) {
					linkElement = link;
				}
			});

			// Update the link if found
			if (linkElement) {
				linkElement.href = platform.url;
				linkElement.setAttribute("title", platform.handle);
			}
		});
	}

	// Update NMTA Awards section
	const awardsSection = document.querySelector("footer h3:nth-of-type(4) + p");
	if (awardsSection) {
		awardsSection.textContent = `The ${window.nmtaData.config.currentEdition}th annual ${window.nmtaData.config.siteName} will be held on ${window.nmtaData.config.eventDate} in ${window.nmtaData.config.eventLocation}.`;
	}

	// Update Submit Film button link
	const submitFilmButton = document.querySelector("footer a:last-of-type");
	if (submitFilmButton) {
		submitFilmButton.href = "submit-film.html"; // Or any URL specified in the data
	}

	// Update copyright year
	const copyrightElement = document.querySelector("footer .border-t p");
	if (copyrightElement) {
		const currentYear = new Date().getFullYear();
		copyrightElement.innerHTML = `&copy; ${currentYear} ${window.nmtaData.config.siteName}. All rights reserved.`;
	}

	// Update Quick Links
	const quickLinksContainer = document.querySelector(
		"footer h3:nth-of-type(2) + ul"
	);
	if (quickLinksContainer && window.nmtaData.navigation) {
		// Sort navigation items by order
		const sortedNav = [...window.nmtaData.navigation].sort(
			(a, b) => a.order - b.order
		);

		// Create HTML for quick links
		const quickLinksHTML = sortedNav
			.map(
				(item) =>
					`<li><a href="${item.url}" class="hover:text-accent">${item.name}</a></li>`
			)
			.join("");

		quickLinksContainer.innerHTML = quickLinksHTML;
	}
}

// Initialize mobile menu toggle
function initializeMobileMenu() {
	const mobileMenuButton = document.querySelector("button.md\\:hidden");
	const navMenu = document.querySelector("nav ul");

	if (mobileMenuButton && navMenu) {
		mobileMenuButton.addEventListener("click", () => {
			// Toggle mobile menu visibility
			if (navMenu.classList.contains("hidden")) {
				navMenu.classList.remove("hidden");
				navMenu.classList.add(
					"flex",
					"flex-col",
					"absolute",
					"top-16",
					"left-0",
					"right-0",
					"bg-primary",
					"p-4",
					"space-y-4"
				);
			} else {
				navMenu.classList.add("hidden");
				navMenu.classList.remove(
					"flex",
					"flex-col",
					"absolute",
					"top-16",
					"left-0",
					"right-0",
					"bg-primary",
					"p-4",
					"space-y-4"
				);
			}
		});
	}
}

// Initialize home page specific content
function initializeHomePage() {
	// Set hero background image
	const heroSection = document.getElementById("hero");
	if (heroSection) {
		heroSection.style.backgroundImage =
			"url('https://img.freepik.com/free-photo/golden-trophy-cup-dark-background-with-dramatic-lighting-generative-ai_191095-1435.jpg')";
	}

	// Initialize countdown
	updateMonthlyCountdown();
	setInterval(updateMonthlyCountdown, 86400000); // Update once per day

	// Populate featured stories
	populateFeaturedStories();

	// Populate festival stories
	populateFestivalStories();
}

// Initialize awards page specific content
function initializeAwardsPage() {
	// Populate award categories
	populateAwardCategories();

	// Populate notable persons sections
	populateJuryMembers();
	populateAdvisoryBoard();
}

// Populate jury members with enhanced cards
function populateJuryMembers() {
	const juryContainer = document.getElementById("jury-members");
	if (!juryContainer || !window.nmtaData.juryMembers) return;

	juryContainer.innerHTML = "";

	window.nmtaData.juryMembers.forEach((member, index) => {
		const memberCard = document.createElement("div");
		memberCard.className = "person-card scroll-reveal";
		memberCard.style.animationDelay = `${index * 0.1}s`;

		// Default image if none provided
		const imageUrl =
			member.imageurl && member.imageurl !== "#"
				? member.imageurl
				: "https://via.placeholder.com/300x300?text=Jury+Member";

		memberCard.innerHTML = `
      <img src="${imageUrl}" alt="${member.name}" class="person-image">
      <div class="person-name">${capitalizeWords(member.name)}</div>
      <div class="person-role">${member.role}</div>
      <div class="person-affiliation">${member.affiliation}</div>
      <div class="person-bio">${member.bio}</div>
      <div class="person-country">${member.country}</div>
    `;

		juryContainer.appendChild(memberCard);
	});

	// Trigger scroll reveal animation
	setTimeout(() => {
		document.querySelectorAll(".scroll-reveal").forEach((el) => {
			el.classList.add("revealed");
		});
	}, 100);
}

// Populate advisory board with enhanced cards
function populateAdvisoryBoard() {
	const advisoryContainer = document.getElementById("advisory-board");
	if (!advisoryContainer || !window.nmtaData.patronAndAdvisory) return;

	advisoryContainer.innerHTML = "";

	window.nmtaData.patronAndAdvisory.forEach((member, index) => {
		const memberCard = document.createElement("div");
		memberCard.className = "person-card scroll-reveal";
		memberCard.style.animationDelay = `${index * 0.1}s`;

		// Default image if none provided
		const imageUrl =
			member.imageurl && member.imageurl !== ""
				? member.imageurl
				: "https://via.placeholder.com/300x300?text=Advisory+Board";

		memberCard.innerHTML = `
      <img src="${imageUrl}" alt="${member.name}" class="person-image">
      <div class="person-name">${capitalizeWords(member.name)}</div>
      <div class="person-role">${member.role}</div>
      <div class="person-affiliation">${member.affiliation}</div>
      <div class="person-bio">${member.bio}</div>
    `;

		advisoryContainer.appendChild(memberCard);
	});

	// Trigger scroll reveal animation
	setTimeout(() => {
		document.querySelectorAll(".scroll-reveal").forEach((el) => {
			el.classList.add("revealed");
		});
	}, 100);
}

// Helper function to capitalize words
function capitalizeWords(str) {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Update monthly countdown
function updateMonthlyCountdown() {
	const countdownContainer = document.getElementById("countdown-container");
	if (!countdownContainer) return;

	const eventDate = new Date(
		`${window.nmtaData.config.eventDate} 20:00:00`
	).getTime();
	const now = new Date().getTime();
	const distance = eventDate - now;

	// Calculate months, days
	const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
	const days = Math.floor(
		(distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
	);

	countdownContainer.innerHTML = `
    <div class="grid grid-cols-2 gap-4 text-center">
      <div class="bg-gold-medium text-primary rounded-lg p-3">
        <span class="text-3xl font-bold">${months}</span>
        <p class="text-xs font-semibold">Months</p>
      </div>
      <div class="bg-gold-medium text-primary rounded-lg p-3">
        <span class="text-3xl font-bold">${days}</span>
        <p class="text-xs font-semibold">Days</p>
      </div>
    </div>
    <p class="mt-3 text-sm">Until NMTA Awards ${new Date(
			eventDate
		).getFullYear()}</p>
  `;
}

// Populate featured stories on home page
function populateFeaturedStories() {
	const storiesContainer = document.querySelector("#latest-stories-container");
	if (!storiesContainer) return;

	storiesContainer.innerHTML = "";

	const latestStories = window.nmtaData.getLatestStories(8); // Get more stories

	latestStories.forEach((story, index) => {
		const storyElement = document.createElement("div");
		storyElement.className =
			"story-card bg-primary rounded-lg p-3 hover:bg-opacity-80 transition-all duration-300 border border-gold-dark scroll-reveal";
		storyElement.style.animationDelay = `${index * 0.1}s`;
		storyElement.innerHTML = `
      <span class="text-xs text-gray-400 block mb-1">${story.date}</span>
      <h3 class="text-sm font-semibold mb-2 text-gold-light line-clamp-2">${story.title}</h3>
      <p class="text-gray-300 mb-2 leading-relaxed text-xs line-clamp-3">${story.summary}</p>
      <a href="${story.url}" class="text-gold-medium hover:text-gold-light text-xs transition-colors duration-300">Read More →</a>
    `;
		storiesContainer.appendChild(storyElement);
	});
}

// Populate festival stories on home page
function populateFestivalStories() {
	const festivalContainer = document.querySelector(
		"#festival-stories-container"
	);
	if (!festivalContainer) return;

	festivalContainer.innerHTML = "";

	// Get all festival stories (not just upcoming ones)
	const allFestivals =
		window.nmtaData.festivals || window.nmtaData.festivalStories || [];

	allFestivals.forEach((festival, index) => {
		const festivalElement = document.createElement("div");
		festivalElement.className =
			"festival-card bg-primary rounded-lg p-4 hover:bg-opacity-80 transition-all duration-300 border border-gold-dark scroll-reveal";
		festivalElement.style.animationDelay = `${index * 0.1}s`;

		// Create clickable link wrapper
		const linkWrapper = festival.url
			? `<a href="${festival.url}" target="_blank" rel="noopener noreferrer" class="block">`
			: "<div>";
		const linkWrapperEnd = festival.url ? "</a>" : "</div>";

		festivalElement.innerHTML = `
      ${linkWrapper}
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0">
            <img src="${festival.imageUrl}" alt="${
			festival.title
		}" class="w-16 h-16 object-cover rounded-lg" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-xs text-gray-400 mb-1">${festival.date} • ${
			festival.location
		}</div>
            <h3 class="text-sm font-semibold mb-1 text-gold-light line-clamp-2">${
							festival.title
						}</h3>
            <p class="text-gray-300 text-xs mb-2 leading-relaxed line-clamp-2">${
							festival.summary
						}</p>
            ${
							festival.url
								? '<span class="text-gold-medium hover:text-gold-light text-xs transition-colors duration-300">Visit Website →</span>'
								: ""
						}
          </div>
        </div>
      ${linkWrapperEnd}
    `;
		festivalContainer.appendChild(festivalElement);
	});
}

// Populate award categories on awards page
function populateAwardCategories() {
	const categoriesContainer = document.querySelector(
		"#award-categories-container"
	);
	if (!categoriesContainer) return;

	categoriesContainer.innerHTML = "";

	window.nmtaData.awards.forEach((category, index) => {
		const categoryElement = document.createElement("div");
		categoryElement.className = "scroll-reveal";
		categoryElement.style.animationDelay = `${index * 0.1}s`;

		// Enhanced category HTML with better styling
		const categoryHTML = `
      <div class="bg-secondary rounded-lg p-6 shadow-lg border border-gold-medium hover:shadow-gold card-enhanced">
        <div class="mb-6">
          <img src="${category.image}" alt="${
			category.title
		}" class="w-full h-48 object-cover rounded-lg mb-4 image-enhanced">
          <h2 class="text-2xl font-bold mb-2 text-gold-medium">${
						category.title
					}</h2>
          <p class="text-gray-300 mb-4 leading-relaxed">${
						category.description
					}</p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3 text-gold-light">Judging Criteria</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-1">
            ${category.criteria
							.map((criterion) => `<li>${criterion}</li>`)
							.join("")}
          </ul>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3 text-gold-light">Previous Winners</h3>
          <div class="space-y-3">
            ${category.previousWinners
							.map(
								(winner) => `
                <div class="bg-primary rounded p-3 border border-gold-dark transition-all duration-300 hover:border-gold-medium">
                  <div class="font-semibold text-gold-light">${
										winner.year
									}</div>
                  <div class="text-gray-300">
                    ${winner.winner}
                    ${
											winner.film
												? `<span class="text-gold-medium"> • ${winner.film}</span>`
												: ""
										}
                    ${
											winner.director
												? `<span class="text-gold-medium"> • Dir: ${winner.director}</span>`
												: ""
										}
                  </div>
                </div>
              `
							)
							.join("")}
          </div>
        </div>

        <a href="#" class="btn-primary w-full text-center">
          Submit Entry
        </a>
      </div>
    `;

		categoryElement.innerHTML = categoryHTML;
		categoriesContainer.appendChild(categoryElement.firstChild);
	});

	// Trigger scroll reveal animation
	setTimeout(() => {
		document.querySelectorAll(".scroll-reveal").forEach((el) => {
			el.classList.add("revealed");
		});
	}, 100);
}

// Add scroll reveal functionality
function initializeScrollReveal() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("revealed");
			}
		});
	}, observerOptions);

	document.querySelectorAll(".scroll-reveal").forEach((el) => {
		el.classList.remove("revealed");
		observer.observe(el);
	});
}

// Initialize enhanced navigation with loading screens
function initializeEnhancedNavigation() {
	// Add loading screen to all navigation links
	const navLinks = document.querySelectorAll(
		"nav a, .btn-primary, .btn-secondary"
	);

	navLinks.forEach((link) => {
		// Skip external links, anchors, and mailto/tel links
		if (
			link.href &&
			!link.href.includes("#") &&
			!link.href.startsWith("mailto:") &&
			!link.href.startsWith("tel:") &&
			link.hostname === window.location.hostname
		) {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				navigateWithLoading(link.href);
			});
		}
	});

	// Handle browser back/forward buttons
	window.addEventListener("pageshow", (event) => {
		if (event.persisted) {
			hideLoadingScreen();
		}
	});

	// Handle page visibility changes
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "visible" && isNavigating) {
			hideLoadingScreen();
		}
	});
}
