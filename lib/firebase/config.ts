// Mock Firebase configuration for development
// In production, replace with actual Firebase config

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "mock-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "nmta-mock.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "nmta-mock",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "nmta-mock.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:mock-app-id",
}

// Mock Firebase functions for development
export const initializeFirebase = () => {
  console.log("Firebase initialized (mock)")
  return {
    app: { name: "mock-app" },
    db: { collection: () => ({ doc: () => ({ set: () => Promise.resolve() }) }) },
  }
}

export const getFirestore = () => {
  return {
    collection: (name: string) => ({
      doc: (id: string) => ({
        set: (data: any) => Promise.resolve(),
        get: () => Promise.resolve({ exists: true, data: () => ({}) }),
      }),
      add: (data: any) => Promise.resolve({ id: "mock-id" }),
      get: () => Promise.resolve({ docs: [] }),
    }),
  }
}
