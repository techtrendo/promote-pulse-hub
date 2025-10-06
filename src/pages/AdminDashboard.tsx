import { DashboardLayout } from "@/components/DashboardLayout";
import { KPICard } from "@/components/KPICard";
import { Users, Megaphone, BarChart3, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const AdminDashboard = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your assigned users and campaigns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Assigned Users"
            value="156"
            icon={Users}
            trend={{ value: "+5", positive: true }}
          />
          <KPICard
            title="Active Campaigns"
            value="48"
            icon={Megaphone}
            trend={{ value: "+12", positive: true }}
          />
          <KPICard
            title="Pending Approvals"
            value="12"
            icon={BarChart3}
          />
          <KPICard
            title="Support Tickets"
            value="7"
            icon={MessageSquare}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Pending Ad Approvals</h3>
            <div className="space-y-3">
              {[
                { title: "Instagram Promo Banner", user: "user_1234", date: "Today" },
                { title: "TikTok Video Campaign", user: "user_5678", date: "Today" },
                { title: "YouTube Sidebar Ad", user: "user_9012", date: "Yesterday" },
              ].map((ad, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div>
                    <p className="font-medium text-sm">{ad.title}</p>
                    <p className="text-xs text-muted-foreground">By {ad.user}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-md bg-accent/20 text-accent text-xs font-medium hover:bg-accent/30 transition-colors">
                      Approve
                    </button>
                    <button className="px-3 py-1 rounded-md bg-destructive/20 text-destructive text-xs font-medium hover:bg-destructive/30 transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Recent User Activity</h3>
            <div className="space-y-3">
              {[
                { activity: "New ad created", user: "user_1234", time: "5 min ago" },
                { activity: "Panel API updated", user: "user_5678", time: "23 min ago" },
                { activity: "Automation started", user: "user_9012", time: "1 hour ago" },
                { activity: "Wallet funded", user: "user_3456", time: "2 hours ago" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-start p-3 rounded-lg bg-secondary/50">
                  <div>
                    <p className="font-medium text-sm">{item.activity}</p>
                    <p className="text-xs text-muted-foreground">{item.user}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
