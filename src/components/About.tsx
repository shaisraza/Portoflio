import { Card } from "@/components/ui/card";
import { Award, Target, Lightbulb } from "lucide-react";
import profilePic from "@/assets/profile-pic-no-bg.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Product-Led",
      description: "Focused on aligning product strategy with business goals and customer needs to deliver measurable impact.",
    },
    {
      icon: Lightbulb,
      title: "Data-Driven",
      description: "Leveraging GA4, SQL, and A/B testing to optimize user journeys and make informed decisions.",
    },
    {
      icon: Award,
      title: "User-Centric",
      description: "Building features that solve real problems and reduce friction for millions of users.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A dedicated professional with a passion for innovation and excellence
            </p>
          </div>

          {/* Bio with Profile Picture */}
          <Card className="p-8 md:p-12 shadow-elegant animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg">
                  <div className="absolute inset-0 rounded-lg bg-gradient-primary blur-md opacity-30 animate-glow-pulse" />
                  <img
                    src={profilePic}
                    alt="Shais Raza"
                    className="relative w-full h-full rounded-lg object-cover border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Bio Text */}
              <div className="flex-1">
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed">
                    I'm a Product Manager with 5+ years of experience building B2B and B2C SaaS products 
                    for Fortune 500 companies and millions of users. My career has been defined by leading 
                    cross-functional teams, launching features that solve real problems, and aligning product 
                    strategy with business goals and customer needs.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 border-border/50 hover:border-accent/50"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
