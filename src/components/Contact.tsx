import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "shaisraza@outlook.com",
      href: "mailto:shaisraza@outlook.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shaissraza",
      href: "https://www.linkedin.com/in/shaissraza",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shaisraza",
      href: "https://github.com/shaisraza",
    },
    {
      icon: Mail,
      label: "Phone",
      value: "(248) 798-0669",
      href: "tel:+12487980669",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 gap-4 animate-fade-in">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(method.href, "_blank")}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium group-hover:text-accent transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="p-8 md:p-12 text-center space-y-6 shadow-elegant bg-gradient-primary animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Let's Work Together
            </h3>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to connect,
              I'd love to hear from you.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
              onClick={() => window.open("mailto:shaisraza@outlook.com", "_blank")}
            >
              Send Me a Message
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
