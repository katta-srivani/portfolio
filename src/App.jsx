import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, Download, Code2, Database, Server, Palette, Award, GraduationCap, BriefcaseBusiness, Menu, X } from "lucide-react";

const profile = {
  name: "Srivani K",
  role: "MERN Stack Developer",
  email: "kattasrivani74@gmail.com",
  phone: "+91 7093369397",
  summary:
    "MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js with experience building responsive, scalable, and user-focused full-stack web applications. Passionate about clean code, REST API development, authentication, and modern frontend experiences.",
};

const skills = {
  Frontend: ["React.js", "JavaScript ES6", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Flexbox", "CSS Grid"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "bcrypt", "MVC Architecture"],
  Database: ["MongoDB", "Mongoose", "CRUD Operations", "Query Optimization"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Figma", "NPM"],
};

const experiences = [
  {
    title: "Customer Support Ticketing System",
    duration: "4 Months",
    points: [
      "Developed reusable React components for ticket creation, listing, and detailed views.",
      "Integrated REST APIs to create, update, prioritize, and track ticket status in real time.",
      "Built dashboards to help managers monitor workload, ticket aging, and resolution timelines.",
      "Handled loading states, empty screens, error messages, and responsive UI using Tailwind CSS.",
    ],
  },
  {
    title: "Frontend Development & Admin Workflows",
    duration: "6 Months",
    points: [
      "Converted UI/UX designs into responsive pages using React.js, HTML5, CSS3, and Tailwind CSS.",
      "Integrated REST APIs for content listing, editing, publishing, and CRUD workflows.",
      "Implemented role-based access for editors and admins with clean, scalable layouts.",
      "Improved page performance, UI consistency, accessibility, and cross-browser compatibility.",
    ],
  },
  {
    title: "Corporate Learning Management System",
    duration: "Project Experience",
    points: [
      "Built course listing, course detail, progress tracking, quizzes, and assessment components.",
      "Designed learner and manager dashboards for training progress and completion insights.",
      "Integrated backend services for course content, user progress, and certification data.",
      "Created reusable components and handled loading, error, and empty content states.",
    ],
  },
];

const projects = [
  {
    name: "Kanban Board",
    type: "Task Management Application",
    description:
      "A responsive Kanban-style task management app with drag-and-drop columns, modal task views, and persistent local storage.",
    tech: ["React.js", "Tailwind CSS", "Context API", "useState", "useEffect", "DnD"],
  },
  {
    name: "Notes App",
    type: "To-Do Application",
    description:
      "A clean productivity app to add, edit, delete, and mark tasks as completed with dynamic UI updates and local storage persistence.",
    tech: ["React.js", "Tailwind CSS", "Hooks", "Local Storage"],
  },
  {
    name: "Movie Search App",
    type: "API-Based Application",
    description:
      "A modern movie search application using OMDb API with real-time search, pagination, routing, detailed movie pages, and favorites.",
    tech: ["React.js", "React Router", "OMDb API", "Tailwind CSS"],
  },
  {
    name: "Express Book Reviews",
    type: "Backend API Project",
    description:
      "RESTful backend APIs for book reviews with JWT authentication, role-based actions, pagination, optimized queries, and MVC structure.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "MVC"],
  },
  {
    name: "Authentication & Authorization",
    type: "MERN Security Project",
    description:
      "Secure authentication system with forgot/reset password flow, JWT token handling, bcrypt password hashing, and email verification.",
    tech: ["MERN", "JWT", "bcrypt", "REST APIs", "MongoDB"],
  },
];

const education = [
  { degree: "B.Tech", institute: "Vignan's Institute of Information Technology", year: "2024" },
  { degree: "Intermediate", institute: "Sri Chaitanya Junior College", year: "2020" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function GitHubIcon({ size = 20 }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.92c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3h14ZM8.34 18.34v-8.1H5.86v8.1h2.48ZM7.1 9.13c.79 0 1.44-.65 1.44-1.46 0-.8-.65-1.44-1.44-1.44-.8 0-1.45.64-1.45 1.44 0 .81.65 1.46 1.45 1.46Zm11.04 9.21v-4.42c0-2.37-1.26-3.47-2.94-3.47-1.36 0-1.97.75-2.31 1.28v-1.49h-2.48v8.1h2.48v-4.02c0-1.06.2-2.08 1.51-2.08 1.29 0 1.3 1.21 1.3 2.15v3.95h2.44Z" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-7 max-w-3xl text-center"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm leading-5 text-slate-300">{subtitle}</p>}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-lg font-bold text-white">Srivani<span className="text-cyan-300">.</span></a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {link}
            </a>
          ))}
        </div>
        <button className="rounded-xl border border-white/10 p-2 text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-300">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[85vh] items-center overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#164e63,transparent_35%),radial-gradient(circle_at_bottom_right,#4c1d95,transparent_35%)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Available for Full Stack Developer Roles
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Hi, I’m {profile.name}. <br /> I build <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">modern MERN apps</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:-translate-y-1 hover:bg-cyan-200">
              View Projects
            </a>
            <a href="#contact" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10">
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><Mail size={16} /> {profile.email}</span>
            <span className="inline-flex items-center gap-2"><Phone size={16} /> {profile.phone}</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-slate-950/70 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <pre className="overflow-hidden text-sm leading-7 text-slate-300">
              <code>{`const developer = {
  name: "Srivani K",
  stack: "MERN",
  focus: ["React", "APIs", "Auth"],
  goal: "Build clean web apps"
};`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About" title="A developer focused on clean UI and strong backend logic" subtitle="I enjoy converting ideas into responsive, scalable applications using React, Node.js, Express.js, and MongoDB." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [Code2, "Frontend", "Responsive React interfaces with reusable components and Tailwind CSS."],
            [Server, "Backend", "RESTful APIs, authentication, role-based access, and MVC structure."],
            [Database, "Database", "MongoDB schemas, CRUD operations, and optimized queries."],
          ].map(([Icon, title, text]) => (
            <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]">
              <Icon className="mb-4 text-cyan-300" size={32} />
              <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-white/[0.03] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Skills" title="Technical toolkit" subtitle="A practical MERN skill set for building frontend interfaces, APIs, authentication flows, and database-driven applications." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-white"><Palette size={18} className="text-cyan-300" /> {category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Experience" title="Hands-on development experience" subtitle="Experience across ticketing systems, admin workflows, and learning management platforms." />
        <div className="space-y-6">
          {experiences.map((exp) => (
            <motion.div key={exp.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
              <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white"><BriefcaseBusiness className="text-cyan-300" size={22} /> {exp.title}</h3>
                <span className="rounded-full bg-violet-400/10 px-4 py-1 text-sm font-semibold text-violet-200">{exp.duration}</span>
              </div>
              <ul className="grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2">
                {exp.points.map((point) => <li key={point} className="rounded-2xl bg-slate-950/40 p-4">• {point}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white/[0.03] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Projects" title="Featured portfolio projects" subtitle="A selection of frontend, backend, and MERN projects demonstrating UI development, API integration, authentication, and state management." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article key={project.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-950/40">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.type}</p>
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="mt-4 min-h-24 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{tech}</span>)}
              </div>
              <div className="mt-6 flex gap-3">
                <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/50"><GitHubIcon size={16} /> GitHub</button>
                <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-cyan-300/50 px-4 py-2 text-sm font-semibold text-slate-950/70"><ExternalLink size={16} /> Demo</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Education & Achievement" title="Learning foundation and recognition" />
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <motion.div key={item.institute} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
              <GraduationCap className="mb-4 text-cyan-300" />
              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.institute}</p>
              <p className="mt-3 text-sm font-semibold text-cyan-200">{item.year}</p>
            </motion.div>
          ))}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/10 to-violet-300/10 p-6">
            <Award className="mb-4 text-yellow-300" />
            <h3 className="text-xl font-bold text-white">Top 400 Rank</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Ranked in the Top 400 among thousands of participants in the GeeksforGeeks 21-Day Coding Challenge powered by Deutsche Bank.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white/[0.03] px-5 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle eyebrow="Contact" title="Let’s build something useful" subtitle="Open to full stack developer, MERN stack developer, frontend developer, and internship opportunities." />
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"><Mail size={18} /> Email Me</a>
            <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 font-semibold text-white/60"><Download size={18} /> Download Resume</button>
          </div>
          <div className="mt-6 flex justify-center gap-4 text-slate-300">
            <button type="button" disabled aria-label="GitHub profile link coming soon" title="GitHub profile link coming soon" className="cursor-not-allowed rounded-full border border-white/10 p-3 text-slate-500"><GitHubIcon size={20} /></button>
            <button type="button" disabled aria-label="LinkedIn profile link coming soon" title="LinkedIn profile link coming soon" className="cursor-not-allowed rounded-full border border-white/10 p-3 text-slate-500"><LinkedInIcon size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen scroll-smooth bg-slate-950 font-sans text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Srivani K. Built with React & Tailwind CSS.
      </footer>
    </main>
  );
}
