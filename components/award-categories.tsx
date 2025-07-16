"use client"

import { Film, Camera, User, Star, FileText } from "lucide-react"
import content from "@/data/content.json"

const iconMap = {
  Film,
  Camera,
  User,
  Star,
  FileText,
}

export default function AwardCategories() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Award Categories</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Recognizing excellence across multiple categories in Nigerian cinema and television
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.awardCategories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap]

          return (
            <div
              key={category.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">{category.title}</h3>
              <p className="text-slate-600 leading-relaxed">{category.description}</p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <button className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
