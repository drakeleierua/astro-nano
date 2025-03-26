import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Drake Leier",
  EMAIL: "Drakeleier@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Drake Leier's Personal Page.",
};

export const BLOG: Metadata = {
  TITLE: "About me",
  DESCRIPTION: "A collection of updates on my life.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "instagram",
    HREF: "https://instagram.com/drakeleier",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/drakeleier"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/drakeleier",
  }
];
