export const siteSettings = {
  instituteName: "Indian Institute of Entrepreneurship & Innovation",
  shortName: "IIEI",
  initiatedBy: "Chamber of Commerce & Industry of India",
  initiatedByShort: "CCI India",
  duration: "2 Years",
  semesters: 4,
  totalProgramFee: 2500000,
  totalProgramFeeDisplay: "₹25,00,000",
  ugSeats: 60,
  pgSeats: 60,
  totalSeats: 120,
  founderNetwork: "250+",
  hostelAvailable: false,
  ppoCommitment: true,
  institutionalFundingCommitment: true,
  tagline: "Learn by Doing.",
};

export type ProgramStatus = "launching" | "coming-soon";
export type ProgramCategory = "UG" | "PG";

export interface Program {
  id: string;
  category: ProgramCategory;
  number: string;
  name: string;
  shortName: string;
  slug: string;
  status: ProgramStatus;
  statusLabel: string;
  description: string;
  longDescription: string;
  whoIsItFor: string;
  careerPathways: string[];
  industryExposure: string;
  internshipInfo: string;
  image: string;
  curriculum: {
    semester1: string[];
    semester2: string[];
    semester3: string[];
    semester4: string[];
  };
  semesterLabels: { label: string; title: string }[];
}

export const programs: Program[] = [
  {
    id: "entrepreneurship",
    category: "PG",
    number: "01",
    name: "MBA in Entrepreneurship & Innovation",
    shortName: "Entrepreneurship & Innovation",
    slug: "entrepreneurship",
    status: "launching",
    statusLabel: "Now Launching",
    description:
      "A practical entrepreneurship-focused program built around startup creation, innovation, business models, venture capital, incubation and real-world execution.",
    longDescription:
      "The Entrepreneurship & Innovation program is designed for builders. Over two years and four semesters, students move from foundation to real-world execution — building startups, pitching ideas, working with founders, and learning through doing. This is not a theoretical business degree. It's a launchpad.",
    whoIsItFor:
      "Aspiring entrepreneurs, startup builders, family business successors, innovators and anyone who wants to build, not just study.",
    careerPathways: [
      "Startup Founder / Co-Founder",
      "Product Manager",
      "Venture Analyst",
      "Business Strategist",
      "Innovation Consultant",
      "Entrepreneur in Residence",
    ],
    industryExposure:
      "Direct interaction with startup founders, venture capitalists and industry leaders through masterclasses, live projects and founder sessions.",
    internshipInfo:
      "Multiple internships across startups, venture firms and innovation teams, with real business problems and real deliverables.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    curriculum: {
      semester1: [
        "Principles of Management",
        "Managerial Economics",
        "Financial Accounting & Management",
        "Business Communication",
        "Entrepreneurship & Innovation",
        "Business Analytics",
      ],
      semester2: [
        "Marketing Management",
        "Human Resource Management",
        "Operations Management",
        "Business Law & Ethics",
        "Summer Internship",
      ],
      semester3: [
        "Startup Creation & Business Models",
        "Innovation & Design Thinking",
        "Business Incubation & Acceleration",
        "Venture Capital & Startup Finance",
        "Digital Entrepreneurship",
        "Family Business Management",
      ],
      semester4: [
        "Intellectual Property Rights & Legal Compliance",
        "Social Entrepreneurship & Sustainable Business",
        "Business Plan / Dissertation / Startup Project",
        "Internship",
      ],
    },
    semesterLabels: [
      { label: "Semester I", title: "Foundation" },
      { label: "Semester II", title: "Business + Internship" },
      { label: "Semester III", title: "Entrepreneurship Specialization" },
      { label: "Semester IV", title: "Advanced Entrepreneurship" },
    ],
  },
  {
    id: "agritech",
    category: "PG",
    number: "02",
    name: "MBA in AgriTech Management",
    shortName: "AgriTech Management",
    slug: "agritech",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A program designed to bridge agriculture and technology, building leaders for India's agritech revolution.",
    longDescription:
      "The AgriTech Management program will equip students with the skills to drive innovation at the intersection of agriculture and technology. Details will be announced as the program launches.",
    whoIsItFor:
      "Professionals and aspiring entrepreneurs passionate about agricultural technology and rural innovation.",
    careerPathways: [
      "AgriTech Entrepreneur",
      "Supply Chain Manager (Agri)",
      "Rural Innovation Lead",
      "Agri Product Manager",
    ],
    industryExposure: "To be announced with program launch.",
    internshipInfo: "To be announced with program launch.",
    image:
      "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200",
    curriculum: {
      semester1: [
        "Principles of Management",
        "Managerial Economics",
        "Financial Accounting & Management",
        "Business Communication",
        "Entrepreneurship & Innovation",
        "Business Analytics",
      ],
      semester2: [
        "Marketing Management",
        "Human Resource Management",
        "Operations Management",
        "Business Law & Ethics",
        "Internship",
      ],
      semester3: ["Specialization subjects — To Be Announced"],
      semester4: ["Advanced subjects + Capstone — To Be Announced"],
    },
    semesterLabels: [
      { label: "Semester I", title: "Foundation" },
      { label: "Semester II", title: "Business + Internship" },
      { label: "Semester III", title: "Specialization" },
      { label: "Semester IV", title: "Advanced Learning + Capstone" },
    ],
  },
  {
    id: "finance",
    category: "PG",
    number: "03",
    name: "MBA in Financial Management",
    shortName: "Financial Management",
    slug: "finance",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A finance-focused program built for the next generation of financial leaders, analysts and innovators.",
    longDescription:
      "The Financial Management program will prepare students for leadership roles across banking, investing, fintech and corporate finance. Details will be announced as the program launches.",
    whoIsItFor:
      "Aspiring financial analysts, investment professionals and fintech entrepreneurs.",
    careerPathways: [
      "Financial Analyst",
      "Investment Associate",
      "Fintech Entrepreneur",
      "Corporate Finance Manager",
    ],
    industryExposure: "To be announced with program launch.",
    internshipInfo: "To be announced with program launch.",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200",
    curriculum: {
      semester1: [
        "Principles of Management",
        "Managerial Economics",
        "Financial Accounting & Management",
        "Business Communication",
        "Entrepreneurship & Innovation",
        "Business Analytics",
      ],
      semester2: [
        "Marketing Management",
        "Human Resource Management",
        "Operations Management",
        "Business Law & Ethics",
        "Internship",
      ],
      semester3: ["Specialization subjects — To Be Announced"],
      semester4: ["Advanced subjects + Capstone — To Be Announced"],
    },
    semesterLabels: [
      { label: "Semester I", title: "Foundation" },
      { label: "Semester II", title: "Business + Internship" },
      { label: "Semester III", title: "Specialization" },
      { label: "Semester IV", title: "Advanced Learning + Capstone" },
    ],
  },
  {
    id: "logistics",
    category: "PG",
    number: "04",
    name: "MBA in Logistics & Supply Chain Management",
    shortName: "Logistics & Supply Chain Management",
    slug: "logistics",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A program for the builders of India's supply chain and logistics infrastructure — the backbone of commerce.",
    longDescription:
      "The Logistics & Supply Chain Management program will develop leaders for one of India's fastest-growing sectors. Details will be announced as the program launches.",
    whoIsItFor:
      "Aspiring supply chain leaders, operations managers and logistics entrepreneurs.",
    careerPathways: [
      "Supply Chain Manager",
      "Operations Lead",
      "Logistics Entrepreneur",
      "Procurement Strategist",
    ],
    industryExposure: "To be announced with program launch.",
    internshipInfo: "To be announced with program launch.",
    image:
      "https://images.pexels.com/photos/906943/pexels-photo-906943.jpeg?auto=compress&cs=tinysrgb&w=1200",
    curriculum: {
      semester1: [
        "Principles of Management",
        "Managerial Economics",
        "Financial Accounting & Management",
        "Business Communication",
        "Entrepreneurship & Innovation",
        "Business Analytics",
      ],
      semester2: [
        "Marketing Management",
        "Human Resource Management",
        "Operations Management",
        "Business Law & Ethics",
        "Internship",
      ],
      semester3: ["Specialization subjects — To Be Announced"],
      semester4: ["Advanced subjects + Capstone — To Be Announced"],
    },
    semesterLabels: [
      { label: "Semester I", title: "Foundation" },
      { label: "Semester II", title: "Business + Internship" },
      { label: "Semester III", title: "Specialization" },
      { label: "Semester IV", title: "Advanced Learning + Capstone" },
    ],
  },
];

