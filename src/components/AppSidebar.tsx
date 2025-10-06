import { 
  LayoutDashboard, 
  Users, 
  Megaphone, 
  BarChart3, 
  Wallet, 
  Settings,
  Crown,
  ShieldCheck,
  User,
  PanelTop,
  MessageSquare,
  Bot
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  role: "superadmin" | "admin" | "user";
}

const superAdminItems = [
  { title: "Dashboard", url: "/superadmin", icon: LayoutDashboard },
  { title: "Manage Admins", url: "/superadmin/admins", icon: ShieldCheck },
  { title: "Manage Users", url: "/superadmin/users", icon: Users },
  { title: "Advertisements", url: "/superadmin/ads", icon: Megaphone },
  { title: "Analytics", url: "/superadmin/analytics", icon: BarChart3 },
  { title: "Wallet & Payments", url: "/superadmin/wallet", icon: Wallet },
  { title: "SMM Panels", url: "/superadmin/panels", icon: PanelTop },
  { title: "Settings", url: "/superadmin/settings", icon: Settings },
];

const adminItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Manage Users", url: "/admin/users", icon: Users },
  { title: "Advertisements", url: "/admin/ads", icon: Megaphone },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Support Tickets", url: "/admin/tickets", icon: MessageSquare },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

const userItems = [
  { title: "Dashboard", url: "/user", icon: LayoutDashboard },
  { title: "My Panels", url: "/user/panels", icon: PanelTop },
  { title: "Advertisements", url: "/user/ads", icon: Megaphone },
  { title: "Automation", url: "/user/automation", icon: Bot },
  { title: "Wallet", url: "/user/wallet", icon: Wallet },
  { title: "Analytics", url: "/user/analytics", icon: BarChart3 },
  { title: "Settings", url: "/user/settings", icon: Settings },
];

const getRoleItems = (role: string) => {
  switch (role) {
    case "superadmin":
      return superAdminItems;
    case "admin":
      return adminItems;
    default:
      return userItems;
  }
};

const getRoleIcon = (role: string) => {
  switch (role) {
    case "superadmin":
      return Crown;
    case "admin":
      return ShieldCheck;
    default:
      return User;
  }
};

const getRoleLabel = (role: string) => {
  switch (role) {
    case "superadmin":
      return "Super Admin";
    case "admin":
      return "Admin";
    default:
      return "User";
  }
};

export function AppSidebar({ role }: AppSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const items = getRoleItems(role);
  const RoleIcon = getRoleIcon(role);
  const roleLabel = getRoleLabel(role);

  return (
    <Sidebar className={`bg-white border-r ${isCollapsed ? "w-16" : "w-64"}`} collapsible="icon">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <RoleIcon className="w-5 h-5 text-primary" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-bold text-lg text-foreground">Promote SMM</h2>
              <p className="text-xs text-muted-foreground">{roleLabel}</p>
            </div>
          )}
        </div>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "px-2" : ""}>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-primary text-white"
                            : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
