import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const CareerChatWidget = () => {
  return (
    <section id="career-chat" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Chat With My AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a conversation about my career, experience, and expertise
            </p>
          </div>

          {/* HuggingFace Widget */}
          <Card className="overflow-hidden shadow-elegant animate-fade-in border-border/50 flex justify-center p-4">
            <iframe
              src="https://shaisraza-career-conversation.hf.space"
              title="Career Conversation AI"
              frameBorder="0"
              width="850"
              height="450"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerChatWidget;
