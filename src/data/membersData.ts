export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imagePath: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  socialLinks?: {
    linkedin?: string;
    github?: string;
    email?: string;
    website?: string;
  };
}

export const teamMembers: TeamMember[] = [

  {
    id: 1,
    name: "Dhruv Saini",
    role: "Community Leader",
    imagePath: "/images/dhruv-saini.png",
    bio: "Leading TechCivix |Ex-Cybersecurity Intern @ Gurugram Police",
    expertise: [
      "Social Engineering",
      "Real-Life Problem Solving",
      "CDR and IPDR",
      "OSINT",
        ],
    achievements: [
      "GPCSII Internship Recognition from ACP Prayanshu Deewan Sir and Rakshit Tandon Sir",
      "Conducted many cybersecurity awareness sessions",
      "Certified ethical hacker",
      "SEYTONIC CERTIFIED CRIME INVESTIGATOR"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kafiltafish2",
      email: "dhruvsaini9960@gmail.com"
    }
  },
  {
    id: 2,
    name: "Kartik Bhattacharya",
    role: "Technical Project Manger",
    imagePath: "/images/kartik-bhattacharya.jpg",
    bio: "Ex-Cybersecurity Intern at Gurugram Police and a finalist at Pentathon 2024 by NCIIPC, Government of India.Has secured top organizations like NASA, NFL, and Lenovo, and is skilled in web development, social media automation, and cybersecurity training",
    expertise: [
      "Cybersecurity Awareness Training",
      "Social Media Automation",
      "Web Development, Design",
      "Cyber Security Trainer"
    ],
    achievements: [
      "GPCSII Internship Recognition from ACP Prayanshu Deewan Sir and Rakshit Tandon Sir",
      "Conducted onlince cybersecurity awareness sessions",
      "Trained many individuals in digital safety",
      "Secured NASA, NFL, LENOVO, VECV, and many more"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kafiltafish21 ",
      email: "kartikbhattacharya10@gmail.com"
    }
  },
  {
    id: 3,
    name: "Sarash Mishra",
    role: "Sponsorship Manager",
    imagePath: "/images/saras-mishra.png",
    bio: "Ex-Cybersecurity Intern at Gurugram Police &Building Ethicbizz with a focus on Threat Intelligence, while actively contributing as a speaker, mentor, and ethical entrepreneur",
    expertise: [
      "Educational Innovation",
      "Ethical Leadership",
      "Speake",
      "Mentor",
      "Entrepreneur",
      "Threat Intelligence"
    ],
    achievements: [
      "Cyber Security Summer Internship 2025 (GPCSSI25)"
    ],
          socialLinks: {
        linkedin: "https://www.linkedin.com/in/sarash-mishra/",
        website: "https://ethicbizz.org/"
      }
  }
,


  {
    id: 4,
    name: "Mahir Sharma",
    role: "Event Manager",
    imagePath: "/images/mahir_sharma.jpg",
    bio: "Ex-Cybersecurity Intern at Gurugram Police. And Cybersecurity Enthusiast",
    expertise: [
      "Threat Intelligence",
      "Digital Forensics",
      "Penetration Testing",
      "Bug Hunting",
      "Cybersecurity Researcher",
      "Backend Developer",
        ],
    achievements: [
      "GPCSII Internship Recognition from ACP Prayanshu Deewan Sir and Rakshit Tandon Sir",
      "Conducted cybersecurity awareness sessions",
      "Certified Ethical Hacker",
      "Cisco Certified Network Associate (CCNA)",
      "Cryptus Certified Digital Forensics"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mahir-sharma-680478270",
      email: "mahir286sharma@gmail.com"
    }
  },
  {
    id: 5,
    name: "Yashika Sharma",
    role: "Cybersecurity Specialist",
    imagePath: "/images/yashika.jpeg",
    bio: "Pursuing integrated BTech MTech CSE specialization in cybersecurity from National Forensic Sciences University, Delhi. Directorate of Forensic Sciences intern and GPCSII intern with extensive cybersecurity certifications.",
    expertise: [
      "Cyber Forensics",
      "Ethical Hacking",
      "Network Security",
      "Computer Forensics",
      "System Administration",
      "Network Administration"
    ],
    achievements: [
      "Integrated BTech MTech CSE - Cybersecurity Specialization",
      "Directorate of Forensic Sciences Intern",
      "GPCSII Intern",
      "Cyber Forensic Certification",
      "Certified Ethical Hacker (CEH)",
      "Computer Hacking Forensic Investigator (CHFI)",
      "Cisco Certified Network Associate (CCNA)",
      "Microsoft Certified Solutions Associate (MCSA)",
      "CompTIA A+ Certification",
      "CompTIA Network+ Certification"
    ],
    socialLinks: {
      email: "yashika.sharma@nfsu.ac.in"
    }
  }
]; 