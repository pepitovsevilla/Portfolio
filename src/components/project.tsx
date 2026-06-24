'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Icons } from '@/components/icons';
import { TProjectData } from '@/lib/data';

type TProps = {
  project: TProjectData;
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
  const { title, industry, role, description, technologies, link, image } =
    project;

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
      {image && (
        <div className="relative mb-4 aspect-[8/5] w-full overflow-hidden rounded border">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
              className="group block size-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ) : (
            <>
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="bg-background/20 text-muted-foreground absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                <Icons.eyeOff className="size-6" />
                <span className="text-xs font-medium">Preview hidden</span>
              </div>
            </>
          )}
        </div>
      )}
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-xl font-medium">{title}</h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition-colors"
          >
            Visit site <Icons.preview className="size-3" />
          </a>
        ) : (
          <span className="text-muted-foreground flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs">
            <Icons.lock className="size-3" />
            Private
          </span>
        )}
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
