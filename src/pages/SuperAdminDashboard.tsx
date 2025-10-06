import { DashboardLayout } from "@/components/DashboardLayout";
import { KPICard } from "@/components/KPICard";
import { Users, ShieldCheck, Megaphone, ShoppingCart, Wallet, TrendingUp, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const SuperAdminDashboard = () => {
  return (
    <DashboardLayout role="superadmin">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Super Admin Dashboard</h1>
          <p className="text-muted-foreground">Complete platform overview and management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <KPICard
            title="Total Users"
            value="12,458"
            icon={Users}
            trend={{ value: "+12.5%", positive: true }}
          />
          <KPICard
            title="Active Admins"
            value="24"
            icon={ShieldCheck}
            trend={{ value: "+3", positive: true }}
          />
          <KPICard
            title="Active Ads"
            value="1,342"
            icon={Megaphone}
            trend={{ value: "+8.2%", positive: true }}
          />
          <KPICard
            title="Total Orders"
            value="45,231"
            icon={ShoppingCart}
            trend={{ value: "+15.3%", positive: true }}
          />
          <KPICard
            title="Platform Revenue"
            value="$284,920"
            icon={Wallet}
            trend={{ value: "+22.1%", positive: true }}
          />
          <KPICard
            title="Growth Rate"
            value="+18.5%"
            icon={TrendingUp}
            trend={{ value: "+2.3%", positive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: "New user registered", user: "john@example.com", time: "2 min ago" },
                { action: "Admin created new ad campaign", user: "Admin #12", time: "15 min ago" },
                { action: "Payment gateway updated", user: "System", time: "1 hour ago" },
                { action: "New SMM panel integrated", user: "user@example.com", time: "2 hours ago" },
              ].map((activity, idx) => (
                <div key={idx} className="flex justify-between items-start p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div>
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Top Performing Panels</h3>
            <div className="space-y-4">
              {[
                { name: "SocialBoost Pro", orders: 1542, revenue: "$12,450" },
                { name: "InstaGrow Elite", orders: 1329, revenue: "$10,890" },
                { name: "TikTok Master", orders: 1156, revenue: "$9,240" },
                { name: "YouTube Rocket", orders: 987, revenue: "$8,120" },
              ].map((panel, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div>
                    <p className="font-medium text-sm">{panel.name}</p>
                    <p className="text-xs text-muted-foreground">{panel.orders} orders</p>
                  </div>
                  <span className="font-bold text-accent">{panel.revenue}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="glass p-6">
          <h3 className="text-xl font-bold mb-4">Platform Analytics Overview</h3>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Interactive charts will be displayed here</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminDashboard;
