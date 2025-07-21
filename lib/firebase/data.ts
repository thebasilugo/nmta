import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
  type DocumentData,
} from "firebase/firestore"
import { db } from "./config"

// Types
export interface FeaturedContent {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
}

export interface NotablePerson {
  id: string
  name: string
  role: string
  affiliation: string
  bio: string
  image: string
  category: "jury" | "patron" | "advisory"
}

export interface ContactSubmission {
  name: string
  email: string
  subject: string
  message: string
  timestamp: Date
}

export interface AboutData {
  mission: string
  vision: string
  history: string
  statistics: {
    yearsOfExcellence: number
    filmsRecognized: number
    industryProfessionals: number
    awardCategories: number
  }
}

// Featured Content Functions
export async function getFeaturedContent(): Promise<FeaturedContent[]> {
  // Mock data - in production, fetch from Firestore
  return [
    {
      id: "1",
      title: "NMTA 2026 Submission Guidelines Released",
      excerpt: "Complete guidelines for film and television submissions are now available.",
      content: "Full content here...",
      date: "2024-01-15",
      category: "Announcements",
      image: "/placeholder.svg?height=300&width=400&text=Guidelines",
    },
  ]
}

export async function addFeaturedContent(content: {
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  image: string
}): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "featured_content"), {
      ...content,
      timestamp: serverTimestamp(),
    })
    return docRef.id
  } catch (error) {
    console.error("Error adding featured content:", error)
    throw error
  }
}

// Notable Persons Functions
export async function getNotablePersons(): Promise<NotablePerson[]> {
  // Mock data - in production, fetch from Firestore
  return [
    {
      id: "1",
      name: "Dr. Amaka Igwe",
      role: "Jury Chair",
      affiliation: "Nollywood Pioneer",
      bio: "Renowned filmmaker with over 25 years of experience.",
      image: "/professional-woman-portrait.png",
      category: "jury",
    },
  ]
}

export async function addNotablePerson(person: {
  name: string
  role: string
  affiliation: string
  category: "jury" | "patron" | "advisory"
  image: string
  bio: string
}): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "notable_persons"), {
      ...person,
      timestamp: serverTimestamp(),
    })
    return docRef.id
  } catch (error) {
    console.error("Error adding notable person:", error)
    throw error
  }
}

// Contact Form Functions
export const submitContactForm = async (data: ContactSubmission): Promise<void> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log("Contact form submitted (mock):", data)
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const q = query(collection(db, "contact_submissions"), orderBy("timestamp", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as ContactSubmission,
    )
  } catch (error) {
    console.error("Error fetching contact submissions:", error)
    return []
  }
}

// About Data Functions
export async function getAboutData(): Promise<AboutData> {
  try {
    const docRef = doc(db, "siteContent", "about")
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data() as AboutData
    } else {
      // Return default data if document doesn't exist
      return {
        mission:
          "To recognize, celebrate, and promote excellence in Nollywood cinema and television, while fostering the growth and development of the Nigerian entertainment industry.",
        vision:
          "To be the premier platform for celebrating African storytelling and establishing Nollywood as a globally recognized and respected film industry.",
        history:
          "The Nollywood Movie & Television Awards (NMTA) was established in 2010 with a singular mission: to recognize and celebrate excellence in Nigerian cinema and television production.",
        statistics: {
          yearsOfExcellence: 16,
          filmsRecognized: 500,
          industryProfessionals: 1000,
          awardCategories: 25,
        },
      }
    }
  } catch (error) {
    console.error("Error fetching about data:", error)
    // Return default data on error
    return {
      mission:
        "To recognize, celebrate, and promote excellence in Nollywood cinema and television, while fostering the growth and development of the Nigerian entertainment industry.",
      vision:
        "To be the premier platform for celebrating African storytelling and establishing Nollywood as a globally recognized and respected film industry.",
      history:
        "The Nollywood Movie & Television Awards (NMTA) was established in 2010 with a singular mission: to recognize and celebrate excellence in Nigerian cinema and television production.",
      statistics: {
        yearsOfExcellence: 16,
        filmsRecognized: 500,
        industryProfessionals: 1000,
        awardCategories: 25,
      },
    }
  }
}

export async function updateAboutData(data: AboutData): Promise<void> {
  try {
    const docRef = doc(db, "siteContent", "about")
    await updateDoc(docRef, data)
  } catch (error) {
    console.error("Error updating about data:", error)
    throw error
  }
}

// Award Categories Functions
export async function getAwardCategories(): Promise<DocumentData[]> {
  try {
    const q = query(collection(db, "award_categories"), orderBy("order"))
    const querySnapshot = await getDocs(q)
    const categories: DocumentData[] = []

    querySnapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() })
    })

    return categories
  } catch (error) {
    console.error("Error fetching award categories:", error)
    return []
  }
}
