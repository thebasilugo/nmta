import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import { newsArticles } from "@/data/news-articles"
import ShareButton from "@/components/ui/share-button"

export default function NewsPage() {
  const featuredArticles = newsArticles.filter((article) => article.featured)
  const recentArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and insights from the Nigerian Movie & Television
              Awards.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <div className="relative h-64">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(article.publishedAt).toLocaleDateString()}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {article.readTime} min read
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors duration-200">
                      <Link href={`/news/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </div>
                      <ShareButton
                        data={{
                          title: article.title,
                          text: article.excerpt,
                          url: `${typeof window !== "undefined" ? window.location.origin : ""}/news/${article.slug}`,
                        }}
                        variant="minimal"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Recent Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors duration-200">
                    <Link href={`/news/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.author}</span>
                    <ShareButton
                      data={{
                        title: article.title,
                        text: article.excerpt,
                        url: `${typeof window !== "undefined" ? window.location.origin : ""}/news/${article.slug}`,
                      }}
                      variant="minimal"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
