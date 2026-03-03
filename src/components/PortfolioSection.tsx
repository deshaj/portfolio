import { motion } from "framer-motion";
import { Code2, Briefcase, Film, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  delay: number;
}

const PortfolioCard = ({ title, description, href, icon, delay }: PortfolioCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative shine-effect block rounded-xl border border-border bg-card/80 backdrop-blur-sm p-8 shadow-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.25)]"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>

      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
        <span>More info</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.a>
  );
};

const portfolios = [
  {
    title: "Server Development",
    description: "Plugins, mods, configs, or server setups. From Spigot to Fabric, made made with precision.",
    href: "https://dev.deshaj.dev",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Network Management",
    description: "Network Operation, Team leadership, Community Management, All-in-one.",
    href: "https://management.deshaj.dev",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Media Production",
    description: "Server Trailers, Advertisement media production, or visual content that bring servers to life!",
    href: "https://media.deshaj.dev",
    icon: <Film className="w-6 h-6" />,
  },
];

const PortfolioSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
      {portfolios.map((p, i) => (
        <PortfolioCard key={p.title} {...p} delay={0.3 + i * 0.15} />
      ))}
    </div>
  );
};

export default PortfolioSection;
