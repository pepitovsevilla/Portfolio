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

export const projectsData = [
  {
    title: 'Membership Management Platform',
    industry: 'Membership organization',
    role: 'Full-stack',
    description:
      'A member directory, event recording, and marketplace for a membership organization, with a built-in CMS for managing news and content.',
    technologies: ['Next.js', 'Payload CMS', 'FastAPI', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Public Auction Notice Portal',
    industry: 'Legal / public-notice',
    role: 'Full-stack',
    description:
      'Digitizes court-issued property-auction notices with OCR and publishes them in a searchable, publicly accessible portal.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Inventory & Order Management System',
    industry: 'Veterinary distribution',
    role: 'Full-stack',
    description:
      'A multi-company business system covering inventory and stock, purchase and sales orders, and accounting — with PDF document generation.',
    technologies: ['Next.js', 'Chakra UI', 'AWS'],
  },
  {
    title: 'Repairs & Maintenance System',
    industry: 'Retail (milk tea chain)',
    role: 'Full-stack',
    description:
      'A role-based platform for tracking equipment repairs across stores — ticketing, technician scheduling and visits, and service reports — with a desktop admin console and dedicated mobile apps per role.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Insurance Sales & Management Platform',
    industry: 'Insurance (Japan)',
    role: 'Frontend',
    description:
      'A multi-brand platform where customers purchase and manage insurance policies, and agents handle sales and recruit and oversee sub-agents.',
    technologies: ['Next.js', 'Chakra UI'],
  },
] as const;

export const experiencesData = [
  {
    title: 'System Engineer / Web Developer',
    company: 'O-Kun Frontier Innovations Inc.',
    description:
      "Build and ship full-stack web apps end-to-end for clients across insurance, ERP, field-service, and public-sector domains. I design database schemas and multi-tenant, role-based architectures, own AWS infrastructure as code (CDK) and CI/CD, consult directly with stakeholders to scope tailored solutions, and review teammates' code.",
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
      'Designed and delivered training programs and curricula for insurance products, compliance, and sales, and managed the Litmos LMS with regional stakeholders. This built the insurance domain knowledge, technical documentation, and communication skills I now bring to engineering.',
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
