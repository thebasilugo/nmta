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
document.addEventListener("DOMContentLoaded", () => {
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
		a.className = "hover:text-gold-medium transition-colors";

		// Highlight current page
		if (
			(item.url === "index.html" && isHomePage()) ||
			(item.url === "awards.html" && isAwardsPage()) ||
			(item.url === "about.html" &&
				window.location.pathname.endsWith("about.html"))
		) {
			a.classList.add("text-gold-medium");
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
					`<li><a href="${item.url}" class="hover:text-gold-medium transition-colors">${item.name}</a></li>`
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
	// Set hero background image for awards page
	const heroSection = document.getElementById("hero");
	if (heroSection) {
		heroSection.style.backgroundImage =
			"url('https://img.freepik.com/free-photo/golden-trophy-cup-dark-background-with-dramatic-lighting-generative-ai_191095-1435.jpg')";
		heroSection.style.backgroundPosition = "center";
	}

	// Populate award categories
	populateAwardCategories();

	// Populate notable persons sections
	populateJuryMembersSection();
	populateAdvisoryBoardSection();
}

// Populate jury members
function populateJuryMembersSection() {
	const juryContainer = document.getElementById("jury-members");
	if (!juryContainer || !window.nmtaData.juryMembers) return;

	juryContainer.innerHTML = "";

	window.nmtaData.juryMembers.forEach((member) => {
		const memberCard = document.createElement("div");
		memberCard.className = "person-card";

		// Default image if none provided
		const imageUrl =
			member.imageurl && member.imageurl !== "#"
				? member.imageurl
				: `https://ui-avatars.com/api/?name=${encodeURIComponent(
						member.name
				  )}&background=0D2339&color=D4AF37&size=150`;

		memberCard.innerHTML = `
      <div class="relative">
        <img src="${imageUrl}" alt="${member.name}" class="person-image">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue to-transparent p-2 rounded-b-full">
          <div class="text-center text-gold-light text-sm font-semibold">${capitalizeWords(
						member.name
					)}</div>
        </div>
      </div>
      <div class="person-name">${capitalizeWords(member.name)}</div>
      <div class="person-role">Jury Member</div>
      <div class="person-country">${member.country}</div>
    `;

		juryContainer.appendChild(memberCard);
	});
}

// Populate advisory board
function populateAdvisoryBoardSection() {
	const advisoryContainer = document.getElementById("advisory-board");
	if (!advisoryContainer || !window.nmtaData.patronAndAdvisory) return;

	advisoryContainer.innerHTML = "";

	window.nmtaData.patronAndAdvisory.forEach((member) => {
		const memberCard = document.createElement("div");
		memberCard.className = "person-card";

		// Default image if none provided
		const imageUrl =
			member.imageurl && member.imageurl !== ""
				? member.imageurl
				: `https://ui-avatars.com/api/?name=${encodeURIComponent(
						member.name
				  )}&background=0D2339&color=D4AF37&size=150`;

		memberCard.innerHTML = `
      <div class="relative">
        <img src="${imageUrl}" alt="${member.name}" class="person-image">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue to-transparent p-2 rounded-b-full">
          <div class="text-center text-gold-light text-sm font-semibold">${capitalizeWords(
						member.name
					)}</div>
        </div>
      </div>
      <div class="person-name">${capitalizeWords(member.name)}</div>
      <div class="person-role">Advisory Board Member</div>
    `;

		advisoryContainer.appendChild(memberCard);
	});
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
	const storiesContainer = document.querySelector(
		"#main-content .lg\\:col-span-4 .space-y-4"
	);
	if (!storiesContainer) return;

	storiesContainer.innerHTML = "";

	const latestStories = window.nmtaData.getLatestStories();

	latestStories.forEach((story) => {
		const storyElement = document.createElement("div");
		storyElement.className =
			"bg-deep-blue rounded-lg p-4 hover:bg-navy-highlight transition-colors border border-gold-dark mb-4";
		storyElement.innerHTML = `
      <span class="text-xs text-gray-400">${story.date}</span>
      <h3 class="text-lg font-semibold mb-2 text-gold-light">${story.title}</h3>
      <p class="text-gray-300 mb-2">${story.summary}</p>
      <a href="${story.url}" class="text-gold-medium hover:text-gold-light hover:underline text-sm transition-colors">Read More</a>
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
		festivalElement.className =
			"bg-deep-blue rounded-lg overflow-hidden border border-gold-dark mb-6";
		festivalElement.innerHTML = `
      <img src="${festival.imageUrl}" alt="${festival.title}" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2 text-gold-light">${festival.title}</h3>
        <p class="text-gray-300 mb-3">${festival.summary}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gold-medium">${festival.date}</span>
          <a href="${festival.url}" class="text-gold-medium hover:text-gold-light hover:underline transition-colors">Read More</a>
        </div>
      </div>
    `;
		festivalContainer.appendChild(festivalElement);
	});
}

// Update the populateAwardCategories function to handle the expanded list of categories
function populateAwardCategories() {
	const categoriesContainer = document.getElementById(
		"award-categories-container"
	);
	if (!categoriesContainer) return;

	categoriesContainer.innerHTML = "";

	// Add a filter/search functionality for the categories
	const filterContainer = document.createElement("div");
	filterContainer.className = "mb-8 w-full";
	filterContainer.innerHTML = `
    <div class="relative max-w-md mx-auto">
      <input type="text" id="category-search" placeholder="Search award categories..." 
        class="w-full px-4 py-2 rounded-lg bg-deep-blue text-white border border-gold-medium focus:border-gold-light focus:outline-none">
      <button id="clear-search" class="absolute right-3 top-2 text-gold-medium hover:text-gold-light">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  `;

	// Insert the filter before the categories grid
	categoriesContainer.parentNode.insertBefore(
		filterContainer,
		categoriesContainer
	);

	// Create a wrapper for the categories with pagination controls
	const categoriesWrapper = document.createElement("div");
	categoriesWrapper.className = "categories-wrapper";
	categoriesContainer.parentNode.insertBefore(
		categoriesWrapper,
		categoriesContainer
	);
	categoriesWrapper.appendChild(categoriesContainer);

	// Add pagination controls
	const paginationContainer = document.createElement("div");
	paginationContainer.className =
		"pagination-controls flex justify-center mt-8 space-x-2";
	categoriesWrapper.appendChild(paginationContainer);

	// Set up pagination
	const itemsPerPage = 9;
	const currentPage = 1;
	const totalPages = Math.ceil(window.nmtaData.awards.length / itemsPerPage);

	// Function to render categories for the current page
	function renderCategories(page, filterText = "") {
		categoriesContainer.innerHTML = "";

		// Filter categories if search text is provided
		let filteredCategories = window.nmtaData.awards;
		if (filterText) {
			filterText = filterText.toLowerCase();
			filteredCategories = window.nmtaData.awards.filter(
				(category) =>
					category.title.toLowerCase().includes(filterText) ||
					category.description.toLowerCase().includes(filterText)
			);
		}

		// Calculate pagination
		const totalFilteredPages = Math.ceil(
			filteredCategories.length / itemsPerPage
		);
		const startIndex = (page - 1) * itemsPerPage;
		const endIndex = Math.min(
			startIndex + itemsPerPage,
			filteredCategories.length
		);
		const categoriesToShow = filteredCategories.slice(startIndex, endIndex);

		// Update pagination controls
		updatePaginationControls(page, totalFilteredPages, filterText);

		// If no results found
		if (categoriesToShow.length === 0) {
			const noResults = document.createElement("div");
			noResults.className = "col-span-3 text-center py-12";
			noResults.innerHTML = `
        <p class="text-xl text-gold-light mb-4">No award categories found matching "${filterText}"</p>
        <button id="reset-search" class="bg-gold-medium text-primary px-4 py-2 rounded hover:bg-gold-light transition-colors font-bold">
          Show All Categories
        </button>
      `;
			categoriesContainer.appendChild(noResults);

			// Add event listener to reset button
			setTimeout(() => {
				const resetButton = document.getElementById("reset-search");
				if (resetButton) {
					resetButton.addEventListener("click", () => {
						const searchInput = document.getElementById("category-search");
						if (searchInput) searchInput.value = "";
						renderCategories(1);
					});
				}
			}, 0);

			return;
		}

		// Render the categories for this page
		categoriesToShow.forEach((category) => {
			const categoryElement = document.createElement("div");
			categoryElement.className = "award-category";

			// Create enhanced award category card
			categoryElement.innerHTML = `
        <div class="award-category-header">
          <img src="${category.image}" alt="${category.title}" class="w-full h-48 object-cover rounded-lg mb-4">
          <h2 class="text-2xl font-bold mb-2 text-gold-medium">${category.title}</h2>
        </div>
        
      `;

			/* 
      // Create enhanced award category card
			categoryElement.innerHTML = `
        <div class="award-category-header">
          <img src="${category.image}" alt="${
				category.title
			}" class="w-full h-48 object-cover rounded-lg mb-4">
          <h2 class="text-2xl font-bold mb-2 text-gold-medium">${
						category.title
					}</h2>
          <p class="text-gray-300 mb-4">${category.description}</p>
        </div>
        
        <div class="award-category-body">
          <div class="award-criteria mb-6">
            <h3 class="text-xl font-semibold mb-3 text-gold-light">Judging Criteria</h3>
            <ul class="list-disc list-inside text-gray-300">
              ${category.criteria
								.map((criterion) => `<li>${criterion}</li>`)
								.join("")}
            </ul>
          </div>
          
          <div class="award-winners mb-4">
            <h3 class="text-xl font-semibold mb-3 text-gold-light">Previous Winners</h3>
            <div class="space-y-3">
              ${category.previousWinners
								.map(
									(winner) => `
                  <div class="winner-card">
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
          
          <a href="#" class="inline-block bg-gold-medium text-primary px-4 py-2 rounded hover:bg-gold-light transition-colors font-bold">
            Submit Entry
          </a>
        </div>
      `;

      */

			categoriesContainer.appendChild(categoryElement);
		});
	}

	// Function to update pagination controls
	function updatePaginationControls(page, totalPages, filterText = "") {
		paginationContainer.innerHTML = "";

		if (totalPages <= 1) return;

		// Previous button
		const prevButton = document.createElement("button");
		prevButton.className = `px-3 py-1 rounded ${
			page === 1
				? "bg-deep-blue text-gray-500 cursor-not-allowed"
				: "bg-navy-highlight text-gold-medium hover:bg-deep-blue hover:text-gold-light"
		}`;
		prevButton.innerHTML = "Previous";
		prevButton.disabled = page === 1;
		if (page !== 1) {
			prevButton.addEventListener("click", () =>
				renderCategories(page - 1, filterText)
			);
		}
		paginationContainer.appendChild(prevButton);

		// Page numbers
		for (let i = 1; i <= totalPages; i++) {
			const pageButton = document.createElement("button");
			pageButton.className = `px-3 py-1 rounded ${
				i === page
					? "bg-gold-medium text-primary font-bold"
					: "bg-navy-highlight text-gold-medium hover:bg-deep-blue hover:text-gold-light"
			}`;
			pageButton.innerHTML = i.toString();
			pageButton.addEventListener("click", () =>
				renderCategories(i, filterText)
			);
			paginationContainer.appendChild(pageButton);
		}

		// Next button
		const nextButton = document.createElement("button");
		nextButton.className = `px-3 py-1 rounded ${
			page === totalPages
				? "bg-deep-blue text-gray-500 cursor-not-allowed"
				: "bg-navy-highlight text-gold-medium hover:bg-deep-blue hover:text-gold-light"
		}`;
		nextButton.innerHTML = "Next";
		nextButton.disabled = page === totalPages;
		if (page !== totalPages) {
			nextButton.addEventListener("click", () =>
				renderCategories(page + 1, filterText)
			);
		}
		paginationContainer.appendChild(nextButton);
	}

	// Initial render
	renderCategories(currentPage);

	// Set up search functionality
	setTimeout(() => {
		const searchInput = document.getElementById("category-search");
		const clearButton = document.getElementById("clear-search");

		if (searchInput) {
			searchInput.addEventListener("input", (e) => {
				const searchText = e.target.value.trim();
				renderCategories(1, searchText);
			});
		}

		if (clearButton) {
			clearButton.addEventListener("click", () => {
				if (searchInput) searchInput.value = "";
				renderCategories(1);
			});
		}
	}, 0);
}

// Toggle between color schemes (can be called from a button click)
function toggleColorScheme() {
	document.body.classList.toggle("alt-theme");
}
