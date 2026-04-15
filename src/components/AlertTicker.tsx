import { AlertTriangle, XCircle } from "lucide-react";
import { buses } from "@/data/busData";

const alerts = [
  ...buses
    .filter((b) => b.status === "expired")
    .map((b) => ({ bus: b, type: "expired" as const, msg: `${b.busNumber} — Subscription Expired!` })),
  ...buses
    .filter((b) => b.status === "expiring")
    .map((b) => ({ bus: b, type: "expiring" as const, msg: `${b.busNumber} — Expiring Soon` })),
];

export function AlertTicker() {
  if (alerts.length === 0) return null;

  // Double the items for seamless loop
  const items = [...alerts, ...alerts];

  return (
    <div className="w-full bg-destructive/10 dark:bg-destructive/20 border-b border-destructive/20 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((a, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-6 py-1.5 text-xs font-medium shrink-0"
          >
            {a.type === "expired" ? (
              <XCircle className="w-3.5 h-3.5 text-destructive" />
            ) : (
              <AlertTriangle className="w-3.5 h-3.5 text-warning" />
            )}
            <span className={a.type === "expired" ? "text-destructive" : "text-warning"}>
              {a.msg}
            </span>
            <span className="text-muted-foreground mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