export const commonCurriculum = {
  semester1: [
    "Principles of Management",
    "Managerial Economics",
    "Financial Accounting & Management",
    "Business Communication",
    "Entrepreneurship & Innovation",
    "Business Analytics",
  ],
  semester2: [
    "Marketing Management",
    "Human Resource Management",
    "Operations Management",
    "Business Law & Ethics",
    "Internship",
  ],
};

export interface Founder {
  name: string;
  role: string;
  company: string;
  industry: string;
  session: string;
  image: string;
}

export const founders: Founder[] = [
  {
    name: "Founder Name",
    role: "Co-Founder",
    company: "[Startup]",
    industry: "Technology",
    session: "Startup Growth",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Founder Name",
    role: "Co-Founder",
    company: "[Startup]",
    industry: "Finance",
    session: "Venture Capital & Fundraising",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Founder Name",
    role: "Co-Founder",
    company: "[Startup]",
    industry: "AgriTech",
    session: "Building for Bharat",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Founder Name",
    role: "Co-Founder",
    company: "[Startup]",
    industry: "Logistics",
    session: "Scaling Operations",
    image:
      "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Founder Name",
    role: "Co-Founder",
    company: "[Startup]",
    industry: "Entrepreneurship",
    session: "From Idea to Launch",
    image:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Founder Name",
    role: "Co-Founder",
    company: "[Startup]",
    industry: "Marketing",
    session: "Brand Building",
    image:
      "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const facultyFilters = [
  "All",
  "Technology",
  "Finance",
  "AgriTech",
  "Logistics",
  "Entrepreneurship",
  "Marketing",
  "Leadership",
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is IIEI?",
    answer:
      "The Indian Institute of Entrepreneurship & Innovation (IIEI) is a new generation entrepreneurship and innovation institution initiated by the Chamber of Commerce & Industry of India (CCI India). It is built around the philosophy of Learn by Doing — founder-led learning, industry exposure, and real-world execution.",
  },
  {
    question: "What does Learn by Doing mean?",
    answer:
      "Learn by Doing means students don't just study business concepts — they build, test, pitch, sell and lead. Through projects, internships, founder sessions and startup building, students move beyond theory into real-world execution throughout the program.",
  },
  {
    question: "How long is the program?",
    answer:
      "The program is 2 years in duration, structured across 4 semesters. Two Years. Four Semesters. Built Around Doing.",
  },
  {
    question: "How many semesters are there?",
    answer: "There are 4 semesters across the 2-year program: Foundation, Business + Internship, Specialization, and Advanced Learning + Capstone/Internship.",
  },
  {
    question: "Which program is launching now?",
    answer:
      "The MBA in Entrepreneurship & Innovation is currently launching. It is built around startup creation, innovation, business models, venture capital, incubation and real-world execution.",
  },
  {
    question: "What programs are coming soon?",
    answer:
      "Three programs are coming soon: MBA in AgriTech Management, MBA in Financial Management, and MBA in Logistics & Supply Chain Management.",
  },
  {
    question: "How many students are in the UG cohort?",
    answer: "The UG cohort has 60 students.",
  },
  {
    question: "How many students are in the PG cohort?",
    answer: "The PG cohort has 60 students.",
  },
  {
    question: "What is the program fee?",
    answer:
      "The complete two-year program fee is ₹25,00,000 (₹25 lakh). This applies to both UG and PG cohorts.",
  },
  {
    question: "Is ₹25 lakh the same for UG and PG?",
    answer: "Yes. The total program fee of ₹25,00,000 applies to both UG and PG cohorts.",
  },
  {
    question: "What does the ₹25 lakh program investment include?",
    answer:
      "The ₹25 lakh investment covers six components: Academic & Tuition, Founder-Led Learning, Experiential Learning, Industry & Internship Experience, Innovation & Startup Ecosystem, and Learning Resources & Academic Support. Exact rupee allocations across categories will be announced soon.",
  },
  {
    question: "Does IIEI provide hostel accommodation?",
    answer:
      "IIEI currently does not provide hostel accommodation. Students will need to make their own accommodation arrangements.",
  },
  {
    question: "Who teaches at IIEI?",
    answer:
      "IIEI's teaching ecosystem brings together startup founders, co-founders, entrepreneurs, business leaders and industry practitioners — a network of 250+ founders and co-founders.",
  },
  {
    question: "What is the 250+ founder/co-founder ecosystem?",
    answer:
      "IIEI's teaching ecosystem includes 250+ founders and co-founders who conduct special courses, masterclasses and sessions. These are real practitioners who have built companies, not just academics.",
  },
  {
    question: "Are internships included?",
    answer:
      "Yes. Multiple internships and industry projects are integrated into the program. Students gain practical exposure through internships, live projects, capstone projects and founder interaction.",
  },
  {
    question: "What is the PPO commitment?",
    answer:
      "PPO is a commitment from IIEI. The career ecosystem is designed around practical experience, industry exposure and a commitment towards pre-placement opportunities.",
  },
  {
    question: "How does the institutional funding commitment work?",
    answer:
      "IIEI is committed to supporting promising student ventures through its institutional entrepreneurship and funding ecosystem. Exact funding mechanics will be announced as they are finalized.",
  },
  {
    question: "Can students build startups?",
    answer:
      "Absolutely. Entrepreneurship is central to the IIEI learning philosophy. Students can work through idea validation, prototyping, market testing, pitching and venture building as part of the entrepreneurial ecosystem.",
  },
  {
    question: "Are university partnerships available?",
    answer:
      "IIEI is being built in collaboration with leading universities and industry partners. Partner announcements are coming soon.",
  },
  {
    question: "What is the application process?",
    answer:
      "The application process has five steps: Explore the Program, Talk to an Advisor, Submit Application, Selection Process, and Join IIEI.",
  },
];

