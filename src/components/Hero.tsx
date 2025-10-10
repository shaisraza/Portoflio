import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-glow-pulse animation-delay-1000" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Shais Raza
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
              Product Manager | B2B & B2C SaaS Expert | Tech Innovator
            </p>
          </div>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            5+ years of experience building B2B and B2C SaaS products for Fortune 500s and millions of users.
            Skilled at leading teams, launching features that solve problems, and aligning product strategy with business goals.
          </p>

          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow px-8"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
