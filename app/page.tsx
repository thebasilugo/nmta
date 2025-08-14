import HeroSection from "@/components/hero-section";
import CountdownSection from "@/components/countdown-section";
import AwardCategories from "@/components/award-categories";
import NewsSidebar from "@/components/news-sidebar";
import ShortSidebar from "@/components/short-sidebar";
import AboutPreview from "@/components/about-preview";

export default function HomePage() {
	return (
		<main className="min-h-screen">
			<HeroSection />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16">
					<div className="lg:col-span-2 space-y-16">
						<CountdownSection />
						<AwardCategories />
						{/* <AboutPreview /> */}
					</div>
					<div className="lg:col-span-1">
						<NewsSidebar />
						<ShortSidebar />
					</div>
					<div className="lg:col-span-3 space-y-16">
						<AboutPreview />
					</div>
				</div>
			</div>
		</main>
	);
}
