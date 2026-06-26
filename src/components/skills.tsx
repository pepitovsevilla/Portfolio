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
    <div className="mt-12 flex w-full max-w-3xl flex-col gap-8 md:mt-16">
      {skillGroups.map((group) => (
        <div key={group.label} className="flex flex-col gap-3">
          <h3 className="text-muted-foreground text-center text-xs font-semibold uppercase tracking-wider md:text-left">
            {group.label}
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
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
