import { Card } from "@/components/ui/card";
import { Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LinkedInPosts = () => {
  const posts = [
    {
      title: "Product Management Insights",
      excerpt: "Key learnings from building products at scale...",
      date: "2 days ago",
      url: "https://www.linkedin.com/in/shaissraza",
      engagement: "45 reactions • 12 comments"
    },
    {
      title: "Team Collaboration Best Practices",
      excerpt: "How cross-functional teams can work more effectively...",
      date: "1 week ago",
      url: "https://www.linkedin.com/in/shaissraza",
      engagement: "68 reactions • 18 comments"
    },
    {
      title: "Data-Driven Product Decisions",
      excerpt: "Using analytics to guide feature prioritization...",
      date: "2 weeks ago",
      url: "https://www.linkedin.com/in/shaissraza",
      engagement: "92 reactions • 24 comments"
    },
  ];

  return (
    <section id="linkedin" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-3">
              <Linkedin className="w-8 h-8 text-[#0A66C2]" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Latest on LinkedIn
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on product management, technology, and building great teams
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 border-border/50 hover:border-accent/50 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/50 space-y-3">
                    <p className="text-sm text-muted-foreground">{post.engagement}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      asChild
                    >
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        View Post
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center animate-fade-in">
            <Button
              size="lg"
              className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/shaissraza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Follow on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;
