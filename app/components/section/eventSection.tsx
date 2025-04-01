"use client";

import { useEffect, useState } from "react";
import EventCard, { EventProps } from "../event";

export default function EventSection() {
	const [events, setEvents] = useState<EventProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await fetch("/api/events");
				if (!response.ok) {
					throw new Error("Failed to fetch events");
				}
				const data = await response.json();
				setEvents(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Failed to fetch events");
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	if (loading) {
		return (
			<div className="flex flex-col gap-8 animate-pulse">
				<div className="w-48 h-8 bg-gray-200 rounded"></div>
				<div className="space-y-6">
					{[1, 2, 3].map((i) => (
						<div key={i} className="bg-gray-200 p-6 rounded-lg">
							<div className="flex justify-between">
								<div className="flex flex-col gap-4 w-2/3">
									<div className="h-4 bg-gray-300 rounded w-24"></div>
									<div className="h-6 bg-gray-300 rounded w-48"></div>
									<div className="h-4 bg-gray-300 rounded w-32"></div>
								</div>
								<div className="h-8 w-8 bg-gray-300 rounded"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	if (error) {
		return <div>Error: {error}</div>; // Consider a better error UI
	}

	const upcomingEvents = events.filter((event) => event.isOld === "FALSE");
	const pastEvents = events.filter((event) => event.isOld === "TRUE");

	return (
		<div className="flex flex-col gap-8 pt-24">
			<h1 className="w-full text-center pb-18">Events</h1>
			<h2 className="text-4xl font-openSans font-bold" id="upcoming-events">
				Upcoming
			</h2>
			{upcomingEvents.map((event) => (
				<div key={event.title}>
					<EventCard
						title={event.title}
						date={event.date}
						hosts={event.hosts}
						location={event.location}
						description={event.description}
						oldResources={event.oldResources}
						agenda={event.agenda}
						isOld={event.isOld}
						eventLink={event.eventLink}
					/>
				</div>
			))}

			<h2 className="text-4xl font-openSans font-bold" id="past-events">
				Past events
			</h2>
			{pastEvents.map((event, index) => (
				<div key={index.toString()}>
					<EventCard
						title={event.title}
						date={event.date}
						hosts={event.hosts}
						location={event.location}
						description={event.description}
						oldResources={event.oldResources}
						agenda={event.agenda}
						isOld={event.isOld}
						eventLink={event.eventLink}
					/>
				</div>
			))}
		</div>
	);
}
