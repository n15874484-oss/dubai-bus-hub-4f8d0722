import { useState, useRef, useEffect } from "react";
import { Bell, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { notifications } from "@/data/busData";

const typeConfig = {
  danger: { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10" },
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" },
  info: { icon: Info, color: "text-blue-400", bg: "bg-blue-400/10" },
};

export function NotificationPanel() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dangerCount = notifications.filter(n => n.type === "danger").length;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
      >
        <Bell className="w-5 h-5 text-foreground" />
        {dangerCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
            {dangerCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-96 max-h-[28rem] overflow-y-auto rounded-lg border bg-popover shadow-2xl z-50 animate-slide-down">
          <div className="p-3 border-b border-border">
            <h3 className="font-semibold text-sm text-foreground">Notifications</h3>
          </div>
          <div className="divide-y divide-border">
            {notifications.map((n) => {
              const cfg = typeConfig[n.type];
              const Icon = cfg.icon;
              return (
                <div key={n.id} className={`flex items-start gap-3 p-3 hover:bg-secondary/50 transition-colors ${cfg.bg}`}>
                  <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${cfg.color}`} />
                  <div className="min-w-0">
                    <p className="text-sm text-foreground">{n.message}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
