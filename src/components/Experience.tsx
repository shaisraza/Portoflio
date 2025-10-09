import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "American Medical Association (AMA)",
      period: "2023 - Present",
      description:
        "Leading sign-in experiences for 15+ products used by 2M+ users. Managing a 12-member agile team and collaborating with Analytics, Engineering, UX & QA to deliver secure login experiences (OIDC, SMS, OAuth).",
      highlights: [
        "Built 15+ features that reduced friction by 27% and boosted logins/account creations by 16%",
        "Scaled backlog from 15 to 150+ tickets via feedback loops and prioritized 10+ epics",
        "Gathered feedback from 50+ stakeholders to shape backlog and roadmap priorities",
        "Used GA4, SQL, and A/B tests to optimize user journeys",
        "Presented quarterly to C-suite, securing resources for B2B growth",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Copyright Clearance Center (CCC)",
      period: "2021 - 2023",
      description:
        "Managed two B2B SaaS products used by Fortune 500 companies. Gathered insights from Salesforce, support tickets & 50+ client interviews. Collaborated with Engineering, Legal & Finance on pricing and SOWs.",
      highlights: [
        "Launched 5+ features and 15+ enhancements, generating $175K from 25 renewal/upsell contracts",
        "Performed TAM analysis of 1,200 companies via NAICS codes",
        "Integrated 15+ semantic vocabularies to ontology search engine",
        "Authored docs and led weekly office hours for 50+ team members",
      ],
    },
    {
      title: "Founder",
      company: "HouseCuts",
      period: "2020 - 2021",
      description:
        "Built a platform for booking in-home haircuts with local professionals. Completed 10K+ appointments and generated $325K+ revenue over 5+ years, maintaining a 5-star Google rating.",
      highlights: [
        "Bootstrapped company to achieve 400% ROI ($325K from $65K)",
        "Built full-stack application in 1 year with Acuity & Square API integrations",
        "Created a new pricing model and ran CAC-optimized campaigns from Google, Indeed, and NextDoor",
        "Featured on Chronicle 7 News, leading to 250% overnight growth",
        "Expanded to campuses, hospitals & senior homes",
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
