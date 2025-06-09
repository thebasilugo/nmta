function renderHeader() {
	const header = document.getElementById("header");
	header.innerHTML = `
<nav class="container mx-auto px-4 py-4 flex justify-between items-center">
<a href="#" class="text-3xl font-bold text-accent font-mono" data-nav="home">TN<span class="text-primary">i</span></a>
<button id="menuToggle" class="md:hidden text-accent">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>
<ul id="mobileMenu" class="hidden md:flex md:space-x-6 absolute md:relative top-full left-0 right-0 bg-secondary md:bg-transparent shadow-md md:shadow-none p-4 md:p-0">
<li><a href="#" class="block py-2 md:py-0 hover:text-accent transition-colors" data-nav="home">Home</a></li>
<li><a href="#" class="block py-2 md:py-0 hover:text-accent transition-colors" data-nav="awards">Awards</a></li>
<li><a href="#" class="block py-2 md:py-0 hover:text-accent transition-colors" data-nav="blog">Blog</a></li>
<li><a href="#" class="block py-2 md:py-0 hover:text-accent transition-colors" data-nav="tni-weekly">TNI Weekly</a></li>
<li><a href="#" class="block py-2 md:py-0 hover:text-accent transition-colors" data-nav="about">About</a></li>
<li><a href="#" class="block py-2 md:py-0 hover:text-accent transition-colors" data-nav="contact">Contact</a></li>
</ul>
</nav>
`;
}

function renderMainContent() {
	const main = document.getElementById("main-content");
	main.innerHTML = `
${renderHeroSection()}
${renderCountdownTimer()}
${renderLatestAwardsNews()}
${renderUpcomingAwards()}
${renderLatestBlogPosts()}
${renderAffiliatesSection()}
`;
}

function renderHeroSection() {
	return `
<section class="bg-cover bg-center h-screen text-white relative" style="background-image: url('https://source.unsplash.com/random/1600x900/?nollywood,cinema')">
<div class="absolute inset-0 bg-black opacity-50"></div>
<div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
<h1 class="text-6xl md:text-8xl font-bold mb-4 font-serif text-accent">Television Nollywood International</h1>
<p class="text-xl md:text-3xl mb-8 font-mono">The Future of Nigerian Cinema</p>
<p class="text-lg mb-8">Founded in 2015 | Headquarters: Lagos, Nigeria</p>
<p class="text-lg mb-8">Television Nollywood International (TNI) is a leading media company dedicated to producing, distributing, and promoting Nollywood films and TV shows to a global audience. With a strong focus on African storytelling, TNI offers premium entertainment through its streaming platform, television network, and YouTube channel.</p>
</div>
</section>
`;
}

function renderCountdownTimer() {
	const countdownDate = new Date("2025-08-15T00:00:00").getTime();
	const now = new Date().getTime();
	const distance = countdownDate - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	return `
<section class="bg-primary text-white py-12">
<div class="container mx-auto px-4 text-center">
<h2 class="text-4xl font-bold mb-8 font-serif">Countdown to TNI Awards 2025</h2>
<div class="flex justify-center gap-8">
${["days", "hours", "minutes", "seconds"]
	.map(
		(unit) => `
<div class="flex flex-col items-center">
<span class="text-5xl font-bold font-mono">${eval(unit)}</span>
<span class="text-sm uppercase font-mono">${unit}</span>
</div>
`
	)
	.join("")}
</div>
</div>
</section>
`;
}

function renderLatestAwardsNews() {
	return `
<section class="py-16 newspaper-bg">
<div class="container mx-auto px-4">
<h2 class="text-4xl font-bold mb-8 text-center text-accent font-serif">Latest Awards News</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
${awardsNews
	.map(
		(news) => `
<div class="bg-secondary rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 futuristic-border">
<img src="${news.image}" alt="${news.title}" class="w-full h-48 object-cover" />
<div class="p-4">
<h3 class="text-xl font-semibold mb-2 text-accent">${news.title}</h3>
<p class="text-gray-300 mb-4">${news.description}</p>
<a href="#" class="text-primary hover:text-accent transition-colors font-mono">Learn More</a>
</div>
</div>
`
	)
	.join("")}
<div class="bg-secondary rounded-lg shadow-lg p-6 futuristic-border">
<h3 class="text-2xl font-bold mb-4 text-accent font-serif">Breaking News</h3>
<ul class="space-y-4">
${latestStories
	.map(
		(story) => `
<li class="bg-primary bg-opacity-20 rounded p-4">
<p class="text-white font-mono">${story}</p>
</li>
`
	)
	.join("")}
</ul>
<a href="#" class="text-accent hover:text-primary transition-colors block mt-4 font-mono">Show more</a>
</div>
</div>
</div>
</section>
`;
}

