import type { ScreenshotItem } from "@/components/ProjectScreenshotGallery";
import githubProjects from "./github-projects.json";
import savedScreenshots from "./project-screenshots.json";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  description: string;
  features: string[];
  technologies: string[];
  tools?: string[];
  screenshots: ScreenshotItem[];
  liveUrl: string;
  githubUrl: string;
  caseStudy?: {
    problem: string;
    decision: string;
    audience?: string;
    contribution?: string;
    walkthrough?: string[];
    tradeoff?: string;
    evidence: { label: string; url: string; requiresRepositoryAccess?: boolean }[];
    validationStatus: string;
  };
}

// Curated copy stays independent of generated GitHub metadata.
const curatedProjects: ProjectData[] = [
  {
    id: "nest",
    title: "Nest",
    subtitle: "A dependable home for saved references",
    oneLiner: "Good things, kept close.",
    description:
      "An offline-first bookmark library for collecting references, organising them into collections and finding them again. Browser imports, portable encrypted backups and optional sync keep the core library useful without an account.",
    features: [
      "Review browser imports before adding them to a personal library",
      "Organise collections and retrieve references through search",
      "Export, restore and recover browser-local data",
    ],
    technologies: ["React", "Next.js", "TypeScript", "IndexedDB", "Tailwind CSS"],
    screenshots: [],
    liveUrl: "https://nest-iota-three.vercel.app/",
    githubUrl: "https://github.com/thembaxx/nest",
    caseStudy: {
      audience: "People collecting design, research and everyday web references.",
      contribution:
        "Product workflow, responsive frontend, local persistence, import/export and recovery behaviour.",
      problem:
        "A bookmark collection is only useful if saving is easy, retrieval is quick and references remain recoverable when browser storage fails.",
      decision:
        "Keep the library local-first, make import review explicit and offer portable backups. Optional sync stays separate from the account-free core journey.",
      walkthrough: [
        "Start with the labelled sample library or import your own browser bookmarks.",
        "Review an import, organise a collection and retrieve a saved reference with search.",
        "Export a backup and inspect the restore flow before replacing any data.",
      ],
      tradeoff:
        "Account-free storage lowers setup friction, but browser data can be cleared or evicted. Backups and optional sync are explicit choices; live Google consent requires separate configuration.",
      evidence: [{ label: "Explore the application", url: "https://nest-iota-three.vercel.app/" }],
      validationStatus:
        "Release verification and known limits are recorded with the source. Adoption and user research outcomes have not been measured.",
    },
  },
  {
    id: "billora",
    title: "Billora",
    subtitle: "Make municipal account changes understandable",
    oneLiner: "A little clarity for everything home.",
    description:
      "A South African municipal account workspace for reviewing PDF statements, comparing monthly charges and preparing billing-query evidence. Personal documents stay in the browser, with full workspace backups and clearly labelled examples.",
    features: [
      "Local PDF extraction with evidence and human review",
      "Explainable month-to-month comparisons and query preparation",
      "Downloadable evidence packs and encrypted workspace backups",
    ],
    technologies: ["React", "TypeScript", "Vite", "PDF.js", "IndexedDB", "Three.js"],
    screenshots: [],
    liveUrl: "https://billora.themba.dev",
    githubUrl: "https://github.com/thembaxx/billora",
    caseStudy: {
      audience: "South African homeowners organising municipal statements and billing queries.",
      contribution:
        "Statement review, comparison and evidence-pack workflows, browser-local storage and responsive interface engineering.",
      problem:
        "Understanding an unexpected municipal charge means comparing documents, checking extracted figures and keeping the evidence together for a billing query.",
      decision:
        "Extract locally, show quoted evidence for review and keep original statements alongside the figures. Turn comparisons into editable, unsent query packs.",
      walkthrough: [
        "Explore the labelled examples or start an empty personal workspace.",
        "Import a statement, review the suggested figures and compare charges across months.",
        "Prepare a billing query and download its supporting evidence pack.",
      ],
      tradeoff:
        "Local processing keeps documents on the device. Users review extracted values, retain backups and submit queries themselves; municipal retrieval and submission are not integrated.",
      evidence: [{ label: "Explore the application", url: "https://billora.themba.dev" }],
      validationStatus:
        "Release verification and known limits are recorded with the source. Automated checks do not establish extraction accuracy across every municipality or real billing outcomes.",
    },
  },
  {
    id: "mise",
    caseStudy: {
      problem:
        "Cooking instructions, ingredient preparation and several simultaneous timers are difficult to track while moving between a recipe and a visually rich virtual kitchen.",
      decision:
        "Keep a lightweight recipe-first flow and a focused Cook Mode alongside optional 3D physics. Provide accessible HTML controls and separate real-world preparation checklists, with offline-first storage and explicit backup review.",
      evidence: [
        {
          label: "Explore the current application",
          url: "https://mise-two-teal.vercel.app",
        },
        {
          label: "Cooking, offline and import design notes",
          url: "https://github.com/thembaxx/mise/blob/b1010decad28b6d08f4c13cd06601b4192beeda5/README.md",
          requiresRepositoryAccess: true,
        },
        {
          label: "Personal cookbook backup regression scenarios",
          url: "https://github.com/thembaxx/mise/blob/b1010decad28b6d08f4c13cd06601b4192beeda5/tests/cookbook-backup.test.ts",
          requiresRepositoryAccess: true,
        },
      ],
      validationStatus:
        "Source documents the cooking and offline feature boundaries, with automated test scenarios for cookbook restore. Desktop/mobile gesture quality and real-world cooking outcomes are not independently established by the source links.",
    },
    title: "Mise",
    subtitle: "Interactive recipe discovery and 3D cooking studio",
    oneLiner: "The world, on your table.",
    description:
      "Explore recipes from around the world and practise cooking in an interactive 3D kitchen. Mise combines step-by-step guidance, optional physics, Cook Mode, prep checklists, persistent timers, shopping lists and a device-local personal cookbook with backup and restore.",
    features: [
      "Touch-friendly virtual kitchen with optional 3D physics and accessible controls",
      "Focused Cook Mode, preparation checklists and multiple persistent timers",
      "Offline-capable PWA, shopping lists and reviewed cookbook import/backup",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Three.js",
      "React Three Fiber",
      "Rapier",
      "GSAP",
    ],
    liveUrl: "https://mise-two-teal.vercel.app",
    githubUrl: "",
    screenshots: [],
  },
  {
    id: "tally",
    caseStudy: {
      problem:
        "Accounting learners need to connect calculations to business events and distinguish supported practice from independent recall.",
      decision:
        "Use rand-based business stories, worked examples and adjustable guidance. Keep hints and retries in the review evidence, and require recall on separate days before extending review intervals.",
      evidence: [
        {
          label: "Explore the current application",
          url: "https://tally-wine-alpha.vercel.app",
        },
        {
          label: "Tutoring decisions and evidence limits",
          url: "https://github.com/thembaxx/tally/blob/a71f248b6adbe4ec83913b08fc7344f4066e53b4/docs/personal-tutoring.md",
          requiresRepositoryAccess: true,
        },
        {
          label: "Learning and review test scenarios",
          url: "https://github.com/thembaxx/tally/blob/a71f248b6adbe4ec83913b08fc7344f4066e53b4/tests/learning.spec.ts",
          requiresRepositoryAccess: true,
        },
      ],
      validationStatus:
        "The linked source documents the tutoring rules and includes practice scenarios. Improvement in learners’ accounting understanding has not yet been measured.",
    },
    title: "Tally",
    subtitle: "Interactive accounting tutor for South African learners",
    oneLiner: "Small lessons. Big lightbulb moments.",
    description:
      "A mobile-first accounting tutor with South African examples and rand-based practice. Learn through 16 interactive lessons, 3D explanations, guided challenges and adaptive reviews that reinforce ideas over time.",
    features: [
      "Interactive journal entries, cash-flow stories and balance-sheet simulations",
      "Guided, standard and stretch practice with spaced review",
      "Offline-capable PWA, local progress backups and optional encrypted sync",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Three.js", "Motion", "GSAP"],
    liveUrl: "https://tally-wine-alpha.vercel.app",
    githubUrl: "",
    screenshots: [],
  },
  {
    id: "lumnie",
    caseStudy: {
      problem:
        "Abstract STEM ideas are difficult to explore through a static diagram, especially when learners have limited connectivity.",
      decision:
        "Pair short explanations with manipulable models and keyboard alternatives, and package lessons for offline download. Explain where simplified atom, circuit and force models differ from physical systems.",
      evidence: [
        {
          label: "Explore the current application",
          url: "https://lumnie.vercel.app",
        },
        {
          label: "Model assumptions, controls and offline architecture",
          url: "https://github.com/thembaxx/lumnie/blob/5aa90284ce5c4d1f479084dcf18a42e042510c9c/README.md",
          requiresRepositoryAccess: true,
        },
        {
          label: "Offline installation and caching test scenarios",
          url: "https://github.com/thembaxx/lumnie/blob/5aa90284ce5c4d1f479084dcf18a42e042510c9c/tests/pwa.spec.ts",
          requiresRepositoryAccess: true,
        },
      ],
      validationStatus:
        "The repository documents the model assumptions and offline design; the linked test file covers PWA behavior. Learning gains and sustained learner use have not yet been measured.",
    },
    title: "Lumnie",
    subtitle: "Interactive STEM learning for South African learners",
    oneLiner: "A little more curious, every day.",
    description:
      "A STEM playground for Grade 10–12 learners, bringing mathematics, science and technology to life through mini-lessons, interactive 3D models, quizzes and hands-on puzzles.",
    features: [
      "Draggable Three.js models and a PixiJS number garden",
      "Quizzes, worked explanations and saved learning progress",
      "Installable PWA with offline lessons and activities",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Three.js", "PixiJS", "KaTeX"],
    liveUrl: "https://lumnie.vercel.app",
    githubUrl: "",
    screenshots: [
      {
        src: "/projects/lumnie.jpg",
        alt: "Lumnie learning dashboard with an interactive atom, subject cards and daily learning progress",
        label: "Learning dashboard",
        type: "desktop",
        width: 1280,
        height: 668,
      },
    ],
  },
  {
    id: "citylit",
    caseStudy: {
      problem:
        "An exploratory 3D map needs a direct route from finding a city to reading visitor details and keeping a day plan.",
      decision:
        "Add a searchable editorial guide with real destination links, source-linked visitor information and explicit save controls. Retain the 3D atlas as an optional way to explore.",
      evidence: [
        {
          label: "Explore the current application",
          url: "https://citylit.vercel.app",
        },
        {
          label: "Documented discovery-to-plan design decisions",
          url: "https://github.com/thembaxx/citylit/blob/9536de873fb2236640f812ea9d74bb29e3f586b7/docs/redesign/README.md",
          requiresRepositoryAccess: true,
        },
        {
          label: "Guide navigation and planning test scenarios",
          url: "https://github.com/thembaxx/citylit/blob/9536de873fb2236640f812ea9d74bb29e3f586b7/tests/redesign.spec.ts",
          requiresRepositoryAccess: true,
        },
      ],
      validationStatus:
        "The redesign notes and test scenarios document navigation and planning behavior. Effects on visit planning, task completion and real trips have not yet been measured.",
    },
    title: "CityLit",
    subtitle: "A playful guide to South African cities",
    oneLiner: "Every city has a spark.",
    description:
      "A mobile-first discovery experience across South Africa. Explore an interactive province map, rotate illustrated landmarks, search sourced places and save somewhere worth visiting.",
    features: [
      "Interactive province map and procedural 3D landmarks",
      "Searchable places, local favorites and destination deep links",
      "Place galleries, street maps and directions",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Three.js", "React Three Fiber", "MapLibre"],
    liveUrl: "https://citylit.vercel.app",
    githubUrl: "",
    screenshots: [
      {
        src: "/projects/citylit.jpg",
        alt: "CityLit Discover South Africa screen with a colorful 3D province map and destination labels",
        label: "South Africa discovery",
        type: "desktop",
        width: 1280,
        height: 668,
      },
    ],
  },
  {
    id: "hydromental",
    caseStudy: {
      audience: "Curious learners exploring chemistry through short interactive activities.",
      contribution:
        "Interactive element exploration, attributed scientific data, accessible model alternatives and resilient learning progress.",
      problem:
        "An engaging element model can blur the distinction between a teaching illustration and sourced scientific data.",
      decision:
        "Keep quantitative properties in an attributed local snapshot, show units and unknown values, and document isotope, shell and model limitations alongside interactive exploration.",
      walkthrough: [
        "Choose an element and inspect its sourced properties and model explanation.",
        "Complete a learning activity and save a discovery in the journal.",
        "Reopen the app to revisit progress, then inspect backup and recovery controls.",
      ],
      tradeoff:
        "Interactive atoms are simplified teaching models. Essential information and activities remain available through HTML controls when motion or WebGL is unavailable.",
      evidence: [
        {
          label: "Explore the current application",
          url: "https://hydromental.vercel.app",
        },
        {
          label: "Scientific provenance and model limitations",
          url: "https://github.com/thembaxx/hydromental/blob/9fe537e19f05f766d3ed6fbb0cf317f635db83dd/docs/sources.md",
          requiresRepositoryAccess: true,
        },
        {
          label: "Science snapshot ingestion test scenarios",
          url: "https://github.com/thembaxx/hydromental/blob/9fe537e19f05f766d3ed6fbb0cf317f635db83dd/tests/science-ingestion.test.mjs",
          requiresRepositoryAccess: true,
        },
      ],
      validationStatus:
        "The source policy and ingestion tests make the data contract inspectable. They do not establish classroom learning gains, which have not yet been measured.",
    },
    title: "Hydromental",
    subtitle: "Elementals · an interactive chemistry playground",
    oneLiner: "Meet the elements.",
    description:
      "Explore all 118 chemical elements through interactive atoms, plain-language stories and everyday connections. A playful chemistry experience with sourced properties, games and a personal discovery journal.",
    features: [
      "Interactive atoms, element search and property comparisons",
      "Chemistry games, quizzes and a spaced-review queue",
      "Saved discoveries, progress backups and offline exploration",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Three.js", "Motion", "Radix UI"],
    liveUrl: "https://hydromental.vercel.app",
    githubUrl: "https://github.com/thembaxx/hydromental",
    screenshots: [
      {
        src: "/projects/hydromental.jpg",
        alt: "Elementals introduction showing an interactive oxygen atom beside Meet the elements onboarding content",
        label: "Interactive element introduction",
        type: "desktop",
        width: 1280,
        height: 668,
      },
    ],
  },
  {
    id: "procodiapp",
    caseStudy: {
      problem:
        "A saved grocery promotion can mislead shoppers after its terms, expiry or source freshness change.",
      decision:
        "Keep source evidence and qualifying terms with each offer, hide expired or stale records, and apply the same freshness policy to offline snapshots. Expose source health for retailer ingestion.",
      evidence: [
        {
          label: "Explore the current application",
          url: "https://procodiapp.vercel.app",
        },
        {
          label: "Offer freshness, expiry and offline policy",
          url: "https://github.com/thembaxx/procodiapp/blob/5f3f7da9ceb41562d1f9183f80f524c31638c8cd/README.md",
        },
        {
          label: "Retailer ingestion and source-health implementation",
          url: "https://github.com/thembaxx/procodiapp/blob/5f3f7da9ceb41562d1f9183f80f524c31638c8cd/coupon-scraper/src/index.ts",
        },
      ],
      validationStatus:
        "The linked source documents the freshness policy and implements source-health tracking. Retailer coverage needs continuing checks; verified shopper savings have not yet been measured.",
    },
    title: "ProcodiApp",
    subtitle: "Little Less · South African grocery promotions",
    oneLiner: "A little less at checkout.",
    description:
      "A grocery promotion finder that puts South African stores, source-backed offers and qualifying terms in one place. Search, filter and save offers, with freshness and expiry checks that hide outdated listings.",
    features: [
      "Store search, delivery and discount filters, and saved offers",
      "Source evidence, qualifying terms and expiry-aware listings",
      "Installable PWA with offline offer snapshots",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Motion"],
    liveUrl: "https://procodiapp.vercel.app",
    githubUrl: "",
    screenshots: [
      {
        src: "/projects/procodiapp.jpg",
        alt: "Little Less dark grocery dashboard with store search, offer filters and a Checkers store card",
        label: "Grocery promotions dashboard",
        type: "desktop",
        width: 1280,
        height: 668,
      },
    ],
  },
  {
    id: "mypets",
    caseStudy: {
      problem:
        "A multi-pet companion must adapt routines to different species while keeping demonstration history separate from an owner’s real care records.",
      decision:
        "Use species-specific care and learning content, editable schedules and browser-local records. Label sample observations and clear sample history when the first personal pet is created.",
      evidence: [
        {
          label: "Explore the current application",
          url: "https://mypets-pi.vercel.app",
        },
        {
          label: "Personal records, sample data and recognition limits",
          url: "https://github.com/thembaxx/mypets/blob/482bb9ba875babb04ff0bb4b1feddbe1d942e1e1/README.md",
          requiresRepositoryAccess: true,
        },
        {
          label: "Species-specific care test scenarios",
          url: "https://github.com/thembaxx/mypets/blob/482bb9ba875babb04ff0bb4b1feddbe1d942e1e1/tests/care.test.ts",
          requiresRepositoryAccess: true,
        },
      ],
      validationStatus:
        "The repository describes the demo-to-personal transition and tests care-rule behavior. Changes in owners’ care routines or animal health have not yet been measured.",
    },
    title: "mypets",
    subtitle: "Nuzzle · an everyday pet care companion",
    oneLiner: "Their little world. A little closer.",
    description:
      "A companion for everyday pet care, with personal pet profiles, care schedules and species-specific learning. Routines, observations and progress stay on the device, with offline support and optional calendar export.",
    features: [
      "Pet profiles, editable routines and care history",
      "Guided species-specific learning and saved practice progress",
      "On-device image recognition and calendar export",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Three.js", "Motion", "Transformers.js"],
    liveUrl: "https://mypets-pi.vercel.app",
    githubUrl: "",
    screenshots: [
      {
        src: "/projects/mypets.jpg",
        alt: "Nuzzle welcome screen with a puppy illustration and Their little world. A little closer headline",
        label: "Pet companion welcome",
        type: "desktop",
        width: 1280,
        height: 670,
      },
    ],
  },
  {
    id: "leesmaat",
    caseStudy: {
      problem:
        "English and Afrikaans reading practice needs to work without an account or a dependable connection, while keeping each language’s progress separate.",
      decision:
        "Start with local reading and language-specific placement, store complete offline books, and offer explicitly configured Google sync. Anchor vocabulary and notes to the reading experience.",
      evidence: [
        {
          label: "Explore the current application",
          url: "https://leesmaat.vercel.app",
        },
        {
          label: "Local-first reading and optional sync design",
          url: "https://github.com/thembaxx/leesmaat/blob/d5df54d3d8a4ca5c70705730afb824122f1e15c9/README.md",
          requiresRepositoryAccess: true,
        },
        {
          label: "Offline reading and learning browser scenarios",
          url: "https://github.com/thembaxx/leesmaat/blob/d5df54d3d8a4ca5c70705730afb824122f1e15c9/tests/browser/learning.spec.ts",
          requiresRepositoryAccess: true,
        },
      ],
      validationStatus:
        "The source describes the storage and sync boundaries; browser scenarios cover offline reading and learning interactions. Literacy gains have not yet been measured.",
    },
    title: "leesmaat",
    subtitle: "English and Afrikaans literacy, five minutes at a time",
    oneLiner: "A little reading. A bigger world.",
    description:
      "A bilingual reading companion with separate placement levels for English and Afrikaans. Read, practise comprehension, save vocabulary and annotate passages, with an offline archive for learning without a connection.",
    features: [
      "Separate English and Afrikaans placement and reading levels",
      "Vocabulary review, comprehension practice and anchored notes",
      "Offline reading downloads and optional Firebase sync",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Firebase"],
    liveUrl: "https://leesmaat.vercel.app",
    githubUrl: "",
    screenshots: [
      {
        src: "/projects/leesmaat.jpg",
        alt: "Leesmaat bilingual reading introduction with an open-book illustration and Get started button",
        label: "Reading placement introduction",
        type: "desktop",
        width: 1280,
        height: 670,
      },
    ],
  },
];

// Curated copy remains independent of the GitHub sync, but every project (including
// featured case studies) uses the newest successfully captured live screenshots.
// Repositories without a website receive a clearly labeled GitHub repository image.
function getScreenshots(project: ProjectData): ScreenshotItem[] {
  const saved = (savedScreenshots as Record<string, ScreenshotItem[]>)[project.id];
  if (saved?.length) return saved;
  if (project.screenshots.length) return project.screenshots;
  if (project.liveUrl)
    return [
      {
        src: "https://image.thum.io/get/width/1200/crop/675/noanimate/" + project.liveUrl,
        alt: "Public website preview for " + project.title,
        label: "Live website preview",
        type: "desktop",
        width: 1200,
        height: 675,
      },
    ];
  return [
    {
      src: "https://opengraph.githubassets.com/1/" + new URL(project.githubUrl).pathname.slice(1),
      alt: "GitHub repository preview for " + project.title + " (not a website screenshot)",
      label: "GitHub repository preview",
      type: "desktop",
      width: 1200,
      height: 600,
    },
  ];
}

const flagshipIds = ["nest", "billora", "hydromental"] as const;
export const featuredProjects = flagshipIds.map((id) =>
  curatedProjects.find((project) => project.id === id)!,
);

// Preserve every existing project URL, while leading with three focused case studies.
export const projects: ProjectData[] = [
  ...featuredProjects,
  ...curatedProjects.filter((project) => !featuredProjects.includes(project)),
  ...githubProjects.filter(
    (project) =>
      !curatedProjects.some(
        (featured) =>
          featured.id === project.id ||
          (Boolean(featured.githubUrl) &&
            featured.githubUrl.toLowerCase() === project.githubUrl.toLowerCase()),
      ),
  ),
].map((project) => ({ ...project, screenshots: getScreenshots(project) }));

export const flagshipProjects = projects.filter((project) =>
  flagshipIds.some((id) => id === project.id),
);
export const otherProjects = projects.filter((project) => !flagshipProjects.includes(project));

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
