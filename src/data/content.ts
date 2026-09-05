export const siteSettings = {
  instituteName: "Indian Institute of Entrepreneurship & Innovation",
  shortName: "IIEI",
  initiatedBy: "Chamber of Commerce & Industry of India",
  initiatedByShort: "CCI India",
  ugDuration: "3 Years",
  pgDuration: "2 Years",
  ugFee: 2500000,
  ugFeeDisplay: "₹25,00,000",
  ugFeeLakh: "₹25 Lakh",
  pgFee: 3000000,
  pgFeeDisplay: "₹30,00,000",
  pgFeeLakh: "₹30 Lakh",
  ugSeats: 60,
  pgSeats: 60,
  totalSeats: 120,
  founderNetwork: "250+",
  hostelAvailable: false,
  ppoCommitment: true,
  institutionalFundingCommitment: true,
  tagline: "Learn by Doing.",
};

export type DegreeLevel = "UG" | "PG";
export type ProgramStatus = "launching" | "coming-soon";

export interface FeeItem {
  number: string;
  title: string;
  amount: number;
  amountDisplay: string;
  lakhDisplay: string;
  description: string;
  percentage: number;
}

export interface DegreeStructure {
  level: DegreeLevel;
  title: string;
  badgeLabel: string;
  duration: string;
  semesters: number;
  totalFee: number;
  totalFeeDisplay: string;
  totalFeeLakh: string;
  cohortCapacity: number;
  highlight: string;
  breakdown: FeeItem[];
}

export const degreeStructures: Record<DegreeLevel, DegreeStructure> = {
  UG: {
    level: "UG",
    title: "Undergraduate Program",
    badgeLabel: "3 Years · ₹25 Lakh",
    duration: "3 Years",
    semesters: 6,
    totalFee: 2500000,
    totalFeeDisplay: "₹25,00,000",
    totalFeeLakh: "₹25 Lakh",
    cohortCapacity: 60,
    highlight: "Foundational venture creation, execution discipline, and multi-term industry immersion.",
    breakdown: [
      {
        number: "01",
        title: "Academic & Tuition",
        amount: 1250000,
        amountDisplay: "₹12,50,000",
        lakhDisplay: "₹12.50 L",
        description: "Core curriculum, business foundations, specialization modules and academic evaluation.",
        percentage: 50,
      },
      {
        number: "02",
        title: "Founder-Led Learning",
        amount: 300000,
        amountDisplay: "₹3,00,000",
        lakhDisplay: "₹3.00 L",
        description: "Sessions, masterclasses and venture reviews with 250+ founders and co-founders.",
        percentage: 12,
      },
      {
        number: "03",
        title: "Experiential Learning",
        amount: 300000,
        amountDisplay: "₹3,00,000",
        lakhDisplay: "₹3.00 L",
        description: "Live student venture challenges, problem sprints, product validation and prototyping.",
        percentage: 12,
      },
      {
        number: "04",
        title: "Industry & Internship Experience",
        amount: 200000,
        amountDisplay: "₹2,00,000",
        lakhDisplay: "₹2.00 L",
        description: "Multiple internships and live corporate/startup project opportunities.",
        percentage: 8,
      },
      {
        number: "05",
        title: "Innovation & Startup Ecosystem",
        amount: 250000,
        amountDisplay: "₹2,50,000",
        lakhDisplay: "₹2.50 L",
        description: "Venture incubation facilities, mentor office hours and student enterprise support.",
        percentage: 10,
      },
      {
        number: "06",
        title: "Learning Resources & Academic Support",
        amount: 200000,
        amountDisplay: "₹2,00,000",
        lakhDisplay: "₹2.00 L",
        description: "Case materials, digital enterprise platforms, library access and academic advising.",
        percentage: 8,
      },
    ],
  },
  PG: {
    level: "PG",
    title: "Postgraduate Program",
    badgeLabel: "2 Years · ₹30 Lakh",
    duration: "2 Years",
    semesters: 4,
    totalFee: 3000000,
    totalFeeDisplay: "₹30,00,000",
    totalFeeLakh: "₹30 Lakh",
    cohortCapacity: 60,
    highlight: "Advanced venture leadership, high-velocity scaling, capitalization and capstone execution.",
    breakdown: [
      {
        number: "01",
        title: "Academic & Tuition",
        amount: 1500000,
        amountDisplay: "₹15,00,000",
        lakhDisplay: "₹15.00 L",
        description: "Rigorous management disciplines, specialization courses and capstone supervision.",
        percentage: 50,
      },
      {
        number: "02",
        title: "Founder-Led Learning",
        amount: 350000,
        amountDisplay: "₹3,50,000",
        lakhDisplay: "₹3.50 L",
        description: "Special courses, deep-dive strategy sessions and founder-in-residence mentorship.",
        percentage: 11.67,
      },
      {
        number: "03",
        title: "Experiential Learning",
        amount: 350000,
        amountDisplay: "₹3,50,000",
        lakhDisplay: "₹3.50 L",
        description: "Venture acceleration labs, market penetration testing and investor pitch simulations.",
        percentage: 11.67,
      },
      {
        number: "04",
        title: "Industry & Internship Experience",
        amount: 250000,
        amountDisplay: "₹2,50,000",
        lakhDisplay: "₹2.50 L",
        description: "Strategic internships across venture firms, growth-stage startups and innovation teams.",
        percentage: 8.33,
      },
      {
        number: "05",
        title: "Innovation & Startup Ecosystem",
        amount: 300000,
        amountDisplay: "₹3,00,000",
        lakhDisplay: "₹3.00 L",
        description: "Incubation support, institutional venture backing infrastructure and investor networks.",
        percentage: 10,
      },
      {
        number: "06",
        title: "Learning Resources & Academic Support",
        amount: 250000,
        amountDisplay: "₹2,50,000",
        lakhDisplay: "₹2.50 L",
        description: "Global research databases, enterprise software suites and executive-level resources.",
        percentage: 8.33,
      },
    ],
  },
};

