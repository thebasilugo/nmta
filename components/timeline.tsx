import { Calendar, Clock, Award, Users } from "lucide-react"

const timelineEvents = [
  {
    date: "October 2024",
    title: "Submissions Open",
    description: "Film and television submissions begin for all categories",
    icon: Calendar,
    status: "completed",
  },
  {
    date: "November 2024",
    title: "Jury Selection",
    description: "Industry experts and professionals join the judging panel",
    icon: Users,
    status: "completed",
  },
  {
    date: "January 2025",
    title: "Submissions Close",
    description: "Final deadline for all category submissions",
    icon: Clock,
    status: "upcoming",
  },
  {
    date: "March 2025",
    title: "Nominations Announced",
    description: "Official nominees revealed across all categories",
    icon: Award,
    status: "upcoming",
  },
  {
    date: "December 2025",
    title: "Awards Ceremony",
    description: "Inaugural NMTA ceremony at Eko Convention Centre",
    icon: Award,
    status: "upcoming",
  },
]

export default function Timeline() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Awards Timeline</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Key dates and milestones for the inaugural NMTA ceremony
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-amber-600"></div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon

            return (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center ${
                    event.status === "completed"
                      ? "bg-gradient-to-br from-green-500 to-green-600"
                      : "bg-gradient-to-br from-amber-500 to-amber-600"
                  }`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{event.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          event.status === "completed" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {event.status === "completed" ? "Completed" : "Upcoming"}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">{event.description}</p>
                    <div className="text-amber-600 font-semibold">{event.date}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
