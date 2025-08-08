export interface ContactInfo {
	name: string;
	title: string;
	email: string;
	phone: string;
	address: string;
	socialMedia: {
		platform: string;
		url: string;
		handle: string;
	}[];
}

export const contactInfo: ContactInfo = {
	name: "Nigerian Movie & Television Awards",
	title: "NMTA Secretariat",
	email: "contact@nmtawards.com",
	phone: "+234 904 357 6346",
	address: "111, Old Ojo Road, Amuwo-Odofin, Lagos, Nigeria",
	socialMedia: [
		{
			platform: "Instagram",
			url: "https://instagram.com/nmta_awards",
			handle: "@nmta_awards",
		},
		{
			platform: "Twitter",
			url: "https://twitter.com/nmta_awards",
			handle: "@nmta_awards",
		},
		{
			platform: "Facebook",
			url: "https://facebook.com/nmta.awards",
			handle: "NMTA Awards",
		},
		{
			platform: "YouTube",
			url: "https://youtube.com/@nmta_awards",
			handle: "@nmta_awards",
		},
		{
			platform: "LinkedIn",
			url: "https://linkedin.com/company/nmta-awards",
			handle: "NMTA Awards",
		},
	],
};

export const officeHours = {
	weekdays: "9:00 AM - 6:00 PM",
	weekends: "Closed",
	timezone: "WAT (West Africa Time)",
};

export const submissionDeadlines = {
	earlyBird: "March 31, 2025",
	regular: "June 30, 2025",
	late: "August 31, 2025",
	final: "September 30, 2025",
};
