import { useState } from "react";
import type { BusData } from "@/data/busData";
import { Badge } from "@/components/ui/badge";
import { Bus, Calendar, Shield, FileText, Wrench, MapPin, Users, User } from "lucide-react";

const statusConfig = {
  active: { label: "Active", className: "bg-success text-success-foreground" },
  expiring: { label: "Expiring Soon", className: "bg-warning text-warning-foreground" },
  expired: { label: "Expired", className: "bg-destructive text-destructive-foreground" },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export function BusCard({ bus, index }: { bus: BusData; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const config = statusConfig[bus.status];

  return (
    <div
      className="stagger-fade-in perspective-1000"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div
        className={`relative h-[320px] cursor-pointer transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-lg border bg-card overflow-hidden [backface-visibility:hidden] transition-shadow duration-300 hover:shadow-xl ${
            bus.status === "expired" ? "border-destructive glow-red-pulse" : bus.status === "expiring" ? "border-warning/50" : "border-border"
          }`}
        >
          <div className="relative h-40 overflow-hidden">
            <img src={bus.image} alt={bus.busNumber} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute top-2 right-2">
              <Badge className={config.className}>{config.label}</Badge>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-card to-transparent h-12" />
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-foreground">{bus.busNumber}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{bus.model} • {bus.year}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{bus.route}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>{bus.capacity} seats</span>
              <span className="ml-auto">{bus.operator}</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-lg border bg-card overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] p-4 ${
            bus.status === "expired" ? "border-destructive glow-red-pulse" : bus.status === "expiring" ? "border-warning/50" : "border-border"
          }`}
        >
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Bus className="w-4 h-4 text-primary" />
            {bus.busNumber}
          </h3>
          <div className="space-y-2 text-xs">
            <DetailRow icon={<User className="w-3 h-3" />} label="Driver" value={bus.driverName} />
            <DetailRow icon={<FileText className="w-3 h-3" />} label="License" value={bus.licenseNumber} />
            <DetailRow icon={<FileText className="w-3 h-3" />} label="RTO Reg." value={bus.rtoRegistration} />
            <DateRow icon={<Shield className="w-3 h-3" />} label="Insurance" start={bus.insuranceStart} end={bus.insuranceEnd} status={bus.status} />
            <DateRow icon={<MapPin className="w-3 h-3" />} label="Route Permit" start={bus.routePermitStart} end={bus.routePermitEnd} status={bus.status} />
            <DetailRow icon={<Calendar className="w-3 h-3" />} label="Fitness Cert." value={formatDate(bus.fitnessCertExpiry)} warn={bus.status !== "active"} />
            <DateRow icon={<Calendar className="w-3 h-3" />} label="Subscription" start={bus.subscriptionStart} end={bus.subscriptionEnd} status={bus.status} />
            <DetailRow icon={<Wrench className="w-3 h-3" />} label="Last Service" value={formatDate(bus.lastServiceDate)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ icon, label, value, warn }: { icon: React.ReactNode; label: string; value: string; warn?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1 border-b border-border/50">
      <span className="flex items-center gap-1.5 text-muted-foreground">{icon}{label}</span>
      <span className={warn ? "text-destructive font-semibold" : "text-foreground"}>{value}</span>
    </div>
  );
}

function DateRow({ icon, label, start, end, status }: { icon: React.ReactNode; label: string; start: string; end: string; status: string }) {
  const isWarn = status !== "active";
  return (
    <div className="flex items-center justify-between py-1 border-b border-border/50">
      <span className="flex items-center gap-1.5 text-muted-foreground">{icon}{label}</span>
      <span className={isWarn ? "text-destructive font-semibold" : "text-foreground"}>
        {formatDate(start)} — {formatDate(end)}
      </span>
    </div>
  );
}
