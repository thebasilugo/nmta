import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const featuredNews = [
  {
    id: 1,
    title: "NMTA 2026 Submission Guidelines Released",
    excerpt:
      "Complete guidelines for film and television submissions are now available. Early bird deadline is March 15, 2026.",
    date: "2024-01-15",
    image: "/placeholder.svg?height=300&width=400&text=NMTA+Guidelines",
    category: "Announcements",
  },
  {
    id: 2,
    title: "Celebrating 14 Years of Excellence",
    excerpt:
      "Looking back at NMTA's journey from 2010 to 2024, highlighting memorable moments and outstanding winners.",
    date: "2024-01-10",
    image: "/placeholder.svg?height=300&width=400&text=NMTA+History",
    category: "News",
  },
  {
    id: 3,
    title: "New Television Categories Announced",
    excerpt:
      "NMTA 2026 introduces new categories for streaming content and digital series to reflect industry evolution.",
    date: "2024-01-05",
    image: "/placeholder.svg?height=300&width=400&text=TV+Categories",
    category: "Updates",
  },
]

export default function FeaturedContent() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-4">Latest News & Updates</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed about NMTA announcements, industry news, and upcoming events
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-slate-900 text-sm font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-slate-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h3 className="text-xl font-bold font-playfair text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">{article.excerpt}</p>

                <button className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300 group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300">
            View All News
          </button>
        </div>
      </div>
    </section>
  )
}
