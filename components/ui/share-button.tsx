"use client"

import { useState } from "react"
import { Share2, Copy, Check, Facebook, Twitter, Linkedin } from "lucide-react"

interface ShareData {
  title: string
  text: string
  url: string
}

interface ShareButtonProps {
  data: ShareData
  variant?: "default" | "outline" | "minimal"
}

export default function ShareButton({ data, variant = "default" }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch (error) {
        console.log("Share cancelled")
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(data.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy link")
    }
  }

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text)}&url=${encodeURIComponent(data.url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}`,
  }

  const variantClasses = {
    default: "bg-amber-600 hover:bg-amber-700 text-white",
    outline: "border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",
    minimal: "text-gray-400 hover:text-amber-600",
  }

  const buttonClasses =
    variant === "minimal"
      ? "p-2 rounded-lg transition-colors duration-200"
      : "inline-flex items-center px-4 py-2 font-medium rounded-lg transition-colors duration-200"

  return (
    <div className="relative">
      <button onClick={handleNativeShare} className={`${buttonClasses} ${variantClasses[variant]}`} aria-label="Share">
        <Share2 className={variant === "minimal" ? "w-4 h-4" : "w-4 h-4 mr-2"} />
        {variant !== "minimal" && "Share"}
      </button>

      {/* Custom Share Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-48 z-50">
          <div className="space-y-2">
            <a
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Twitter className="w-4 h-4 text-blue-500" />
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href={shareUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Linkedin className="w-4 h-4 text-blue-700" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <button
              onClick={handleCopyLink}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full text-left"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-500" />}
              <span className="text-sm">{copied ? "Copied!" : "Copy Link"}</span>
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
