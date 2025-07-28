import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { contactInfo } from "@/data/contact-info"

interface SocialLinksProps {
  size?: "small" | "medium" | "large"
}

const iconMap = {
  Facebook,
  Twitter,
  Instagram,
  Youtube: Youtube,
  Linkedin,
}

export default function SocialLinks({ size = "medium" }: SocialLinksProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  }

  const containerClasses = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12",
  }

  return (
    <div className="flex items-center space-x-3">
      {contactInfo.socialMedia.map((social) => {
        const IconComponent = iconMap[social.platform as keyof typeof iconMap]

        if (!IconComponent) return null

        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${containerClasses[size]} bg-gray-100 hover:bg-amber-100 rounded-lg flex items-center justify-center transition-colors duration-200 group`}
            aria-label={`Follow us on ${social.platform}`}
          >
            <IconComponent className={`${sizeClasses[size]} text-gray-600 group-hover:text-amber-600`} />
          </a>
        )
      })}
    </div>
  )
}
