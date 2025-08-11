"use client";

import Link from "next/link";
import { ArrowRight, Target, Heart, Users } from "lucide-react";

export default function AboutPreview() {
	const values = [
		{
			icon: Target,
			title: "Excellence",
			description:
				"Recognizing the highest standards in Nigerian cinema and television production.",
		},
		{
			icon: Heart,
			title: "Cultural Impact",
			description:
				"Celebrating stories that reflect and shape Nigerian culture and identity.",
		},
		{
			icon: Users,
			title: "Community",
			description:
				"Building a supportive ecosystem for filmmakers, actors, and industry professionals.",
		},
	];

	return (
		<section className="py-12">
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold text-slate-900 mb-4">About NMTA</h2>
				<p className="text-xl text-slate-600 max-w-3xl mx-auto">
					The Nigerian Movie & Television Awards celebrates outstanding
					achievements in Nigerian cinema and television, recognizing the
					talent, creativity, and cultural impact of our storytellers.
				</p>
			</div>

			<div className="grid md:grid-cols-3 gap-8 mb-12">
				{values.map((value, index) => {
					const IconComponent = value.icon;
					return (
						<div key={index} className="text-center">
							<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<IconComponent className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								{value.title}
							</h3>
							<p className="text-slate-600 leading-relaxed">
								{value.description}
							</p>
						</div>
					);
				})}
			</div>

			<div className="text-center">
				<Link
					href="/about"
					className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200"
				>
					Learn More About NMTA
					<ArrowRight className="w-4 h-4 ml-2" />
				</Link>
			</div>
		</section>
	);
}
