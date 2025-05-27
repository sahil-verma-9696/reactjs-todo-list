import {
  CalendarCheck,
  Settings,
  LogOut,
  LayoutDashboard,
  List,
} from "lucide-react";

export const navItems = [
  { id: 1, label: "Overview", icon: LayoutDashboard, path: "/overview" },
  { id: 2, label: "My Tasks", icon: List, path: "/tasks" },
  { id: 3, label: "Completed", icon: CalendarCheck, path: "/completed" },
  { id: 4, label: "Settings", icon: Settings, path: "/settings" },
  { id: 5, label: "Logout", icon: LogOut, path: "/logout" },
];
export const fallbackNavItems = [
  { id: 1, label: "Overview" },
  { id: 2, label: "My Tasks" },
  { id: 3, label: "Completed" },
  { id: 4, label: "Settings" },
  { id: 5, label: "Logout" },
];
// export const navItems = null;
