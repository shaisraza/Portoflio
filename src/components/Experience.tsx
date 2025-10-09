import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Position",
      company: "Company Name",
      period: "2020 - Present",
      description:
        "Leading strategic initiatives and driving innovation across multiple projects. Responsible for team leadership, project management, and delivering exceptional results.",
      highlights: [
        "Led team of 10+ professionals",
        "Increased efficiency by 40%",
        "Delivered 15+ successful projects",
      ],
    },
    {
      title: "Mid-Level Position",
      company: "Previous Company",
      period: "2017 - 2020",
      description:
        "Managed key projects and contributed to organizational growth. Developed innovative solutions and collaborated with cross-functional teams.",
      highlights: [
        "Managed $2M+ in projects",
        "Improved processes by 30%",
        "Mentored junior team members",
      ],
    },
    {
      title: "Junior Position",
      company: "Earlier Company",
      period: "2015 - 2017",
      description:
        "Contributed to various projects and gained foundational experience in the industry. Quickly advanced through demonstrated excellence and dedication.",
      highlights: [
        "Completed 20+ projects",
        "Earned promotion in 18 months",
        "Received excellence award",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              A track record of excellence and innovation
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-primary opacity-30" />
                )}

                <Card className="p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 ml-0 md:ml-14">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-8 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <div className="space-y-4 pl-16 md:pl-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <p className="text-lg text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-foreground/80 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Key Achievements
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-foreground/80">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
