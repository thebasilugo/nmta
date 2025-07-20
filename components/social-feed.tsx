"use client"

import { useState } from "react"
import { Twitter, Instagram, Youtube, ExternalLink } from "lucide-react"
import SocialLinks from "@/components/ui/social-links"
import content from "@/data/content.json"

export default function SocialFeed() {
  const [activeTab, setActiveTab] = useState("twitter")

  const socialPosts = {
    twitter: [
      {
        id: 1,
        content:
          "The countdown begins! 🎬 Submissions for the inaugural NMTA 2025 are now open. Ready to showcase your talent? #NMTA2025 #Nollywood",
        timestamp: "2 hours ago",
        engagement: "24 retweets, 89 likes",
      },
      {
        id: 2,
        content:
          "Behind the scenes: Our team is working tirelessly to make NMTA 2025 an unforgettable celebration of Nigerian cinema! ✨ #BehindTheScenes",
        timestamp: "1 day ago",
        engagement: "12 retweets, 45 likes",
      },
    ],
    instagram: [
      {
        id: 1,
        content:
          "✨ The golden statuette awaits its first winners! Who will take home the inaugural NMTA awards? #NMTA2025 #GoldenMoments",
        timestamp: "3 hours ago",
        engagement: "156 likes, 23 comments",
      },
      {
        id: 2,
        content:
          "🎭 Celebrating the art of storytelling in Nigerian cinema. Every frame, every performance, every story matters. #Nollywood #Storytelling",
        timestamp: "2 days ago",
        engagement: "203 likes, 31 comments",
      },
    ],
    youtube: [
      {
        id: 1,
        content:
          "🎥 Watch: 'The Making of NMTA 2025' - An exclusive look at how we're preparing for the inaugural ceremony",
        timestamp: "1 week ago",
        engagement: "1.2K views, 89 likes",
      },
      {
        id: 2,
        content: "🌟 'Voices of Nollywood' - Interviews with industry leaders about the future of Nigerian cinema",
        timestamp: "2 weeks ago",
        engagement: "2.8K views, 156 likes",
      },
    ],
  }

  const tabIcons = {
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Follow Our Journey</h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay connected with the latest updates, behind-the-scenes content, and announcements
            </p>
            <SocialLinks size="large" />
          </div>

          {/* Social Media Tabs */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                {Object.keys(socialPosts).map((platform) => {
                  const IconComponent = tabIcons[platform as keyof typeof tabIcons]
                  return (
                    <button
                      key={platform}
                      onClick={() => setActiveTab(platform)}
                      className={`flex-1 flex items-center justify-center px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                        activeTab === platform
                          ? "text-amber-600 border-b-2 border-amber-600 bg-amber-50"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Social Posts */}
            <div className="p-6">
              <div className="space-y-6">
                {socialPosts[activeTab as keyof typeof socialPosts].map((post) => (
                  <div key={post.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.timestamp}</span>
                      <span>{post.engagement}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href={content.socialMedia[activeTab as keyof typeof content.socialMedia]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  View More on {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
