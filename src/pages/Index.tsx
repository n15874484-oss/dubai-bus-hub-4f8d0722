import { useState, useMemo } from "react";
import { Search, Bus } from "lucide-react";
import { Input } from "@/components/ui/input";
import amplitudeLogo from "@/assets/amplitude-logo.png";
import { buses, type BusStatus } from "@/data/busData";
import { BusCard } from "@/components/BusCard";
import { StatsBar } from "@/components/StatsBar";
import { NotificationPanel } from "@/components/NotificationPanel";
import { ThemeToggle } from "@/components/ThemeToggle";

const filters: { label: string; value: BusStatus | "all" }[] = [
  { label: "All Buses", value: "all" },
  { label: "Active", value: "active" },
  { label: "Expiring Soon", value: "expiring" },
  { label: "Expired", value: "expired" },
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<BusStatus | "all">("all");

  const filtered = useMemo(() => {
    return buses.filter((b) => {
      const matchesFilter = filter === "all" || b.status === filter;
      const matchesSearch =
        !search ||
        b.busNumber.toLowerCase().includes(search.toLowerCase()) ||
        b.plateNumber.toLowerCase().includes(search.toLowerCase()) ||
        b.operator.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-card/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <img src={amplitudeLogo} alt="Amplitude Services" className="h-10 w-auto" />
          </div>
          <NotificationPanel />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats */}
        <StatsBar />

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search plate, bus #, operator..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Bus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {filtered.map((bus, i) => (
            <BusCard key={bus.id} bus={bus} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <Bus className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No buses found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
