// Bookmarks data. Plain JSON inside a one-line JS wrapper so bookmarks.html can
// load it from file:// (browsers block fetch() of local .json from a file:// page).
// Fields: name, url required. group, tags, note optional.
// Group order below sets the section order and each group's card tint.
const BOOKMARKS = [
  { group: "Daily", name: "Gmail",           url: "https://mail.google.com/",     tags: ["email"] },
  { group: "Daily", name: "Google Calendar", url: "https://calendar.google.com/", tags: ["schedule"] },
  { group: "Daily", name: "Google Drive",    url: "https://drive.google.com/",    tags: ["files"] },

  { group: "AI", name: "Claude",    url: "https://claude.ai/",     tags: ["chat", "anthropic"] },
  { group: "AI", name: "ChatGPT",   url: "https://chatgpt.com/",   tags: ["chat", "openai"] },
  { group: "AI", name: "Consensus", url: "https://consensus.app/", tags: ["papers", "search"] },

  { group: "RP1", name: "Dashboard",   url: "https://rallypointone.github.io/Dashboard/",   tags: ["org", "status"] },
  { group: "RP1", name: "RP1Knowledge", url: "https://rallypointone.github.io/RP1Knowledge/", tags: ["docs", "autodocs", "research-books"] },

  { group: "Code", name: "GitHub",                 url: "https://github.com/",              tags: ["git"] },
  { group: "Code", name: "GitHub — Notifications", url: "https://github.com/notifications", tags: ["git", "inbox"] },
  { group: "Code", name: "RallypointOne Repos",    url: "https://github.com/orgs/RallypointOne/repositories", tags: ["git", "rp1"] },
  { group: "Code", name: "joshday",                url: "https://github.com/joshday",       tags: ["git"] },

  { group: "Julia", name: "Julia Docs",       url: "https://docs.julialang.org/en/v1/",          tags: ["docs"] },
  { group: "Julia", name: "Discourse",        url: "https://discourse.julialang.org/",           tags: ["forum"] },
  { group: "Julia", name: "General Registry", url: "https://github.com/JuliaRegistries/General", tags: ["registry"] },
  { group: "Julia", name: "JuliaHub",         url: "https://platform.juliahub.com/ui/Search?type=packages", tags: ["packages"] },
  { group: "Julia", name: "SciML Docs",       url: "https://docs.sciml.ai/",                     tags: ["docs", "sciml"] },

  { group: "Funding", name: "DoD SBIR/STTR (DSIP)", url: "https://www.dodsbirsttr.mil/submissions/login", tags: ["sbir"] },
  { group: "Funding", name: "SAM.gov",              url: "https://sam.gov/",                              tags: ["contracts"] },
  { group: "Funding", name: "Grants.gov",           url: "https://www.grants.gov/",                       tags: ["grants"] },
];
