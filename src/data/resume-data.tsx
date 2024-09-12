import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nishanth Gowda",
  initials: "Gowda",
  location: "Bengaluru, India",
  locationLink: "https://maps.app.goo.gl/NpXmFVeocndFfKWg9",
  about:
    "Detail-oriented Backend Engineer dedicated to building high-quality products. Specializing in Golang, I design and develop scalable, high-performance backend systems. ",
  summary:
    "Passionate Golang Backend Engineer with 3+ years of experience in designing, developing, and maintaining scalable and high-performance backend systems. Proficient in building RESTful APIs, microservices, and distributed systems using Go. Adept at optimizing server performance, ensuring data security, and collaborating with cross-functional teams to deliver robust software solutions. Strong problem-solving skills and a commitment to writing clean, maintainable, and efficient code.",
  avatarUrl: "https://avatars.githubusercontent.com/u/66053306?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "mailtonishanthgowda@gmail.com",
    tel: "+91 9980945525",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nishanth-gowda",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nishanth-gowda/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nishanth_gowda2",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Bangalore Institute of Technology",
      degree: "Bachelor's Degree in Computer Science",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "PayWithRing",
      link: "https://paywithring.com/",
      badges: ["Mumbai, India"],
      title: "Software Development Engineer - I",
      logo: ConsultlyLogo,
      start: "March, 2024",
      end: null,
      description: [
        "Design and implement REST APIs and concurrent backend services leveraging Golang. ",
        "Utilized Gin framework to streamline API development and enhance productivity.",
        "Collaborated with frontend and mobile teams to ensure seamless integration and optimal user experience.",
        "Migrated organization’s legacy cron jobs to Apache Airflow, enhancing workflow automation and monitoring capabilities",
        "Participated in code reviews and provided constructive feedback to maintain code quality.",
        "Optimized database queries and improved data retrieval performance by 30%.",
        "Contributed to the development of CI/CD pipelines to automate testing and deployment processes.",
        "Technologies: Go, Python, Apache Airflow, Apache Kafka."
      ]
    },
    {
      company: "LTIMindtree",
      link: "https://www.ltimindtree.com/",
      badges: ["Bengaluru, India"],
      title: "Associate Software Engineer",
      logo: ParabolLogo,
      start: "October, 2021",
      end: "March, 2024",
      description: [
        "Developed secure backend services on AWS Lambda using Golang for accessing on-premises storage services, ensuring high performance. ",
        "Utilized Kubernetes for container orchestration, automating application scaling and ensuring high availability.",
        "Developed Go scripts to automate deployment processes, resulting in significant time savings and reduced human errors.",
        "Built and deployed serverless applications leveraging AWS Lambda and Serverless Framework, achieving cost-efficiency and rapid scaling.",
        "Technologies: Go, Java, AWS Lambda, Serverless Tech."
      ]
    },
  ],
  skills: [
    "Go",
    "Python",
    "Gin/Echo",
    "Airflow",
    "Kafka",
    "Kubernetes",
    "Docker",
    "Grafana",
    "AWS",
    "MySql",
    "DynamoDB"
  ],
  projects: [
    {
      title: "Weather Polling App",
      techStack: [
        "Go",
        "Twilio",
      ],
      description:
        "The Weather Polling App is a simple Go application that retrieves weather data from an external API and sends it via SMS using Twilio",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Nishanth-Gowda/go_weather_poller",
      },
    },
    {
      title: "F1-API",
      techStack: [
        "Go",
        "Gin",
        "AWS",
      ],
      description:
        " Formula 1 Teams API is a Go and Gin-based application that provides CRUD (Create, Read, Update, Delete) operations for managing Formula 1 teams.",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://github.com/Nishanth-Gowda/F1-API",
      },
    },
  ],
} as const;
