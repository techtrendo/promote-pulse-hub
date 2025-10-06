import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, ShieldCheck, User, Zap, BarChart3, Bot, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const roles = [
    {
      name: "Super Admin",
      icon: Crown,
      description: "Full platform control with admin & user management",
      features: ["Manage all admins", "Global analytics", "Payment control", "System settings"],
      path: "/superadmin",
      gradient: "from-primary to-primary-glow"
    },
    {
      name: "Admin",
      icon: ShieldCheck,
      description: "Manage assigned users and approve campaigns",
      features: ["User management", "Ad approval", "Support tickets", "Regional control"],
      path: "/admin",
      gradient: "from-accent to-accent-glow"
    },
    {
      name: "User",
      icon: User,
      description: "Promote SMM panels and run automation",
      features: ["Add SMM panels", "Create ads", "Automation tools", "Analytics"],
      path: "/user",
      gradient: "from-primary-glow to-accent"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/20 glow-primary">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Promote SMM</h1>
              <p className="text-xs text-muted-foreground">SaaS Platform for SMM Panel Management</p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Promote, Manage & Automate Your SMM Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Centralized platform for SMM panel promotion, ad management, and marketing automation with real-time analytics
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary text-lg px-8">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="glass text-lg px-8">
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Megaphone, title: "Ad Management", desc: "Create & manage promotional campaigns" },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Track performance and growth" },
              { icon: Bot, title: "Automation Tools", desc: "Telegram & WhatsApp campaigns" },
              { icon: Zap, title: "SMM Panel Sync", desc: "Auto-sync V1/V2/V3 APIs" }
            ].map((feature, idx) => (
              <Card key={idx} className="glass p-6 text-center hover:glass-strong transition-all duration-300 hover:scale-105">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 glow-primary mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Role Selection */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold gradient-text mb-4">Choose Your Dashboard</h3>
            <p className="text-muted-foreground text-lg">Select a role to explore the platform (demo mode)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <Card key={idx} className="glass p-8 hover:glass-strong transition-all duration-300 hover:scale-105 group">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${role.gradient} mb-6 glow-primary group-hover:animate-glow-pulse`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{role.name}</h4>
                  <p className="text-muted-foreground mb-6">{role.description}</p>
                  <ul className="space-y-2 mb-6">
                    {role.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-primary/20 hover:bg-primary/30 glow-primary"
                    onClick={() => navigate(role.path)}
                  >
                    Enter Dashboard
                  </Button>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 text-center border-t border-border/50">
          <p className="text-muted-foreground">
            © 2025 Promote SMM. A modern SaaS platform for SMM panel management.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
