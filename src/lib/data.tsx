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
    technologies: ['Next.js', 'Payload CMS', 'FastAPI', 'PostgreSQL', 'AWS'],
    image: '/images/membership.webp',
  },
  {
    title: 'Public Auction Notice Portal',
    industry: 'Legal / public-notice',
    role: 'Full-stack',
    description:
      'Scans court auction notices with OCR. Publishes them in a public portal anyone can search.',
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
    technologies: ['Next.js', 'Chakra UI', 'AWS'],
    image: '/images/inventory.webp',
  },
  {
    title: 'Repairs & Maintenance System',
    industry: 'Retail (milk tea chain)',
    role: 'Full-stack',
    description:
      'Tracks equipment repairs across stores. Staff file tickets, technicians get scheduled visits, and each job ends in a service report. It has a desktop admin console and a mobile app for every role.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    image: '/images/maintenance.webp',
  },
  {
    title: 'Insurance Sales & Management Platform',
    industry: 'Insurance (Japan)',
    role: 'Frontend',
    description:
      'Customers buy and manage insurance policies. Agents handle sales and recruit sub-agents. It runs across multiple brands.',
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
      "I build full-stack web apps for clients in insurance, distribution, retail, and public records — handling the whole build, from database schemas and system architecture to frontend, backend, and the AWS infrastructure and CI/CD that run it. I scope requirements directly with clients and review my teammates' code.",
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

export const skillsData = [
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.python className="size-12" /> },
  { icon: <Icons.postgresql className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.aws className="size-12" /> },
] as const;
