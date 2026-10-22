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
}

// Order and screenshots match the supplied LinkedIn Featured project list.
export const featuredProjects: ProjectData[] = [
  {
    "id": "lumnie",
    "title": "Lumnie",
    "subtitle": "Interactive STEM learning for South African learners",
    "oneLiner": "A little more curious, every day.",
    "description": "A STEM playground for Grade 10–12 learners, bringing mathematics, science and technology to life through mini-lessons, interactive 3D models, quizzes and hands-on puzzles.",
    "features": [
      "Draggable Three.js models and a PixiJS number garden",
      "Quizzes, worked explanations and saved learning progress",
      "Installable PWA with offline lessons and activities"
    ],
    "technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "Three.js",
      "PixiJS",
      "KaTeX"
    ],
    "liveUrl": "https://lumnie.vercel.app",
    "githubUrl": "",
    "screenshots": [
      {
        "src": "/projects/lumnie.jpg",
        "alt": "Lumnie learning dashboard with an interactive atom, subject cards and daily learning progress",
        "label": "Learning dashboard",
        "type": "desktop",
        "width": 1280,
        "height": 668
      }
    ]
  },
  {
    "id": "citylit",
    "title": "CityLit",
    "subtitle": "A playful guide to South African cities",
    "oneLiner": "Every city has a spark.",
    "description": "A mobile-first discovery experience across South Africa. Explore an interactive province map, rotate illustrated landmarks, search sourced places and save somewhere worth visiting.",
    "features": [
      "Interactive province map and procedural 3D landmarks",
      "Searchable places, local favorites and destination deep links",
      "Place galleries, street maps and directions"
    ],
    "technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "MapLibre"
    ],
    "liveUrl": "https://citylit.vercel.app",
    "githubUrl": "",
    "screenshots": [
      {
        "src": "/projects/citylit.jpg",
        "alt": "CityLit Discover South Africa screen with a colorful 3D province map and destination labels",
        "label": "South Africa discovery",
        "type": "desktop",
        "width": 1280,
        "height": 668
      }
    ]
  },
  {
    "id": "hydromental",
    "title": "Hydromental",
    "subtitle": "Elementals · an interactive chemistry playground",
    "oneLiner": "Meet the elements.",
    "description": "Explore all 118 chemical elements through interactive atoms, plain-language stories and everyday connections. A playful chemistry experience with sourced properties, games and a personal discovery journal.",
    "features": [
      "Interactive atoms, element search and property comparisons",
      "Chemistry games, quizzes and a spaced-review queue",
      "Saved discoveries, progress backups and offline exploration"
    ],
    "technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "Three.js",
      "Motion",
      "Radix UI"
    ],
    "liveUrl": "https://hydromental.vercel.app",
    "githubUrl": "",
    "screenshots": [
      {
        "src": "/projects/hydromental.jpg",
        "alt": "Elementals introduction showing an interactive oxygen atom beside Meet the elements onboarding content",
        "label": "Interactive element introduction",
        "type": "desktop",
        "width": 1280,
        "height": 668
      }
    ]
  },
  {
    "id": "procodiapp",
    "title": "ProcodiApp",
    "subtitle": "Little Less · South African grocery promotions",
    "oneLiner": "A little less at checkout.",
    "description": "A grocery promotion finder that puts South African stores, source-backed offers and qualifying terms in one place. Search, filter and save offers, with freshness and expiry checks that hide outdated listings.",
    "features": [
      "Store search, delivery and discount filters, and saved offers",
      "Source evidence, qualifying terms and expiry-aware listings",
      "Installable PWA with offline offer snapshots"
    ],
    "technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Motion"
    ],
    "liveUrl": "https://procodiapp.vercel.app",
    "githubUrl": "",
    "screenshots": [
      {
        "src": "/projects/procodiapp.jpg",
        "alt": "Little Less dark grocery dashboard with store search, offer filters and a Checkers store card",
        "label": "Grocery promotions dashboard",
        "type": "desktop",
        "width": 1280,
        "height": 668
      }
    ]
  },
  {
    "id": "mypets",
    "title": "mypets",
    "subtitle": "Nuzzle · an everyday pet care companion",
    "oneLiner": "Their little world. A little closer.",
    "description": "A companion for everyday pet care, with personal pet profiles, care schedules and species-specific learning. Routines, observations and progress stay on the device, with offline support and optional calendar export.",
    "features": [
      "Pet profiles, editable routines and care history",
      "Guided species-specific learning and saved practice progress",
      "On-device image recognition and calendar export"
    ],
    "technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "Three.js",
      "Motion",
      "Transformers.js"
    ],
    "liveUrl": "https://mypets-pi.vercel.app",
    "githubUrl": "",
    "screenshots": [
      {
        "src": "/projects/mypets.jpg",
        "alt": "Nuzzle welcome screen with a puppy illustration and Their little world. A little closer headline",
        "label": "Pet companion welcome",
        "type": "desktop",
        "width": 1280,
        "height": 670
      }
    ]
  },
  {
    "id": "leesmaat",
    "title": "leesmaat",
    "subtitle": "English and Afrikaans literacy, five minutes at a time",
    "oneLiner": "A little reading. A bigger world.",
    "description": "A bilingual reading companion with separate placement levels for English and Afrikaans. Read, practise comprehension, save vocabulary and annotate passages, with an offline archive for learning without a connection.",
    "features": [
      "Separate English and Afrikaans placement and reading levels",
      "Vocabulary review, comprehension practice and anchored notes",
      "Offline reading downloads and optional Firebase sync"
    ],
    "technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Firebase"
    ],
    "liveUrl": "https://leesmaat.vercel.app",
    "githubUrl": "",
    "screenshots": [
      {
        "src": "/projects/leesmaat.jpg",
        "alt": "Leesmaat bilingual reading introduction with an open-book illustration and Get started button",
        "label": "Reading placement introduction",
        "type": "desktop",
        "width": 1280,
        "height": 670
      }
    ]
  }
];

// Curated copy remains independent of the GitHub sync, but every project (including
// featured case studies) uses the newest successfully captured live screenshots.
// Repositories without a website receive a clearly labeled GitHub repository image.
function getScreenshots(project: ProjectData): ScreenshotItem[] {
  const saved = (savedScreenshots as Record<string, ScreenshotItem[]>)[project.id];
  if (saved?.length) return saved;
  if (project.screenshots.length) return project.screenshots;
  if (project.liveUrl) return [{
    src: "https://image.thum.io/get/width/1200/crop/675/noanimate/" + project.liveUrl,
    alt: "Public website preview for " + project.title,
    label: "Live website preview",
    type: "desktop",
    width: 1200,
    height: 675,
  }];
  return [{
    src: "https://opengraph.githubassets.com/1/" + new URL(project.githubUrl).pathname.slice(1),
    alt: "GitHub repository preview for " + project.title + " (not a website screenshot)",
    label: "GitHub repository preview",
    type: "desktop",
    width: 1200,
    height: 600,
  }];
}

// Keep curated case studies first and avoid listing their repositories twice.
export const projects: ProjectData[] = [
  ...featuredProjects.map(project => ({ ...project, screenshots: getScreenshots(project) })),
  ...githubProjects.filter(project => !featuredProjects.some(featured =>
    featured.id === project.id || (Boolean(featured.githubUrl) && featured.githubUrl.toLowerCase() === project.githubUrl.toLowerCase())
  )).map(project => ({ ...project, screenshots: getScreenshots(project as ProjectData) })),
];

export function getProject(id: string) {
  return projects.find(project => project.id === id);
}
