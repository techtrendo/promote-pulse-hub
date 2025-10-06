import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, CheckCircle, XCircle } from "lucide-react";

const AdminAdvertisements = () => {
  const ads = [
    { id: 1, title: "Instagram Growth", user: "User One", type: "Banner", status: "Pending", submitted: "2 hours ago" },
    { id: 2, title: "TikTok Boost", user: "User Two", type: "Popup", status: "Approved", submitted: "1 day ago" },
    { id: 3, title: "YouTube Promo", user: "User Three", type: "Sidebar", status: "Pending", submitted: "3 hours ago" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Advertisement Management</h1>
          <p className="text-muted-foreground">Approve or reject user advertisements</p>
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
                  <TableHead>User</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ads.map((ad) => (
                  <TableRow key={ad.id}>
                    <TableCell className="font-medium">{ad.title}</TableCell>
                    <TableCell>{ad.user}</TableCell>
                    <TableCell><Badge variant="outline">{ad.type}</Badge></TableCell>
                    <TableCell>
                      <Badge variant={ad.status === "Approved" ? "default" : "secondary"}>
                        {ad.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{ad.submitted}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                        {ad.status === "Pending" && (
                          <>
                            <Button variant="ghost" size="sm"><CheckCircle className="w-4 h-4 text-green-600" /></Button>
                            <Button variant="ghost" size="sm"><XCircle className="w-4 h-4 text-red-600" /></Button>
                          </>
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

export default AdminAdvertisements;
