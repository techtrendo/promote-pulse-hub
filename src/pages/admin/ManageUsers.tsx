import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, MessageSquare, Ban } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminManageUsers = () => {
  const users = [
    { id: 1, name: "User One", email: "user1@example.com", panels: 2, orders: 45, balance: "$450", status: "Active", lastActive: "2 hours ago" },
    { id: 2, name: "User Two", email: "user2@example.com", panels: 3, orders: 67, balance: "$670", status: "Active", lastActive: "5 hours ago" },
    { id: 3, name: "User Three", email: "user3@example.com", panels: 1, orders: 23, balance: "$230", status: "Inactive", lastActive: "2 days ago" },
    { id: 4, name: "User Four", email: "user4@example.com", panels: 4, orders: 89, balance: "$890", status: "Active", lastActive: "1 hour ago" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Manage Users</h1>
          <p className="text-muted-foreground">View and manage your assigned users</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Total Users</div>
            <div className="text-2xl font-bold mt-1">156</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Active Today</div>
            <div className="text-2xl font-bold mt-1 text-green-600">94</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">New This Week</div>
            <div className="text-2xl font-bold mt-1 text-blue-600">12</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Inactive</div>
            <div className="text-2xl font-bold mt-1 text-orange-600">8</div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search users..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Panels</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>{user.panels}</TableCell>
                    <TableCell>{user.orders}</TableCell>
                    <TableCell className="font-semibold text-green-600">{user.balance}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{user.lastActive}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" title="View Profile">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Message User">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Suspend">
                          <Ban className="w-4 h-4 text-orange-500" />
                        </Button>
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

export default AdminManageUsers;
