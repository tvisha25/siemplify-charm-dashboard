import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export function ActionCard({ title, description, icon: Icon }: ActionCardProps) {
  return (
    <div className="group relative rounded-xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      <div className="flex flex-col gap-3">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button
          variant="link"
          className="text-primary p-0 h-auto font-medium group-hover:gap-2 transition-all"
        >
          Learn more
          <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
        </Button>
      </div>
    </div>
  );
}
