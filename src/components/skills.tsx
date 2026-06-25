'use client';

import { motion } from 'framer-motion';

import { skillGroups } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <div className="mt-12 flex w-full max-w-3xl flex-col gap-7 md:mt-16">
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6"
        >
          <h3 className="text-muted-foreground shrink-0 text-sm font-semibold uppercase tracking-wide sm:w-48 sm:pt-1.5 sm:text-right">
            {group.label}
          </h3>
          <div className="flex flex-1 flex-wrap gap-2.5">
            {group.skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-background flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm"
              >
                {skill.icon}
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
