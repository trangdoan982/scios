import getAllEvents from "@/api/events/getAllEvents";
import EventCard from "../event";

const EventSection = async () => {
	const events = await getAllEvents();
	const upcomingEvents = events!.filter((event) => event.isOld === "FALSE");
	const pastEvents = events!.filter((event) => event.isOld === "TRUE");
	return (
		<div className="flex flex-col gap-8">
			<h1 className="w-full text-center pb-18">Events</h1>
			<h2 className="text-4xl font-openSans font-bold" id="upcoming-events">
				Upcoming
			</h2>
			{upcomingEvents.map((event) => {
				return (
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
						/>
					</div>
				);
			})}

			<h2 className="text-4xl font-openSans font-bold" id="past-events">
				Past events
			</h2>
			{pastEvents.map((event, index) => {
				return (
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
						/>
					</div>
				);
			})}
		</div>
	);
};

export default EventSection;
