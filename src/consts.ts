// todo) decide on site's name and description
export const SITE_TITLE = '::<ankddev>';
export const SITE_DESCRIPTION = "ankddev's home on the Internet";
export const SITE_BASE = "https://ankddev.fyi"
// todo) migrate to tangled as canonical forge
export const SITE_REPO = "https://github.com/ankddev/website";

export const INTERNAL_LINKS = [
  {
    name: "Blog",
    link: "/blog",
    alt: "Read articles by me"
  },
  {
    name: "About",
    link: "/about",
    alt: "Learn more about me and my work"
  },
  {
    name: "LLM policy",
    link: "/llms",
    alt: "Read my thoughts about usage of generative models"
  }
];

export const FOOTER_LINKS = [
  {
    name: "Home",
    link: "/",
    alt: "Take me home!"
  },
  {
    name: "Source code",
    link: SITE_REPO,
    alt: "Check how this website works under the hood and report about any problems with it"
  },
  // todo) inline?
  ...INTERNAL_LINKS,
  {
    name: "Public keys",
    // todo) better way to host keys (maybe just add git submodule to this repo or download at build time and keep that repo with only keys?)
    link: "https://keys.ankddev.fyi",
    alt: "Obtain my public SSH and PGP keys"
  },
  {
    name: "Dotfiles",
    // todo) migrate canonical version to tangled
    link: "https://github.com/ankddev/dotfiles",
    alt: "Look at my dotfiles"
  },
];

export const SOCIAL_LINKS = [
  // todo) what if make email/rss link a button at the right of navbar?
  {
    name: "Email",
    link: "mailto:ankddev@duck.com",
    alt: "Get in touch via email",
    icon: "i-tabler-mail"
  },
  {
    name: "Tangled",
    link: "https://tangled.org/ankddev.fyi",
    alt: "Collaborate with me on Tangled",
    icon: "i-simple-icons-tangled"
  },
  {
    name: "GitHub",
    link: "https://github.com/ankddev",
    alt: "Collaborate with me on GitHub",
    icon: "i-tabler-brand-github"
  },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/ankddev.fyi",
    alt: "Follow me on Bluesky",
    icon: "i-tabler-brand-bluesky"
  },
  {
    name: "Reddit",
    link: "https://reddit.com/u/ankddev",
    alt: "Look at my posts on Reddit",
    icon: "i-tabler-brand-reddit"
  },
  {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/29685220/ankddev",
    alt: "Look at my questions and answers on StackOverflow",
    icon: "i-tabler-brand-stackoverflow"
  },
  {
    name: "RSS",
    link: "/rss.xml",
    alt: "Subscribe via RSS",
    icon: "i-tabler-file-rss"
  },
];
