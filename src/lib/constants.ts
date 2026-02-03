export const THERAPIST_PROFILE = {
  name: "Dr. Maya Reynolds",
  title: "Licensed Clinical Psychologist",
  license: "PSY 12345",
  location: "Santa Monica, CA",
  specializations: ["Anxiety", "Panic Disorders", "Trauma", "Burnout"],
  approaches: ["CBT", "EMDR", "Mindfulness", "Body-Oriented Techniques"],
  clientTypes: ["High-achieving adults", "Overwhelmed professionals"],
  sessionTypes: ["In-person", "Telehealth"],
  bio: "Dr. Maya Reynolds is a licensed clinical psychologist with over 10 years of experience providing therapy in Santa Monica, helping high-achieving adults navigate anxiety, trauma, and burnout. She combines evidence-based approaches with compassionate care to create a safe space for healing and growth in the heart of Santa Monica, California.",
  image: "/images/dr-maya-reynolds.png",
  imageAlt: "Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica, CA - Professional headshot"
} as const

export const OFFICE_INFO = {
  address: {
    street: "123th Street 45 W",
    city: "Santa Monica",
    state: "CA",
    zipCode: "90401"
  },
  description: "Our Santa Monica therapy office provides a warm, comfortable, and private environment designed to help you feel safe and supported throughout your therapeutic journey. Located in the heart of Santa Monica, our space reflects the calming coastal atmosphere while maintaining complete privacy and confidentiality.",
  features: ["Private consultation rooms", "Comfortable seating areas", "Calming atmosphere", "Easy parking access"],
  images: [
    {
      src: "/images/office-1.jpeg",
      alt: "Comfortable therapy office waiting area in Santa Monica - calming decor and natural lighting"
    },
    {
      src: "/images/office-2.jpeg", 
      alt: "Private therapy consultation room - safe and confidential space for sessions"
    },
    {
      src: "/images/office-3.jpeg",
      alt: "Therapy office seating area - comfortable environment for healing and growth"
    }
  ]
} as const

export const CONTACT_INFO = {
  phone: "(123) 456-7890",
  email: "info@drmayareynolds.com",
  address: "123th Street 45 W, Santa Monica, CA 90401"
} as const
