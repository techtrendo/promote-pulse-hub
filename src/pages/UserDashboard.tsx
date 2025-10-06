import { DashboardLayout } from "@/components/DashboardLayout";
import { KPICard } from "@/components/KPICard";
import { ShoppingCart, Megaphone, Wallet, BarChart3, PanelTop, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UserDashboard = () => {
  return (
    <DashboardLayout role="user">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">User Dashboard</h1>
          <p className="text-muted-foreground">Manage your SMM panels, ads, and campaigns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <KPICard
            title="Total Orders"
            value="342"
            icon={ShoppingCart}
            trend={{ value: "+18", positive: true }}
          />
          <KPICard
            title="Active Ads"
            value="8"
            icon={Megaphone}
          />
          <KPICard
            title="Wallet Balance"
            value="$1,245.50"
            icon={Wallet}
            trend={{ value: "+$120", positive: true }}
          />
          <KPICard
            title="My Panels"
            value="5"
            icon={PanelTop}
          />
          <KPICard
            title="Automation Tasks"
            value="12"
            icon={Bot}
            trend={{ value: "+3", positive: true }}
          />
          <KPICard
            title="Total Views"
            value="45.2K"
            icon={BarChart3}
            trend={{ value: "+2.1K", positive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">My Active Ads</h3>
              <Button variant="outline" size="sm" className="glass">
                Create New
              </Button>
            </div>
            <div className="space-y-3">
              {[
                { title: "Instagram Growth Banner", views: "12.4K", clicks: "842", status: "Active" },
                { title: "TikTok Promo Video", views: "8.9K", clicks: "567", status: "Active" },
                { title: "YouTube Sidebar", views: "6.2K", clicks: "423", status: "Active" },
              ].map((ad, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{ad.title}</p>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs mt-1">
                        {ad.status}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Edit
                    </Button>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                    <span>Views: {ad.views}</span>
                    <span>Clicks: {ad.clicks}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">My SMM Panels</h3>
              <Button variant="outline" size="sm" className="glass">
                Add Panel
              </Button>
            </div>
            <div className="space-y-3">
              {[
                { name: "SocialBoost Pro", services: 142, orders: 89, status: "Online" },
                { name: "InstaGrow Elite", services: 98, orders: 67, status: "Online" },
                { name: "TikTok Master", services: 76, orders: 45, status: "Syncing" },
              ].map((panel, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{panel.name}</p>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs mt-1 ${
                        panel.status === "Online" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {panel.status}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Manage
                    </Button>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                    <span>Services: {panel.services}</span>
                    <span>Orders: {panel.orders}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="glass p-6">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-24 flex flex-col gap-2 bg-primary/20 hover:bg-primary/30 glow-primary">
              <Megaphone className="w-6 h-6" />
              <span className="text-sm">Create Ad</span>
            </Button>
            <Button className="h-24 flex flex-col gap-2 bg-primary/20 hover:bg-primary/30 glow-primary">
              <PanelTop className="w-6 h-6" />
              <span className="text-sm">Add Panel</span>
            </Button>
            <Button className="h-24 flex flex-col gap-2 bg-primary/20 hover:bg-primary/30 glow-primary">
              <Bot className="w-6 h-6" />
              <span className="text-sm">Setup Automation</span>
            </Button>
            <Button className="h-24 flex flex-col gap-2 bg-primary/20 hover:bg-primary/30 glow-primary">
              <Wallet className="w-6 h-6" />
              <span className="text-sm">Add Funds</span>
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
