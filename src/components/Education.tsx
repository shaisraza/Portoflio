import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science",
      field: "Entrepreneurship & Technology",
      institution: "Babson College, F.W Olin Graduate School of Business",
      year: "2019 - 2020",
      description: "Advanced studies combining entrepreneurship, technology, and business strategy.",
    },
    {
      degree: "Bachelor of Science",
      field: "Microbiology",
      institution: "Michigan State University",
      year: "2014 - 2018",
      description: "Comprehensive undergraduate education in biological sciences with a focus on research methodology and data analysis.",
    },
  ];

  const certifications = [
    "Full-Stack Development with MERN and GenAI",
    "SAFe Product Owner - Product Manager",
    "Quantum Metrics, Testim Foundations",
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development
            </p>
          </div>

          {/* Education */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                      <GraduationCap className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <p className="text-lg text-muted-foreground">{edu.field}</p>
                      </div>
                      <Badge variant="secondary" className="w-fit">{edu.year}</Badge>
                    </div>

                    <p className="text-lg font-medium text-accent">{edu.institution}</p>
                    <p className="text-foreground/80">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="p-6 md:p-8 shadow-elegant animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Professional Certifications</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
