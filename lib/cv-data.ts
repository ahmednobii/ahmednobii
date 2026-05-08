// ─── Types ───────────────────────────────────────────────────────────────────

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  playStoreUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Volunteer {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
}

// ─── Personal Info ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Ahmed Nobi",
  title: "Senior Android Engineer | KMP",
  location: "Cairo, Egypt",
  linkedin: "https://linkedin.com/in/ahmednobii",
  github: "https://github.com/ahmednobii",
  website: "https://ahmednobii.me",
};

// ─── About ───────────────────────────────────────────────────────────────────

export const about = `Highly accomplished Senior Android Engineer with 7+ years of expertise in architecting and scaling high-performance, user-centric mobile applications. Proven leader in leveraging Kotlin Multiplatform (KMP), Jetpack Compose, and SDUI to drive innovation and deliver impactful solutions for fintech and media sectors, managing flagship apps with 5M+ downloads and 99.9% uptime. Adept at leading cross-functional teams, implementing robust CI/CD pipelines (CircleCI, GitHub Actions), and fostering engineering excellence.`;

export const highlights = [
  { label: "Years Experience", value: "7+" },
  { label: "App Downloads", value: "5M+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Students Trained", value: "300+" },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    title: "Sr. Android Developer",
    company: "Cashi",
    location: "Cairo, Egypt",
    period: "Nov 2024 — Present",
    summary:
      "Leading the Consumer Squad at Cashi, spearheading the development of high-performance, scalable Android solutions for a fintech product suite with over 5M downloads.",
    highlights: [
      "Architected scalable Android applications within a complex fintech ecosystem, supporting 5M+ downloads with 99.9% uptime, leveraging Kotlin Multiplatform (KMP) for robust, high-performance financial services.",
      "Spearheaded key feature development and optimization across Cashi, MyCashi, Cashi Lite, and Cashi Mobile, directly enhancing product functionality and user adoption.",
      "Led the Consumer Squad, guiding cross-functional teams in delivering high-performance, scalable solutions and fostering engineering excellence within a fast-paced fintech environment.",
    ],
  },
  {
    title: "Sr. Android Developer",
    company: "Beyond Apps Group",
    location: "Cairo, Egypt",
    period: "Dec 2023 — Oct 2024",
    summary:
      "Provided technical leadership and mentorship within cross-functional teams, driving the development and optimization of innovative Android applications for media and streaming platforms.",
    highlights: [
      "Provided technical leadership and mentorship to junior Android developers, elevating team capabilities and fostering best practices in application architecture and performance.",
      "Engineered key modules and optimized performance for the MyZesty media editing app and ViuLive streaming platform, significantly enhancing user experience and stability.",
      "Collaborated with cross-functional teams to ensure high standards of usability, performance, and scalability, integrating CI/CD practices (CircleCI, GitHub Actions).",
    ],
  },
  {
    title: "Android Development Subject Matter Expert",
    company: "SureSkills",
    location: "Dublin, Ireland",
    period: "Sep 2022 — Jan 2023",
    summary:
      "Developed and authored comprehensive Android development course materials, leveraging deep expertise to enhance learning experiences for a global audience.",
    highlights: [
      "Designed and authored comprehensive Android development courses, including technical documentation and video scripts, establishing a robust curriculum.",
      "Engineered practical examples, engaging quizzes, and capstone projects per module, significantly improving learner comprehension and skill application.",
      "Leveraged deep Android expertise to create high-impact educational content, positioning SureSkills as a recognized leader in mobile development training.",
    ],
  },
  {
    title: "Android Developer",
    company: "FOXCOD",
    location: "Muscat, Oman (Remote)",
    period: "Jul 2021 — Mar 2022",
    summary:
      "Delivered critical debugging, testing, and technical support, contributing to the development and maintenance of high-visibility client-facing Android applications.",
    highlights: [
      "Resolved complex technical issues through rigorous debugging and testing, reducing client application downtime by an estimated 15%.",
      "Contributed to the full lifecycle development and maintenance of high-visibility client-facing applications, ensuring robust performance.",
      "Provided advanced technical support and troubleshooting for critical bugs, implementing solutions that enhanced application reliability.",
    ],
  },
  {
    title: "Android Developer",
    company: "iSpace Technology",
    location: "Aswan, Egypt",
    period: "May 2021 — Mar 2022",
    summary:
      "Led the full-cycle development and maintenance of multiple Android applications, ensuring high-quality deliverables from inception to release.",
    highlights: [
      "Architected and delivered three key Android applications (I-drive, Mandoubk Smart, Tager app) from concept to successful market release.",
      "Fostered cross-functional collaboration with design and QA teams, implementing rigorous testing protocols that reduced post-launch defects by 15%.",
      "Ensured high-quality deliverables by implementing robust coding standards and conducting thorough code reviews.",
    ],
  },
  {
    title: "Android Developer",
    company: "YouBox",
    location: "Aswan, Egypt",
    period: "Jul 2019 — May 2020",
    summary:
      "Spearheaded the end-to-end development and launch of the YouBox eCommerce application, incorporating user feedback for continuous improvement.",
    highlights: [
      "Spearheaded the end-to-end development of the YouBox eCommerce application, delivering a robust and scalable platform.",
      "Implemented 5+ new features based on user feedback, resulting in an estimated 20% increase in user engagement.",
      "Leveraged the Flutter framework to build a cross-platform application, ensuring consistent experience across Android and iOS.",
    ],
  },
  {
    title: "Programming Instructor",
    company: "Independent",
    location: "Aswan & Luxor, Egypt",
    period: "Oct 2016 — Jan 2020",
    summary:
      "Delivered comprehensive training programs in Android development and programming principles, fostering technical talent for over 300 students.",
    highlights: [
      "Instructed over 300 students in advanced Android development and core programming principles, cultivating a new generation of skilled mobile developers.",
      "Developed and updated curriculum based on industry best practices, ensuring students were equipped with relevant and in-demand skills.",
      "Provided hands-on project guidance and technical mentorship, resulting in a high success rate for student projects.",
    ],
  },
  {
    title: "Android Developer",
    company: "Freelance",
    location: "Cairo, Egypt",
    period: "Oct 2016 — Sep 2018",
    summary:
      "Independently developed and maintained multiple Android applications, demonstrating full-stack mobile development capabilities for diverse clients.",
    highlights: [
      "Architected and launched the Agenda Line application, a comprehensive communication platform with chat, calls, and VoIP capabilities.",
      "Developed the Glory application, an interactive educational tool supporting parents of children with autism.",
      "Resolved critical bugs and optimized performance for the Mersal application, enhancing stability and code efficiency.",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    name: "MyCashi",
    description:
      "Electronic payment application for Sudanese citizens — bill payments, balance recharging, and money transfers. Part of the Cashi fintech suite with 5M+ downloads.",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.alsoug.mycashi",
  },
  {
    name: "Cashi Mobile",
    description:
      "Point-of-sale mobile application used by Cashi distribution points for processing financial transactions across Sudan.",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.alsoug.cashi",
  },
  {
    name: "MyZesty",
    description:
      "All-in-one AI-powered media editing and sharing application with diverse image and video editing tools and versatile creative resources.",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.myzesty",
  },
  {
    name: "ViuLive",
    description:
      "Live streaming application offering multi-camera broadcasting options for various occasions, enhancing real-time content delivery.",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.millennium.vumemobile",
  },
  {
    name: "Mandoubk Smart",
    description:
      "B2B mobile application connecting retailers and companies, streamlining supply chain operations for distributors and wholesalers.",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mandobaksmart.app",
  },
  {
    name: "I-Drive",
    description:
      "Secure and user-friendly mobile application for managing driving school accounts in Saudi Arabia, simplifying administrative tasks.",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ispace.idrive",
  },
  {
    name: "Tager",
    description:
      "Merchant-focused platform connecting users to competitive products for streamlined buying and selling processes.",
  },
  {
    name: "SysBoard",
    description:
      "Student management system enabling teaching staff to efficiently manage student grades and apply grading rules.",
  },
  {
    name: "Agenda Line",
    description:
      "Comprehensive communication application incorporating chat, voice calls, and VoIP meeting functionalities.",
  },
  {
    name: "Glory",
    description:
      "Interactive educational application providing exercises to support parents of children with autism in their learning journey.",
  },
  {
    name: "Identity Protector",
    description:
      "Security system for secure storage and monitoring of sensitive user information against data leakage.",
  },
  {
    name: "YouBox",
    description:
      "E-commerce platform facilitating online transactions and retail operations in Aswan, Egypt.",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: SkillCategory[] = [
  {
    category: "Kotlin Multiplatform",
    skills: [
      "KMP",
      "Ktor",
      "Koin",
      "Room",
      "Multiplatform Settings",
      "Gradle",
      "Android/iOS Shared Logic",
    ],
  },
  {
    category: "Android Framework",
    skills: ["Android SDK", "Jetpack Compose", "SDUI (Server-Driven UI)"],
  },
  {
    category: "Languages",
    skills: ["Kotlin", "Java"],
  },
  {
    category: "Architecture",
    skills: [
      "MVVM",
      "MVI",
      "MVP",
      "ViewModel",
      "LiveData",
      "Navigation",
      "Paging",
      "WorkManager",
    ],
  },
  {
    category: "Dependency Injection",
    skills: ["Dagger", "Hilt", "Koin"],
  },
  {
    category: "Testing",
    skills: [
      "Unit Testing",
      "JUnit",
      "Mockito",
      "UI Testing",
      "Espresso",
      "Instrumentation Testing",
    ],
  },
  {
    category: "CI/CD",
    skills: ["CircleCI", "GitHub Actions", "Bitbucket Pipelines", "Automated Testing"],
  },
  {
    category: "API & Networking",
    skills: ["Retrofit", "OkHttp", "Volley", "RESTful APIs", "Ktor Client"],
  },
  {
    category: "Cloud & Backend",
    skills: [
      "Firebase Realtime Database",
      "Firestore",
      "Firebase Auth",
      "Cloud Messaging",
      "Crashlytics",
    ],
  },
  {
    category: "Local Storage",
    skills: ["Room", "Realm", "SQLite", "DataStore", "Shared Preferences"],
  },
  {
    category: "Build Tools",
    skills: ["Gradle", "Maven", "Version Catalogs", "Convention Plugins"],
  },
  {
    category: "Cross-platform",
    skills: ["Flutter SDK", "Kotlin Multiplatform"],
  },
  {
    category: "Concurrency",
    skills: ["Coroutines", "RxJava", "Flow", "Asynchronous Programming"],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Aswan University",
    location: "Aswan, Egypt",
    period: "Sep 2017 — Jul 2021",
  },
];

// ─── Volunteer ───────────────────────────────────────────────────────────────

export const volunteer: Volunteer[] = [
  {
    role: "Former Chairman",
    organization: "IEEE Aswan SB",
    location: "Aswan, Egypt",
    period: "Dec 2015 — May 2017",
    description:
      "Established and led the inaugural IEEE student branch in Upper Egypt, growing a vibrant community of over 50 members.",
  },
  {
    role: "Mentor",
    organization: "IEEE Aswan SB",
    location: "Aswan, Egypt",
    period: "May 2021",
    description:
      "Provided technical guidance and career mentorship to engineering and technology students.",
  },
  {
    role: "Member",
    organization: "IEEE SAC EGYPT",
    location: "Egypt",
    period: "Dec 2018 — Dec 2021",
    description:
      "Contributed to initiatives promoting innovation and technological excellence.",
  },
  {
    role: "Volunteer",
    organization: "EED Program",
    location: "Egypt",
    period: "Jan 2018 — Dec 2019",
    description:
      "Facilitated connections between graduating engineering students and leading tech companies at the Egyptian Engineering Day.",
  },
];
