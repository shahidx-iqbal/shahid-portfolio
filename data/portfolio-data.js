// @ts-check

/**
 * =============================================================================
 *  SINGLE SOURCE OF TRUTH FOR THE ENTIRE PORTFOLIO
 * =============================================================================
 *
 *  Every piece of content on the site is defined here. Components/sections
 *  render dynamically from this object (see `assets/js/render.js`), so:
 *
 *    - Add a project        -> add one object to `projects`
 *    - Add a job            -> add one object to `experience`
 *    - Add a skill          -> add one string to the relevant group's `items`
 *    - Edit any text        -> change the field value
 *    - Remove anything      -> delete its array entry
 *
 *  No HTML, CSS, or rendering logic needs to change for content updates.
 *
 *  Types live in `data/types.d.ts`. Run `npm run typecheck` (or `tsc --noEmit`)
 *  to catch a missing/mistyped field at compile time.
 *
 * @type {import('./types').PortfolioData}
 */
export const portfolioData = {
  /* ---------------------------------------------------------------- profile */
  profile: {
    name: "Shahid Iqbal",
    title: "Flutter & Mobile App Developer",
    tagline: "Hello, I'm",
    shortBio:
      "Flutter developer building efficient, user-friendly mobile applications.",
    profileImage: "assets/img/profile-img.jpeg",
    location: "Pakistan",
    birthday: "01 March 1996",
    email: "info.shahidiqbal7@gmail.com",
    phone: "+92 341 1099735",
    typedRoles: [
      "Flutter Developer",
      "Mobile Application Developer",
      "Software Engineer",
    ],
    social: {
      github: "https://github.com/shahidx-iqbal",
      linkedin: "https://www.linkedin.com/in/shadykahn07/",
      facebook: "https://www.facebook.com/shadykahn07/",
      website: "https://shahidx-iqbal.github.io/shahid-portfolio/",
    },
  },

  /* ------------------------------------------------------------- navigation */
  navigation: [
    { label: "Home", href: "#hero", icon: "bi bi-house-door" },
    { label: "About", href: "#about", icon: "bi bi-person" },
    { label: "Education", href: "#education", icon: "bi bi-mortarboard" },
    { label: "Experience", href: "#work", icon: "bi bi-briefcase" },
    { label: "Skills", href: "#skills", icon: "bi bi-code-slash" },
    { label: "Projects", href: "#projects", icon: "bi bi-kanban" },
    { label: "Languages & Interests", href: "#languages", icon: "bi bi-translate" },
    { label: "Contact", href: "#contact", icon: "bi bi-envelope" },
  ],

  /* ----------------------------------------------------------------- resume */
  resume: {
    file: "shahid_Iqbal_Resume.pdf",
    downloadName: "Shahid_Iqbal_Resume.pdf",
  },

  /* ------------------------------------------------- professional interests */
  professionalInterests: [
    "Mobile Application Developer",
    "Flutter Developer",
    "Dart",
    "Firebase",
    "Front-End Developer",
    "Android Development",
    "iOS Development",
    "Cross-Platform Development",
  ],

  /* ------------------------------------------------------------------ about */
  about: {
    description: [
      "I'm Shahid, a Flutter Developer with 2+ years of experience building high-quality cross-platform mobile applications for Android and iOS. I hold a Bachelor's degree in Computer Software Engineering from UET Peshawar and have worked remotely with 14 K Business Solutions LLC and previously with Appalo Inc.",
      "I specialize in Flutter, Dart, Firebase, REST API integration, and state management using Riverpod, Provider, and GetX. My focus is on creating scalable, high-performance applications with clean architecture, intuitive user interfaces, and an excellent user experience.",
      "I'm passionate about turning ideas into reliable mobile products and continuously learning new technologies to build modern, impactful applications."
    ],
    facts: [
      { label: "Birthday", value: "01 March 1996" },
      {
        label: "Website",
        value: "shahidx-iqbal.github.io",
        link: "https://shahidx-iqbal.github.io/shahid-portfolio/",
      },
      { label: "Email", value: "info.shahidiqbal7@gmail.com" },
      { label: "Phone", value: "+92 341 1099735" },
    ],
  },

  /* ------------------------------------------------------------- experience */
  experience: [
    {
      company: "14 K Business Solutions LLC",
      role: "Associate Application Developer",
      startDate: "Sept 2023",
      endDate: "Present",
      mode: "Remote",
    },
    {
      company: "Appalo Inc.",
      role: "Flutter Stack Developer",
      startDate: "Sept 2023",
      endDate: "April 2026",
      mode: "Remote",
    },
    {
      company: "Pixel io Technologies",
      role: "Mobile Application Developer",
      startDate: "May 2023",
      endDate: "Oct 2023",
      location: "Abbottabad, Pakistan",
      mode: "Onsite",
    },
    {
      company: "URRAAN - Runway to Digital Flight",
      role: "Flutter Development Intern",
      startDate: "Mar 2023",
      endDate: "May 2023",
      location: "Abbottabad, Pakistan",
    },
  ],

  /* -------------------------------------------------------------- education */
  education: [
    {
      institution: "University of Engineering and Technology Peshawar, Pakistan",
      degree: "BS Computer Software Engineering",
      startDate: "Sep 2016",
      endDate: "Aug 2020",
    },
  ],

  /* ----------------------------------------------------------------- skills */
  skills: [
    {
      category: "Flutter & Mobile Development",
      items: [
        { name: "Flutter" },
        { name: "Dart" },
        { name: "Android Development" },
        { name: "iOS Development" },
        { name: "Cross-Platform Development" },
        { name: "State Management (Riverpod, Provider, GetX)" },
        { name: "REST API Integration" },
        { name: "Firebase" },
        { name: "Push Notifications" },
        { name: "Google Maps Integration" },
        { name: "Local Storage (Hive, SQLite, SharedPreferences)" },
        { name: "App Store Deployment" },
        { name: "Google Play Deployment" },
      ],
    },
    {
      category: "Architecture & Engineering",
      items: [
        { name: "Clean Architecture" },
        { name: "MVVM Architecture" },
        { name: "Software Development" },
        { name: "Object-Oriented Programming (OOP)" },
        { name: "Debugging & Performance Optimization" },
        { name: "Code Optimization" },
        { name: "Git & GitHub" },
      ],
    },
    {
      category: "Backend & Services",
      items: [
        { name: "RESTful APIs" },
        { name: "Firebase Authentication" },
        { name: "Firebase Cloud Messaging" },
        { name: "Firebase Crashlytics" },
        { name: "Cloud Storage Integration" },
        { name: "AI API Integration" },
      ],
    },
    {
      category: "UI/UX Development",
      items: [
        { name: "Responsive UI Design" },
        { name: "Figma to Flutter Implementation" },
        { name: "Custom UI Components" },
        { name: "Animations & Transitions" },
        { name: "User Experience Optimization" },
      ],
    },
  ],
  
  /* ------------------------------------------------------------ otherSkills */
  otherSkills: [
    {
      category: "Development Tools",
      items: [
        { name: "Visual Studio Code" },
        { name: "Cursor AI Editor" },
        { name: "Android Studio" },
        { name: "Xcode" },
        { name: "Postman" },
        { name: "Figma" },
      ],
    },
    {
      category: "Version Control & Deployment",
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Google Play Console" },
        { name: "App Store Connect" },
        { name: "CI/CD Basics" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ tools */
  tools: [
    { label: "Development", value: "Flutter SDK, Dart SDK" },
    { label: "Code Editors", value: "Visual Studio Code, Cursor" },
    { label: "Mobile IDEs", value: "Android Studio, Xcode" },
    { label: "Version Control", value: "Git, GitHub" },
    { label: "Testing & Design", value: "Postman, Figma" },
  ],

  /* --------------------------------------------------------------- projects */
  projects: [
    {
      id: "mafi-mushkil",
      title: "Mafi Mushkil",
      shortDescription: "On-Demand Home Services App UI",
      description:
        "Mafimushkil is an on-demand service booking app connecting users with local professionals like electricians, cleaners, and carpenters. I designed the complete Flutter UI, including multi-service booking, detailed order forms with notes and image uploads, order tracking, notifications, and order history. The result is a clean, intuitive user experience that simplifies booking and tracking services from start to finish.",
      techStack: [
        "UI/UX Design",
        "Flutter",
        "iOS & Android",
        "API Integration",
        "Google Maps",
        "Firebase Auth",
        "Provider",
        "Push Notifications",
      ],
      images: ["assets/img/projects/mafi_mushkil_banner.png"],
      appStoreLink: null,
      playStoreLink: null,
      webLink: null,
      githubLink: null,
      featured: true,
      category: "Mobile",
    },
    {
      id: "cross-connection",
      title: "Cross Connection",
      shortDescription:
        "Cross Connection — faith-based social networking app.",
      description:
        "Cross Connection is a faith-based social app built with Flutter for iOS and Android. I developed features including user profiles, image/video posts, groups, real-time chat, prayer requests, and push notifications. Using MobX, REST APIs, and Firebase, I delivered a responsive, scalable app with clean architecture and a seamless user experience, designed to grow with its community.",
      techStack: [
        "Flutter",
        "iOS & Android",
        "Front-end",
        "API Integration",
        "MobX",
        "Push Notifications",
      ],
      images: ["assets/img/projects/cross_connection_banner_1.png"],
      appStoreLink: "https://apps.apple.com/pk/app/x-connection/id6738661941",
      playStoreLink:"https://play.google.com/store/apps/details?id=com.cross.connection",
      webLink: null,
      githubLink: null,
      featured: true,
      category: "Mobile",
    },
    {
      id: "health-tracker",
      title: "Health Score",
      shortDescription:
        "Health Score – AI-Powered Health & Wellness App.",
      description:
        "Health Score is an AI-powered health and wellness app built with Flutter for iOS and Android. I developed features including user profiles, health tracking, AI-powered health recommendations, and push notifications. Using Riverpod, REST APIs, and Firebase, I delivered a responsive, scalable app with clean architecture and a seamless user experience, designed to help users improve their health and wellness.",
      techStack: [
        "Flutter",
        "Riverpod",
        "UI/UX Design",
        "iOS & Android",
        "API Integration",
        "Push Notifications",
        "AI API Integration",
      ],
      images: ["assets/img/projects/health_score_banner.png"],
      appStoreLink: "https://play.google.com/store/apps/details?id=com.healthscoretoday.app",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.healthscoretoday.app",
      webLink: null,
      githubLink: null,
      featured: true,
      category: "Mobile",
    },
    {
      id: "restaurant-management",
      title: "Restaurant Management Application",
      shortDescription:
        "Management app for a US restaurant chain with Admin, Manager and Assistant Manager access levels.",
      description:
        "A management app for a restaurant chain in the US, designed to oversee employee and financial operations. The app features three levels of user access: Admin, Manager, and Assistant Manager, each with specific roles and permissions to manage various aspects of the restaurant's operations.",
      techStack: [
        "Flutter",
        "iOS & Android",
        "Front-end",
        "API Integration",
        "Firebase Auth",
        "GetX",
        "Push Notifications",
      ],
      images: ["assets/img/projects/alsham_banner.png"],
      appStoreLink: "https://apps.apple.com/pk/app/al-sham-restaurant-management/id6482979587",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.al_sham.restaurants",
      webLink: null,
      githubLink: null,
      featured: true,
      category: "Mobile",
    },
    {
      id: "deel-reel",
      title: "Deel Reel",
      shortDescription:
        "Grocery app for seamless browsing and purchasing of a wide range of grocery products.",
      description:
        "A grocery app called Deel Reel, designed for easy shopping of all grocery items. The app provides a seamless experience for users to browse, select, and purchase a wide range of grocery products with convenience.",
      techStack: ["Flutter", "Deep Linking", "Bug Fixing", "Maintenance"],
      images: ["assets/img/projects/deel.png"],
      appStoreLink: null,
      playStoreLink: null,
      webLink: null,
      githubLink: null,
      featured: false,
      category: "Mobile",
    },
    {
      id: "stop-pick",
      title: "Stop Pick",
      shortDescription:
        "Transport solution with three connected apps: Driver, Manager and Passenger.",
      description:
        "Stop Pick is a comprehensive transport solution consisting of three interconnected apps: Driver, Manager, and Passenger. Each app is designed to cater to different aspects of the transportation system, providing streamlined functionalities for drivers, managers, and passengers to efficiently manage and use transport services.",
      techStack: [
        "Flutter",
        "Front-end",
        "API Integration",
        "Google Maps",
        "GetX",
        "Push Notifications",
      ],
      images: ["assets/img/projects/stop_pick.png"],
      appStoreLink: null,
      playStoreLink: null,
      webLink: null,
      githubLink: null,
      featured: false,
      category: "Mobile",
    },
  ],

  /* -------------------------------------------------------- spokenLanguages */
  spokenLanguages: [
    { name: "English", level: 95 },
    { name: "Urdu", level: 100 },
    { name: "Pashto", level: 100 },
  ],

  /* -------------------------------------------------------------- interests */
  interests: ["Hiking", "Nature", "Camping", "Fitness", "Technology"],

  /* ---------------------------------------------------------------- contact */
  contact: {
    emails: ["info.shahidiqbal7@gmail.com", "ishahid116@gmail.com"],
    phones: ["+92 341 1099735", "+92 317 7727452"],
  },
};
