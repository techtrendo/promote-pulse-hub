import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Play, Pause, Trash2, MessageCircle, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Automation = () => {
  const automations = [
    { id: 1, name: "Telegram Campaign #1", platform: "Telegram", messages: 245, status: "Running", schedule: "Every 2 hours" },
    { id: 2, name: "WhatsApp Promo", platform: "WhatsApp", messages: 189, status: "Paused", schedule: "Daily at 10:00" },
    { id: 3, name: "Email Newsletter", platform: "Email", messages: 567, status: "Running", schedule: "Weekly on Monday" },
  ];

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Automation</h1>
            <p className="text-muted-foreground">Automate your Telegram, WhatsApp & Email campaigns</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                New Automation
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create Automation</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="automation-name">Campaign Name</Label>
                  <Input id="automation-name" placeholder="My Campaign" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message Content</Label>
                  <Textarea id="message" placeholder="Your message here..." rows={4} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schedule">Schedule</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Every hour</SelectItem>
                      <SelectItem value="2hours">Every 2 hours</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">Create Automation</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Active Automations</div>
            <div className="text-2xl font-bold mt-1">12</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Messages Sent</div>
            <div className="text-2xl font-bold mt-1 text-green-600">8,942</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-muted-foreground">Success Rate</div>
            <div className="text-2xl font-bold mt-1 text-blue-600">94.5%</div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign Name</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Messages Sent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {automations.map((automation) => (
                  <TableRow key={automation.id}>
                    <TableCell className="font-medium">{automation.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="gap-1">
                        {automation.platform === "Telegram" && <Send className="w-3 h-3" />}
                        {automation.platform === "WhatsApp" && <MessageCircle className="w-3 h-3" />}
                        {automation.platform}
                      </Badge>
                    </TableCell>
                    <TableCell>{automation.messages}</TableCell>
                    <TableCell>
                      <Badge variant={automation.status === "Running" ? "default" : "secondary"}>
                        {automation.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{automation.schedule}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        {automation.status === "Running" ? (
                          <Button variant="ghost" size="sm"><Pause className="w-4 h-4" /></Button>
                        ) : (
                          <Button variant="ghost" size="sm"><Play className="w-4 h-4" /></Button>
                        )}
                        <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-destructive" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Connect Platforms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Send className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Telegram</p>
                  <Badge variant="default" className="text-xs">Connected</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Manage</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-100">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <Badge variant="default" className="text-xs">Connected</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Manage</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gray-100">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <Badge variant="secondary" className="text-xs">Not Connected</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Connect</Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Automation;
