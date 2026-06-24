import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Pepito Sevilla | Full-Stack Software Engineer',
  description:
    "Hi, I'm Pepito Sevilla — a full-stack software engineer based in Metro Manila. I build production web apps end-to-end, from React/Next.js interfaces to Python and Node.js backends and the AWS infrastructure that runs them.",
  keywords: [
    'Pepito Sevilla',
    'Software Engineer',
    'Full-stack Developer',
    'Web Developer',
    'Philippines',
    'Metro Manila',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Cloud Infrastructure',
    'Web development',
    'Portfolio',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
