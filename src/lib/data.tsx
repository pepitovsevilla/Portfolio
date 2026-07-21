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
    name: 'Certifications',
    hash: '#certifications',
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
      "A membership organization's platform: a member directory, QR-code event check-in, a member marketplace, and a CMS for news and content.",
    architecture:
      'Next.js talks to a FastAPI service and Payload CMS, both over PostgreSQL, plus Sanity for editorial content. It runs on AWS ECS Fargate, provisioned with CDK, deployed blue-green.',
    technologies: ['Next.js', 'FastAPI', 'Payload CMS', 'PostgreSQL', 'AWS'],
    image: '/images/membership.webp',
  },
  {
    title: 'Public Auction Notice Portal',
    industry: 'Legal / public-notice',
    role: 'Full-stack',
    description:
      'A free public portal for Philippine court auction notices. It turns scanned Sheriff’s notices into structured records people can search and filter by region, property type, court, and auction date. Signed-in users can save listings and set auction-date reminders.',
    architecture:
      'An OCR pipeline parses the scanned notices into PostgreSQL (Aurora). The Next.js frontend reads them through GraphQL APIs on AWS Amplify (Gen 2), backed by Prisma, with Cognito for accounts and S3 for the original documents.',
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
      'An inventory, ordering, and accounting system for a veterinary-products distributor, run across five separate company entities. It handles purchase and sales orders, tracks stock batches with expiry, manages payments, and generates PDF invoices and vouchers.',
    architecture:
      'A Next.js app on AWS Amplify (Gen 2), with an AppSync GraphQL API over DynamoDB. Company-scoped records and Cognito user groups keep the five companies separate, and PDFs are generated in the browser with pdfmake.',
    technologies: ['Next.js', 'Chakra UI', 'DynamoDB', 'AWS Amplify (Gen 2)'],
    image: '/images/inventory.webp',
  },
  {
    title: 'Repairs & Maintenance System',
    industry: 'Retail (milk tea chain)',
    role: 'Full-stack',
    description:
      "A field-service system for a milk-tea chain's equipment repairs, with a desktop admin console and mobile-friendly views per role. Store staff file tickets, an admin groups them into scheduled technician visits, and every job closes with a service report.",
    architecture:
      'A single Next.js app serves role-specific desktop and mobile views on AWS Amplify (Gen 2). Public Lambdas handle auth, email, and storage, then call VPC Lambdas that reach PostgreSQL (RDS) through Prisma. Amazon Bedrock drafts ticket titles and sets initial priority, and Cognito groups plus store assignments control what each role sees.',
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
      'A single Next.js app (Chakra UI) serves several brands. Brand identity flows through context and theming, with per-brand configuration driving the screens, and it talks to the backend through a generated OpenAPI client.',
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
      'A Next.js frontend backed entirely by AWS Amplify (Gen 2): Cognito for role-based logins, an AppSync/DynamoDB data layer for teams and registrations, and S3 for uploaded documents.',
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
      "I work directly with clients to scope requirements, then design the solution and see the project through to delivery. I build across the stack myself — frontend, backend, AWS infrastructure, CI/CD — choose which services each project uses, and review my teammates' code.",
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
      "I designed training programs for insurance products, compliance, and sales, and ran the company's learning platform with regional teams. That job gave me the insurance domain knowledge and the habit of explaining complex things clearly — both still useful now as an engineer.",
    period: '2018 - 2024',
    technologies: [
      'Insurance domain',
      'Litmos LMS',
      'Training',
      'Documentation',
    ],
  },
] as const;

export type TCertification = {
  name: string;
  issuer: string;
  image: string;
  verifyLink?: string;
};

export const certificationsData: readonly TCertification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    image: '/images/aws-saa.png',
    verifyLink:
      'https://www.credly.com/badges/76881eef-29e6-42f5-bab6-9eb382f35395/public_url',
  },
  {
    name: 'Learning Design and Evaluation',
    issuer: 'Ateneo Center for Organization Research and Development',
    image: '/images/ateneo-cord.png',
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
