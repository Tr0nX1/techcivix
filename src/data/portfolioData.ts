export interface PortfolioSession {
  id: number;
  title: string;
  location: string;
  date: string;
  imagePath: string;
  shortDescription: string;
  fullDetails: {
    overview: string;
    keyTopics: string[];
    participants: string;
    outcomes: string[];
    testimonials?: string[];
    images?: string[];
  };
}

export const portfolioSessions: PortfolioSession[] = [
  {
    id: 1,
    title: "Cybersecurity Awareness at GITI Rewari",
    location: "Government Industrial Training Institute (GITI), Rewari",
    date: "June 27, 2025",
    imagePath: "/images/iti.jpeg",
    shortDescription: "On June 27, 2025, Mr. Dhruv, Mr. Mahir Sharma, interns from the Gurugram Police Cyber Security Summer Internship Batch 2025, successfully conducted a Cyber Awareness Camp in collaboration with the Rewari Cyber Police at Government Industrial Training Institute (GITI), Rewari.The session witnessed active participation from approximately 100 to 150 trainees, along with the presence of the Principal, teaching staff, and students. The workshop focused on educating attendees about real-world cyber threats, online safety practices, and the importance of cyber hygiene in daily life.The effort was formally acknowledged by the institute and adds to the interns' growing contributions toward community-oriented cybersecurity education.",
    fullDetails: {
      overview: "Our first major outreach session was conducted at Government Industrial Training Institute (GITI)",
      keyTopics: [
        "Social Media Safety and Privacy Settings",
        "Identifying and Avoiding Online Scams",
        "Safe Digital Payment Practices",
        "Password Security and Two-Factor Authentication",
        "Recognizing Phishing Attempts"
      ],
      participants: "200+ students ,15 teachers, and administration staff",
      outcomes: [
        "Students demonstrated improved ability to identify suspicious online activities",
        "Increased awareness about social media privacy settings",
        "Better understanding of safe digital payment methods",
        "Enhanced knowledge about password security practices"
      ],
      images: [
        "/images/iti.jpeg",
        "/images/iti2.jpeg",
        "/images/iti3-session.jpeg"
      ]
    }
  },
  {
    id: 2,
    title: "Cybersecurity Awareness at Shri Balaji International School, Kanwali",
    location: "Shri Balaji International School, Kanwali (Rewari)",
    date: "June 27, 2025",
    imagePath: "/images/balaji-school.jpeg",
    shortDescription: "On June 27, 2025, Mr. Dhruv, Mr. Mahir Sharma from the Gurugram Police Cyber Security Summer Internship Batch 2025 conducted a Cyber Awareness Camp in collaboration with Rewari Cyber Police at Shri Balaji International School, Kanwali. The event was attended by the Principal and the teaching staff. The session emphasized educating school faculty on the essentials of cyber safety, including threats students may face in their digital lives. This outreach strengthened the initiative to promote cybersecurity awareness among educational institutions in Rewari.",
    fullDetails: {
      overview: "This school outreach was part of our ongoing initiative to educate institutions about practical cybersecurity measures.",
      keyTopics: [
        "Cyber Threats in Academic Environments",
        "Online Safety for School Children",
        "Importance of Digital Hygiene in Daily Life",
        "Recognizing Phishing & Fraud Attempts",
        "Role of Teachers in Promoting Cyber Awareness"
      ],
      participants: "Faculty members and administration staff of Shri Balaji International School",
      outcomes: [
        "Faculty became more aware of how to guide students in digital safety",
        "Increased understanding of potential school-related cyber threats",
        "Encouraged integration of cyber safety topics in school discussions",
        "Strengthened partnerships between law enforcement and educational institutions"
      ],
      images: [
        "/images/balaji2.jpeg"
      ]
    }
  }
  
]; 