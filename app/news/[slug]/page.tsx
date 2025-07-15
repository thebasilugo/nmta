import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { newsArticles } from "@/data/news-articles"
import ShareButton from "@/components/ui/share-button"

interface PageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = newsArticles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = newsArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3)

  const shareData = {
    title: article.title,
    text: article.excerpt,
    url: typeof window !== "undefined" ? window.location.href : `https://nmtawards.com/news/${article.slug}`,
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(article.publishedAt).toLocaleDateString()}
            <Clock className="w-4 h-4 ml-4 mr-2" />
            {article.readTime} min read
            <User className="w-4 h-4 ml-4 mr-2" />
            {article.author}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <ShareButton data={shareData} />
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600 hover:prose-a:text-amber-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-900">Share this article</span>
            <ShareButton data={shareData} />
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <article
                  key={relatedArticle.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors duration-200">
                      <Link href={`/news/${relatedArticle.slug}`}>{relatedArticle.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedArticle.excerpt}</p>
                    <div className="text-sm text-gray-500">
                      {new Date(relatedArticle.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
