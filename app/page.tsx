import Image from "next/image";
import { RevealOnScroll, ThemeToggle } from "./reveal-on-scroll";

type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  visual: "clientops" | "rag" | "autoflow" | "skin" | "api" | "migration" | "pulse" | "video";
  projectUrl?: string;
  projectLabel?: string;
  githubUrl?: string;
  status?: "In Production";
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects: FeaturedProject[] = [
  {
    title: "KnowledgeBase RAG Assistant",
    category: "RAG Knowledge Workspace",
    description:
      "A professional RAG knowledge workspace that lets users ask questions across internal documents using Supabase document storage, Gemini embeddings, semantic retrieval, keyword fallback, grounded answers, and source citations.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Gemini Embeddings",
      "Semantic Search",
      "RAG",
      "Vector Search",
      "Source Citations",
      "No-source Guardrails",
      "Knowledge Base",
      "AI Automation",
    ],
    highlights: [
      "Gemini embeddings and pgvector search",
      "Keyword fallback and no-source guardrails",
      "Source citation cards",
      "Document library and RAG pipeline views",
    ],
    visual: "rag",
    projectUrl: "https://knowledgebase-rag-assistant-mah6onmm5.vercel.app/",
    githubUrl: "https://github.com/JzHamid/knowledgebase-rag-assistant",
  },
  {
    title: "ClientOps AI Dashboard",
    category: "Full-stack SaaS/admin dashboard",
    description:
      "A full-stack SaaS/admin dashboard with Supabase Auth, protected user workspaces, client/project/task CRUD, project notes, activity logs, demo workspace seeding, task-derived metrics, Automations, and AI-style summary previews.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase Auth",
      "PostgreSQL",
      "Row Level Security",
      "Server Actions",
      "Zod validation",
      "CRUD",
      "Automations",
      "AI automation",
      "SaaS dashboard UI",
    ],
    highlights: ["Client/project tracking", "Task and status workflows", "AI project recap cards"],
    visual: "clientops",
    projectUrl: "https://clientops-ai-dashboard.vercel.app/login",
    githubUrl: "https://github.com/JzHamid/clientops-ai-dashboard",
  },
  {
    title: "AI Prospect Triage Workflow",
    category: "AI Sales Automation Workflow",
    description:
      "An AI lead triage workflow prototype for a local service business use case. It analyzes incoming prospects, scores them, classifies them as Hot/Warm/Cold, drafts follow-ups, logs the result into Google Sheets, and creates a Gmail draft for review.",
    stack: [
      "Make",
      "Gemini",
      "Webhooks",
      "Google Sheets",
      "Gmail",
      "JSON Parsing",
      "AI Automation",
      "Lead Qualification",
      "Sales Automation",
      "Workflow Automation",
      "Prompt Engineering",
      "No-code Automation",
    ],
    highlights: [
      "Webhook-based lead intake",
      "Gemini JSON lead scoring",
      "Hot/Warm/Cold prospect status",
      "Sheets logging and Gmail draft handoff",
    ],
    visual: "autoflow",
    projectUrl: "https://www.loom.com/share/aa94f2656e8f4b94a508804d9ed0abc5",
    projectLabel: "Watch Demo",
  },
  {
    title: "AI Video Animation Samples",
    category: "Generative AI Video Production",
    description:
      "AI-generated video animation samples created for a lifehack-style content channel. The work focused on using AI image and video tools to plan scenes, generate visuals, iterate prompts, and produce short-form animated content for social media-style educational and lifehack videos.",
    stack: [
      "AI Video Generation",
      "Generative AI",
      "Prompt Engineering",
      "Scene Planning",
      "Visual Storytelling",
      "Short-form Content",
      "AI Animation",
      "Creative Automation",
      "Freepik",
      "Google AI Video Tools",
      "Image Generation",
    ],
    highlights: [
      "Lifehack-style AI animations",
      "Prompt direction and scene planning",
      "Image-to-video generation workflows",
      "Visual consistency iteration",
      "Creative automation practice",
    ],
    visual: "video",
    projectUrl: "https://drive.google.com/drive/folders/1YhSe40anwtN51OBu1eR7UOZmXsd81Gsa?usp=drive_link",
    projectLabel: "View Samples",
  },
  {
    title: "Lovable Cloud to Supabase Migration CLI",
    category: "Local migration CLI",
    description:
      "A local CLI tool for migrating Lovable Cloud-hosted apps into standalone Supabase projects. It processes SQL migrations, table CSVs, auth user exports, and storage files, then runs phased commands for validation, schema migration, data import, auth migration, ID remapping, storage upload, checklist generation, and verification. Built with Claude Code and designed with a security-first local workflow so users do not need to upload sensitive Supabase service role keys to a hosted service.",
    stack: [
      "Node.js",
      "CLI tooling",
      "Supabase",
      "PostgreSQL",
      "data migration",
      "auth migration",
      "storage migration",
      "CSV import",
      "developer automation",
      "Claude Code",
      "Codex",
      "testing",
    ],
    highlights: ["Local-first migration", "Phased validation flow", "Security-first key handling"],
    visual: "migration",
    githubUrl: "https://github.com/Abeagle25/lovable-supabase-migration-cli",
  },
  {
    title: "API Pulse Dashboard",
    category: "Multi-API Developer Dashboard",
    description:
      "A multi-API developer dashboard built for a Vibe Coder OJT challenge. It pulls data from public APIs and turns them into useful dashboards for GitHub profiles, crypto market data, and weather/location insights. It uses public APIs only with no database, authentication, API keys, or secrets, and includes loading, empty, not-found, rate-limit, validation, network, and API error states.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Route Handlers",
      "REST APIs",
      "GitHub API",
      "CoinGecko API",
      "Open-Meteo API",
      "Autocomplete",
      "Error Handling",
      "Developer Tools UI",
      "AI-assisted Development",
    ],
    highlights: [
      "GitHub, crypto, and weather modules",
      "Public APIs only, no secrets",
      "Raw API previews and resilient error states",
    ],
    visual: "pulse",
    projectUrl: "https://github-pulse-dashboard.vercel.app/",
    githubUrl: "https://github.com/JzHamid/github-pulse-dashboard",
  },
  {
    title: "Skin Disease Cam",
    category: "CNN classification project",
    description:
      "A computer vision project comparing MobileNetV2, EfficientNetB0, ResNet50, InceptionV3, and DenseNet121 for skin lesion classification.",
    stack: ["Python", "CNNs", "TensorFlow", "Model comparison"],
    highlights: ["Transfer learning", "Model benchmarking", "Medical image workflow"],
    visual: "skin",
    projectUrl: "https://ieeexplore.ieee.org/abstract/document/11554764",
    projectLabel: "Research Link",
    githubUrl: "https://github.com/JzHamid/skin_cam_proj",
  },
];