function renderUpcomingAwards() {
	return `
<section class="py-16 bg-secondary">
<div class="
<section
class="py-16 bg-secondary">
<div class="container mx-auto px-4">
<h2 class="text-4xl font-bold mb-8 text-center text-accent font-serif">Upcoming Awards</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
${upcomingAwards
	.map(
		(award) => `
<div class="bg-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between futuristic-border">
<div>
<h3 class="text-2xl font-semibold mb-2 text-primary">${award.title}
</h3>
;<p class="text-gray-300 mb-4">${award.description}</p>
</div>
<a href="#"
class="bg-accent text-secondary font-bold px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors inline-block text-center font-mono">
Learn More
</a>
</div>
`
	)
	.join("")}
</div>
</div>
</section>
`;
}

function renderLatestBlogPosts() {
	return `
<section class="py-16 newspaper-bg">
<div class="container mx-auto px-4">
<h2 class="text-4xl font-bold mb-8 text-center text-accent font-serif">Latest Blog Posts</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
${blogPosts
	.map(
		(post) => `
<article class="bg-secondary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 futuristic-border">
<img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover" />
<div class="p-6">
<h3 class="text-2xl font-bold mb-2 text-accent font-serif">${post.title}</h3>
<p class="text-sm text-gray-400 mb-4 font-mono">By ${post.author} | ${post.date}</p>
<div class="mb-4">
<p class="text-gray-300 leading-relaxed font-sans first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-accent">
${post.description}
</p>
</div>
<a href="#" class="text-primary hover:text-accent transition-colors font-semibold flex items-center font-mono">
Read more
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>
</a>
</div>
</article>
`
	)
	.join("")}
</div>
<div class="text-center mt-12">
<a href="#" class="bg-primary text-white px-8 py-3 rounded-full hover:bg-accent hover:text-secondary transition-colors inline-block font-semibold font-mono" data-nav="blog">
View All Posts
</a>
</div>
</div>
</section>
`;
}

function renderAffiliatesSection() {
	return `
<section class="py-16 bg-gray-100">
<div class="container mx-auto px-4">
<h2 class="text-4xl font-bold mb-8 text-center text-accent font-serif">Our Affiliates</h2>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
${affiliates
	.map(
		(affiliate) => `
<div class="flex items-center justify-center">
<img src="${affiliate.logo}" alt="${affiliate.name}" class="max-w-full h-auto filter invert hover:invert-0 transition-all duration-300 text-white" />
</div>
`
	)
	.join("")}
</div>
</div>
</section>
`;
}

function renderFooter() {
	const footer = document.getElementById("footer");
	footer.innerHTML = `<div class="container mx-auto px-4">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 class="text-2xl font-bold mb-4 text-accent font-serif">Television Nollywood International</h3>
<p class="text-gray-400 font-mono">Your premier source for Nollywood news, awards, and entertainment.</p>
</div>
<div>
<h3 class="text-2xl font-bold mb-4 text-accent font-serif">Quick Links</h3>
<ul class="space-y-2 font-mono">
<li><a href="#" class="hover:text-accent transition-colors" data-nav="home">Home</a></li>
<li><a href="#" class="hover:text-accent transition-colors" data-nav="awards">Awards</a></li>
<li><a href="#" class="hover:text-accent transition-colors" data-nav="blog">Blog</a></li>
<li><a href="#" class="hover:text-accent transition-colors" data-nav="tni-weekly">TNI Weekly</a></li>
<li><a href="#" class="hover:text-accent transition-colors" data-nav="about">About</a></li>
<li><a href="#" class="hover:text-accent transition-colors" data-nav="contact">Contact</a></li>
</ul>
</div>
<div>
<h3 class="text-2xl font-bold mb-4 text-accent font-serif">Contact Us</h3>
<p class="text-gray-400 mb-2 font-mono">${contactInfo.address}</p>
<p class="text-gray-400 mb-2 font-mono">${contactInfo.email}</p>
<p class="text-gray-400 mb-4 font-mono">${contactInfo.phone}</p>
<div class="flex space-x-4">
<a href="${contactInfo.socialMedia.facebook}" class="text-gray-400 hover:text-accent transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>
</a>
<a href="${contactInfo.socialMedia.twitter}" class="text-gray-400 hover:text-accent transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
</svg>
</a>
<a href="${contactInfo.socialMedia.instagram}" class="text-gray-400 hover:text-accent transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
</svg>
</a>
</div>
</div>
</div>
<div class="mt-8 text-center text-gray-400 font-mono">
<p>&copy; 2025 Television Nollywood International. All rights reserved.</p>
</div>
</div>
`;
}

function setupEventListeners() {
	const menuToggle = document.getElementById("menuToggle");
	const mobileMenu = document.getElementById("mobileMenu");

	menuToggle.addEventListener("click", () => {
		mobileMenu.classList.toggle("hidden");
	});

	document.querySelectorAll("[data-nav]").forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			const page = e.target.getAttribute("data-nav");
			navigateTo(page);
		});
	});
}

function navigateTo(page) {
	// This is a placeholder for navigation functionality
	console.log(`Navigating to ${page} page`);
	// In a real application, you would update the content or redirect to a new page here
}

// Call the main function to initialize the application
document.addEventListener("DOMContentLoaded", () => {
	renderHeader();
	renderMainContent();
	renderFooter();
	setupEventListeners();
});
