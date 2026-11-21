import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ParticleBlock from "@/components/kit/ParticleBlock";
import { glideCloseShape } from "@/components/kit/particleShapes/glide";
import { useKitMotion } from "@/components/kit/kitMotion";
import BlurReveal from "@/components/kit/BlurReveal";
import TerminalTitleSweep from "@/components/kit/TerminalTitleSweep";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Button = { text: string; href: string };

type CtaParticleCellProps = {
  title?: string;
  primaryButton?: Button;
  secondaryButton?: Button;
  ariaLabel?: string;
  className?: string;
};

const CtaParticleCell = ({
  title = "Put your site on the edge today.",
  primaryButton = { text: "Start for free", href: "#contact" },
  secondaryButton = { text: "Talk to an engineer", href: "#contact" },
  ariaLabel,
  className,
}: CtaParticleCellProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const frameIn = useInView(frameRef, { once: true, amount: 0.2 });
  const show = frameIn || reduce;

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative bg-background py-[var(--section-space)] text-foreground", className)}>
      <div ref={frameRef} className="mx-auto w-[var(--container)]">
        <motion.div
          initial={reduce ? false : { clipPath: "inset(18% 22% 18% 22%)" }}
          animate={show ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
          transition={{ duration: kit.slow, ease: kit.ease }}
          className="kit-card grid grid-cols-1 border border-dashed border-border lg:grid-cols-2"
        >
          <div className="relative aspect-square overflow-hidden border-b border-dashed border-border lg:order-last lg:border-b-0 lg:border-l">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1.5px)] [background-size:24px_24px]" />
            <ParticleBlock role="close" fill={0.66} yaw={-0.6} turn={1.4} shape={glideCloseShape} className="absolute inset-0" />
          </div>
          <div className="flex flex-col justify-center px-[clamp(1.5rem,4vw,3.5rem)] py-[clamp(2rem,5vw,4rem)]">
            {title && <TerminalTitleSweep text={title} tag="h2" className="max-w-[12em] text-balance text-[length:calc(var(--text-display)*0.8)] leading-[1.1] [overflow-wrap:anywhere]" />}
            {(primaryButton || secondaryButton) && (
              <BlurReveal show={!!show} blur={false} y={40} duration={1.6} delay={0.45} className="mt-[clamp(1.75rem,3vw,2.5rem)] flex flex-col items-stretch gap-[0.75rem] sm:flex-row sm:items-center">
                {primaryButton && (
                  <a href={primaryButton.href} className="btn-primary">
                    <p className="btn-label">{primaryButton.text}</p>
                  </a>
                )}
                {secondaryButton && (
                  <a href={secondaryButton.href} className="btn-secondary">
                    <p className="btn-label">{secondaryButton.text}</p>
                  </a>
                )}
              </BlurReveal>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaParticleCell;
