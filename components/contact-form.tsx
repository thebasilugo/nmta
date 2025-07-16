"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading", message: "Sending message..." })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again.",
      })
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-playfair text-slate-900 mb-4">Send us a Message</h3>
        <p className="text-slate-600">
          Have questions about submissions, partnerships, or NMTA? We'd love to hear from you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select a subject</option>
            <option value="submission">Film/TV Submission</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="media">Media & Press</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="general">General Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-vertical"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        {status.type !== "idle" && (
          <div
            className={`p-4 rounded-lg flex items-center space-x-3 ${
              status.type === "success"
                ? "bg-green-50 text-green-800"
                : status.type === "error"
                  ? "bg-red-50 text-red-800"
                  : "bg-amber-50 text-amber-800"
            }`}
          >
            {status.type === "success" && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
            {status.type === "error" && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            {status.type === "loading" && (
              <div className="w-5 h-5 border-2 border-amber-600 border-t-transparent rounded-full animate-spin flex-shrink-0" />
            )}
            <p className="text-sm">{status.message}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-amber-400 disabled:to-amber-500 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
        >
          {status.type === "loading" ? (
            <>
              <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
