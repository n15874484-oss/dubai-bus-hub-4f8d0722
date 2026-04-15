import { Bus, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { buses } from "@/data/busData";

const stats = [
  { label: "Total Fleet", value: buses.length, icon: Bus, color: "text-primary" },
  { label: "Active", value: buses.filter(b => b.status === "active").length, icon: CheckCircle, color: "text-success" },
  { label: "Expiring Soon", value: buses.filter(b => b.status === "expiring").length, icon: AlertTriangle, color: "text-warning" },
  { label: "Expired", value: buses.filter(b => b.status === "expired").length, icon: XCircle, color: "text-destructive" },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border bg-card p-4 flex items-center gap-3 hover:shadow-lg transition-shadow">
          <div className={`p-2 rounded-lg bg-secondary ${s.color}`}>
            <s.icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
