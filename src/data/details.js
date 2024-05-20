// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projectsDetails = {
  1: {
    clientHeading: "About Client",
    companyInfos: [
      {
        id: 1,
        title: "Name",
        details: "Grameenphone Telecom Company,Bangladesh",
      },
      {
        id: 2,
        title: "Services",
        details: "Full Stack Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://www.grameenphone.com/",
      },
    ],
    objectivesHeading: "Objective",
    objectivesDetails:
      "Enhance transparency and accountability through effective regulatory compliance management.",
    technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue.js",
          "TailwindCSS",
          "Laravel",
          "AWS(s3)",
          "Docker",
        ],
      },
    ],
    projectDetailsHeading: "Regulatory Compliance Management",
    projectDetails: [
      {
        id: 1,
        details:
          "Working as a technical lead on a regulatory compliance management project was both fulfilling and challenging. The project's features, such as policy management, compliance monitoring, and risk assessment, were carefully crafted to meet intricate regulatory requirements. A standout aspect was the development of a tailored dashboard for CEOs and CXOs, offering real-time insights into compliance metrics and regulatory updates.",
      },
      {
        id: 2,
        details:
          "Despite its minimalist appearance, the project demanded profound logical depth, particularly in areas like regulatory change management. Each feature, from policy enforcement to risk assessment, required meticulous attention to detail and alignment with regulatory standards. This complexity underscored the importance of a strategic approach to navigating regulatory landscapes.",
      },
      {
        id: 3,
        details:
          "Overall, the experience of working on this project was rewarding, blending technical expertise with strategic vision to drive regulatory excellence. As a technical lead, orchestrating the integration of various features into a cohesive system was both stimulating and impactful. It showcased the intersection of technology and regulatory compliance, offering valuable insights into organizational integrity and governance.",
      },
    ],
    socialSharingsHeading: "",
    socialSharings: [],
    projectImages: [
      {
        id: 1,
        title: "Login",
        img: require("@/assets/images/rcms_1.png"),
      },
      {
        id: 2,
        title: "Dashboard",
        img: require("@/assets/images/rcms_2.png"),
      },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'Regulatory Compliance Management',
      singleProjectDate: 'Sept, 2023',
      singleProjectTag: 'UI / Frontend / Backend',
    },

  },
  2: {
    clientHeading: "About Client",
    companyInfos: [
      {
        id: 1,
        title: "Name",
        details: "Grameenphone Telecom Company,Bangladesh",
      },
      {
        id: 2,
        title: "Services",
        details: "Full Stack Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://www.grameenphone.com/",
      },
    ],
    objectivesHeading: "Objective",
    objectivesDetails:
      "To develop a Dynamic Workflow Engine that enables streamlined and adaptable business processes, enhancing operational efficiency and agility across diverse organizational workflows.",
    technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "Microservice Architecture",
          "Vue.js",
          "TailwindCSS",
          "Laravel",
          "AWS(s3)",
          "Docker",
        ],
      },
    ],
    projectDetailsHeading: "Dynamic Workflow Engine",
    projectDetails: [
      {
        id: 1,
        details:
          "In our project, we executed a pivotal shift from a monolithic architecture to a microservices model, introducing greater agility and scalability to our systems. This transition enabled seamless communication between components and facilitated the implementation of an API Gateway, streamlining interactions across the ecosystem. Additionally, we engineered a bespoke central method-based authorization system, ensuring robust security measures were in place to safeguard sensitive data and regulate access effectively.",
      },
      {
        id: 2,
        details:
          "At the heart of our endeavor was the development of a multi-vendor workflow engine, meticulously crafted with Laravel on the backend and Vue.js on the frontend. Leading a small, dedicated team, we navigated the complexities of the project, guiding its progression from conception to implementation. As a testament to our collective efforts, the project yielded a remarkable 30% increase in efficiency, underscoring its transformative impact on our organization's operations.",
      },
    ],
    socialSharingsHeading: "",
    socialSharings: [],
    projectImages: [
      {
        id: 1,
        title: "Login",
        img: require("@/assets/images/dwe_1.png"),
      },
      {
        id: 2,
        title: "Dashboard",
        img: require("@/assets/images/dwe_2.png"),
      },
      {
        id: 3,
        title: "Report",
        img: require("@/assets/images/dwe_3.png"),
      },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'Dynamic Workflow Engine',
      singleProjectDate: 'May, 2021',
      singleProjectTag: 'UI / Frontend / Backend',
    },
  },
  3: {
    clientHeading: "BARD: ERP",
    companyInfos: [
      {
        id: 1,
        title: "Name",
        details: "Bangladesh Academy Of Rural Development,Cumilla",
      },
      {
        id: 2,
        title: "Services",
        details: "ERP Development",
      },
      {
        id: 3,
        title: "Website",
        details: "http://erp.bard.gov.bd",
      },
    ],
    objectivesHeading: "Objective",
    objectivesDetails:
      "Create an integrated ERP solution with over 10 modules, including HRM, PMS, Accounting, RMS, and Training, to streamline business processes and enhance organizational efficiency.",
    technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "Laravel", "Docker"],
      },
    ],
    projectDetailsHeading: "BARD ERP",
    projectDetails: [
      {
        id: 1,
        details:
          "I contributed to the development of a Laravel-based ERP solution, employing a modular monolith architectural approach. Over a span of more than two years, I focused on designing and implementing key modules such as Accounting, Training, HRM, and the Vehicle Module. Additionally, I provided support and guidance on other essential modules, collaborating closely with the team to optimize system architecture and performance.",
      },
      {
        id: 2,
        details:
          "Throughout my involvement in the project, I played a vital role in shaping the ERP solution's evolution. By leveraging my expertise and experience, I helped create a robust platform that streamlined business processes and enhanced operational efficiency.",
      },
    ],
    socialSharingsHeading: "",
    socialSharings: [],
    projectImages: [
      {
        id: 1,
        title: "Login",
        img: require("@/assets/images/bard_1.png"),
      },
      {
        id: 2,
        title: "Dashboard",
        img: require("@/assets/images/bard_2.png"),
      },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'Dynamic Workflow Engine',
      singleProjectDate: 'March,2019 - April,2021',
      singleProjectTag: 'UI / Frontend / Backend',
    },
  },
  4: {
    clientHeading: "About Client",
    companyInfos: [
      {
        id: 1,
        title: "Name",
        details: "Personal Project",
      },
      {
        id: 2,
        title: "Services",
        details: "JWT Token Based Authentication",
      },
    ],
    objectivesHeading: "JWT Token Based Authentication",
    objectivesDetails:
      "Implement JWT token-based authentication for secure data transmission and streamlined user authentication between frontend and backend systems, enhancing system security and user experience.",
    technologies: [
      {
        title: "Tools & Technologies",
        techs: ["JavaScript", "Vue.js", "TailwindCSS", "Laravel"],
      },
    ],
    projectDetailsHeading: "JWT Token Based Authentication",
    projectDetails: [
      {
        id: 1,
        details:
          "The project focused on implementing JWT token-based authentication, enabling user authentication and token assignment for secure data exchange between frontend and backend systems. Additionally, it facilitated the acquisition of refresh tokens to address token expiration, ensuring uninterrupted access to resources and enhancing system reliability.",
      },
    ],
    socialSharingsHeading: "",
    socialSharings: [],
    projectImages: [
      {
        id: 1,
        title: "Login",
        img: require("@/assets/images/jwt_1.png"),
      },
      {
        id: 2,
        title: "Dashboard",
        img: require("@/assets/images/jwt_2.png"),
      },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'JWT: Token Based Auth',
      singleProjectDate: 'April, 2024',
      singleProjectTag: 'UI / Frontend / Backend',
    },
  },
  5: {
    clientHeading: "About Client",
    companyInfos: [
      {
        id: 1,
        title: "Name",
        details: "Leetcode Solutions",
      },
      {
        id: 2,
        title: "Services",
        details: "Leetcode Solutions",
      },
      {
        id: 3,
        title: "Github",
        details: "https://github.com/imranctg16/Python-Practices",
      },
    ],
    objectivesHeading: "Objective",
    objectivesDetails:
      "To practise problem solving and python.Continously adding new solutions to this project",
    technologies: [
      {
        title: "Tools & Technologies",
        techs: ["Python"],
      },
    ],
    projectDetailsHeading: "Leetcode Solution",
    projectDetails: [
      {
        id: 1,
        details:
          "Lately, I've been deep into LeetCode problem-solving and Python practice sessions. It's been a mix of challenge and fun, diving into coding puzzles and brushing up on Python techniques. Whether it's optimizing algorithms or tackling tricky Python exercises, each session brings new insights and skills to the table. It's all about the journey of improvement, one problem at a time!",
      },
      {
        id: 2,
        details:
          "These coding sessions have been a great way to stay sharp and explore different problem-solving strategies. From dynamic programming to data structures, each LeetCode challenge and Python exercise adds a layer of understanding to my coding toolkit. It's a casual yet rewarding way to level up my coding game while enjoying the process of learning and growing as a coder.",
      },
    ],
    socialSharingsHeading: "",
    socialSharings: [],
    projectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],
    singleProjectHeader: {
      singleProjectTitle: 'Leetcode Solutions',
      singleProjectDate: 'May, 2024',
      singleProjectTag: 'UI / Frontend / Backend',
    },
  },
};

export default projectsDetails;
