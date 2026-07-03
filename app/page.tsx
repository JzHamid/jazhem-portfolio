type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  visual: "clientops" | "rag" | "autoflow" | "skin" | "api";
  projectUrl?: string;
  githubUrl?: string;
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
    title: "ClientOps AI Dashboard",
    category: "SaaS admin dashboard",
    description:
      "A full-stack SaaS-style admin dashboard with Supabase Auth, protected user workspaces, client/project/task CRUD, project notes, activity logs, demo workspace seeding, task-derived progress metrics, and AI-style summary previews.",
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
      "AI automation",
      "SaaS dashboard UI",
    ],
    highlights: ["Client/project tracking", "Task and status workflows", "AI project recap cards"],
    visual: "clientops",
    projectUrl: "https://clientops-ai-dashboard.vercel.app/login",
    githubUrl: "https://github.com/JzHamid/clientops-ai-dashboard",
  },
  {
    title: "KnowledgeBase RAG Assistant",
    category: "Document AI assistant",
    description:
      "A retrieval-augmented assistant that answers questions from company documents and displays source references for trust and review.",
    stack: ["RAG", "Embeddings", "Vector search", "LLM apps"],
    highlights: ["Document Q&A", "Source citations", "Grounded responses"],
    visual: "rag",
  },
  {
    title: "AutoFlow Agent",
    category: "AI automation tracker",
    description:
      "An agentic workflow tracker that qualifies leads, creates task logs, drafts follow-up messages, and summarizes daily activity.",
    stack: ["Agents", "Automation", "Workflow design", "CRM logic"],
    highlights: ["Lead qualification", "Follow-up drafting", "Daily summaries"],
    visual: "autoflow",
  },
  {
    title: "Skin Disease Cam",
    category: "CNN classification project",
    description:
      "A computer vision project comparing MobileNetV2, EfficientNetB0, ResNet50, InceptionV3, and DenseNet121 for skin lesion classification.",
    stack: ["Python", "CNNs", "TensorFlow", "Model comparison"],
    highlights: ["Transfer learning", "Model benchmarking", "Medical image workflow"],
    visual: "skin",
  },
  {
    title: "API Integration Hub",
    category: "Developer tools dashboard",
    description:
      "A developer-tool style dashboard for testing API integrations, public API lookups, internal route handlers, webhook payloads, validated forms, and JSON request/response flows.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Route Handlers",
      "REST APIs",
      "Zod validation",
      "webhooks",
      "error handling",
      "API integration",
      "developer tools UI",
    ],
    highlights: ["Public API lookups", "Webhook payload testing", "JSON request flows"],
    visual: "api",
    projectUrl: "https://api-integration-hub-gilt.vercel.app/",
    githubUrl: "https://github.com/JzHamid/api-integration-hub",
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
  { value: "5", label: "Featured AI and SaaS projects" },
  { value: "RAG", label: "Document Q&A and source-backed answers" },
  { value: "AI", label: "Workflow automation and agentic tooling" },
];

export default function Home() {
  return (
    <main className="portfolio-bg min-h-screen text-zinc-100">
      <Header />

      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-16 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:pb-20 md:pt-24 lg:px-10">
        <div className="reveal">
          <p className="section-kicker">Software Developer for AI-powered operations</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Jazhem Hamid
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Software Developer focused on AI Automation, Agentic Workflows, RAG Systems, and Practical SaaS Tools.
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            I build clear, useful web apps that turn messy workflows into organized dashboards, searchable knowledge,
            and reviewable AI-assisted actions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="primary-button" href="#projects">
              View Projects
            </a>
            <a className="secondary-button" href="#contact">
              Contact me
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroConsole />
      </section>

      <section id="about" className="section-band">
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

      <section id="projects" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="section-kicker">Featured projects</p>
          <h2 className="section-title">Portfolio pieces for software, AI automation, and agentic development roles.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
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
                  <a
                    className="project-button"
                    href={project.projectUrl ?? "#"}
                    target={project.projectUrl ? "_blank" : undefined}
                    rel={project.projectUrl ? "noopener noreferrer" : undefined}
                    aria-label={`View ${project.title}`}
                  >
                    View Project
                  </a>
                  <a
                    className="project-button project-button-muted"
                    href={project.githubUrl ?? "#"}
                    target={project.githubUrl ? "_blank" : undefined}
                    rel={project.githubUrl ? "noopener noreferrer" : undefined}
                    aria-label={`${project.title} GitHub`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-band">
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

      <section id="process" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
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

      <section id="contact" className="section-band">
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
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a className="primary-button" href="mailto:jazhemhamid1@gmail.com">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050608]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
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
        <a className="header-cta" href="#contact">
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function HeroConsole() {
  return (
    <div className="hero-console reveal reveal-delay">
      <div className="console-top">
        <span>AI Ops Workspace</span>
        <div className="console-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="console-grid">
        <div className="console-tile console-tile-large">
          <div className="flex items-center justify-between">
            <span className="muted-label">Project summary</span>
            <span className="status-live">Ready</span>
          </div>
          <h2>Client launch is 74% complete</h2>
          <div className="progress-track">
            <span />
          </div>
          <p>AI recap: onboarding is moving well. Review pending content, assign QA, and send Friday update.</p>
        </div>
        <div className="console-tile accent-cyan">
          <span className="muted-label">RAG answer</span>
          <strong>3 sources found</strong>
          <p>Policy, onboarding notes, and client scope matched.</p>
        </div>
        <div className="console-tile accent-amber">
          <span className="muted-label">Agent run</span>
          <strong>12 tasks logged</strong>
          <p>Lead notes, follow-ups, and daily summary drafted.</p>
        </div>
      </div>
    </div>
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
        <div className="chat-bubble question">How do we onboard a new client?</div>
        <div className="chat-bubble answer">Use the 5-step checklist and attach the signed scope.</div>
        <div className="source-row">
          <span>Source A</span>
          <span>Source B</span>
          <span>Source C</span>
        </div>
      </div>
    );
  }

  if (variant === "autoflow") {
    return (
      <div className="project-visual visual-autoflow" aria-hidden="true">
        {["Lead", "Qualify", "Task log", "Follow-up"].map((item) => (
          <div className="flow-node" key={item}>
            <span />
            {item}
          </div>
        ))}
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
