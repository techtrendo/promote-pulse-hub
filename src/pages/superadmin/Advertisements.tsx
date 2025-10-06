import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, CheckCircle, XCircle, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SuperAdminAdvertisements = () => {
  const ads = [
    { id: 1, title: "Instagram Growth Pro", type: "Banner", user: "Alice Cooper", status: "Active", views: "12.4K", clicks: "842", expires: "2024-12-31", autoRenew: true },
    { id: 2, title: "TikTok Boost Campaign", type: "Popup", user: "Bob Martin", status: "Pending", views: "—", clicks: "—", expires: "2024-12-25", autoRenew: false },
    { id: 3, title: "YouTube Sidebar Ad", type: "Sidebar", user: "Carol White", status: "Active", views: "8.9K", clicks: "567", expires: "2024-12-20", autoRenew: true },
    { id: 4, title: "Facebook Mega Sale", type: "Banner", user: "David Brown", status: "Rejected", views: "—", clicks: "—", expires: "—", autoRenew: false },
    { id: 5, title: "SMM Panel Promo", type: "Floating", user: "Eve Taylor", status: "Active", views: "15.2K", clicks: "1.2K", expires: "2025-01-15", autoRenew: true },
  ];

  return (
    <DashboardLayout role="superadmin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Advertisement Management</h1>
          <p className="text-muted-foreground">Approve, schedule, and monitor all advertisements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Ads</div>
            <div className="text-2xl font-bold mt-1">1,342</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Active Ads</div>
            <div className="text-2xl font-bold mt-1 text-green-600">956</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Pending Approval</div>
            <div className="text-2xl font-bold mt-1 text-orange-600">28</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Expiring Soon</div>
            <div className="text-2xl font-bold mt-1 text-red-600">15</div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search ads by title or user..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-types">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">All Types</SelectItem>
                <SelectItem value="banner">Banner</SelectItem>
                <SelectItem value="popup">Popup</SelectItem>
                <SelectItem value="sidebar">Sidebar</SelectItem>
                <SelectItem value="floating">Floating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ad Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Expires</TableHead>
                  <TableHead>Auto Renew</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ads.map((ad) => (
                  <TableRow key={ad.id}>
                    <TableCell className="font-medium">{ad.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{ad.type}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{ad.user}</TableCell>
                    <TableCell>
                      <Badge variant={
                        ad.status === "Active" ? "default" :
                        ad.status === "Pending" ? "secondary" :
                        "destructive"
                      }>
                        {ad.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{ad.views}</TableCell>
                    <TableCell>{ad.clicks}</TableCell>
                    <TableCell className="text-muted-foreground">{ad.expires}</TableCell>
                    <TableCell>
                      {ad.autoRenew ? (
                        <Badge variant="outline" className="text-green-600">Yes</Badge>
                      ) : (
                        <Badge variant="outline" className="text-muted-foreground">No</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" title="View Details">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {ad.status === "Pending" && (
                          <>
                            <Button variant="ghost" size="sm" title="Approve">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </Button>
                            <Button variant="ghost" size="sm" title="Reject">
                              <XCircle className="w-4 h-4 text-red-600" />
                            </Button>
                          </>
                        )}
                        {ad.status === "Active" && (
                          <Button variant="ghost" size="sm" title="Schedule">
                            <Calendar className="w-4 h-4" />
                          </Button>
                        )}
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

export default SuperAdminAdvertisements;
