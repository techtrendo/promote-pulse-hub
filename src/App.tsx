import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import ManageAdmins from "./pages/superadmin/ManageAdmins";
import ManageUsers from "./pages/superadmin/ManageUsers";
import SuperAdminAdvertisements from "./pages/superadmin/Advertisements";
import SuperAdminAnalytics from "./pages/superadmin/Analytics";
import SuperAdminWallet from "./pages/superadmin/Wallet";
import SMMPanels from "./pages/superadmin/SMMPanels";
import SuperAdminSettings from "./pages/superadmin/Settings";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManageUsers from "./pages/admin/ManageUsers";
import AdminAdvertisements from "./pages/admin/Advertisements";
import AdminAnalytics from "./pages/admin/Analytics";
import SupportTickets from "./pages/admin/SupportTickets";
import AdminSettings from "./pages/admin/Settings";
import UserDashboard from "./pages/UserDashboard";
import MyPanels from "./pages/user/MyPanels";
import UserAdvertisements from "./pages/user/Advertisements";
import Automation from "./pages/user/Automation";
import UserWallet from "./pages/user/Wallet";
import UserAnalytics from "./pages/user/Analytics";
import UserSettings from "./pages/user/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/superadmin" element={<SuperAdminDashboard />} />
          <Route path="/superadmin/admins" element={<ManageAdmins />} />
          <Route path="/superadmin/users" element={<ManageUsers />} />
          <Route path="/superadmin/ads" element={<SuperAdminAdvertisements />} />
          <Route path="/superadmin/analytics" element={<SuperAdminAnalytics />} />
          <Route path="/superadmin/wallet" element={<SuperAdminWallet />} />
          <Route path="/superadmin/panels" element={<SMMPanels />} />
          <Route path="/superadmin/settings" element={<SuperAdminSettings />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminManageUsers />} />
          <Route path="/admin/ads" element={<AdminAdvertisements />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/tickets" element={<SupportTickets />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/panels" element={<MyPanels />} />
          <Route path="/user/ads" element={<UserAdvertisements />} />
          <Route path="/user/automation" element={<Automation />} />
          <Route path="/user/wallet" element={<UserWallet />} />
          <Route path="/user/analytics" element={<UserAnalytics />} />
          <Route path="/user/settings" element={<UserSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
