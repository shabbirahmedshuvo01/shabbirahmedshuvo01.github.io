"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import profilePic from "@/assets/profile-pic.png";

const profile = {
  name: "Shabbir Ahmed Shuvo",
  role: "Full-Stack Developer",
  phone: "+88 01762-583535",
  email: "sabbirshuvo006@gmail.com",
  location: "Banasree, Dhaka, Bangladesh",
  summary:
    "Motivated Full Stack Developer with experience building responsive and scalable web applications. Passionate about clean UI, solving real-world problems, and continuously improving technical skills.",
  links: {
    linkedin: "https://www.linkedin.com/in/shabbir-ahmed-shuvo/",
    github: "https://github.com/shabbirahmedshuvo01",
    portfolio: "https://my-special-portfolio.vercel.app/",
  },
};

const skillGroups = [
  {
    title: "Expertise",
    items: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "REST API",
      "Electron.js",
    ],
  },
  {
    title: "Comfortable",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "React Query",
      "Axios",
      "Figma",
      "Supabase",
      "Strapi",
      "Sanity",
      "JWT Authentication",
    ],
  },
  {
    title: "Familiar",
    items: [
      "Redux",
      "React Native",
      "Vue.js",
      "Postman",
      "JSON Server",
      "GSAP",
      "Framer Motion",
      "Payment Gateway Integration",
      "WebSockets / Real-Time APIs",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Chrome DevTools",
      "Netlify",
      "Vercel",
      "Linux / CLI",
      "NPM / Yarn",
    ],
  },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "SM Technology",
    companyUrl: "https://smtech24.com/",
    duration: "Dec 2024 - Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Developed and maintained full-stack web applications for clients.",
      "Built reusable and responsive UI components using React.js.",
      "Improved application performance and user experience.",
      "Collaborated with team members on feature development and optimization.",
      "Participated in debugging, testing, and deployment processes.",
    ],
    tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
  },
  {
    role: "Software Developer Intern",
    company: "Greenie Web",
    companyUrl: "https://www.greenieweb.co/",
    duration: "Jan 2023 - Mar 2023",
    location: "Singapore",
    points: [
      "Added new features and fixed bugs in existing applications.",
      "Improved frontend responsiveness and layout consistency.",
      "Assisted in enhancing UI/UX and application usability.",
      "Collaborated with the development team on product improvements.",
    ],
    tech: "Electron.js, JavaScript, HTML, CSS",
  },
];

const projects = [
  {
    name: "Underground Arena",
    links: [{ label: "Live Site", url: "https://underground-arena.org/" }],
    points: [
      "Developed an online gaming tournament management platform.",
      "Implemented dynamic tournament creation and scoring system.",
      "Built features for team creation, match tracking, and leaderboard updates.",
      "Developed responsive UI for seamless cross-device experience.",
    ],
  },
  {
    name: "Restaurant Raffles",
    links: [{ label: "Live Site", url: "https://ali-sef.vercel.app/" }],
    points: [
      "Developed authentication and protected user flows.",
      "Implemented real-time validation and admin control features.",
      "Improved UI responsiveness and interaction feedback.",
    ],
  },
  {
    name: "Bank of BD",
    links: [
      { label: "Live Demo", url: "https://online-money-bd.netlify.app/" },
      {
        label: "Client Repository",
        url: "https://github.com/moazzemhossainnahid/online-bank-of-bd-client/tree/main",
      },
      {
        label: "Server Repository",
        url: "https://github.com/moazzemhossainnahid/online-bank-of-bd-server",
      },
    ],
    points: [
      "Developed a simulated online banking web application.",
      "Implemented features for deposits, withdrawals, and fund transfers.",
      "Built responsive frontend using React.js and Tailwind CSS.",
      "Developed backend APIs using Node.js, Express.js, and MongoDB.",
      "Collaborated with a team on UI design and system functionality.",
    ],
  },
];

const education = [
  {
    title: "BSc in Computer Science (Ongoing)",
    school: "Dhaka International University, Dhaka",
    duration: "2024 - Present",
  },
  {
    title: "Computer Science and Technology",
    school: "Mymensingh Polytechnic Institute, Mymensingh",
    duration: "2019 - 2023",
  },
  {
    title: "Complete Web Development Course",
    school: "Programming Hero (Professional Training)",
    duration: "2022",
  },
];

const resumeFiles = [
  { label: "Resume", path: "/resumes/resume-a.pdf" },
  // { label: "Resume - Frontend", path: "/resumes/resume-f.pdf" },
  // { label: "Resume - MERN", path: "/resumes/resume-m.pdf" },
];