const skillGroups = [
  {
    title: "Software Development",
    skills: ["Next.js", "React", "TypeScript", "API integration", "Responsive UI", "Dashboard design"],
  },
  {
    title: "AI Automation",
    skills: ["Agentic workflows", "Lead routing", "Task automation", "Prompt design", "AI summaries", "Human review loops"],
  },
  {
    title: "RAG Systems",
    skills: ["Document ingestion", "Embeddings", "Vector search", "Source citations", "Answer evaluation", "Knowledge assistants"],
  },
  {
    title: "Practical Tools",
    skills: ["SaaS prototypes", "Admin panels", "Workflow trackers", "Data modeling", "UX writing", "Deployment basics"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Map the workflow",
    description:
      "I start by understanding the users, data, repeated tasks, and decisions that the tool needs to support.",
  },
  {
    step: "02",
    title: "Build the useful core",
    description:
      "I create the smallest working version first: clean screens, real states, and the main action path end to end.",
  },
  {
    step: "03",
    title: "Add AI where it helps",
    description:
      "I use AI for summaries, retrieval, drafting, classification, and automation while keeping outputs reviewable.",
  },
  {
    step: "04",
    title: "Refine for handoff",
    description:
      "I tighten the interface, document setup steps, and make the project easier for a client or team to understand.",
  },
];

const stats = [
  { value: "7 projects", label: "Live, published, demo, or in-production work" },
  { value: "Codex + Claude", label: "AI coding partners in my daily workflow" },
  { value: "Supabase", label: "Auth, Postgres, dashboards, and automations" },
];

const builderTools = ["Codex", "Claude Code", "Supabase", "PostgreSQL", "Next.js", "CLI migrations", "API dashboards"];

export default function Home() {
  return (
    <main className="portfolio-bg min-h-screen text-zinc-100">
      <RevealOnScroll />
      <div className="stage-effects" aria-hidden="true">
        <span className="stage-particle particle-one" />
        <span className="stage-particle particle-two" />
        <span className="stage-particle particle-three" />
        <span className="stage-particle particle-four" />
        <span className="stage-beam beam-one" />
        <span className="stage-beam beam-two" />
      </div>
      <Header />

      <section className="hero-section mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-16 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:pb-20 md:pt-24 lg:px-10">
        <div className="hero-copy-block reveal">
          <p className="section-kicker hero-kicker">Software developer building practical tools</p>
          <h1 className="hero-title mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Jazhem Hamid
          </h1>
          <p className="hero-lead mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            I build Supabase apps, local-first migration tools, API dashboards, and AI-assisted workflows for real teams.
          </p>
          <p className="hero-support mt-5 max-w-2xl leading-7 text-zinc-400">
            I like software that feels calm to use: clear data, honest states, reviewable automation, and handoffs that
            make sense to both clients and developers.
          </p>

          <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="primary-button halo-button halo-button-warm" href="#projects">
              <span className="button-label">View Projects</span>
            </a>
            <a className="secondary-button halo-button halo-button-soft" href="#contact">
              <span className="button-label">Contact me</span>
            </a>
          </div>

          <div className="hero-stats mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroProfile />
      </section>

      <section id="about" className="section-band reveal-on-scroll">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Practical developer with an AI automation focus.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              I am building a portfolio around the kind of work remote teams need now: internal tools, dashboards,
              AI-assisted workflows, document assistants, and automation systems that save time without hiding how they work.
            </p>
            <p>
              My style is beginner-friendly and business-aware. I care about clean interfaces, organized data, readable
              implementation, and projects that a client can understand quickly.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Organized dashboards", "Reviewable AI outputs", "Clear project handoff"].map((item) => (
                <div className="mini-card" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl reveal-on-scroll">
          <p className="section-kicker">Featured projects</p>
          <h2 className="section-title">Portfolio pieces for software, AI automation, and agentic development roles.</h2>
        </div>

        <div className="projects-grid mt-10 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              className={`project-card reveal-on-scroll ${index < 2 ? "project-card-spotlight" : ""}`}
              key={project.title}
            >
              <ProjectVisual variant={project.visual} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-sm font-medium text-zinc-400">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>

                <ul className="mt-5 grid gap-2 text-sm text-zinc-300 sm:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <li className="highlight-pill" key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span className="tech-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {project.projectUrl ? (
                    <a
                      className="project-button"
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                    >
                      {project.projectLabel ?? "View Project"}
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      className="project-button project-button-muted"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                    >
                      GitHub
                    </a>
                  ) : null}
                  {!project.projectUrl && !project.githubUrl ? (
                    <span className="project-button project-button-disabled" aria-disabled="true">
                      {project.status ?? "In Production"}
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-band reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">A focused toolkit for useful AI-enabled web apps.</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 reveal-on-scroll">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Process</p>
            <h2 className="section-title">How I build practical tools from unclear workflows.</h2>
            <p className="mt-5 leading-7 text-zinc-400">
              The goal is not to add AI everywhere. The goal is to make the work easier, faster, and clearer for the
              people doing it every day.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((item) => (
              <article className="process-card" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-band reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="contact-panel">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Ready for software developer, AI automation, and agentic development work.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-zinc-300">
                I am open to remote roles and project-based work where I can build practical tools, automate operations,
                and help teams make better use of AI.
              </p>
            </div>
            <div className="contact-actions">
              <a className="primary-button halo-button halo-button-warm" href="mailto:jazhemhamid1@gmail.com">
                <span className="button-label">Email Me</span>
              </a>
              <div className="contact-socials" aria-label="Social profiles">
                <a
                  className="social-button halo-icon-button"
                  href="https://github.com/JzHamid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jazhem Hamid on GitHub"
                >
                  <span aria-hidden="true">GH</span>
                  <span>GitHub</span>
                </a>
                <a
                  className="social-button halo-icon-button halo-icon-button-pink"
                  href="https://www.linkedin.com/in/jzhamid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jazhem Hamid on LinkedIn"
                >
                  <span aria-hidden="true">in</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="site-header sticky top-0 z-50">
      <nav className="site-nav mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a className="flex items-center gap-3" href="#" aria-label="Jazhem Hamid home">
          <span className="brand-mark">JH</span>
          <span className="hidden text-sm font-semibold text-white sm:block">Jazhem Hamid</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-cta" href="#contact">
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroProfile() {
  return (
    <aside className="hero-profile reveal reveal-delay" aria-label="Profile summary for Jazhem Hamid">
      <div className="profile-photo-frame">
        <Image
          className="profile-photo"
          src="/jazhem-hamid-profile.jpg"
          alt="Portrait of Jazhem Hamid"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 42vw"
        />
      </div>
      <div className="profile-copy">
        <p className="profile-eyebrow">Available for remote developer roles</p>
        <h2>Hi, I am Jazhem. I turn messy workflows into usable software.</h2>
        <p>
          My current focus is practical developer tooling: migration CLIs, Supabase dashboards, API integration flows,
          and automation that stays understandable.
        </p>
        <div className="profile-playground" aria-label="Current builder stack">
          <span className="playground-label">Now tinkering with</span>
          <div className="playground-track">
            <div className="playground-set">
              {builderTools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <div className="playground-set" aria-hidden="true">
              {builderTools.map((tool) => (
                <span key={`${tool}-duplicate`}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="profile-note">
          <span aria-hidden="true" />
          <strong>Building with Codex, Claude Code, Next.js, and Supabase</strong>
        </div>
      </div>
    </aside>
  );
}

function ProjectVisual({ variant }: { variant: FeaturedProject["visual"] }) {
  if (variant === "clientops") {
    return (
      <div className="project-visual visual-clientops" aria-hidden="true">
        <div className="visual-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-columns">
          <div>
            <strong>Clients</strong>
            <span>Active 18</span>
            <span>Pending 4</span>
          </div>
          <div>
            <strong>Tasks</strong>
            <span className="bar-line wide" />
            <span className="bar-line mid" />
            <span className="bar-line short" />
          </div>
          <div>
            <strong>AI Summary</strong>
            <span>Next action ready</span>
            <span>Risk: low</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "rag") {
    return (
      <div className="project-visual visual-rag" aria-hidden="true">
        <div className="chat-bubble question">What does the company policy say?</div>
        <div className="chat-bubble answer">Answer drafted with source references attached.</div>
        <div className="source-row">
          <span>Docs</span>
          <span>Chunks</span>
          <span>Sources</span>
        </div>
      </div>
    );
  }

  if (variant === "autoflow") {
    return (
      <div className="project-visual visual-autoflow" aria-hidden="true">
        {["Lead", "AI score", "Sheet log", "Gmail draft"].map((item) => (
          <div className="flow-node" key={item}>
            <span />
            {item}
          </div>
        ))}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className="project-visual visual-pulse" aria-hidden="true">
        <div className="pulse-header">
          <span>API Pulse</span>
          <strong>3 live modules</strong>
        </div>
        <div className="pulse-modules">
          {["GitHub", "Crypto", "Weather"].map((item) => (
            <div key={item}>
              <span />
              {item}
            </div>
          ))}
        </div>
        <div className="pulse-preview">
          <span>GET /api/public</span>
          <strong>Raw response preview</strong>
        </div>
      </div>
    );
  }

  if (variant === "api") {
    return (
      <div className="project-visual visual-api" aria-hidden="true">
        <div className="api-request">
          <span className="api-method">POST</span>
          <strong>/api/webhooks</strong>
          <span className="api-status">200</span>
        </div>
        <div className="api-json">
          <span>request: validated</span>
          <span>route: handler</span>
          <span>lookup: public API</span>
          <span>response: JSON</span>
        </div>
        <div className="api-webhook">
          <span>Webhook payload</span>
          <strong>Ready for retry</strong>
        </div>
      </div>
    );
  }

  if (variant === "migration") {
    return (
      <div className="project-visual visual-migration" aria-hidden="true">
        <div className="migration-terminal">
          <span>$ lovable-to-supabase validate</span>
          <strong>local project bundle ready</strong>
        </div>
        <div className="migration-steps">
          {["SQL", "CSV", "Auth", "Storage"].map((item) => (
            <div key={item}>
              <span />
              {item}
            </div>
          ))}
        </div>
        <div className="migration-security">
          <span>Service role key</span>
          <strong>kept local</strong>
        </div>
      </div>
    );
  }

  if (variant === "video") {
    return (
      <div className="project-visual visual-video" aria-hidden="true">
        <div className="video-frame">
          <span className="video-play" />
        </div>
        <div className="video-timeline">
          <span />
          <span />
          <span />
        </div>
        <div className="video-prompt">
          <span>scene</span>
          <strong>lifehack animation flow</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-skin" aria-hidden="true">
      <div className="scan-frame">
        <span />
      </div>
      <div className="model-bars">
        {["MobileNetV2", "EfficientNetB0", "DenseNet121"].map((item, index) => (
          <div key={item}>
            <span>{item}</span>
            <strong className={`model-score model-score-${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
