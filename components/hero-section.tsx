"use client";

import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import content from "@/data/content.json";

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-amber-800/10"></div>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, rgba(217, 119, 6, 0.1) 1px, transparent 0)`,
						backgroundSize: "40px 40px",
					}}
				></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<div className="text-center lg:text-left">
						<div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
							{content.siteInfo.edition} {content.siteInfo.year}
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
							{content.hero.title}
						</h1>

						<p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
							{content.hero.description}
						</p>

						{/* Event Details */}
						<div className="flex flex-col sm:flex-row gap-4 mb-8 text-slate-600">
							<div className="flex items-center justify-center lg:justify-start">
								<Calendar className="w-5 h-5 mr-2 text-amber-600" />
								<span>
									{/* December 15, 2025 */}
									Coming Soon
								</span>
							</div>
							<div className="flex items-center justify-center lg:justify-start">
								<MapPin className="w-5 h-5 mr-2 text-amber-600" />
								<span>
									{/* Eko Convention Centre, Lagos */}
									Coming Soon
								</span>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-16">
							<a
								href={content.hero.ctaUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-200 group"
							>
								{content.hero.ctaText}
								<ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
							</a>
							<a
								href={content.hero.secondaryCtaUrl}
								className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
							>
								{content.hero.secondaryCtaText}
							</a>
						</div>
					</div>

					{/* Image */}
					<div className="relative">
						<div className="relative w-full max-w-md mx-auto lg:max-w-none">
							<div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl blur-2xl opacity-20"></div>
							<Image
								src="/images/nmta-statuette.jpeg"
								alt="NMTA Statuette"
								width={500}
								height={600}
								className="relative rounded-2xl shadow-2xl"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
