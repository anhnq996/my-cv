import type { ReactNode } from "react";
import Image from "next/image";

const cv = {
  name: "Ngô Quốc Anh",
  initials: "QA",
  title: "Full-stack Developer",
  focus: "Backend Developer",
  location: "Hồ Chí Minh City",
  email: "anhnq996@gmail.com",
  phone: "0968849541",
  github: "https://github.com/anhnq996",
  birthday: "08/07/1996",
  summary:
    "Highly motivated and results-oriented Backend Developer with 7 years of experience in designing, developing, and maintaining robust and scalable server-side applications. Proven expertise in PHP, Node.js, MySQL, MongoDB, RESTful APIs, Docker, Redis, and RabbitMQ.",
  highlights: [
    { value: "7+", label: "Years of experience" },
    { value: "6", label: "Major products delivered" },
    { value: "100k+", label: "Users supported" },
    { value: "2019", label: "Best Runner award" },
  ],
  skills: [
    {
      title: "Backend",
      items: ["Node.js", "NestJS", "Go", "Gin", "PHP", "Laravel", "RESTful API", "JWT Authentication", "WebSocket"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB", "PostgreSQL", "MariaDB", "PostGIS", "SQL optimization", "NoSQL"],
    },
    {
      title: "Infrastructure",
      items: ["Docker", "K9S", "Redis", "RabbitMQ", "Traefik", "MinIO", "GitHub Actions", "Git flow", "Firebase", "FCM"],
    },
    {
      title: "Frontend & Mobile",
      items: ["TypeScript", "JavaScript ES6+", "Next.js", "React", "TailwindCSS", "Material UI", "React Native", "Flutter"],
    },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "GMO-Z.com Runsystem",
      period: "06/2018 - Now",
      location: "Hồ Chí Minh City",
      bullets: [
        "Participated in multiple outsourced projects using Laravel, Node.js, MySQL, PostgreSQL, and MongoDB.",
        "Designed RESTful APIs with JWT authentication and role-based access control.",
        "Optimized performance with Redis caching and RabbitMQ message queues.",
        "Joined system analysis and architecture design to improve scalability and maintainability.",
        "Implemented CI/CD pipelines with GitHub Actions for automated deployment and testing.",
        "Collaborated with mobile teams on Flutter and React Native applications.",
      ],
      tech: ["Laravel", "Node.js", "NestJS", "MySQL", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"],
    },
  ],
  projects: [
    {
      name: "GoTalk",
      role: "Pet Project - Fullstack Developer",
      period: "2026",
      tag: "Real-time chat & video call",
      description:
        "End-to-end real-time communication platform combining a Next.js web client with a scalable Go API. The product supports live messaging, typing presence, online/offline status, cursor-based message loading, file-ready object storage, and WebRTC signaling for voice/video calls.",
      achievements: [
        "Built a high-performance Go backend with Gin, layered services/repositories, JWT authentication, bcrypt password hashing, and PostgreSQL data persistence.",
        "Implemented distributed WebSocket messaging with Redis Pub/Sub so the system can support multiple API instances and multi-device user sessions.",
        "Designed production-style local infrastructure with Docker Compose, Traefik reverse proxy, PostgreSQL, Redis, MinIO, Mailpit, migrations, seeding, and API documentation assets.",
        "Developed the Next.js frontend foundation with React 19, TypeScript, Tailwind CSS, Axios, Google OAuth integration, date-fns, and lucide-react UI icons.",
      ],
      tech: [
        "Go",
        "Gin",
        "WebSocket",
        "Redis Pub/Sub",
        "PostgreSQL",
        "JWT",
        "WebRTC",
        "Docker",
        "Traefik",
        "MinIO",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Google OAuth",
      ],
      links: [
        { label: "Live Demo", href: "https://gotalk.anhnq.io.vn/" },
        { label: "Web GitHub", href: "https://github.com/GotalkApp/web-gotalk" },
        { label: "API GitHub", href: "https://github.com/GotalkApp/api-gotalk" },
      ],
      featured: true,
    },
    {
      name: "API Docs",
      role: "Pet Project - Frontend Developer",
      period: "2026",
      tag: "Interactive API documentation",
      description:
        "Modern API documentation platform for product and backend teams. It can read and render API documents following the OpenAPI standard, then turns specs into a polished developer portal with authenticated access, searchable endpoint navigation, request/response details, code examples, and multi-format export for sharing documentation outside the app.",
      achievements: [
        "Implemented OpenAPI-compatible document parsing so API definitions can be imported from standard YAML/JSON specs and rendered into readable endpoint documentation.",
        "Built a responsive documentation workspace with sidebar groups, endpoint search, method badges, schema tables, response examples, and syntax-highlighted code snippets.",
        "Implemented export flows for HTML, PDF, Swagger/OpenAPI JSON, and Word documents so teams can reuse the same source of truth across browsers, Postman, Swagger UI, and offline documents.",
        "Designed a clean login and protected docs experience with a dark authentication screen and a light documentation workspace optimized for reading long API references.",
      ],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAPI", "Swagger", "YAML/JSON", "DOCX Export", "Syntax Highlighting"],
      image: "/api-docs-preview.svg",
      imageAlt: "API Docs interface preview showing endpoint documentation and code examples",
      links: [
        { label: "Live Demo", href: "https://api-docs.anhnq.io.vn/login" },
        { label: "GitHub", href: "https://github.com/anhnq996/api-docs" },
      ],
      featured: true,
    },
    {
      name: "Deemap",
      role: "Backend Developer",
      period: "2025 - 2026",
      tag: "Mapping platform",
      description:
        "Specialized mapping and land-use planning platform for searching, verifying, and visualizing property planning data.",
      achievements: [
        "Architected NestJS and PostgreSQL backend infrastructure for large planning datasets and high-concurrency requests.",
        "Used PostGIS for advanced spatial querying by GPS coordinates and geographic boundaries.",
        "Integrated Vietmap API, Firebase Cloud Messaging, MoMo Gateway, and Google/Apple In-App Purchases.",
      ],
      tech: ["NestJS", "PostgreSQL", "PostGIS", "Vietmap API", "FCM", "MoMo"],
    },
    {
      name: "Ycare",
      role: "Backend Developer",
      period: "2022 - 2024",
      tag: "Health commerce",
      description: "Health tracking and reward-based e-commerce application.",
      achievements: [
        "Developed backend services supporting hundreds of thousands of users.",
        "Built RESTful APIs with JWT and social login for Facebook and Google.",
        "Integrated RabbitMQ and Redis to improve performance and stability.",
      ],
      tech: ["Laravel", "MariaDB", "Redis", "RabbitMQ", "Firebase", "RESTful API"],
    },
    {
      name: "Hostify",
      role: "Backend Developer",
      period: "2021 - 2022",
      tag: "Hosting commerce",
      description: "Automated e-commerce platform for domains, SSL, and email server services.",
      achievements: [
        "Built a self-service customer portal for hosting management.",
        "Integrated MoMo Payment Gateway and Zalo OA notifications.",
        "Improved throughput with Redis caching and asynchronous background job queues.",
      ],
      tech: ["Laravel", "Redis", "MoMo", "Zalo OA", "Queues"],
    },
    {
      name: "Salefie",
      role: "Backend Developer",
      period: "2020 - 2021",
      tag: "Workforce system",
      description: "Workforce management system for employee check-ins, reporting, and field navigation.",
      achievements: [
        "Designed scalable APIs for real-time employee tracking and automated reports.",
        "Integrated Google Maps API for geofencing, check-in validation, and route mapping.",
        "Synchronized mobile and web data using Redis under high concurrency.",
      ],
      tech: ["Backend API", "Google Maps API", "Redis", "Mobile sync"],
    },
    {
      name: "Sales Management System",
      role: "Backend Developer",
      period: "2019 - 2020",
      tag: "Analytics",
      description: "High-performance web application for sales operations and business analytics.",
      achievements: [
        "Architected backend modules capable of processing millions of records.",
        "Optimized complex SQL queries and indexing strategies.",
        "Developed real-time business dashboards for stakeholder insights.",
      ],
      tech: ["SQL", "Indexing", "Analytics", "Dashboard"],
    },
    {
      name: "Smart Home",
      role: "Fullstack Developer",
      period: "2018 - 2019",
      tag: "IoT mobile",
      description: "Cross-platform mobile application to control IoT devices with centralized Admin CMS.",
      achievements: [
        "Engineered real-time communication between mobile devices and IoT hardware.",
        "Developed Admin CMS to manage device life cycles and system configurations.",
      ],
      tech: ["Node.js", "React Native", "Firebase", "Socket.io"],
    },
  ],
  education: {
    school: "TRA VINH University",
    degree: "Information Technology",
    period: "2014 - 2018",
    details: ["Major: Software Development", "GPA: 7.5"],
  },
  awards: [{ name: "Best Runner 2019", issuer: "GMO-Z.com Runsystem" }],
};

const nav = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-600">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs text-slate-600 shadow-sm">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-slate-900">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
              {cv.initials}
            </span>
            <span className="hidden text-sm font-semibold text-slate-800 sm:block">{cv.name}</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {nav.map(([href, label]) => (
              <a key={href} href={`#${href}`} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-cyan-700">
                {label}
              </a>
            ))}
          </div>

          <a
            href="/Ngo-Quoc-Anh-CV.pdf"
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:bg-cyan-700"
          >
            Download CV
          </a>
        </nav>
      </div>

      <section id="top" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(124,58,237,0.14),transparent_28%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-700">Fullstack Developer</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-7xl">
              {cv.name}
            </h1>
            <p className="mt-5 text-2xl font-medium text-slate-700">{cv.focus}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{cv.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-gradient-to-r from-cyan-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20">
                View Projects
              </a>
              <a href={`mailto:${cv.email}`} className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-cyan-300">
                Contact Me
              </a>
              <a
                href={cv.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-violet-300"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-slate-100 shadow-2xl shadow-slate-900/20">
            <div className="mb-5 flex items-center gap-2 border-b border-slate-800 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-auto font-mono text-xs text-slate-500">profile.ts</span>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-sm leading-7 text-slate-300">
              <code>{`const developer = {
  name: "${cv.name}",
  role: "${cv.title}",
  location: "${cv.location}",
  experience: "7 years",
  stack: ["Node.js", "Laravel", "NestJS"],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  focus: "Scalable backend systems"
};`}</code>
            </pre>
          </aside>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="// profile" title="About Me" />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr]">
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I build backend systems and full-stack products with a pragmatic focus on stability, maintainability, and business impact.
                My work spans outsourced products, healthcare, mapping, hosting commerce, IoT, and analytics platforms.
              </p>
              <p>
                I am comfortable from API design and database optimization through caching, queues, CI/CD, and collaboration with mobile teams.
                The strongest thread across my CV is turning complex product workflows into reliable services that can grow.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cv.highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-cyan-700">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-slate-200 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="// toolkit" title="Technical Skills" />
          <div className="grid gap-5 md:grid-cols-2">
            {cv.skills.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-slate-200 bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="// career" title="Work Experience" />
          {cv.experience.map((job) => (
            <article key={job.company} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">{job.role}</h3>
                  <p className="mt-1 font-medium text-cyan-700">{job.company}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-sm text-slate-600">{job.period}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-xl border border-slate-200 bg-white p-4">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="border-t border-slate-200 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="// selected work" title="Featured Projects" />
          <div className="grid gap-5 md:grid-cols-2">
            {cv.projects.map((project) => (
              <article
                key={project.name}
                className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  project.featured
                    ? "border-cyan-300 bg-gradient-to-br from-cyan-50 to-violet-50 md:col-span-2"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">{project.tag}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">{project.name}</h3>
                    <p className="mt-1 text-sm font-medium text-cyan-700">{project.role} | {project.period}</p>
                  </div>
                </div>
                {"image" in project && project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={720}
                    className="mt-6 aspect-[5/3] w-full rounded-xl border border-slate-200 bg-white object-cover shadow-lg shadow-slate-900/5"
                  />
                ) : null}
                <p className="mt-5 leading-7 text-slate-600">{project.description}</p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                  {project.achievements.map((achievement) => (
                    <li key={achievement} className="border-l-2 border-cyan-400 pl-3">{achievement}</li>
                  ))}
                </ul>
                {"links" in project && project.links ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-slate-950 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-cyan-700"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-t border-slate-200 bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="// credentials" title="Education & Awards" />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700">Education</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">{cv.education.school}</h3>
              <p className="mt-2 text-slate-600">{cv.education.degree} ({cv.education.period})</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cv.education.details.map((detail) => (
                  <Pill key={detail}>{detail}</Pill>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Awards</p>
              {cv.awards.map((award) => (
                <div key={award.name} className="mt-3">
                  <h3 className="text-2xl font-semibold text-slate-950">{award.name}</h3>
                  <p className="mt-2 text-slate-600">{award.issuer}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle kicker="// contact" title="Let's Work Together" />
            <p className="max-w-xl leading-8 text-slate-600">
              Available for backend, full-stack, and product engineering opportunities where reliable systems and thoughtful delivery matter.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href={`mailto:${cv.email}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-cyan-300">
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 font-semibold text-slate-950">{cv.email}</p>
            </a>
            <a href={`tel:${cv.phone}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-cyan-300">
              <p className="text-sm text-slate-500">Phone</p>
              <p className="mt-2 font-semibold text-slate-950">{cv.phone}</p>
            </a>
            <a href={cv.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-cyan-300">
              <p className="text-sm text-slate-500">GitHub</p>
              <p className="mt-2 font-semibold text-slate-950">github.com/anhnq996</p>
            </a>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Location</p>
              <p className="mt-2 font-semibold text-slate-950">{cv.location}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        <span className="font-mono text-cyan-300">&lt;{cv.name} /&gt;</span>
        <span className="mx-2">Built with Next.js, TypeScript, and Tailwind CSS.</span>
      </footer>
    </main>
  );
}
