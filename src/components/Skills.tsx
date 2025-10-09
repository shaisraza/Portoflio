import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, TrendingUp, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      skills: [
        "Full-Stack Development",
        "SQL",
        "Visual Studio Code",
        "GitHub",
        "Prompt Engineering",
        "Material Design",
      ],
    },
    {
      icon: Users,
      title: "Product Management",
      skills: [
        "Jira",
        "Figma",
        "Salesforce",
        "SAFe Product Owner",
        "Agile Methodologies",
        "Roadmap Planning",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Data",
      skills: [
        "GA4",
        "PowerBI",
        "A/B Testing",
        "SQL",
        "Quantum Metrics",
        "Data Analysis",
      ],
    },
    {
      icon: Lightbulb,
      title: "Business Tools",
      skills: [
        "PowerPoint",
        "Salesforce",
        "Market Research",
        "TAM Analysis",
        "Pricing Strategy",
        "Stakeholder Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive skill set built through years of experience
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
