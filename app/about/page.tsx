import Image from "next/image"
import { Award, Users, Globe, Heart } from "lucide-react"
import JurySection from "@/components/jury-section"
import { contactInfo } from "@/data/contact-info"
import SocialLinks from "@/components/ui/social-links"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About NMTA</h1>
              <p className="text-xl text-gray-600 mb-8">
                The Nigerian Movie & Television Awards celebrates excellence in Nigerian cinema and television,
                recognizing outstanding achievements in storytelling, performance, and production.
              </p>
              <div className="flex items-center space-x-6">
                <SocialLinks size="large" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/nmta-logo.jpeg"
                alt="NMTA Logo"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Recognizing and celebrating the highest standards of achievement in Nigerian cinema and television.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Building a strong community of filmmakers, actors, and industry professionals across Nigeria.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Showcasing Nigerian talent and stories to audiences around the world through quality productions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Culture</h3>
              <p className="text-gray-600">
                Preserving and promoting Nigerian culture and heritage through the power of visual storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              The Nigerian Movie & Television Awards was born from a vision to create a prestigious platform that truly
              represents the excellence and diversity of Nigerian cinema. As Nollywood continues to gain international
              recognition, we recognized the need for an awards ceremony that matches global standards while celebrating
              our unique cultural heritage.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our inaugural ceremony in 2025 marks the beginning of what we hope will become an annual tradition of
              celebrating the finest achievements in Nigerian film and television. With a distinguished jury panel and
              comprehensive award categories, NMTA sets new benchmarks for excellence in the industry.
            </p>
            <p className="text-lg text-gray-600">
              We believe that by recognizing and celebrating excellence, we inspire current and future generations of
              filmmakers to push boundaries, tell compelling stories, and contribute to the continued growth and global
              impact of Nigerian cinema.
            </p>
          </div>
        </div>
      </section>

      {/* Jury Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <JurySection />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions about submissions, the ceremony, or partnerships? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-amber-600 hover:text-amber-700 transition-colors duration-200"
              >
                {contactInfo.email}
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-amber-600 hover:text-amber-700 transition-colors duration-200"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