export interface Program {
  id: string;
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
    number: "01",
    name: "Entrepreneurship & Innovation",
    shortName: "Entrepreneurship & Innovation",
    slug: "entrepreneurship",
    status: "launching",
    statusLabel: "Now Launching",
    description:
      "A practical entrepreneurship-focused program built around startup creation, innovation, business models, venture capital, incubation and real-world execution.",
    longDescription:
      "The Entrepreneurship & Innovation program is designed for builders. Students move from core foundations to real-world execution — building startups, testing ideas in the market, working alongside experienced founders, and learning through doing. This is not a theoretical business degree. It is a launchpad.",
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
    number: "02",
    name: "AgriTech Management",
    shortName: "AgriTech Management",
    slug: "agritech",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A program designed to bridge agriculture and technology, building leaders for India's agritech revolution and rural innovation.",
    longDescription:
      "The AgriTech Management program equips students to lead innovation at the intersection of agriculture, technology, supply chains, and rural markets. Details will be announced as the program launches.",
    whoIsItFor:
      "Professionals and aspiring entrepreneurs passionate about agricultural technology, rural innovation, and sustainable farming ecosystems.",
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
    number: "03",
    name: "Financial Management",
    shortName: "Financial Management",
    slug: "finance",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A finance-focused program built for the next generation of financial leaders, venture analysts, fintech innovators and corporate strategists.",
    longDescription:
      "The Financial Management program prepares students for leadership roles across banking, venture capital, fintech, and corporate financial architecture. Details will be announced as the program launches.",
    whoIsItFor:
      "Aspiring financial analysts, investment professionals, corporate finance leads, and fintech entrepreneurs.",
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
    number: "04",
    name: "Logistics & Supply Chain Management",
    shortName: "Logistics & Supply Chain Management",
    slug: "logistics",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A program for the builders of modern supply chains, fulfillment networks, and multimodal logistics infrastructure — the backbone of commerce.",
    longDescription:
      "The Logistics & Supply Chain Management program develops leaders for one of India's fastest-growing and mission-critical economic sectors. Details will be announced as the program launches.",
    whoIsItFor:
      "Aspiring supply chain leaders, operations managers, warehousing strategists, and logistics entrepreneurs.",
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
      "The Indian Institute of Entrepreneurship & Innovation (IIEI) is a new generation entrepreneurship institution initiated by the Chamber of Commerce & Industry of India (CCI India). Built on the core philosophy of 'Learn by Doing', IIEI combines founder-led learning, intensive industry exposure, and hands-on venture execution.",
  },
  {
    question: "What does Learn by Doing mean?",
    answer:
      "Learn by Doing means students move beyond passive classroom theory into real action. Throughout the program, students build prototypes, test markets, pitch to investors, execute projects, and engage in multiple industry internships.",
  },
  {
    question: "How long is the undergraduate program?",
    answer:
      "The Undergraduate program is 3 Years in duration, designed to build strong operational foundations, entrepreneurial problem-solving capabilities, and execution discipline.",
  },
  {
    question: "How long is the postgraduate program?",
    answer:
      "The Postgraduate program is 2 Years in duration structured across 4 semesters, focusing on high-velocity venture building, capitalization, and strategic innovation leadership.",
  },
  {
    question: "What is the program fee?",
    answer:
      "The program fee is structured by degree level: Undergraduate (3 Years) is ₹25,00,000 (₹25 Lakh), and Postgraduate (2 Years) is ₹30,00,000 (₹30 Lakh). Both include academic tuition, founder-led sessions, experiential learning, and startup ecosystem support.",
  },
  {
    question: "Does IIEI provide hostel accommodation?",
    answer:
      "No. IIEI currently does not provide hostel accommodation or residential facilities. Students arrange their own local living arrangements.",
  },
  {
    question: "How does founder-led learning work?",
    answer:
      "IIEI's teaching ecosystem features 250+ founders and co-founders who deliver special courses, masterclasses, and direct advisory sessions. Students learn directly from operators who have built real companies.",
  },
  {
    question: "Are internships included?",
    answer:
      "Yes. Practical industry immersion is central to IIEI. Students undertake multiple internships across high-growth startups, corporate innovation groups, and venture firms.",
  },
  {
    question: "What is the PPO commitment?",
    answer:
      "IIEI maintains an explicit Pre-Placement Opportunity (PPO) commitment, aligning learning and practical internships directly with enterprise hiring pipelines.",
  },
  {
    question: "Does IIEI provide institutional support for student ventures?",
    answer:
      "Yes. IIEI has an institutional funding commitment and incubation infrastructure to support high-potential student-led enterprises with seed access and mentor networks.",
  },
];

