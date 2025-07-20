"use client"

import Link from "next/link"
import { Trophy, Instagram, Twitter, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import content from "@/data/content.json"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">NMTA</div>
                <div className="text-sm text-slate-400">2025</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Celebrating excellence in Nigerian cinema and television. Join us for the inaugural awards ceremony.
            </p>
            <div className="flex space-x-4">
              <a
                href={content.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={content.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={content.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={content.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={content.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/awards" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Award Categories
                </Link>
              </li>
              <li>
                <a
                  href="https://filmfreeway.com/nmta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Submit Your Film
                </a>
              </li>
              <li>
                <Link href="/news" className="text-slate-400 hover:text-white transition-colors duration-200">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors duration-200">
                  About NMTA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Award Categories</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">Best Picture</li>
              <li className="text-slate-400">Best Director</li>
              <li className="text-slate-400">Best Actor</li>
              <li className="text-slate-400">Best Actress</li>
              <li className="text-slate-400">Best Supporting Performance</li>
              <li className="text-slate-400">Best Screenplay</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-400">Email</div>
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="text-white hover:text-amber-500 transition-colors duration-200"
                  >
                    {content.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-400">Phone</div>
                  <a
                    href={`tel:${content.contact.phone}`}
                    className="text-white hover:text-amber-500 transition-colors duration-200"
                  >
                    {content.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-400">Address</div>
                  <div className="text-white">{content.contact.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © {currentYear} Nigerian Movie & Television Awards. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
