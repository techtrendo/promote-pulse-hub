import { DashboardLayout } from "@/components/DashboardLayout";
import { KPICard } from "@/components/KPICard";
import { Card } from "@/components/ui/card";
import { TrendingUp, Eye, MousePointer, Users } from "lucide-react";

const UserAnalytics = () => {
  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track your performance and growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard title="Total Views" value="45.2K" icon={Eye} trend={{ value: "+2.1K", positive: true }} />
          <KPICard title="Total Clicks" value="3,142" icon={MousePointer} trend={{ value: "+156", positive: true }} />
          <KPICard title="Conversions" value="892" icon={Users} trend={{ value: "+45", positive: true }} />
          <KPICard title="CTR" value="6.9%" icon={TrendingUp} trend={{ value: "+0.3%", positive: true }} />
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Chart</h3>
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">Your analytics chart will be displayed here</p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserAnalytics;
