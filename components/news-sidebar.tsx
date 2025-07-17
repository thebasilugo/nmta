"use client"

import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const featuredNews = [
  {
    id: "nmta-2025-launch",
    title: "NMTA 2025: Inaugural Awards Launch",
    excerpt:
      "The Nigerian Movie & Television Awards announces its inaugural ceremony, celebrating excellence in Nigerian cinema.",
    date: "2024-12-15",
    category: "Awards",
    slug: "nmta-2025-launch",
  },
  {
    id: "submission-guidelines",
    title: "Submission Guidelines Released",
    excerpt: "Complete guidelines for film submissions now available. Early bird deadline set for June 30, 2025.",
    date: "2024-12-10",
    category: "Submissions",
    slug: "submission-guidelines",
  },
  {
    id: "jury-announcement",
    title: "Distinguished Jury Panel Announced",
    excerpt: "Industry veterans and acclaimed filmmakers from across Africa join the NMTA jury panel.",
    date: "2024-12-05",
    category: "Jury",
    slug: "jury-announcement",
  },
  {
    id: "venue-partnership",
    title: "Eko Convention Centre Partnership",
    excerpt: "NMTA partners with Eko Convention Centre for the inaugural awards ceremony in Lagos.",
    date: "2024-12-01",
    category: "Venue",
    slug: "venue-partnership",
  },
]

export default function NewsSidebar() {
  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Latest News</h3>
          <Link
            href="/news"
            className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200"
          >
            View All
          </Link>
        </div>

        <div className="space-y-6">
          {featuredNews.map((article) => (
            <article key={article.id} className="group">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-amber-600 rounded-full mt-3"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center text-xs text-slate-500 mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{article.category}</span>
                  </div>
                  <Link href={`/news/${article.slug}`}>
                    <h4 className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors duration-200 mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                  </Link>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">{article.excerpt}</p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-xs text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <Link
            href="/news"
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200"
          >
            View All News
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </aside>
  )
}
