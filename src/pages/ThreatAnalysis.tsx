import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { AlertTriangle, Shield } from "lucide-react";

const threatData = [
  { id: 1, threat: "Malware Detection", severity: "High", status: "Active", count: 45, affected: "Network Perimeter" },
  { id: 2, threat: "Phishing Attempts", severity: "Medium", status: "Monitoring", count: 23, affected: "Email Gateway" },
  { id: 3, threat: "DDoS Attack", severity: "Critical", status: "Mitigated", count: 12, affected: "Web Services" },
  { id: 4, threat: "Unauthorized Access", severity: "High", status: "Investigating", count: 8, affected: "Database" },
  { id: 5, threat: "Data Exfiltration", severity: "Medium", status: "Blocked", count: 5, affected: "File Server" },
];

const chartData = threatData.map(item => ({
  name: item.threat.split(' ')[0],
  count: item.count,
  severity: item.severity
}));

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical": return "hsl(0 72% 51%)";
    case "High": return "hsl(330 80% 65%)";
    case "Medium": return "hsl(280 80% 65%)";
    default: return "hsl(240 6% 16%)";
  }
};

const ThreatAnalysis = () => {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Chat Messages */}
        <div className="space-y-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
              <p className="text-sm">Show me threats</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="space-y-4 max-w-full w-full">
              <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <p className="text-sm font-semibold">AI Assistant</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  I've analyzed the current threat landscape. Here's a comprehensive overview of detected threats:
                </p>
              </div>

              {/* Threats Table */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold">Active Threats Overview</h3>
                </div>
                
                <div className="rounded-md border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Threat Type</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Count</TableHead>
                        <TableHead>Affected System</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {threatData.map((threat) => (
                        <TableRow key={threat.id}>
                          <TableCell className="font-medium">{threat.threat}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              threat.severity === "Critical" ? "bg-destructive/10 text-destructive" :
                              threat.severity === "High" ? "bg-accent/10 text-accent" :
                              "bg-primary/10 text-primary"
                            }`}>
                              {threat.severity}
                            </span>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{threat.status}</TableCell>
                          <TableCell className="text-right font-semibold">{threat.count}</TableCell>
                          <TableCell className="text-muted-foreground">{threat.affected}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>

              {/* Threats Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Threat Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="name" 
                        stroke="hsl(var(--muted-foreground))"
                        style={{ fontSize: '12px' }}
                      />
                      <YAxis 
                        stroke="hsl(var(--muted-foreground))"
                        style={{ fontSize: '12px' }}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--card-foreground))'
                        }}
                      />
                      <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={getSeverityColor(entry.severity)} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThreatAnalysis;
