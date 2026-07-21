'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { certificationsData } from '@/lib/data';

export const Certifications = () => {
  const { ref } = useSectionInView('Certifications');

  return (
    <section
      ref={ref}
      id="certifications"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading heading="Certifications" />
      <div className="flex flex-wrap justify-center gap-6">
        {certificationsData.map(
          ({ name, issuer, image, verifyLink }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              viewport={{ once: true }}
              className="bg-background flex w-64 flex-col items-center gap-3 rounded-lg border p-6 text-center"
            >
              <Image src={image} alt={name} width={120} height={120} />
              <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-muted-foreground text-sm">{issuer}</p>
              </div>
              {verifyLink && (
                <a
                  href={verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary mt-1 flex items-center gap-1 text-sm hover:underline"
                >
                  Verify
                  <Icons.preview className="size-3.5" />
                </a>
              )}
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
