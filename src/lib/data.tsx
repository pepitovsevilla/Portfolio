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
  /** Marks a project as still being built, shown as an "In development" badge. */
  inDevelopment?: boolean;
  /** Card thumbnail. Private projects use a pre-blurred image baked into the file. */
  image?: string;
};

export const projectsData: readonly TProjectData[] = [
  {
    title: 'Membership Management Platform',
    industry: 'Membership organization',
    role: 'Full-stack',
    description:
      'A platform for a membership organization: a member directory, events with QR-code attendance, and a member marketplace, plus a CMS for publishing news and content.',
    architecture:
      'A Next.js frontend backed by a FastAPI service and a Payload CMS over PostgreSQL, with editorial content from Sanity. It runs on AWS ECS Fargate, provisioned with CDK and shipped through blue-green deploys.',
    technologies: ['Next.js', 'FastAPI', 'Payload CMS', 'PostgreSQL', 'AWS'],
    image: '/images/membership.webp',
  },
  {
    title: 'Public Auction Notice Portal',
    industry: 'Legal / public-notice',
    role: 'Full-stack',
    description:
      'A free public portal for Philippine court auction notices. It turns scanned Sheriff’s notices into structured records you can search and filter by region, property type, court, and auction date, and signed-in users can save listings and set auction-date reminders.',
    architecture:
      'A separate OCR pipeline parses notices into PostgreSQL (Aurora). A Next.js frontend reads them through AWS Amplify (Gen 2) GraphQL APIs backed by Prisma, with Cognito for accounts and S3 holding the original documents.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS Amplify (Gen 2)'],
    link: 'https://auctionph.com/',
    image: '/images/auction.webp',
    inDevelopment: true,
  },
  {
    title: 'Inventory & Order Management System',
    industry: 'Veterinary distribution',
    role: 'Full-stack',
    description:
      'An inventory, ordering, and accounting system for a veterinary-products distributor. It runs purchase and sales orders, tracks stock batches with expiry, manages payments, and generates PDF invoices and vouchers — across five separate company entities.',
    architecture:
      'A Next.js app on AWS Amplify (Gen 2) with an AppSync GraphQL API over DynamoDB. The five companies are kept separate by company-scoped records and Cognito user groups, and PDFs are generated in the browser with pdfmake.',
    technologies: ['Next.js', 'Chakra UI', 'DynamoDB', 'AWS Amplify (Gen 2)'],
    image: '/images/inventory.webp',
  },
  {
    title: 'Repairs & Maintenance System',
    industry: 'Retail (milk tea chain)',
    role: 'Full-stack',
    description:
      'A field-service system for a milk-tea chain’s equipment repairs. Store staff file tickets, an admin groups them into scheduled technician visits, and every job closes with a service report — through a desktop admin console and mobile-friendly views for each role.',
    architecture:
      'A single Next.js app serves role-specific desktop and mobile views on AWS Amplify (Gen 2). Public Lambdas handle auth, email, and storage, then call VPC Lambdas that reach PostgreSQL (RDS) via Prisma; Amazon Bedrock drafts ticket titles and initial priority. Cognito groups and store assignments drive what each role sees.',
    technologies: [
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Amazon Bedrock',
      'AWS Amplify (Gen 2)',
    ],
    image: '/images/maintenance.webp',
  },
  {
    title: 'Insurance Sales & Management Platform',
    industry: 'Insurance (Japan)',
    role: 'Frontend',
    description:
      'Customers buy and manage insurance policies, while agents handle sales and recruit sub-agents. It runs across several insurance brands.',
    architecture:
      'A single Next.js app (Chakra UI) serves several brands — brand flows through context and theming, with per-brand configuration driving the screens. It talks to the backend through a generated OpenAPI client.',
    technologies: ['Next.js', 'Chakra UI', 'React Hook Form'],
    image: '/images/insurance.webp',
  },
  {
    title: 'Youth Sports Tournament Platform',
    industry: 'Sports / youth football',
    role: 'Reviewer',
    description:
      'Team registration, schedules, and tournament details for a national youth football tournament, with sign-up flows for local and international teams.',
    architecture:
      'A Next.js frontend backed entirely by AWS Amplify (Gen 2) — Cognito for role-based logins, an AppSync and DynamoDB data layer for teams and registrations, and S3 for uploaded documents.',
    technologies: ['Next.js', 'AWS Amplify (Gen 2)'],
    link: 'https://www.laligayouth.com/',
    image: '/images/sports.webp',
  },
] as const;

export const experiencesData = [
  {
    title: 'System Engineer / Web Developer',
    company: 'OFI Inc. (O-KUN Frontier Innovations)',
    link: 'https://o-fi.io/',
    description:
      "I build full-stack web apps for clients in insurance, distribution, retail, and public records. I take projects across the whole stack — frontend, backend, and the AWS infrastructure and CI/CD behind them — and help decide which services each project uses and how its data flows. I also scope requirements directly with clients and review my teammates' code.",
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
    link: 'https://www.prulifeuk.com.ph/en/',
    description:
      'I designed training programs for insurance products, compliance, and sales, and ran the company learning platform with regional teams. It is where I built the insurance domain knowledge and the knack for explaining complex things clearly that I still rely on as an engineer.',
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
    label: 'Backend & Data',
    skills: [
      { name: 'Node.js', icon: <Icons.nodejs className="size-5" /> },
      { name: 'Python', icon: <Icons.python className="size-5" /> },
      { name: 'FastAPI', icon: <Icons.fastapi className="size-5" /> },
      { name: 'PostgreSQL', icon: <Icons.postgresql className="size-5" /> },
      { name: 'DynamoDB', icon: <Icons.dynamodb className="size-5" /> },
      { name: 'Prisma', icon: <Icons.prisma className="size-5" /> },
    ],
  },
  {
    label: 'Infrastructure & DevOps',
    skills: [
      { name: 'AWS', icon: <Icons.aws className="size-5" /> },
      { name: 'Docker', icon: <Icons.docker className="size-5" /> },
      {
        name: 'GitHub Actions',
        icon: <Icons.githubActions className="size-5" />,
      },
    ],
  },
] as const;
