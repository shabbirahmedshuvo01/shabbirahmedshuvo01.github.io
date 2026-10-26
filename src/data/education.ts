import { EducationItem, CertificationItem } from "@/types";

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "diu-bsc",
    degree: "BSc in Computer Science & Engineering",
    institution: "Dhaka International University",
    location: "Dhaka, Bangladesh",
    period: "2024 – Nov 2026 (Expected)",
    status: "In Progress",
    notes:
      "Advanced coursework in Data Structures, Algorithms, Distributed Systems, Software Engineering Methodologies, and Database Architecture.",
  },
  {
    id: "mpi-diploma",
    degree: "Diploma in Computer Science & Technology",
    institution: "Mymensingh Polytechnic Institute",
    location: "Mymensingh, Bangladesh",
    period: "2019 – 2023",
    status: "Completed",
    notes:
      "Core computing foundations including Object-Oriented Programming, Operating Systems, Networking, and Relational Database Systems.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "programming-hero",
    title: "Complete Web Development Track",
    issuer: "Programming Hero",
    year: "2022",
    description:
      "Intensive professional engineering training covering MERN stack development, RESTful APIs, Git workflows, and frontend state management.",
  },
];
