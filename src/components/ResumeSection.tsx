import { motion } from "framer-motion";
import { Sparkles, GraduationCap, FolderOpen, Award, Wrench, Users, Globe } from "lucide-react";

const resumeItems = [
  { label: "Plugin Development", detail: "Custom Spigot/Paper plugins, NMS, protocol-level work" },
  { label: "Server Configuration", detail: "Performance tuning, proxy setups, multi-server networks" },
  { label: "Team Management", detail: "Staff recruitment, training, and community moderation" },
  { label: "Content Creation", detail: "Cinematic trailers, build showcases, and promotional media" },
  { label: "Anti-Cheat Configs", detail: "Custom detection algorithms, false-positive reduction" },
  { label: "Economy Design", detail: "Balanced in-game economies, shop systems, auction houses" },
];

const resumeColumns = [
  {
    title: "EDUCATION",
    icon: <GraduationCap className="w-5 h-5" />,
    items: ["Computer Science", "Server Architecture", "Database Management", "Network Engineering"],
  },
  {
    title: "PROJECTS",
    icon: <FolderOpen className="w-5 h-5" />,
    items: ["GoonerSMP", "Custom Powers", "Proxy Network", "Hub System"],
  },
  {
    title: "SKILLS",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Java / Kotlin", "Spigot / Paper API", "BungeeCord / Velocity", "MySQL / Redis"],
  },
  {
    title: "EXPERIENCE",
    icon: <Award className="w-5 h-5" />,
    items: ["Lead Developer", "Server Manager", "Community Admin", "Content Director"],
  },
  {
    title: "COMMUNITIES",
    icon: <Users className="w-5 h-5" />,
    items: ["20k+ Players", "50+ Staff Teams", "Multi-Region Servers", "Discord Networks"],
  },
  {
    title: "REACH",
    icon: <Globe className="w-5 h-5" />,
    items: ["Global Playerbase", "Multi-Language", "24/7 Uptime", "CDN Optimized"],
  },
];

const ResumeSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative">
      {/* What I Bring header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-2">Resume</p>
        <h2 className="text-3xl font-bold text-foreground">What I Bring to the Table</h2>
      </motion.div>

      {/* Skills list with hover shine */}
      <div className="space-y-4 mb-16">
        {resumeItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="resume-card group flex items-start gap-4 p-4 rounded-lg border border-border bg-card/60 backdrop-blur-sm shadow-card hover:border-primary/60 transition-all duration-300"
          >
            <div className="mt-0.5 w-2 h-2 rounded-full bg-primary shrink-0" />
            <div>
              <p className="font-semibold text-card-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resume columns — blurred out */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {resumeColumns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-lg border border-border bg-card/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3 text-primary">
                {col.icon}
                <h3 className="font-mono text-xs tracking-[0.2em] font-bold">{col.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Fading blur overlay */}
        <div className="absolute inset-0 pointer-events-none resume-blur-overlay" />
      </div>

      {/* Hire me CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-4"
      >
        <a
          href="https://discord.com/users/1205789241326436363"
          target="_blank"
          rel="noopener noreferrer"
          className="shine-effect inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-dark text-primary-foreground font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_-5px_hsl(var(--primary-dark)/0.5)]"
        >
          <Sparkles className="w-4 h-4" />
          Hire me to unlock my full potential
        </a>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
