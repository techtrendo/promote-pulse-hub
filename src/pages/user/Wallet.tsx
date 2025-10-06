import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KPICard } from "@/components/KPICard";
import { Wallet as WalletIcon, DollarSign, TrendingUp, CreditCard } from "lucide-react";

const UserWallet = () => {
  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Wallet</h1>
          <p className="text-muted-foreground">Manage your funds and transactions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KPICard title="Current Balance" value="$1,245.50" icon={WalletIcon} />
          <KPICard title="Total Spent" value="$3,890.00" icon={DollarSign} />
          <KPICard title="This Month" value="+$450.00" icon={TrendingUp} trend={{ value: "+18%", positive: true }} />
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Add Funds</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <CreditCard className="w-6 h-6" />
              <span>Cryptomus</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <CreditCard className="w-6 h-6" />
              <span>Binance</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <CreditCard className="w-6 h-6" />
              <span>PayTR</span>
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserWallet;
