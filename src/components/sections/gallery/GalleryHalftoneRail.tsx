import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import HorizontalScrollSection from "@/components/animation/HorizontalScrollSection";
import BlurReveal from "@/components/kit/BlurReveal";
import HalftonePhoto from "@/components/kit/HalftonePhoto";
import TerminalTitleSweep from "@/components/kit/TerminalTitleSweep";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type GalleryItem = { title: string; imageSrc: string; imageAlt?: string };

type GalleryHalftoneRailProps = {
  label?: string;
  title?: string;
  description?: string;
  items?: GalleryItem[];
  ariaLabel?: string;
  className?: string;
};

const px = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const defaults: GalleryItem[] = [
  { title: "Rack hall, Amsterdam West", imageSrc: px(4508751), imageAlt: "Server aisle in a data centre" },
  { title: "Night shift, network desk", imageSrc: px(3862132), imageAlt: "Operator at a monitoring desk" },
  { title: "Fibre route along the A10", imageSrc: px(10622743), imageAlt: "Light trails under a dusk sky" },
  { title: "Deploy review, 02:00", imageSrc: px(5926389), imageAlt: "Code on a laptop in a dark room" },
  { title: "Port of Amsterdam node", imageSrc: px(4940277), imageAlt: "Harbour cranes at twilight" },
  { title: "Edge console build", imageSrc: px(1181406), imageAlt: "Engineer working on a laptop" },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

type CardProps = { item: GalleryItem; index: number; trackX: MotionValue<number>; reduce: boolean };

const RailCard = ({ item, index, trackX, reduce }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const geo = useRef({ centre: 0, view: 1 });
  const inView = useInView(ref, { amount: 0.6 });
  const settled = useMotionValue(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const measure = () => {
      const rect = node.getBoundingClientRect();
      geo.current = { centre: rect.left + rect.width / 2 - trackX.get(), view: window.innerWidth };
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [trackX]);

  useEffect(() => {
    if (reduce) settled.set(inView ? 1 : 0);
  }, [reduce, inView, settled]);

  const passing = useTransform(trackX, (x) => {
    const { centre, view } = geo.current;
    const off = Math.abs(centre + x - view / 2) / (view * 0.5);
    const t = clamp01(1 - off);
    return t * t * (3 - 2 * t);
  });

  return (
    <div ref={ref} className={cn("kit-card flex w-[min(54vw,calc((100svh-20rem)*3/4))] flex-col border-y border-r border-dashed border-border p-[clamp(0.75rem,1.2vw,1rem)] lg:w-[min(19vw,calc((100svh-22rem)*3/4))]", index === 0 && "border-l")}>
      <BlurReveal y={40} duration={1.6} delay={(index % 4) * 0.08} className="relative aspect-[3/4] w-full">
        <HalftonePhoto src={item.imageSrc} alt={item.imageAlt ?? item.title} eager={index < 3} clear={reduce ? settled : passing} className="absolute inset-0" />
      </BlurReveal>
      <p className="mt-[clamp(0.75rem,1.2vw,1rem)] truncate text-[length:var(--text-label)] uppercase leading-[1.4] tracking-[var(--label-tracking)] text-muted-foreground [font-family:var(--font-label)]">{item.title}</p>
    </div>
  );
};

const GalleryHalftoneRail = ({
  label = "Inside the network",
  title = "Where your traffic lands.",
  description = "Our racks, routes and the people who watch them.",
  items = defaults,
  ariaLabel,
  className,
}: GalleryHalftoneRailProps) => {
  const reduce = useReducedMotion() ?? false;
  const trackX = useMotionValue(0);

  const header = (
    <div className="kit-card flex flex-col items-center border border-dashed border-border px-[clamp(1.25rem,3vw,2.5rem)] py-[clamp(2rem,4vw,3.5rem)] text-center">
      {label && <TerminalTitleSweep text={label} tag="p" from="color-mix(in srgb, var(--accent) 20%, var(--background))" final="var(--accent)" className="mb-[0.75rem] text-[length:var(--text-label)] uppercase leading-[1.2] tracking-[var(--label-tracking)] text-accent [font-family:var(--font-label)]" />}
      <TerminalTitleSweep text={title} className="max-w-[18em] text-balance text-[length:var(--text-h1)] leading-[var(--heading-leading)]" />
      {description && <p className="mt-[0.75rem] max-w-[36em] text-balance text-[length:var(--text-body)] leading-[1.5] text-muted-foreground">{description}</p>}
    </div>
  );

  return (
    <section aria-label={ariaLabel ?? title ?? "Gallery"} data-scene className={cn("relative bg-background text-foreground", className)}>
      <HorizontalScrollSection
        compact
        progress={false}
        x={trackX}
        header={header}
        headerClassName="mx-auto w-[var(--container)] max-w-none px-0"
        trackClassName="gap-0 px-[calc((100vw-var(--container))/2)] md:gap-0"
      >
        {items.map((item, index) => (
          <RailCard key={index} item={item} index={index} trackX={trackX} reduce={reduce} />
        ))}
      </HorizontalScrollSection>
    </section>
  );
};

export default GalleryHalftoneRail;