export interface FeeCategory {
  number: string;
  title: string;
  description: string;
  amount: string;
}

export const feeCategories: FeeCategory[] = [
  {
    number: "01",
    title: "Academic & Tuition",
    description: "Core curriculum, specialization, classroom learning and assessments.",
    amount: "₹XX,XX,XXX",
  },
  {
    number: "02",
    title: "Founder-Led Learning",
    description: "Sessions and masterclasses with founders, co-founders and industry practitioners.",
    amount: "₹XX,XX,XXX",
  },
  {
    number: "03",
    title: "Experiential Learning",
    description: "Live projects, startup challenges, workshops and practical learning.",
    amount: "₹XX,XX,XXX",
  },
  {
    number: "04",
    title: "Industry & Internship Experience",
    description: "Internship ecosystem, industry exposure and project opportunities.",
    amount: "₹XX,XX,XXX",
  },
  {
    number: "05",
    title: "Innovation & Startup Ecosystem",
    description: "Startup building, mentorship and incubation-oriented support.",
    amount: "₹XX,XX,XXX",
  },
  {
    number: "06",
    title: "Learning Resources & Academic Support",
    description: "Course resources, technology/platforms and academic support.",
    amount: "₹XX,XX,XXX",
  },
];

export interface StatCard {
  value: string;
  label: string;
  sublabel: string;
}

