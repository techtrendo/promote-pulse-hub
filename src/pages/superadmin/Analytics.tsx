import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Users, Globe, MousePointer } from "lucide-react";
import { KPICard } from "@/components/KPICard";

const SuperAdminAnalytics = () => {
  const trafficByCountry = [
    { country: "United States", users: 4523, percentage: 35 },
    { country: "United Kingdom", users: 2134, percentage: 18 },
    { country: "India", users: 1892, percentage: 15 },
    { country: "Canada", users: 1456, percentage: 12 },
    { country: "Australia", users: 987, percentage: 8 },
    { country: "Others", users: 1508, percentage: 12 },
  ];

  const topPerformingPanels = [
    { name: "SocialBoost Pro", orders: 1542, revenue: "$12,450", growth: "+23%" },
    { name: "InstaGrow Elite", orders: 1329, revenue: "$10,890", growth: "+18%" },
    { name: "TikTok Master", orders: 1156, revenue: "$9,240", growth: "+15%" },
    { name: "YouTube Rocket", orders: 987, revenue: "$8,120", growth: "+12%" },
  ];

  return (
    <DashboardLayout role="superadmin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Platform Analytics</h1>
            <p className="text-muted-foreground">Real-time insights and performance metrics</p>
          </div>
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Traffic"
            value="284.5K"
            icon={TrendingUp}
            trend={{ value: "+18.2%", positive: true }}
          />
          <KPICard
            title="Active Users"
            value="12,458"
            icon={Users}
            trend={{ value: "+12.5%", positive: true }}
          />
          <KPICard
            title="Countries"
            value="86"
            icon={Globe}
            trend={{ value: "+5", positive: true }}
          />
          <KPICard
            title="Avg. CTR"
            value="3.8%"
            icon={MousePointer}
            trend={{ value: "+0.4%", positive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Traffic by Country</h3>
            <div className="space-y-4">
              {trafficByCountry.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{item.country}</span>
                    <span className="text-muted-foreground">{item.users.toLocaleString()} users</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Performing Panels</h3>
            <div className="space-y-4">
              {topPerformingPanels.map((panel, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex-1">
                    <p className="font-medium">{panel.name}</p>
                    <p className="text-sm text-muted-foreground">{panel.orders} orders</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{panel.revenue}</p>
                    <p className="text-sm text-green-600">{panel.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Analytics</h3>
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Interactive revenue chart will be displayed here</p>
              <p className="text-sm">Using Recharts or Chart.js</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">User Activity Heatmap</h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <div className="text-center text-muted-foreground">
              <p>Activity heatmap showing peak hours and days</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminAnalytics;
