"use client"

import { createContext, useContext, type ReactNode } from "react"
import content from "@/data/content.json"

interface SocialMediaContextType {
  socialLinks: typeof content.socialMedia
  shareContent: (data: { title: string; text: string; url: string }) => Promise<void>
}

const SocialMediaContext = createContext<SocialMediaContextType | undefined>(undefined)

export function useSocialMedia() {
  const context = useContext(SocialMediaContext)
  if (!context) {
    throw new Error("useSocialMedia must be used within a SocialMediaProvider")
  }
  return context
}

interface SocialMediaProviderProps {
  children: ReactNode
}

export default function SocialMediaProvider({ children }: SocialMediaProviderProps) {
  const shareContent = async (data: { title: string; text: string; url: string }) => {
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch (error) {
        console.log("Share cancelled or failed")
      }
    } else {
      // Fallback for browsers without native share
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text)}&url=${encodeURIComponent(data.url)}`
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  const value = {
    socialLinks: content.socialMedia,
    shareContent,
  }

  return <SocialMediaContext.Provider value={value}>{children}</SocialMediaContext.Provider>
}
