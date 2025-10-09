import { Card } from "@/components/ui/card";
import { Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Focused on delivering exceptional results and driving meaningful change.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinker",
      description: "Constantly exploring new ideas and approaches to solve complex challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of quality and professionalism.",
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

          {/* Bio */}
          <Card className="p-8 md:p-12 shadow-elegant animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Welcome! I'm a results-oriented professional with extensive experience in
                driving innovation and leading strategic initiatives. My career has been
                defined by a commitment to excellence and a passion for creating meaningful
                impact.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Throughout my journey, I've developed a unique blend of technical expertise
                and leadership skills, enabling me to bridge the gap between vision and
                execution. I thrive in dynamic environments where I can leverage my experience
                to solve complex challenges and deliver exceptional outcomes.
              </p>
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
