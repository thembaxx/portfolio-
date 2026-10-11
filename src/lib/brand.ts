/** Shared identity used by the interface and exported brand assets. */
export const brand = {
  name: "Themba Mndebele",
  initials: "TM",
  title: "Themba Mndebele — Frontend Developer",
  tagline: "Thoughtful interfaces. Built to last.",
  role: "Frontend Developer",
  description: "Frontend developer in South Africa building fast, accessible React, TypeScript and Next.js products. Explore six projects in learning, discovery and everyday life.",
  email: "me@themba.dev",
  location: "South Africa",
  github: "https://github.com/thembaxx",
  linkedin: "https://www.linkedin.com/in/themba-p",
  colors: { paper: "#efeae0", ink: "#14130f", orange: "#c93614", dark: "#0f0e0c", lightOrange: "#ff6a3d" },
} as const;

/** Vector artwork is shared by the live logo and exported brand assets. */
export const logoPaths = {
  tile: "M32 0C4 0 0 4 0 32C0 60 4 64 32 64C60 64 64 60 64 32C64 4 60 0 32 0Z",
  t: "M10 18H31V22H23V46H19V22H10Z",
  m: "M34 46V18H38L44 31L50 18H54V46H50V27L44 39L38 27V46Z",
} as const;
