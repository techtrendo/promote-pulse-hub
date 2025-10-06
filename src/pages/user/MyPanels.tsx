import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Settings, RefreshCw, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const MyPanels = () => {
  const panels = [
    { id: 1, name: "SocialBoost Pro", url: "socialboost.com", services: 142, orders: 89, status: "Online", lastSync: "2 min ago" },
    { id: 2, name: "InstaGrow Elite", url: "instagrow.io", services: 98, orders: 67, status: "Online", lastSync: "5 min ago" },
    { id: 3, name: "TikTok Master", url: "tiktokmaster.net", services: 76, orders: 45, status: "Syncing", lastSync: "Syncing..." },
  ];

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My SMM Panels</h1>
            <p className="text-muted-foreground">Add and manage your SMM panels</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add New Panel
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New SMM Panel</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="panel-name">Panel Name</Label>
                  <Input id="panel-name" placeholder="My SMM Panel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="panel-url">Panel URL</Label>
                  <Input id="panel-url" placeholder="https://mypanel.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <Input id="api-key" placeholder="Enter your API key" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Brief description of your panel" rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Info</Label>
                  <Input id="contact" placeholder="email@example.com" />
                </div>
                <Button className="w-full">Add Panel & Auto-Fetch Services</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Panels</div>
            <div className="text-2xl font-bold mt-1">5</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Services</div>
            <div className="text-2xl font-bold mt-1">416</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Orders</div>
            <div className="text-2xl font-bold mt-1">201</div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search panels..." className="pl-10" />
            </div>
            <Button variant="outline" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Sync All
            </Button>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Panel Name</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Services</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Sync</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {panels.map((panel) => (
                  <TableRow key={panel.id}>
                    <TableCell className="font-medium">{panel.name}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{panel.url}</TableCell>
                    <TableCell>{panel.services}</TableCell>
                    <TableCell>{panel.orders}</TableCell>
                    <TableCell>
                      <Badge variant={panel.status === "Online" ? "default" : "secondary"}>
                        {panel.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{panel.lastSync}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm"><Settings className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm"><RefreshCw className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-destructive" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MyPanels;
