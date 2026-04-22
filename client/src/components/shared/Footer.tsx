import { Ticket } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="relative z-10 w-full border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* LEFT: Brand + Tagline */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white">
                  <Ticket />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  SmartTicket
                </span>
              </div>

              <p className="text-xs text-slate-500">
                Modern ticketing system for seamless event management
              </p>
            </div>

            {/* CENTER: Status */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-slate-600 font-medium">
                All systems operational
              </span>
            </div>

            {/* RIGHT: Version */}
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} SmartTicket • v1.0.0
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
