"use client"

import { useState } from "react"
import Image from "next/image"
import { juryMembers, patronAndAdvisory } from "@/data/jury-members"

export default function JurySection() {
  const [activeTab, setActiveTab] = useState<"jury" | "advisory">("jury")

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Distinguished Panel</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our esteemed jury and advisory board bring decades of experience and expertise to ensure the highest standards
          of evaluation and recognition.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("jury")}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
              activeTab === "jury" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Jury Members
          </button>
          <button
            onClick={() => setActiveTab("advisory")}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
              activeTab === "advisory" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Advisory Board
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeTab === "jury" ? juryMembers : patronAndAdvisory).map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative h-64">
              <Image src={member.imageurl || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-amber-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-3">{member.affiliation}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
