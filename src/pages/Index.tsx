import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import PortfolioSection from "@/components/PortfolioSection";
import ResumeSection from "@/components/ResumeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative cursor-sword">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

        <div className="relative z-10 text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Minecraft Server Development
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 flex items-center justify-center">
              <span className="font-blocky text-hero-text">deshaj</span>
              <span className="font-blocky text-gradient">.dev</span>
              <span className="typing-cursor" />
            </h1>
            <p className="text-hero-sub text-lg max-w-md mx-auto">
              Working on your favourite minecraft servers.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Portfolio Cards */}
      <div className="relative z-10 -mt-16 pb-8">
        <PortfolioSection />
      </div>

      {/* Resume + Hire Me */}
      <ResumeSection />

      {/* Footer */}
      <footer className="text-center pb-8 text-muted-foreground text-xs font-mono">
        Built by deshaj, © 2026.
      </footer>
    </div>
  );
};

export default Index;
