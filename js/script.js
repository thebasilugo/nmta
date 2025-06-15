// Main JavaScript file for the NMTA website

// Tailwind Configuration
const tailwindConfig = {
	theme: {
		extend: {
			colors: {
				primary: "var(--primary-color)",
				secondary: "var(--secondary-color)",
				accent: "var(--accent-color)",
				"gold-light": "var(--gold-light)",
				"gold-medium": "var(--gold-medium)",
				"gold-dark": "var(--gold-dark)",
				"deep-blue": "var(--deep-blue)",
				"midnight-blue": "var(--midnight-blue)",
				"navy-highlight": "var(--navy-highlight)",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Playfair Display", "serif"],
			},
		},
	},
};

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
	console.log("NMTA Website initialized");

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
});

// Initialize Tailwind CSS configuration
function initializeTailwind() {
	// Check if tailwind object exists. If not, declare it.
	if (typeof tailwind === "undefined") {
		window.tailwind = {
			config: {},
		};
	}

	if (typeof tailwind !== "undefined") {
		tailwind.config = tailwindConfig;
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
			(item.url === "awards.html" && isAwardsPage())
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
	const contactSection = document.querySelector(
		"footer h3:nth-of-type(3) + ul"
	);
	if (contactSection) {
		const { email, phone, address } = window.nmtaData.contact;
		contactSection.innerHTML = `
					<li>Email: ${email}</li>
					<li>Phone: ${phone}</li>
					<li>Address: ${address}</li>
			`;
	}

	// Update copyright year
	const copyrightElement = document.querySelector("footer .border-t p");
	if (copyrightElement) {
		const currentYear = new Date().getFullYear();
		copyrightElement.innerHTML = `&copy; ${currentYear} ${window.nmtaData.config.siteName}. All rights reserved.`;
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
					<div class="bg-accent text-primary rounded-lg p-3">
							<span class="text-3xl font-bold">${months}</span>
							<p class="text-xs font-semibold">Months</p>
					</div>
					<div class="bg-accent text-primary rounded-lg p-3">
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
	const storiesContainer = document.querySelector(
		"#main-content .lg\\:col-span-4 .space-y-4"
	);
	if (!storiesContainer) return;

	storiesContainer.innerHTML = "";

	const latestStories = window.nmtaData.getLatestStories();

	latestStories.forEach((story) => {
		const storyElement = document.createElement("div");
		storyElement.className =
			"bg-primary rounded-lg p-4 hover:bg-opacity-80 transition-colors";
		storyElement.innerHTML = `
					<span class="text-xs text-gray-400">${story.date}</span>
					<h3 class="text-lg font-semibold mb-2">${story.title}</h3>
					<p class="text-gray-300 mb-2">${story.summary}</p>
					<a href="${story.url}" class="text-accent hover:underline text-sm">Read More</a>
			`;
		storiesContainer.appendChild(storyElement);
	});
}

// Populate festival stories on home page
function populateFestivalStories() {
	const festivalContainer = document.querySelector(
		"#main-content .lg\\:col-span-5 .space-y-6"
	);
	if (!festivalContainer) return;

	festivalContainer.innerHTML = "";

	const upcomingFestivals = window.nmtaData.getUpcomingFestivals();

	upcomingFestivals.forEach((festival) => {
		const festivalElement = document.createElement("div");
		festivalElement.className = "bg-primary rounded-lg overflow-hidden";
		festivalElement.innerHTML = `
					<img src="${festival.imageUrl}" alt="${festival.title}" class="w-full h-48 object-cover" />
					<div class="p-4">
							<h3 class="text-xl font-semibold mb-2">${festival.title}</h3>
							<p class="text-gray-300 mb-3">${festival.summary}</p>
							<a href="${festival.url}" class="text-accent hover:underline">Read More</a>
					</div>
			`;
		festivalContainer.appendChild(festivalElement);
	});
}

// Populate award categories on awards page
function populateAwardCategories() {
	const categoriesContainer = document.querySelector(
		"main .grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3"
	);
	if (!categoriesContainer) return;

	categoriesContainer.innerHTML = "";

	window.nmtaData.awards.forEach((category) => {
		const categoryElement = document.createElement("div");
		categoryElement.innerHTML =
			window.nmtaData.populateAwardCategoryDetails(category);
		categoriesContainer.appendChild(categoryElement.firstChild);
	});
}

// Update the initializeFooter function
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
					<li>Email: ${email}</li>
					<li>Phone: ${phone}</li>
					<li>Address: ${address}</li>
			`;
	}

	// Update copyright year
	const copyrightElement = document.querySelector("footer .border-t p");
	if (copyrightElement) {
		const currentYear = new Date().getFullYear();
		copyrightElement.innerHTML = `&copy; ${currentYear} ${window.nmtaData.config.siteName}. All rights reserved.`;
	}
}
