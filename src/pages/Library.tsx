import { FileText, Shield, Lock, AlertCircle } from "lucide-react";

const libraryItems = [
  {
    title: "Security Policies",
    icon: Shield,
    count: 12,
  },
  {
    title: "Incident Reports",
    icon: AlertCircle,
    count: 8,
  },
  {
    title: "Compliance Documents",
    icon: FileText,
    count: 15,
  },
  {
    title: "Access Logs",
    icon: Lock,
    count: 24,
  },
];

const Library = () => {
  return (
    <div className="min-h-screen w-full p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Library</h1>
          <p className="text-muted-foreground">
            Access your security documents and saved resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {libraryItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-card border border-border p-6 hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-2xl font-bold text-primary">{item.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
