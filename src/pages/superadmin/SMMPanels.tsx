import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, RefreshCw, Eye, Settings } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SMMPanels = () => {
  const panels = [
    { id: 1, name: "SocialBoost Pro", url: "socialboost.com", owner: "Alice Cooper", services: 142, orders: 1542, lastSync: "2 min ago", status: "Online", apiVersion: "V2" },
    { id: 2, name: "InstaGrow Elite", url: "instagrow.io", owner: "Bob Martin", services: 98, orders: 1329, lastSync: "5 min ago", status: "Online", apiVersion: "V3" },
    { id: 3, name: "TikTok Master", url: "tiktokmaster.net", owner: "Carol White", services: 76, orders: 1156, lastSync: "Syncing...", status: "Syncing", apiVersion: "V1" },
    { id: 4, name: "YouTube Rocket", url: "ytrocket.com", owner: "David Brown", services: 89, orders: 987, lastSync: "15 min ago", status: "Online", apiVersion: "V2" },
    { id: 5, name: "Facebook Boost", url: "fbboost.co", owner: "Eve Taylor", services: 124, orders: 842, lastSync: "1 hour ago", status: "Warning", apiVersion: "V3" },
  ];

  return (
    <DashboardLayout role="superadmin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">SMM Panel Management</h1>
            <p className="text-muted-foreground">Monitor and sync all connected SMM panels</p>
          </div>
          <Button className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Sync All Panels
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Panels</div>
            <div className="text-2xl font-bold mt-1">342</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Online Panels</div>
            <div className="text-2xl font-bold mt-1 text-green-600">318</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Services</div>
            <div className="text-2xl font-bold mt-1">8,934</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Syncing Issues</div>
            <div className="text-2xl font-bold mt-1 text-red-600">5</div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search panels by name, URL, or owner..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="syncing">Syncing</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-api">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-api">All API Versions</SelectItem>
                <SelectItem value="v1">V1</SelectItem>
                <SelectItem value="v2">V2</SelectItem>
                <SelectItem value="v3">V3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Panel Name</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Services</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Last Sync</TableHead>
                  <TableHead>API Version</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {panels.map((panel) => (
                  <TableRow key={panel.id}>
                    <TableCell className="font-medium">{panel.name}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{panel.url}</TableCell>
                    <TableCell className="text-muted-foreground">{panel.owner}</TableCell>
                    <TableCell>{panel.services}</TableCell>
                    <TableCell>{panel.orders}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{panel.lastSync}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{panel.apiVersion}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        panel.status === "Online" ? "default" :
                        panel.status === "Syncing" ? "secondary" :
                        "destructive"
                      }>
                        {panel.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" title="View Details">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Sync Now">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Settings">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Auto-Sync Configuration</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Automatic Sync Interval</p>
                <p className="text-sm text-muted-foreground">Sync all panels every N minutes</p>
              </div>
              <Select defaultValue="5">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 minute</SelectItem>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Retry Failed Syncs</p>
                <p className="text-sm text-muted-foreground">Automatically retry panels with sync errors</p>
              </div>
              <Badge variant="default">Enabled</Badge>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SMMPanels;
