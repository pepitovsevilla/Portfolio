'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { title, industry, role, description, technologies } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="flex h-full flex-col rounded border p-5"
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-xl font-medium">{title}</h3>
        <span className="text-muted-foreground flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs">
          <Icons.lock className="size-3" />
          Private
        </span>
      </div>
      <p className="text-muted-foreground mb-3 text-sm">
        {industry} · {role}
      </p>
      <p className="text-muted-foreground mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span className="rounded-full border px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
