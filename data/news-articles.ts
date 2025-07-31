export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: "announcement" | "industry" | "awards" | "interview" | "feature"
  tags: string[]
  featured: boolean
  image: string
  readTime: number
}

export const newsArticles: NewsArticle[] = [
  {
    id: "nmta-2025-launch",
    title: "NMTA 2025: Inaugural Nigerian Movie & Television Awards Announced",
    slug: "nmta-2025-inaugural-awards-announced",
    excerpt:
      "The Nigerian entertainment industry celebrates as the first-ever Nigerian Movie & Television Awards is officially launched, set to recognize excellence in Nollywood and Nigerian television.",
    content: `
      <p>Lagos, Nigeria - The Nigerian entertainment industry has reached a historic milestone with the official announcement of the inaugural Nigerian Movie & Television Awards (NMTA) 2025. This groundbreaking event promises to celebrate and recognize outstanding achievements in Nollywood cinema and Nigerian television production.</p>

      <h2>A New Era for Nigerian Entertainment</h2>
      <p>The NMTA represents a significant step forward in acknowledging the remarkable growth and global impact of Nigerian entertainment. With Nollywood being the second-largest film industry in the world by volume, this awards ceremony aims to provide the recognition that Nigerian filmmakers, actors, and television professionals deserve.</p>

      <h2>Award Categories</h2>
      <p>The inaugural edition will feature nine prestigious categories, including:</p>
      <ul>
        <li>Best Feature Film</li>
        <li>Best Director</li>
        <li>Best Actor and Actress in Leading Roles</li>
        <li>Best Supporting Actor and Actress</li>
        <li>Best Original Screenplay</li>
        <li>Best Cinematography</li>
        <li>Best Television Series</li>
      </ul>

      <h2>Submission Guidelines</h2>
      <p>Productions eligible for consideration must have been completed between January 2024 and September 2025. The awards are open to Nigerian productions and international co-productions with significant Nigerian involvement.</p>

      <p>Submissions will be accepted through FilmFreeway, with early bird submissions opening in March 2025. The ceremony is scheduled for December 2025 in Lagos, Nigeria.</p>

      <h2>Industry Impact</h2>
      <p>The NMTA is expected to elevate the profile of Nigerian entertainment globally, providing a platform for networking, recognition, and celebration of the industry's finest talents. The awards ceremony will be broadcast internationally, showcasing Nigerian creativity to a global audience.</p>
    `,
    author: "NMTA Editorial Team",
    publishedAt: "2024-12-15T10:00:00Z",
    category: "announcement",
    tags: ["NMTA", "Awards", "Nollywood", "Television", "2025"],
    featured: true,
    image: "/public/nollywood-celebration.png",
    readTime: 5,
  },
  {
    id: "nollywood-global-recognition",
    title: "Nollywood's Global Rise: Why Nigerian Cinema Deserves International Recognition",
    slug: "nollywood-global-rise-international-recognition",
    excerpt:
      "Exploring the remarkable journey of Nollywood from local productions to global phenomenon, and why the industry deserves dedicated recognition through awards like NMTA.",
    content: `
      <p>The Nigerian film industry, popularly known as Nollywood, has experienced unprecedented growth over the past three decades. From humble beginnings with direct-to-video productions, Nollywood has evolved into a global entertainment powerhouse that deserves international recognition and celebration.</p>

      <h2>The Numbers Speak</h2>
      <p>Nollywood produces over 2,500 films annually, making it the second-largest film industry globally by volume, surpassed only by India's Bollywood. The industry employs over one million people directly and indirectly, contributing significantly to Nigeria's GDP.</p>

      <h2>Quality Evolution</h2>
      <p>Recent years have witnessed a remarkable improvement in production quality, storytelling, and technical excellence. Films like "Lionheart," "Living in Bondage: Breaking Free," and "Citation" have demonstrated that Nigerian cinema can compete on the global stage.</p>

      <h2>Cultural Impact</h2>
      <p>Nollywood films have become cultural ambassadors, showcasing Nigerian stories, values, and traditions to audiences across Africa and the diaspora. The industry has played a crucial role in shaping perceptions of modern Africa and promoting cultural exchange.</p>

      <h2>The Need for Recognition</h2>
      <p>Despite its achievements, Nollywood has often been overlooked by major international awards ceremonies. The establishment of NMTA addresses this gap, providing a platform specifically designed to celebrate Nigerian excellence in film and television.</p>

      <p>As we prepare for the inaugural NMTA 2025, we celebrate not just the awards themselves, but the recognition of an industry that has entertained, educated, and inspired millions worldwide.</p>
    `,
    author: "Dr. Adaora Okafor",
    publishedAt: "2024-12-10T14:30:00Z",
    category: "feature",
    tags: ["Nollywood", "Global Cinema", "Industry Analysis", "Cultural Impact"],
    featured: true,
    image: "/public/award-categories.png",
    readTime: 7,
  },
  {
    id: "submission-guidelines-2025",
    title: "NMTA 2025 Submission Guidelines: Everything You Need to Know",
    slug: "nmta-2025-submission-guidelines",
    excerpt:
      "Comprehensive guide for filmmakers and television producers on how to submit their works for consideration in the inaugural NMTA 2025 awards.",
    content: `
      <p>The Nigerian Movie & Television Awards (NMTA) 2025 submission process is now open, and we're excited to receive entries from talented filmmakers and television producers across Nigeria and beyond.</p>

      <h2>Eligibility Criteria</h2>
      <p>To be eligible for NMTA 2025, productions must meet the following requirements:</p>
      <ul>
        <li>Completed between January 1, 2024, and September 30, 2025</li>
        <li>Nigerian production or international co-production with significant Nigerian involvement</li>
        <li>Feature films must have a minimum runtime of 70 minutes</li>
        <li>TV series must have a minimum of 6 episodes</li>
        <li>Must have been released theatrically, on television, or on digital platforms</li>
      </ul>

      <h2>Submission Process</h2>
      <p>All submissions must be made through FilmFreeway, our official submission platform. The process includes:</p>
      <ol>
        <li>Create a FilmFreeway account</li>
        <li>Complete the NMTA submission form</li>
        <li>Upload required materials</li>
        <li>Pay submission fees</li>
        <li>Submit before the deadline</li>
      </ol>

      <h2>Required Materials</h2>
      <p>Each submission must include:</p>
      <ul>
        <li>Complete work in HD quality</li>
        <li>Director's statement (maximum 500 words)</li>
        <li>Production notes and cast/crew information</li>
        <li>Proof of Nigerian production involvement</li>
        <li>High-resolution promotional materials</li>
      </ul>

      <h2>Submission Deadlines and Fees</h2>
      <ul>
        <li>Early Bird: March 31, 2025 - ₦25,000</li>
        <li>Regular: June 30, 2025 - ₦35,000</li>
        <li>Late: August 31, 2025 - ₦45,000</li>
        <li>Final: September 30, 2025 - ₦55,000</li>
      </ul>

      <h2>Selection Process</h2>
      <p>All submissions will be reviewed by our distinguished jury panel, comprising industry professionals, critics, and cultural experts. The selection process emphasizes artistic merit, technical excellence, and cultural relevance.</p>

      <p>For questions about the submission process, contact our submissions team at submissions@nmta.ng</p>
    `,
    author: "NMTA Submissions Team",
    publishedAt: "2024-12-08T09:00:00Z",
    category: "announcement",
    tags: ["Submissions", "Guidelines", "FilmFreeway", "Deadlines"],
    featured: false,
    image: "/public/placeholder-e3vkn.png",
    readTime: 6,
  },
  {
    id: "jury-panel-announcement",
    title: "Distinguished Jury Panel Announced for NMTA 2025",
    slug: "distinguished-jury-panel-nmta-2025",
    excerpt:
      "Meet the esteemed industry professionals who will evaluate submissions and select winners for the inaugural Nigerian Movie & Television Awards.",
    content: `
      <p>The Nigerian Movie & Television Awards is proud to announce the distinguished jury panel for the inaugural 2025 edition. This carefully selected group of industry veterans, critics, and cultural experts will evaluate submissions and select winners across all categories.</p>

      <h2>Jury Selection Criteria</h2>
      <p>Jury members were selected based on their:</p>
      <ul>
        <li>Extensive experience in Nigerian entertainment industry</li>
        <li>Demonstrated expertise in their respective fields</li>
        <li>Commitment to excellence and artistic integrity</li>
        <li>Understanding of Nigerian culture and storytelling</li>
        <li>International recognition and credibility</li>
      </ul>

      <h2>Jury Composition</h2>
      <p>The jury includes acclaimed directors, producers, actors, cinematographers, and industry executives who have contributed significantly to the growth and development of Nigerian cinema and television.</p>

      <h2>Evaluation Process</h2>
      <p>The jury will evaluate submissions based on:</p>
      <ul>
        <li>Artistic and creative merit</li>
        <li>Technical excellence</li>
        <li>Cultural authenticity and relevance</li>
        <li>Innovation and originality</li>
        <li>Overall impact and entertainment value</li>
      </ul>

      <h2>Advisory Board</h2>
      <p>In addition to the main jury, an advisory board comprising media moguls, cultural ambassadors, and industry pioneers will provide strategic guidance and ensure the awards maintain the highest standards of integrity and excellence.</p>

      <p>The complete list of jury members and their profiles can be found on our Awards page. We are confident that this distinguished panel will ensure fair, thorough, and expert evaluation of all submissions.</p>
    `,
    author: "NMTA Communications",
    publishedAt: "2024-12-05T16:00:00Z",
    category: "announcement",
    tags: ["Jury", "Panel", "Industry Experts", "Evaluation"],
    featured: false,
    image: "/public/professional-woman-portrait.png",
    readTime: 4,
  },
]

export const getFeaturedArticles = () => {
  return newsArticles.filter((article) => article.featured).slice(0, 3)
}

export const getRecentArticles = (limit = 6) => {
  return newsArticles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export const getArticleBySlug = (slug: string) => {
  return newsArticles.find((article) => article.slug === slug)
}

export const getArticlesByCategory = (category: NewsArticle["category"]) => {
  return newsArticles.filter((article) => article.category === category)
}

export const getRelatedArticles = (currentArticleId: string, limit = 3) => {
  const currentArticle = newsArticles.find((article) => article.id === currentArticleId)
  if (!currentArticle) return []

  return newsArticles
    .filter(
      (article) =>
        article.id !== currentArticleId &&
        (article.category === currentArticle.category || article.tags.some((tag) => currentArticle.tags.includes(tag))),
    )
    .slice(0, limit)
}