export const heroStatCards: StatCard[] = [
  { value: "2", label: "YEARS", sublabel: "Immersive Program" },
  { value: "4", label: "SEMESTERS", sublabel: "Learn → Build → Specialize → Launch" },
  { value: "120", label: "STUDENTS", sublabel: "UG + PG Launch Cohort Capacity" },
  { value: "250+", label: "FOUNDERS", sublabel: "Founder & Co-Founder Teaching Ecosystem" },
  { value: "MULTIPLE", label: "INTERNSHIPS", sublabel: "Internships & Industry Projects" },
];

export const whyIIEICards = [
  {
    title: "Founder-Led Learning",
    description:
      "Learn from startup founders, co-founders, entrepreneurs and experienced industry practitioners.",
    icon: "Users",
  },
  {
    title: "Real-World Execution",
    description:
      "Move beyond classroom theory through projects, internships and practical experiences.",
    icon: "Rocket",
  },
  {
    title: "Build While You Learn",
    description:
      "Students work on ideas, challenges and entrepreneurial opportunities throughout the program.",
    icon: "Hammer",
  },
  {
    title: "Industry Exposure",
    description:
      "Connect learning with real business environments and industry projects.",
    icon: "Building2",
  },
  {
    title: "Entrepreneurial Ecosystem",
    description:
      "Develop within a network connecting students, founders, businesses and institutions.",
    icon: "Network",
  },
  {
    title: "Institutional Funding Commitment",
    description:
      "IIEI provides an institutional commitment towards supporting promising student ventures.",
    icon: "TrendingUp",
  },
];