const quickStats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects", value: "20+" },
  { label: "Tech Stack", value: "10+" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const sectionTransition = {
  duration: 0.55,
  ease: "easeOut" as const,
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#060914] text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-[6%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ x: [0, 70, 0], y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[24%] right-[2%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, -72, 0], y: [0, 35, 0], opacity: [0.25, 0.58, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, 48, 0], y: [0, -28, 0], opacity: [0.22, 0.5, 0.22] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b18]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="text-sm font-semibold tracking-[0.15em] text-cyan-300">
            {profile.name}
          </Link>
          <nav className="hidden gap-5 text-sm text-slate-300 md:flex">
            <Link href="#about" className="transition hover:text-cyan-300">About</Link>
            <Link href="#skills" className="transition hover:text-cyan-300">Skills</Link>
            <Link href="#experience" className="transition hover:text-cyan-300">Experience</Link>
            <Link href="#projects" className="transition hover:text-cyan-300">Projects</Link>
            <Link href="#education" className="transition hover:text-cyan-300">Education</Link>
            <Link href="#contact" className="transition hover:text-cyan-300">Contact</Link>
          </nav>
        </div>
      </header>

      <motion.section
        id="home"
        className="relative z-10 mx-auto grid min-h-[90vh] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <motion.div className="space-y-6" variants={sectionVariants} transition={sectionTransition}>
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Welcome To My Universe
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Crafting <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">Digital Masterpieces</span>
          </h1>
          <p className="text-lg font-medium text-slate-200 sm:text-xl">
            I&apos;m {profile.name}, <span className="text-cyan-300">{profile.role}</span>
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300/95">{profile.summary}</p>

          <div className="grid max-w-xl grid-cols-3 gap-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center">
                <p className="text-2xl font-semibold text-cyan-300">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {resumeFiles.map((resume) => (
              <Link
                key={resume.path}
                href={resume.path}
                target="_blank"
                className="rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_0_0_rgba(34,211,238,0)] transition hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.75)]"
              >
                {resume.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href={`mailto:${profile.email}`} className="hover:text-cyan-300">{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="hover:text-cyan-300">{profile.phone}</a>
            <span>{profile.location}</span>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-sm"
          variants={sectionVariants}
          transition={{ ...sectionTransition, delay: 0.08 }}
        >
          <motion.div
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_42px_-20px_rgba(56,189,248,0.75)]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={profilePic} alt="Shabbir Ahmed Shuvo" className="h-auto w-full rounded-2xl object-cover" priority />
          </motion.div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-[#090f1f]/85 p-4 font-mono text-xs text-slate-300">
            <p className="text-slate-500">Portfolio.ts</p>
            <p>01 const developer = &#123;</p>
            <p>02 &nbsp;name: &quot;{profile.name}&quot;,</p>
            <p>03 &nbsp;focus: &quot;Fullstack Mastery&quot;,</p>
            <p>04 &nbsp;skills: [&quot;Next.js&quot;, &quot;Tailwind&quot;, &quot;Node.js&quot;],</p>
            <p>05 &nbsp;passionate: true,</p>
            <p>06 &nbsp;motto: &quot;Build with Purpose&quot;</p>
            <p>07 &#125;;</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href={profile.links.linkedin} target="_blank" className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300">LinkedIn</Link>
            <Link href={profile.links.github} target="_blank" className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300">GitHub</Link>
            <Link href={profile.links.portfolio} target="_blank" className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300">Previous Portfolio</Link>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="about"
        className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">About The Architect</h2>
        <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
          I build modern, responsive, and scalable web applications with a strong focus on clean user experience and reliable functionality. I enjoy shipping production-ready features, collaborating in team environments, and continuously learning better engineering practices.
        </p>
      </motion.section>

      <motion.section
        id="skills"
        className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">The Tech Stack</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_0_rgba(34,211,238,0)] transition hover:border-cyan-300/40 hover:shadow-[0_0_32px_-14px_rgba(34,211,238,0.75)]"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-semibold text-cyan-300">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Professional Journey</h2>
        <div className="mt-8 space-y-6">
          {experiences.map((item) => (
            <motion.article
              key={item.role + item.company}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_0_rgba(34,211,238,0)] transition hover:border-cyan-300/40 hover:shadow-[0_0_32px_-14px_rgba(34,211,238,0.75)]"
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <Link href={item.companyUrl} target="_blank" className="text-cyan-300 hover:underline">
                    {item.company}
                  </Link>
                  <p className="text-sm text-slate-400">{item.location}</p>
                </div>
                <p className="text-sm font-medium text-slate-300">{item.duration}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-300">
                <span className="font-semibold text-slate-200">Tech:</span> {item.tech}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Featured Creations</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_0_rgba(34,211,238,0)] transition hover:border-cyan-300/40 hover:shadow-[0_0_32px_-14px_rgba(34,211,238,0.75)]"
              whileHover={{ y: -6 }}
            >
              <h3 className="text-xl font-semibold text-cyan-300">{project.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.links.map((projectLink) => (
                  <Link
                    key={projectLink.url}
                    href={projectLink.url}
                    target="_blank"
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
                  >
                    {projectLink.label}
                  </Link>
                ))}
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="education"
        className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Education & Training</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {education.map((item) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_0_rgba(34,211,238,0)] transition hover:border-cyan-300/40 hover:shadow-[0_0_32px_-14px_rgba(34,211,238,0.75)]"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-semibold text-cyan-300">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.school}</p>
              <p className="mt-2 text-sm text-slate-400">{item.duration}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_48px_-20px_rgba(34,211,238,0.8)] sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Let&apos;s Connect</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Open to full-time opportunities and impactful freelance projects. Let&apos;s build something valuable together.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-lg bg-gradient-to-r from-cyan-300 to-blue-300 px-4 py-2 font-medium text-slate-950 transition hover:brightness-105">
              Email Me
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2 font-medium text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300">
              Call Me
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Languages: Bengali (Native), English (Intermediate), Hindi (Intermediate)
          </p>
        </div>
      </motion.section>
    </main>
  );
}
