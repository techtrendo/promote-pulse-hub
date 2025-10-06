import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export const KPICard = ({ title, value, icon: Icon, trend, className = "" }: KPICardProps) => {
  return (
    <Card className={`glass p-6 hover:glass-strong transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold gradient-text">{value}</p>
          {trend && (
            <div className="flex items-center gap-1 text-sm">
              <span className={trend.positive ? "text-green-400" : "text-red-400"}>
                {trend.positive ? "↑" : "↓"} {trend.value}
              </span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
        <div className="p-3 rounded-xl bg-primary/10 glow-primary">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
