import { DashboardLayout } from "@/components/DashboardLayout";
import { KPICard } from "@/components/KPICard";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Megaphone, ShoppingCart } from "lucide-react";

const AdminAnalytics = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Performance metrics for your users</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard title="User Growth" value="+12%" icon={Users} trend={{ value: "+2%", positive: true }} />
          <KPICard title="Total Orders" value="1,234" icon={ShoppingCart} trend={{ value: "+18", positive: true }} />
          <KPICard title="Active Campaigns" value="48" icon={Megaphone} />
          <KPICard title="Revenue" value="$12.4K" icon={TrendingUp} trend={{ value: "+8%", positive: true }} />
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Analytics Chart</h3>
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">User analytics chart will be displayed here</p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminAnalytics;
