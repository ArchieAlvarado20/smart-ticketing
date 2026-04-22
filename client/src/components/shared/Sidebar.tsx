import {
  BarChart3,
  LayoutDashboard,
  QrCode,
  Settings,
  Ticket,
  X,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50 md:z-auto
          h-full w-64 bg-white border-white p-4
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-lg font-semibold text-slate-900">Management</p>

          {/* Close button (mobile only) */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 rounded hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg"
          >
            <Ticket className="w-5 h-5" />
            Tickets
          </a>

          <NavLink
            to="/admin/scanner"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg"
          >
            <QrCode className="w-5 h-5" />
            Scanners
          </NavLink>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg"
          >
            <BarChart3 className="w-5 h-5" />
            Analytics
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg"
          >
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>
      </aside>
    </>
  );
}
