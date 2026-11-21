# Shabbir Ahmed Shuvo — Portfolio

> Personal portfolio website of **Shabbir Ahmed Shuvo**, Full-Stack Developer specializing in React, Next.js (App Router), TypeScript, and Node.js.

🌐 **Live Website:** [shabbirahmedshuvo01.github.io](https://shabbirahmedshuvo01.github.io)

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Static Site Generation)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict type safety, zero `any`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Feather & Simple Icons)
- **Deployment:** GitHub Pages / Vercel

---

## ✨ Features

- **Performance-First Architecture:** Statically generated with sub-second page loads and zero layout shift.
- **Dark Mode Aesthetic:** Slate-950 foundation with subtle radial cyan accents and translucent backdrop-blur surfaces.
- **Architectural Case Study Modals:** Interactive modals for client production platforms with detailed system breakdowns.
- **Accessible & SEO-Optimized:** Semantic HTML5, WCAG-compliant contrast, OpenGraph social cards, and Schema.org `Person` JSON-LD structured data.
- **Fully Responsive:** Edge-to-edge layout optimization across viewports from 360px mobile to ultra-wide desktop monitors.

---

## 🛠️ Local Development

### Prerequisites

- Node.js >= 18.18.0 (Recommended: Node.js 20 LTS or Node.js 22 LTS)
- npm >= 9.0.0

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shabbirahmedshuvo01/shabbirahmedshuvo01.github.io.git
   cd shabbirahmedshuvo01.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live site.

### Build & Quality Verification

```bash
# Type check without emitting files
npx tsc --noEmit

# Lint for code quality
npm run lint

# Create production build
npm run build
```

---

## 📁 Project Structure

```
shabbirahmedshuvo01.github.io/
├── public/                  # Static assets (resume PDF, OpenGraph banner, robots.txt, sitemap)
├── src/
│   ├── app/                 # Next.js App Router (layout.tsx, globals.css, page.tsx)
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Background, Container
│   │   ├── sections/        # Hero, About, Skills, Experience, Projects, Education, Contact
│   │   └── ui/              # Reusable UI primitives (Badge, Button, Card, Modal, SectionHeading)
│   ├── data/                # Strongly-typed data models (profile, experience, projects, skills, etc.)
│   ├── hooks/               # Custom React hooks (useClipboard, useActiveSection, useScrollPosition)
│   └── types/               # TypeScript definitions & interfaces
├── package.json
└── tsconfig.json
```

---

## 👨‍💻 Author

**Shabbir Ahmed Shuvo**
- Website: [shabbirahmedshuvo01.github.io](https://shabbirahmedshuvo01.github.io)
- GitHub: [@shabbirahmedshuvo01](https://github.com/shabbirahmedshuvo01)
- LinkedIn: [in/shabbir-ahmed-shuvo](https://linkedin.com/in/shabbir-ahmed-shuvo)
