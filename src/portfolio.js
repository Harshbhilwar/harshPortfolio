/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsh Bhilwar",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "Full Stack Software Developer\n Focused on building scalable web applications, backend systems, and AI-powered solutions. Skilled in RESTful APIs, database design, and delivering efficient, real-world applications using modern technologies.\n 🚀 Built AI platforms, E-commerce platforms, and full-stack systems"
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Harshbhilwar",
  linkedin: "https://www.linkedin.com/in/harshbhilwar/",
  gmail: "harsh638865@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER BUILDING SCALABLE WEB APPLICATIONS AND AI-DRIVEN SOLUTIONS.",
  skills: [
    emoji(
      "⚡ Build scalable web applications using modern frontend and backend technologies",
    ),
    emoji("⚡ Develop RESTful APIs and backend systems with Node.js and Express"),
    emoji("⚡ Create AI-powered features using OpenAI and Google Gemini APIs"),
    emoji("⚡ Design and manage databases using MongoDB, PostgreSQL, and SQL"),
    emoji("⚡ Build real-world projects like SigmaGPT and AI-based job preparation platforms"
),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Data Structures & Algorithms",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Object-Oriented Programming (OOP)",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "System Design Basics",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "SDLC",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "devicon-tailwindcss-plain"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "devicon-express-original"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "RESTful API",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Google Gemini API",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "devicon-nodejs-plain"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "devicon-github-original"
    },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "devicon-vercel-original"
    },
    {
      skillName: "Sanity CMS",
      fontAwesomeClassname: "devicon-sanity-plain"
    },
    {
      skillName: "Stripe API",
      fontAwesomeClassname: "fab fa-stripe"
    },
    {
      skillName: "Inngest",
      fontAwesomeClassname: "fas fa-bolt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lakshmi Narain College of Technology (LNCT University), Bhopal",
      logo: require("./assets/images/lnctLogo.png"),
      subHeader: "Master of Computer Application",
      duration: "September 2023 - August 2025",
      desc: 'Major Project - Developed "Chatbot", an AI-powered full-stack application using OpenAI API to generate intelligent responses with real-time interaction.',
      descBullets: [
        "Designed and implemented RESTful backend services using Node.js and Express.js.",
        "Integrated OpenAI API to enable real-time AI-generated responses.",
        "Built responsive and interactive frontend using React.js.",
        "Managed data handling and application logic for efficient performance and scalability.",
        "Implemented clean architecture and modular code structure for maintainability."
      ]
    },
    {
      schoolName: "Bundelkhand University, Jhansi",
      logo: require("./assets/images/buLogo.png"),
      subHeader: "Bachelor of Science (Honours) in Computer Science",
      duration: "August 2020 - July 2023",
      desc: 'Major Project - "Covid-19"',
      descBullets: [
        'Conducted a research-based project titled “COVID-19 Related Stigma Among General Population in India”.',
        "Collected and analyzed survey data using statistical methods to study social stigma patterns.",
        "Designed questionnaires and performed data analysis using tools like Excel and statistical techniques.",
        "Gained experience in data analysis, interpretation, and research methodology."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/sigmagptLogo.png"),
      projectName: "SigmapGPT",
      projectDesc: "An AI-powered conversational platform with real-time responses, image generation, persistent chat history, and image download/copy features for an interactive user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sigmagpt-ecru.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/shopnexusLogo.png"),
      projectName: "Shopnexus",
      projectDesc: "A full-stack e-commerce platform enabling seamless online shopping with product browsing, cart management, secure checkout, and integrated payment gateway.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shopnexus-eight.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/jobnexusaiLogo.png"),
      projectName: "JobnexusAI",
      projectDesc: "An AI-powered career assistant platform that helps users build resumes, generate cover letters, and prepare for interviews with personalized quizzes and industry insights.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jobnexusai.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/futurecareersLogo.png"),
      projectName: "FutureCareers",
      projectDesc: "A full-stack job portal platform enabling job seekers to find relevant opportunities and employers to post jobs, manage applications, and track candidates in real time.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://future-careers-three.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and achievements highlighting my technical growth and skills.",

  achievementsCards: [
    {
      title: "Full Stack Web Development",
      subtitle:
        "Completed a full-stack web development program covering frontend and backend technologies, including React, Node.js, and databases, with hands-on project experience.",
      image: require("./assets/images/apnacollegeLogo.png"),
      imageAlt: "Apna College Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1mPD5YG2JPeHyyI_zeQHOHj2LwWnVCS9m/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Data Structures & Algorithms with Java",
      subtitle: "Developed strong problem-solving skills by learning data structures and algorithms in Java, focusing on writing efficient and optimized code.",
      image: require("./assets/images/apnacollegeLogo.png"),
      imageAlt: "Apna College Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1enmPPtK78BjY9n_6M4K4t57JAbCYN2JW/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Python Programming",
      subtitle: "Built a foundation in Python programming by learning core concepts, control flow, and problem-solving techniques through hands-on practice.",
      image: require("./assets/images/InfosysLogo.png"),
      imageAlt: "Infosys Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1nCFJCFQvjXF5w9VCQn6JhR3dZSa1UEx5/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Full Stack Developer",
      subtitle:
        "Completed a comprehensive full-stack web development program covering frontend, backend, and database technologies including React, Node.js, Express.js and MongoDB.",
      image: require("./assets/images/oneroadmap.jfif"),
      imageAlt: "OneRoadmap Logo",
      footerLink: [
        {
          name: "Certificateion",
          url: "https://drive.google.com/file/d/1HBoxYqZIGmJhHl8t9xEfQ1m5WIOWCM5z/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Frontend Development",
      subtitle: "Built a solid foundation in frontend development by creating responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.",
      image: require("./assets/images/oneroadmap.jfif"),
      imageAlt: "OneRoadmap Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1IBSa8yCRdufehrkCw0sxNrYA9pnM9VYq/view?usp=drivesdk"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6388657192",
  email_address: "harsh638865@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