export const learnByDoingWords = ["LEARN", "BUILD", "TEST", "PITCH", "LAUNCH", "GROW"];

export const bigIdeaWords = ["BUILD.", "TEST.", "FAIL.", "ITERATE.", "PITCH.", "SELL.", "LEAD."];

export const startupJourney = [
  "IDEA",
  "VALIDATION",
  "PROTOTYPE",
  "MARKET TESTING",
  "PITCH",
  "FUNDING",
  "LAUNCH",
  "GROWTH",
];

export const industryCards = [
  "Startup",
  "Corporate",
  "Technology",
  "Finance",
  "AgriTech",
  "Logistics",
  "Innovation",
];

export const applicationSteps = [
  { number: "01", title: "Explore the Program", description: "Understand what IIEI offers and whether it fits your ambitions." },
  { number: "02", title: "Talk to an Advisor", description: "Have a conversation with our admissions team to get your questions answered." },
  { number: "03", title: "Submit Application", description: "Complete your application with your details and academic background." },
  { number: "04", title: "Selection Process", description: "Our team reviews your application and conducts the selection process." },
  { number: "05", title: "Join IIEI", description: "Begin your journey at the Indian Institute of Entrepreneurship & Innovation." },
];

export const campusCategories = [
  { title: "Learning Spaces", image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Founder Sessions", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Startup Labs", image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Industry Interaction", image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Student Experience", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

export interface Testimonial {
  name: string;
  program: string;
  batch: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Student Name",
    program: "Entrepreneurship & Innovation",
    batch: "Launch Cohort",
    quote:
      "[Development Placeholder] My experience at IIEI has been transformative. The founder-led sessions and real-world projects gave me the confidence to build.",
  },
  {
    name: "Student Name",
    program: "Entrepreneurship & Innovation",
    batch: "Launch Cohort",
    quote:
      "[Development Placeholder] IIEI isn't like any other institution. You don't just learn — you do. The internships and industry exposure are incredible.",
  },
  {
    name: "Student Name",
    program: "Entrepreneurship & Innovation",
    batch: "Launch Cohort",
    quote:
      "[Development Placeholder] The Learn by Doing philosophy is real. I came in with an idea and I'm leaving with a venture. The support system is unmatched.",
  },
];

export const navLinks = [
  { label: "Programs", href: "/programs/entrepreneurship", hasMegaMenu: true },
  { label: "Why IIEI", href: "/#why-iiei" },
  { label: "Learn by Doing", href: "/#learn-by-doing" },
  { label: "Faculty", href: "/faculty" },
  { label: "Industry", href: "/industry" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
