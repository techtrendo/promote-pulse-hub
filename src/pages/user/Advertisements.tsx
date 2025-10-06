import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Eye, Edit, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const UserAdvertisements = () => {
  const ads = [
    { id: 1, title: "Instagram Growth Banner", type: "Banner", views: "12.4K", clicks: "842", status: "Active", expires: "2024-12-31" },
    { id: 2, title: "TikTok Promo Video", type: "Popup", views: "8.9K", clicks: "567", status: "Active", expires: "2024-12-25" },
    { id: 3, title: "YouTube Sidebar", type: "Sidebar", views: "6.2K", clicks: "423", status: "Pending", expires: "—" },
  ];

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Advertisements</h1>
            <p className="text-muted-foreground">Create and manage your ad campaigns</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create New Ad
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create Advertisement</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="ad-title">Ad Title</Label>
                  <Input id="ad-title" placeholder="My Campaign Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ad-type">Ad Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banner">Banner</SelectItem>
                      <SelectItem value="popup">Popup</SelectItem>
                      <SelectItem value="sidebar">Sidebar</SelectItem>
                      <SelectItem value="floating">Floating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ad-description">Description</Label>
                  <Textarea id="ad-description" placeholder="Describe your ad campaign" rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-url">Target URL</Label>
                  <Input id="target-url" placeholder="https://yoursite.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Campaign Duration (days)</Label>
                  <Input id="duration" type="number" placeholder="30" />
                </div>
                <Button className="w-full">Create & Submit for Approval</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Active Ads</div>
            <div className="text-2xl font-bold mt-1">8</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Views</div>
            <div className="text-2xl font-bold mt-1 text-blue-600">45.2K</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Clicks</div>
            <div className="text-2xl font-bold mt-1 text-green-600">3.1K</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Avg. CTR</div>
            <div className="text-2xl font-bold mt-1 text-purple-600">6.9%</div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search ads..." className="pl-10" />
            </div>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Expires</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ads.map((ad) => (
                  <TableRow key={ad.id}>
                    <TableCell className="font-medium">{ad.title}</TableCell>
                    <TableCell><Badge variant="outline">{ad.type}</Badge></TableCell>
                    <TableCell>{ad.views}</TableCell>
                    <TableCell>{ad.clicks}</TableCell>
                    <TableCell>
                      <Badge variant={ad.status === "Active" ? "default" : "secondary"}>
                        {ad.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{ad.expires}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
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

export default UserAdvertisements;
