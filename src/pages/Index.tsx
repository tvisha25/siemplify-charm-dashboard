import { Shield, Search, Image, AlertTriangle, Lock, FileSearch, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ActionCard } from "@/components/ActionCard";

const actionCards = [
  {
    title: "Threat Analysis",
    description: "Analyze security threats and vulnerabilities in real-time with AI-powered insights.",
    icon: AlertTriangle,
  },
  {
    title: "Incident Response",
    description: "Create and deploy incident response protocols tailored to your infrastructure.",
    icon: Zap,
  },
  {
    title: "Security Audits",
    description: "Perform comprehensive security audits and compliance checks automatically.",
    icon: FileSearch,
  },
  {
    title: "Access Control",
    description: "Manage and monitor access controls across your entire security infrastructure.",
    icon: Lock,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Welcome Section */}
        <div className="max-w-3xl w-full text-center mb-12 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 shadow-glow">
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">
              Good to see you!
            </h1>
            <h2 className="text-3xl font-semibold text-foreground/80">
              How Can I Assist You?
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quickly find answers, get assistance, and explore AI-powered security insights—all in one place
          </p>

          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto mt-8">
            <div className="relative rounded-xl bg-card border border-border overflow-hidden shadow-card">
              <Input
                placeholder="Ask anything ..."
                className="w-full px-6 py-6 text-base border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Image className="w-5 h-5" />
                </Button>
                <div className="w-px h-6 bg-border" />
                <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90">
                  <span className="text-sm">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Example Actions */}
        <div className="max-w-6xl w-full">
          <h3 className="text-sm font-medium text-muted-foreground mb-6">
            Get started with an example below
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actionCards.map((card, index) => (
              <ActionCard key={index} {...card} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
