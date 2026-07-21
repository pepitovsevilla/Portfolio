'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About" />
      <div className="-mt-5 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
        <Image
          src="/images/profile.webp"
          alt="Pepito Sevilla"
          width={200}
          height={200}
          priority
          className="size-40 shrink-0 rounded-full border object-cover md:size-48"
        />
        <div className="max-w-2xl text-center leading-7 md:text-left">
          <p className="mb-4">
            I&apos;ve built web apps for businesses in insurance, distribution,
            retail, and public records. On each one I work the whole stack:
            frontend, API, database, and the AWS infrastructure underneath.
          </p>
          <p>
            I also lead teams. My background in learning and development taught
            me to explain technical work in plain terms, so I&apos;m usually the
            one translating between engineers and the business side.
          </p>
        </div>
      </div>
      <Skills />
    </motion.section>
  );
};
