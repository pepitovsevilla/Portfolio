import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export type TProjectData = {
  title: string;
  industry: string;
  role: string;
  description: string;
  /** Plain-language note on the services used and how data flows. */
  architecture?: string;
  technologies: readonly string[];
  /** Public live URL. If set, the card is treated as public (clickable, no privacy overlay). */
  link?: string;
  /** Card thumbnail. Private projects use a pre-blurred image baked into the file. */
  image?: string;
};

export const projectsData: readonly TProjectData[] = [
  {
    title: 'Membership Management Platform',
    industry: 'Membership organization',
    role: 'Full-stack',
    description:
      'A directory, events, and marketplace for a membership organization. It also has a CMS for news and content.',
    architecture:
      'A Next.js frontend talks to a FastAPI service and a Payload CMS, both backed by PostgreSQL on AWS.',
    technologies: ['Next.js', 'Payload CMS', 'FastAPI', 'PostgreSQL', 'AWS'],
    image: '/images/membership.webp',
  },
  {
    title: 'Public Auction Notice Portal',
    industry: 'Legal / public-notice',
    role: 'Full-stack',
    description:
      'Scans court auction notices with OCR. Publishes them in a public portal anyone can search.',
    architecture:
      'Notices are read with OCR, stored in PostgreSQL through Prisma, and served by a public Next.js search portal on AWS.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    link: 'https://auctionph.com/',
    image: '/images/auction.webp',
  },
  {
    title: 'Inventory & Order Management System',
    industry: 'Veterinary distribution',
    role: 'Full-stack',
    description:
      'Runs stock, purchase and sales orders, and accounting for a distributor. It works across multiple companies and generates PDF documents.',
    architecture:
      'A single Next.js app on AWS serves multiple companies and generates PDF documents on the server.',
    technologies: ['Next.js', 'Chakra UI', 'AWS'],
    image: '/images/inventory.webp',
  },
  {
    title: 'Repairs & Maintenance System',
    industry: 'Retail (milk tea chain)',
    role: 'Full-stack',
    description:
      'Tracks equipment repairs across stores. Staff file tickets, technicians get scheduled visits, and each job ends in a service report. It has a desktop admin console and a mobile app for every role.',
    architecture:
      'A web admin console and a mobile app share one PostgreSQL backend (via Prisma) on AWS, with a different view per role.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    image: '/images/maintenance.webp',
  },
  {
    title: 'Insurance Sales & Management Platform',
    industry: 'Insurance (Japan)',
    role: 'Frontend',
    description:
      'Customers buy and manage insurance policies. Agents handle sales and recruit sub-agents. It runs across multiple brands.',
    architecture:
      'A Next.js frontend that serves several insurance brands from one shared codebase.',
    technologies: ['Next.js', 'Chakra UI'],
    image: '/images/insurance.webp',
  },
  {
    title: 'Youth Sports Tournament Platform',
    industry: 'Sports / youth football',
    role: 'Reviewer',
    description:
      'Handles team sign-up, schedules, and details for a national youth football tournament.',
    technologies: ['Next.js', 'AWS Amplify (Gen 2)'],
    link: 'https://www.laligayouth.com/',
    image: '/images/sports.webp',
  },
] as const;

export const experiencesData = [
  {
    title: 'System Engineer / Web Developer',
    company: 'O-Kun Frontier Innovations Inc.',
    description:
      "I build full-stack web apps for clients in insurance, distribution, retail, and public records — handling the whole build, from frontend and backend to the AWS infrastructure and CI/CD that run it. I also help decide which services each project uses and how data flows through it. I scope requirements directly with clients and review my teammates' code.",
    period: '2024 - present',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'FastAPI',
      'Node.js',
      'PostgreSQL',
      'AWS',
    ],
  },
  {
    title: 'Senior Content & Curriculum Development Specialist',
    company: 'Pru Life UK',
    description:
      'I designed training programs for insurance products, compliance, and sales. I ran the company learning platform with regional teams. That work gave me the insurance knowledge and the communication skills I use in engineering today.',
    period: '2018 - 2024',
    technologies: [
      'Insurance domain',
      'Litmos LMS',
      'Training',
      'Documentation',
    ],
  },
] as const;

export type TSkill = {
  name: string;
  icon?: React.ReactNode;
};

export type TSkillGroup = {
  label: string;
  skills: readonly TSkill[];
};

export const skillGroups: readonly TSkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: <Icons.react className="size-5" /> },
      { name: 'Next.js', icon: <Icons.nextjs className="size-5" /> },
      { name: 'TypeScript', icon: <Icons.typescript className="size-5" /> },
      { name: 'JavaScript', icon: <Icons.javascript className="size-5" /> },
      { name: 'Tailwind CSS', icon: <Icons.tailwind className="size-5" /> },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: <Icons.nodejs className="size-5" /> },
      { name: 'Python', icon: <Icons.python className="size-5" /> },
      { name: 'FastAPI' },
    ],
  },
  {
    label: 'Data',
    skills: [
      { name: 'PostgreSQL', icon: <Icons.postgresql className="size-5" /> },
      { name: 'Prisma', icon: <Icons.prisma className="size-5" /> },
    ],
  },
  {
    label: 'Infrastructure & DevOps',
    skills: [
      { name: 'AWS', icon: <Icons.aws className="size-5" /> },
      { name: 'Docker', icon: <Icons.docker className="size-5" /> },
      { name: 'CI/CD' },
    ],
  },
  {
    label: 'System Design',
    skills: [
      { name: 'Choosing the right services' },
      { name: 'Data flow' },
      { name: 'API design' },
    ],
  },
] as const;
