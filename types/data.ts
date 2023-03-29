export interface Destination {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

export interface CrewMember {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}

export interface Technologies {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}

export interface Data {
  destinations: Destination[]
  crew: CrewMember[]
  technology: Technologies[]
}
