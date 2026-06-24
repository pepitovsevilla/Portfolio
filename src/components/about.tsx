'use client';

import { motion } from 'framer-motion';

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
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Pepito Sevilla, a full-stack software engineer based in Metro
          Manila. I like building things that ship — and owning them the whole
          way down, from the interface a user clicks to the API, database, and
          cloud infrastructure running underneath. I didn&apos;t start in tech:
          I spent years designing training programs in the insurance industry
          before teaching myself to code and making the jump into software
          engineering.
        </p>
        <p>
          Since then I&apos;ve built production web apps for real businesses —
          insurance platforms, ERP and inventory systems, field-service tools,
          and public-sector portals. I&apos;m at my best turning vague, messy
          requirements into something clean and reliable that people actually
          use, and I&apos;m always up for a harder problem. If you have one,
          let&apos;s talk.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
