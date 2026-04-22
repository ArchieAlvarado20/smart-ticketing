import { LayoutDashboard, Ticket, QrCode, BarChart3 } from "lucide-react";

type Props = {
  active?: "dashboard" | "tickets" | "scan" | "stats";
};

export default function MobileBottomNav({ active = "dashboard" }: Props) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 border-white/20  backdrop-blur-xl shadow-lg border-t h-16 flex items-center justify-around z-50">
      {/* Dashboard */}
      <a
        href="#"
        className={`flex flex-col items-center gap-1 ${
          active === "dashboard" ? "text-indigo-600" : "text-muted-foreground"
        }`}
      >
        <LayoutDashboard className="w-5 h-5" />
        <span className="text-[10px] font-medium">Dashboard</span>
      </a>

      {/* Tickets */}
      <a
        href="#"
        className={`flex flex-col items-center gap-1 ${
          active === "tickets" ? "text-indigo-600" : "text-muted-foreground"
        }`}
      >
        <Ticket className="w-5 h-5" />
        <span className="text-[10px] font-medium">Tickets</span>
      </a>

      {/* Scan */}
      <a
        href="#"
        className={`flex flex-col items-center gap-1 ${
          active === "scan" ? "text-indigo-600" : "text-muted-foreground"
        }`}
      >
        <QrCode className="w-5 h-5" />
        <span className="text-[10px] font-medium">Scan</span>
      </a>

      {/* Stats */}
      <a
        href="#"
        className={`flex flex-col items-center gap-1 ${
          active === "stats" ? "text-indigo-600" : "text-muted-foreground"
        }`}
      >
        <BarChart3 className="w-5 h-5" />
        <span className="text-[10px] font-medium">Stats</span>
      </a>
    </nav>
  );
}
