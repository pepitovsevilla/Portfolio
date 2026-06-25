'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="Projects"
          content="Production systems I've helped build for real businesses."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="border-primary/30 bg-primary/5 mx-auto mb-10 flex max-w-2xl items-center gap-3 rounded-lg border px-5 py-4"
      >
        <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full">
          <Icons.lock className="size-4" />
        </span>
        <p className="text-foreground text-left text-sm font-medium">
          Most of these are private, client-owned projects — their codebases and
          live sites aren&apos;t public, so previews are blurred. The public
          ones link straight to the live site.
        </p>
      </motion.div>
      <div className="grid gap-7 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
