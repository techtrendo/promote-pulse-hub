import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare, AlertCircle } from "lucide-react";

const SupportTickets = () => {
  const tickets = [
    { id: "TKT-001", user: "User One", subject: "Payment Issue", priority: "High", status: "Open", created: "1 hour ago" },
    { id: "TKT-002", user: "User Two", subject: "API Connection", priority: "Medium", status: "In Progress", created: "3 hours ago" },
    { id: "TKT-003", user: "User Three", subject: "Ad Not Showing", priority: "Low", status: "Resolved", created: "1 day ago" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Support Tickets</h1>
          <p className="text-muted-foreground">Manage user support requests</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Open Tickets</div>
            <div className="text-2xl font-bold mt-1 text-orange-600">7</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">In Progress</div>
            <div className="text-2xl font-bold mt-1 text-blue-600">5</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Resolved Today</div>
            <div className="text-2xl font-bold mt-1 text-green-600">12</div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search tickets..." className="pl-10" />
            </div>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-mono text-sm">{ticket.id}</TableCell>
                    <TableCell className="font-medium">{ticket.user}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Badge variant={
                        ticket.priority === "High" ? "destructive" :
                        ticket.priority === "Medium" ? "secondary" : "outline"
                      }>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        ticket.status === "Resolved" ? "default" : "secondary"
                      }>
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{ticket.created}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm"><MessageSquare className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm"><AlertCircle className="w-4 h-4" /></Button>
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

export default SupportTickets;
