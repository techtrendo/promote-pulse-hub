import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Wallet as WalletIcon, CreditCard, DollarSign, TrendingUp, Search, Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { KPICard } from "@/components/KPICard";

const SuperAdminWallet = () => {
  const transactions = [
    { id: "TXN-001", user: "Alice Cooper", type: "Deposit", method: "Cryptomus", amount: "+$500.00", status: "Completed", date: "2024-12-15 10:30" },
    { id: "TXN-002", user: "Bob Martin", type: "Withdrawal", method: "PayTR", amount: "-$250.00", status: "Pending", date: "2024-12-15 09:15" },
    { id: "TXN-003", user: "Carol White", type: "Deposit", method: "Binance", amount: "+$1,000.00", status: "Completed", date: "2024-12-14 16:45" },
    { id: "TXN-004", user: "David Brown", type: "Payment", method: "Paytm", amount: "-$75.50", status: "Completed", date: "2024-12-14 14:20" },
    { id: "TXN-005", user: "Eve Taylor", type: "Deposit", method: "Perfect Money", amount: "+$350.00", status: "Completed", date: "2024-12-14 11:00" },
  ];

  const paymentGateways = [
    { name: "Cryptomus", status: "Active", transactions: 1245, revenue: "$124,500" },
    { name: "Binance", status: "Active", transactions: 987, revenue: "$98,700" },
    { name: "Perfect Money", status: "Active", transactions: 756, revenue: "$75,600" },
    { name: "PayTR", status: "Active", transactions: 543, revenue: "$54,300" },
    { name: "Paytm", status: "Active", transactions: 432, revenue: "$43,200" },
    { name: "PhonePe", status: "Inactive", transactions: 0, revenue: "$0" },
  ];

  return (
    <DashboardLayout role="superadmin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Wallet & Payments</h1>
          <p className="text-muted-foreground">Manage platform wallet and payment gateways</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Platform Balance"
            value="$284,920"
            icon={WalletIcon}
            trend={{ value: "+22.1%", positive: true }}
          />
          <KPICard
            title="Monthly Revenue"
            value="$45,680"
            icon={TrendingUp}
            trend={{ value: "+18.3%", positive: true }}
          />
          <KPICard
            title="Total Transactions"
            value="3,962"
            icon={CreditCard}
            trend={{ value: "+156", positive: true }}
          />
          <KPICard
            title="Avg. Transaction"
            value="$71.87"
            icon={DollarSign}
            trend={{ value: "+$3.20", positive: true }}
          />
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Gateways</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentGateways.map((gateway, idx) => (
              <div key={idx} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">{gateway.name}</h4>
                    <Badge variant={gateway.status === "Active" ? "default" : "secondary"} className="mt-1">
                      {gateway.status}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transactions:</span>
                    <span className="font-medium">{gateway.transactions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Revenue:</span>
                    <span className="font-semibold text-green-600">{gateway.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search by transaction ID or user..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="deposit">Deposit</SelectItem>
                <SelectItem value="withdrawal">Withdrawal</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-status">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date & Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                    <TableCell className="font-medium">{txn.user}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{txn.type}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{txn.method}</TableCell>
                    <TableCell className={`font-semibold ${txn.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {txn.amount}
                    </TableCell>
                    <TableCell>
                      <Badge variant={txn.status === "Completed" ? "default" : "secondary"}>
                        {txn.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{txn.date}</TableCell>
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

export default SuperAdminWallet;
