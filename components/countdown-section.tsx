"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function CountdownSection() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date("2025-12-15T19:00:00Z").getTime();

		const timer = setInterval(() => {
			const now = new Date().getTime();
			const difference = targetDate - now;

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor(
						(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					),
					minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
					seconds: Math.floor((difference % (1000 * 60)) / 1000),
				});
			}
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="pt-8 pb-16">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-bold text-slate-900 mb-4">
					Awards Ceremony
				</h2>
				<p className="text-xl text-slate-600">
					Mark your calendars for an unforgettable evening celebrating Nigerian
					cinema excellence
				</p>
			</div>

			{/* Countdown Timer */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
				{[
					{ label: "Days", value: timeLeft.days },
					{ label: "Hours", value: timeLeft.hours },
					{ label: "Minutes", value: timeLeft.minutes },
					{ label: "Seconds", value: timeLeft.seconds },
				].map((item) => (
					<div key={item.label} className="text-center">
						<div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
							<div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
								{item.value.toString().padStart(2, "0")}
							</div>
							<div className="text-slate-600 font-medium">{item.label}</div>
						</div>
					</div>
				))}
			</div>

			{/* Event Details */}
			<div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8">
				<div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
					<div className="flex items-center justify-center md:justify-start">
						<Calendar className="w-6 h-6 text-amber-600 mr-3" />
						<div>
							<div className="font-semibold text-slate-900">
								{/* December 15, 2025 */}
								Coming Soon
							</div>
							<div className="text-slate-600">{/* 7:00 PM WAT */}</div>
						</div>
					</div>
					<div className="flex items-center justify-center md:justify-start">
						<MapPin className="w-6 h-6 text-amber-600 mr-3" />
						<div>
							<div className="font-semibold text-slate-900">Coming Soon</div>
							<div className="text-slate-600">
								{/* Victoria Island, Lagos */}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center md:justify-start">
						<Clock className="w-6 h-6 text-amber-600 mr-3" />
						<div>
							<div className="font-semibold text-slate-900">
								{/* Red Carpet */} Coming Soon
							</div>
							<div className="text-slate-600">{/* Starts at 6:00 PM */}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
