export type BusStatus = "active" | "expiring" | "expired";

export interface BusData {
  id: number;
  busNumber: string;
  plateNumber: string;
  model: string;
  year: number;
  capacity: number;
  licenseNumber: string;
  rtoRegistration: string;
  insuranceStart: string;
  insuranceEnd: string;
  routePermitStart: string;
  routePermitEnd: string;
  fitnessCertExpiry: string;
  subscriptionStart: string;
  subscriptionEnd: string;
  operator: string;
  lastServiceDate: string;
  route: string;
  status: BusStatus;
  image: string;
}

const busImages = [
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=400&h=250&fit=crop",
];

const operators = [
  "Al Majid Transport", "Emirates Transport LLC", "Dubai Bus Corp",
  "Gulf Transit Services", "Arabian Mobility", "City Link Transport",
  "Metro Connect LLC", "Desert Express Transport", "Falcon Buses LLC",
  "Pearl Transport Services"
];

const routes = [
  "Dubai Marina → Deira", "JBR → Al Quoz", "Downtown → Silicon Oasis",
  "Al Barsha → International City", "Jumeirah → Bur Dubai",
  "Business Bay → Dragon Mart", "Palm Jumeirah → Mall of Emirates",
  "Al Nahda → Dubai Hills", "Discovery Gardens → DIFC",
  "Dubai Investment Park → Creek Harbour", "Motor City → Dubai Airport T3",
  "Sports City → Gold Souq", "JLT → Karama", "Mirdif → Media City",
  "Academic City → Healthcare City"
];

const models = [
  "MAN Lion's City", "Mercedes-Benz Citaro", "Volvo 8900",
  "Yutong ZK6128", "King Long XMQ6127", "Ashok Leyland Viking",
  "Tata Starbus", "BYD K9", "Scania Citywide", "Isuzu Erga"
];

const plateLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];

function generateBuses(): BusData[] {
  const buses: BusData[] = [];
  
  for (let i = 1; i <= 60; i++) {
    const plateNum = 10000 + Math.floor(Math.random() * 89999);
    const letter = plateLetters[i % plateLetters.length];
    
    let status: BusStatus;
    let subEnd: string;
    let insuranceEnd: string;
    let routePermitEnd: string;
    let fitnessCertExpiry: string;
    
    if (i <= 38) {
      status = "active";
      subEnd = `2026-${String(6 + Math.floor(Math.random() * 6)).padStart(2, "0")}-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`;
      insuranceEnd = `2026-${String(7 + Math.floor(Math.random() * 5)).padStart(2, "0")}-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`;
      routePermitEnd = `2026-${String(8 + Math.floor(Math.random() * 4)).padStart(2, "0")}-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`;
      fitnessCertExpiry = `2026-${String(9 + Math.floor(Math.random() * 3)).padStart(2, "0")}-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`;
    } else if (i <= 50) {
      status = "expiring";
      subEnd = `2026-04-${String(16 + Math.floor(Math.random() * 14)).padStart(2, "0")}`;
      insuranceEnd = `2026-04-${String(18 + Math.floor(Math.random() * 12)).padStart(2, "0")}`;
      routePermitEnd = `2026-05-${String(1 + Math.floor(Math.random() * 15)).padStart(2, "0")}`;
      fitnessCertExpiry = `2026-05-${String(1 + Math.floor(Math.random() * 20)).padStart(2, "0")}`;
    } else {
      status = "expired";
      subEnd = `2026-03-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`;
      insuranceEnd = `2026-02-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`;
      routePermitEnd = `2026-03-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`;
      fitnessCertExpiry = `2026-01-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`;
    }

    buses.push({
      id: i,
      busNumber: `BUS-${String(i).padStart(3, "0")}`,
      plateNumber: `Dubai ${letter} ${plateNum}`,
      model: models[i % models.length],
      year: 2019 + (i % 6),
      capacity: 40 + (i % 3) * 5,
      licenseNumber: `DXB-TL-${2024000 + i}`,
      rtoRegistration: `RTO-${String(100000 + i)}`,
      insuranceStart: "2025-01-01",
      insuranceEnd,
      routePermitStart: "2025-01-01",
      routePermitEnd,
      fitnessCertExpiry,
      subscriptionStart: "2025-01-01",
      subscriptionEnd: subEnd,
      operator: operators[i % operators.length],
      lastServiceDate: `2026-03-${String(1 + Math.floor(Math.random() * 28)).padStart(2, "0")}`,
      route: routes[i % routes.length],
      status,
      image: busImages[i % busImages.length],
    });
  }
  
  return buses;
}

export const buses: BusData[] = generateBuses();

export interface Notification {
  id: number;
  message: string;
  type: "danger" | "warning" | "info";
  time: string;
  busId: number;
}

export const notifications: Notification[] = [
  { id: 1, message: "BUS-051 insurance has expired!", type: "danger", time: "2 hours ago", busId: 51 },
  { id: 2, message: "BUS-052 route permit expired!", type: "danger", time: "3 hours ago", busId: 52 },
  { id: 3, message: "BUS-053 subscription ended", type: "danger", time: "5 hours ago", busId: 53 },
  { id: 4, message: "BUS-041 insurance expires in 5 days", type: "warning", time: "1 hour ago", busId: 41 },
  { id: 5, message: "BUS-042 subscription expiring soon", type: "warning", time: "2 hours ago", busId: 42 },
  { id: 6, message: "BUS-043 fitness certificate renewal due", type: "warning", time: "3 hours ago", busId: 43 },
  { id: 7, message: "BUS-044 route permit expires in 10 days", type: "warning", time: "4 hours ago", busId: 44 },
  { id: 8, message: "BUS-054 all documents expired — action required", type: "danger", time: "6 hours ago", busId: 54 },
  { id: 9, message: "BUS-045 subscription renewal reminder", type: "warning", time: "5 hours ago", busId: 45 },
  { id: 10, message: "BUS-010 scheduled for maintenance next week", type: "info", time: "1 day ago", busId: 10 },
  { id: 11, message: "BUS-055 registration renewal overdue", type: "danger", time: "8 hours ago", busId: 55 },
  { id: 12, message: "BUS-020 route updated successfully", type: "info", time: "2 days ago", busId: 20 },
  { id: 13, message: "BUS-046 insurance expires in 7 days", type: "warning", time: "6 hours ago", busId: 46 },
  { id: 14, message: "BUS-056 fitness certificate expired", type: "danger", time: "10 hours ago", busId: 56 },
  { id: 15, message: "Fleet inspection completed for 38 buses", type: "info", time: "3 days ago", busId: 1 },
];
