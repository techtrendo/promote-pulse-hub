import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Ban, Check, DollarSign, MoreVertical } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ManageUsers = () => {
  const users = [
    { id: 1, name: "Alice Cooper", email: "alice@example.com", panels: 3, orders: 145, balance: "$1,245", status: "Active", admin: "John Doe", joined: "2024-01-20" },
    { id: 2, name: "Bob Martin", email: "bob@example.com", panels: 5, orders: 289, balance: "$2,890", status: "Active", admin: "Sarah Smith", joined: "2024-01-25" },
    { id: 3, name: "Carol White", email: "carol@example.com", panels: 2, orders: 67, balance: "$650", status: "Active", admin: "Mike Johnson", joined: "2024-02-01" },
    { id: 4, name: "David Brown", email: "david@example.com", panels: 4, orders: 198, balance: "$1,870", status: "Suspended", admin: "Emily Davis", joined: "2024-02-10" },
    { id: 5, name: "Eve Taylor", email: "eve@example.com", panels: 6, orders: 342, balance: "$3,420", status: "Active", admin: "John Doe", joined: "2024-02-15" },
  ];

  return (
    <DashboardLayout role="superadmin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Manage Users</h1>
          <p className="text-muted-foreground">View and manage all platform users</p>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search users by name, email, or admin..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="banned">Banned</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-admins">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-admins">All Admins</SelectItem>
                <SelectItem value="john">John Doe</SelectItem>
                <SelectItem value="sarah">Sarah Smith</SelectItem>
                <SelectItem value="mike">Mike Johnson</SelectItem>
                <SelectItem value="emily">Emily Davis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Panels</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned Admin</TableHead>
                  <TableHead>Joined</TableHead>
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
                      <Badge variant={user.status === "Active" ? "default" : "destructive"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{user.admin}</TableCell>
                    <TableCell className="text-muted-foreground">{user.joined}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        {user.status === "Active" ? (
                          <Button variant="ghost" size="sm" title="Suspend User">
                            <Ban className="w-4 h-4 text-orange-500" />
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm" title="Activate User">
                            <Check className="w-4 h-4 text-green-600" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" title="Adjust Balance">
                          <DollarSign className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
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

export default ManageUsers;
