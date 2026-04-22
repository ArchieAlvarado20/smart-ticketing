import {
  BarChart3,
  LayoutDashboard,
  QrCode,
  Settings,
  Ticket,
  PanelLeft,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const iconSize = isCollapsed ? "w-5 h-5" : "w-5 h-5";

  return (
    <>
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
          ${isCollapsed ? "md:w-16" : "md:w-64"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-md uppercase font-semibold text-slate-900 ${isCollapsed ? "hidden" : "inline"}`}
          >
            Administrator
          </p>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`hidden md:flex items-center text-sm font-medium rounded-lg transition-all text-slate-600 hover:bg-slate-100 ${isCollapsed ? "justify-center px-2 py-2" : "gap-3 px-3 py-2"}`}
          >
            <PanelLeft
              className={`${iconSize} shrink-0 transition-all duration-200`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className={`flex flex-col gap-1`}>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-600 hover:bg-slate-100"
              } ${isCollapsed ? "justify-center px-2 py-2" : "gap-3 px-3 py-2"}`
            }
          >
            <LayoutDashboard
              className={`${iconSize} shrink-0 transition-all duration-200`}
            />

            <span className={`${isCollapsed ? "hidden" : "inline"}`}>
              Dashboard
            </span>
          </NavLink>

          <NavLink
            to="/admin/tickets"
            className={({ isActive }) =>
              `flex items-center text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-600 hover:bg-slate-100"
              } ${isCollapsed ? "justify-center px-1 py-1" : "gap-3 px-3 py-2"}`
            }
          >
            <Ticket
              className={`${iconSize} shrink-0 transition-all duration-200`}
            />
            <span className={`${isCollapsed ? "hidden" : "inline"}`}>
              Tickets
            </span>
          </NavLink>

          <NavLink
            to="/admin/scanner"
            className={({ isActive }) =>
              `flex items-center text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-600 hover:bg-slate-100"
              } ${isCollapsed ? "justify-center px-2 py-2" : "gap-3 px-3 py-2"}`
            }
          >
            <QrCode
              className={`${iconSize} shrink-0 transition-all duration-200`}
            />

            <span className={`${isCollapsed ? "hidden" : "inline"}`}>
              Scanners
            </span>
          </NavLink>

          <NavLink
            to="/admin/analytics"
            className={({ isActive }) =>
              `flex items-center text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-600 hover:bg-slate-100"
              } ${isCollapsed ? "justify-center px-2 py-2" : "gap-3 px-3 py-2"}`
            }
          >
            <BarChart3
              className={`${iconSize} shrink-0 transition-all duration-200`}
            />
            <span className={`${isCollapsed ? "hidden" : "inline"}`}>
              {" "}
              Analytics
            </span>
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `flex items-center text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-600 hover:bg-slate-100"
              } ${isCollapsed ? "justify-center px-2 py-2" : "gap-3 px-3 py-2"}`
            }
          >
            <Settings
              className={`${iconSize} shrink-0 transition-all duration-200`}
            />
            <span className={`${isCollapsed ? "hidden" : "inline"}`}>
              {" "}
              Settings
            </span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