export interface StatCard {
  value: string;
  label: string;
  sublabel: string;
}

export const heroStatCards: StatCard[] = [
  { value: "3", label: "YEARS UG", sublabel: "Undergraduate Track" },
  { value: "2", label: "YEARS PG", sublabel: "Postgraduate Track" },
  { value: "120", label: "COHORT", sublabel: "60 UG + 60 PG Seats" },
  { value: "250+", label: "FOUNDERS", sublabel: "Teaching & Mentor Ecosystem" },
  { value: "MULTIPLE", label: "INTERNSHIPS", sublabel: "Integrated Industry Experience" },
];

export const whyIIEICards = [
  {
    title: "Founder-Led Learning",
    description:
      "Learn directly from 250+ startup founders, co-founders, and industry practitioners with active execution experience.",
    icon: "Users",
  },
  {
    title: "Real-World Execution",
    description:
      "Move beyond abstract classroom case studies into live enterprise projects, market tests, and tangible deliverables.",
    icon: "Rocket",
  },
  {
    title: "Build While You Learn",
    description:
      "Validate concepts, build products, and develop commercial traction alongside structured academic terms.",
    icon: "Hammer",
  },
  {
    title: "Industry Immersion",
    description:
      "Multiple structured internships and corporate innovation challenges deeply integrated into every semester.",
    icon: "Building2",
  },
  {
    title: "Institutional Venture Backing",
    description:
      "IIEI provides an institutional funding commitment and incubation pathway for promising student-founded businesses.",
    icon: "TrendingUp",
  },
  {
    title: "PPO Commitment",
    description:
      "A career ecosystem committed towards pre-placement opportunities through high-performance industry placement tracks.",
    icon: "Network",
  },
];

export const learnByDoingWords = ["LEARN", "BUILD", "TEST", "PITCH", "LAUNCH", "GROW"];

export const bigIdeaWords = ["BUILD.", "TEST.", "ITERATE.", "PITCH.", "SELL.", "LEAD."];

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
  "Startup Ecosystem",
  "Venture Capital",
  "Technology & AI",
  "FinTech & Banking",
  "AgriTech",
  "Logistics & Supply Chain",
  "Consumer & Commerce",
];

export const applicationSteps = [
  {
    number: "01",
    title: "Explore Programs",
    description: "Understand the UG (3 Years) or PG (2 Years) curriculum, specializations, and execution framework.",
  },
  {
    number: "02",
    title: "Connect with Admissions",
    description: "Engage with our admissions advisors for guidance on eligibility and cohort fit.",
  },
  {
    number: "03",
    title: "Submit Official Application",
    description: "Fill out the official IIEI admissions form with academic background and entrepreneurial intent.",
  },
  {
    number: "04",
    title: "Selection & Evaluation",
    description: "Participate in the candidate review and entrepreneurial aptitude assessment.",
  },
  {
    number: "05",
    title: "Cohort Induction",
    description: "Join the launch cohort at the Indian Institute of Entrepreneurship & Innovation.",
  },
];

export const campusCategories = [
  {
    title: "Collaborative Workspaces",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Founder Masterclasses",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Venture Incubation Studio",
    image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Industry Immersion",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Student Cohort",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export interface Testimonial {
  name: string;
  program: string;
  batch: string;
  quote: string;
}

// Kept in data architecture for future cohorts but not rendered on public live homepage
export const testimonials: Testimonial[] = [];

export const navLinks = [
  { label: "Programs", href: "/#programs", hasMegaMenu: true },
  { label: "Why IIEI", href: "/#why-iiei" },
  { label: "Learn by Doing", href: "/#learn-by-doing" },
  { label: "Fee Structure", href: "/#investment" },
  { label: "Faculty", href: "/faculty" },
  { label: "Industry", href: "/industry" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
