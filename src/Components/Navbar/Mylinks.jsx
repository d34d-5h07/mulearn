const mainlink = "https://learn.mulearn.org";
export const links = [
  {
    head: -1,
    name: "About",
    submenu: true,
    sublinks: [
      {
        name: "Key Pages",
        submenu: true,
        sublinks: [
          {
            name: "Our Team",
            submenu: false,
            sublinks: [],
            link: "/team",
            foreign: false,
          },
        ],
      },

      {
        name: "Partners",
        submenu: true,
        sublinks: [
          {
            name: "Community Partners",
            submenu: false,
            sublinks: [],
            link: "/community-partners",
            foreign: false,
          },
          {
            name: "Company Partners",
            submenu: false,
            sublinks: [],
            link: "/company-partners",
            foreign: false,
          },
        ],
      },
      {
        name: "Leaderboard",
        submenu: true,
        sublinks: [
          {
            name: "Overall Leaderboards",
            link: "/leaderboard",
          },
          {
            name: "Monthly Leaderboards",
            link: "/leaderboard/monthly",
          },
        ],
      },
      {
        name: "Media",
        submenu: true,
        sublinks: [
          {
            name: "Gallery",
            submenu: false,
            sublinks: [],
            link: "/gallery",
            foreign: false,
          },
          {
            name: "News",
            submenu: false,
            sublinks: [],
            link: "/news",
            foreign: false,
          },
          {
            name: "Blogs",
            submenu: false,
            sublinks: [],
            link: "/blogs",
            foreign: false,
          },
        ],
      },
      {
        name: "Events",
        submenu: true,
        sublinks: [
          {
            name: "Global Calendar",
            submenu: false,
            sublinks: [],
            link: "/calendar",
            foreign: false,
          },
          {
            name: "Announcements",
            submenu: false,
            sublinks: [],
            link: "/announcements",
            foreign: false,
          },
          {
            name: "Weekly Events",
            submenu: false,
            sublinks: [],
            link: "/events",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Programs",
    submenu: true,
    sublinks: [
      {
        head: 1,
        name: "Flagship",
        submenu: true,
        sublinks: [
          {
            name: "YIP",
            submenu: false,
            sublinks: [],
            link: "/yip",
            foreign: false,
          },
          {
            name: "Foundation Program",
            submenu: false,
            sublinks: [],
            link: "https://foundation.mulearn.org",
            foreign: true,
          },
          {
            name: "Art of Teaching",
            submenu: false,
            sublinks: [],
            link: "/artofteaching",
            foreign: false,
          },
        ],
      },
      {
        head: 1,
        name: "Others",
        submenu: true,
        sublinks: [
          {
            name: "Wiki Syllabus",
            submenu: false,
            sublinks: [],
            link: "/wikisyllabus",
            foreign: false,
          },
          {
            name: "Hacktober Fest",
            submenu: false,
            sublinks: [],
            link: "/hacktoberfest",
            foreign: false,
          },
          {
            name: "Build For Team",
            submenu: false,
            sublinks: [],
            link: "/buildforteam",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Campus Chapters",
    submenu: true,
    sublinks: [
      {
        head: 2,
        name: "The Chaptership",
        submenu: true,
        link: "/campuschapters",
        sublinks: [
          {
            name: "Campus Logo Generator",
            link: "/campuschapters/#logo-generator",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Success Stories",
            link: "/successstories",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 2,
        name: "The Orientation",
        submenu: true,
        sublinks: [
          {
            name: "Lead a Campus",
            link: "https://airtable.com/shrmtngt3zopg8eVh",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Typing Mastery",
            link: mainlink + "/challenge/typing",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Typing Mastery Leaderboard",
            link: mainlink + "/challenge/typingmastery",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 2,
        name: "The Enablement",
        submenu: true,
        link: "/challenges",
        sublinks: [
          {
            name: "Self Introduction",
            link: mainlink + "/common/enablement/1",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Intro to Command Line",
            link: mainlink + "/challenge/intro-to-command-line",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Introduction to GitHub",
            link: mainlink + "/challenge/intro-to-github",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Introduction to Markdown",
            link: mainlink + "/challenge/intro-to-markdown",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Introduction to HTML",
            link: mainlink + "/challenge/intro-to-html",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Introduction to Github Page",
            link: mainlink + "/challenge/intro-to-github-pages",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Introduction to Discord",
            link: mainlink + "/common/enablement/2",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 2,
        name: " The Learning",
        submenu: true,
        link: mainlink + "/",
        sublinks: [
          {
            name: "Form Learning Cirlces",
            link: mainlink + "/create",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Interst Groups",
            link: mainlink + "/",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Challenges",
            link: mainlink + "/challenges",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Bootcamps",
            link: mainlink + "/challenges",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Interest Group",
    submenu: true,
    sublinks: [
      {
        head: 3,
        name: "Interest Groups",
        submenu: true,
        sublinks: [
          {
            name: "Home Page",
            link: mainlink + "/",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Android Development",
            link: mainlink + "/android",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Artificial Intelligence",
            link: mainlink + "/ai",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Civil Engineering",
            link: mainlink + "/civil",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Cyber Security",
            link: mainlink + "/cybersec",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "IoT",
            link: mainlink + "/iot",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Product Management",
            link: mainlink + "/pm",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "UX",
            link: mainlink + "/ux",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Web Development",
            link: mainlink + "/web",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Bootcamps",
        submenu: true,
        sublinks: [
          {
            name: "Home",
            link: mainlink + "/bootcamps",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Android",
            link: mainlink + "/bootcamps/android",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Artificial Intelligence",
            link: mainlink + "/bootcamps/ai",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "CTF",
            link: mainlink + "/bootcamps/ctf",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Flutter",
            link: mainlink + "/bootcamps/flutter",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Rust",
            link: mainlink + "/bootcamps/rust",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "JavaScript",
            link: mainlink + "/bootcamps/javascript",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Python",
            link: mainlink + "/bootcamps/python",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },

      {
        head: 3,
        name: "Practice",
        submenu: true,
        sublinks: [
          {
            name: "OpenSource Projects",
            link: mainlink + "/opensource",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Problem Shelf",
            link: mainlink + "/problemshelves",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Challenges",
            link: mainlink + "/challenges",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Courses",
            link: mainlink + "/courses",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "API Setu",
            link: mainlink + "/apisetu",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Learning Circles",
        submenu: true,
        sublinks: [
          {
            name: "Create Circle",
            link: mainlink + "/create",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Join Circles",
            link: mainlink + "/join",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Search",
        submenu: true,
        sublinks: [
          {
            name: "Mentor Directory",
            link: mainlink + "/mentors",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Existing Circles",
            link: mainlink + "/searchcircles",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
];
