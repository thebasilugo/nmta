"use client"

import Image from "next/image"
import { useState } from "react"
import { Trophy, Users, Star, MapPin } from "lucide-react"
import { awardCategories } from "@/data/award-categories"
import { juryMembers, patronAndAdvisory } from "@/data/jury-members"

export default function AwardsPage() {
  const [activeTab, setActiveTab] = useState<"jury" | "advisory">("jury")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Inaugural 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Award Categories</h1>
              <p className="text-xl text-slate-600 mb-8">
                Recognizing excellence across nine prestigious categories in Nigerian cinema and television.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://filmfreeway.com/nmta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200"
                >
                  Submit Your Film
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/nmta-statuette.jpeg"
                alt="NMTA Statuette"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 mb-4">{category.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Evaluation Criteria:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {category.criteria.map((criterion, index) => (
                        <li key={index} className="flex items-center">
                          <Star className="w-3 h-3 text-amber-500 mr-2 flex-shrink-0" />
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {category.previousWinners && category.previousWinners.length > 0 && (
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-2">Previous Winners:</h4>
                      <div className="space-y-2">
                        {category.previousWinners.map((winner, index) => (
                          <div key={index} className="text-sm text-slate-600">
                            <span className="font-medium">{winner.year}:</span> {winner.winner}
                            {winner.director && ` (Dir: ${winner.director})`}
                            {winner.film && ` - ${winner.film}`}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jury Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Distinguished Panel
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Jury</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry veterans and acclaimed filmmakers from across Africa ensuring the highest standards of excellence
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveTab("jury")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === "jury" ? "bg-amber-600 text-white shadow-md" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Jury Members ({juryMembers.length})
              </button>
              <button
                onClick={() => setActiveTab("advisory")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === "advisory" ? "bg-amber-600 text-white shadow-md" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Advisory Board ({patronAndAdvisory.length})
              </button>
            </div>
          </div>

          {/* Jury Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === "jury" ? juryMembers : patronAndAdvisory).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image src={member.imageurl || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <div className="text-amber-600 font-medium mb-2">{member.role}</div>

                  <div className="flex items-center text-sm text-slate-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {member.country || "Nigeria"}
                  </div>

                  <div className="text-sm text-slate-600 mb-4">
                    <span className="font-medium">Affiliation:</span> {member.affiliation}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 text-white">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Submit Your Film?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the inaugural celebration of Nigerian cinema excellence. Submissions close September 30, 2025.
            </p>
            <a
              href="https://filmfreeway.com/nmta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors duration-200"
            >
              Submit Your Film
              <Trophy className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
