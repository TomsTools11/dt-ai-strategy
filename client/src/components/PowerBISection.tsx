import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Building2, ShoppingCart, TrendingUp, BarChart3, Brain, Zap, LineChart } from "lucide-react";

export default function PowerBISection() {
  const opportunities = [
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      subtitle: "Highest Revenue Potential",
      color: "text-primary"
    },
    {
      icon: Building2,
      title: "Government/Nonprofit Reporting",
      subtitle: "Quick Win Opportunity",
      color: "text-primary"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Analytics",
      subtitle: "Natural Extension",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Marketing Campaign Reporting",
      subtitle: "Client Retention Tool",
      color: "text-primary"
    }
  ];

  const priorities = [
    { rank: "#1", market: "Manufacturing & Industrial", timeline: "Short-term", revenue: "High" },
    { rank: "#2", market: "Government/Nonprofit Reporting", timeline: "Short-term", revenue: "Medium" },
    { rank: "#3", market: "E-commerce Analytics", timeline: "Medium-term", revenue: "Medium-High" },
    { rank: "#4", market: "Marketing Campaign Reporting", timeline: "Short-term", revenue: "Medium" }
  ];

  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "Real-time Production Monitoring",
      description: "AI anomaly detection identifies issues before they impact production"
    },
    {
      icon: Zap,
      title: "Predictive Maintenance Alerts",
      description: "Using Azure ML + Power BI to prevent equipment failures"
    },
    {
      icon: LineChart,
      title: "Supply Chain Visibility",
      description: "AI demand forecasting dashboards optimize inventory and logistics"
    },
    {
      icon: Brain,
      title: "Executive KPI Dashboards",
      description: "Natural language Q&A with Power BI Q&A feature for C-suite insights"
    }
  ];

  const serviceTiers = [
    {
      tier: "Essentials",
      description: "Basic production dashboards",
      features: "Standard KPIs, real-time data"
    },
    {
      tier: "Professional",
      description: "AI-powered analytics",
      features: "Predictive analytics, automated alerts"
    },
    {
      tier: "Enterprise",
      description: "Full AI/ML integration",
      features: "Custom ML models, C-suite dashboards"
    }
  ];

  return (
    <section id="power-bi" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Service #1</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Power BI + AI Data Visualization Strategy
          </h2>
          <p className="text-lg text-muted-foreground">
            Leveraging Business Intelligence to Strengthen Market Position
          </p>
        </div>

        {/* Four High-Value Market Opportunities */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Four High-Value Market Opportunities
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Power BI integrated with AI-driven analytics represents a strategic opportunity to differentiate 
            DesignsTouch in the Wisconsin market. This analysis identifies high-value service integration 
            opportunities, prioritized by revenue potential and competitive advantage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opp, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                    <opp.icon className={`w-8 h-8 ${opp.color}`} />
                  </div>
                  <CardTitle className="text-lg">{opp.title}</CardTitle>
                  <CardDescription>{opp.subtitle}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Priorities Table */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Strategic Priorities Ranked by Impact and Timeline
          </h3>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-semibold">Priority</th>
                  <th className="p-4 text-left font-semibold">Target Market</th>
                  <th className="p-4 text-left font-semibold">Timeline</th>
                  <th className="p-4 text-left font-semibold">Revenue Potential</th>
                </tr>
              </thead>
              <tbody>
                {priorities.map((priority, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <span className="text-xl font-bold text-primary">{priority.rank}</span>
                    </td>
                    <td className="p-4 font-medium">{priority.market}</td>
                    <td className="p-4">{priority.timeline}</td>
                    <td className="p-4">{priority.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Manufacturing Focus */}
        <div className="mb-20 bg-muted/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Priority #1: Manufacturing & Industrial Clients
          </h3>
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 rounded-lg">
            <span className="text-sm font-bold text-primary">STRONGEST FIT — HIGHEST REVENUE POTENTIAL</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">Existing Deep Expertise</h4>
              <p className="text-muted-foreground">
                DesignsTouch specializes in manufacturing with proven case studies in product lifecycle 
                management and enterprise system integration.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">ERP/CRM Integration Experience</h4>
              <p className="text-muted-foreground">
                Explicitly mentioned capability to integrate enterprise systems provides a strong foundation 
                for advanced analytics solutions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">Complex Data Challenges</h4>
              <p className="text-muted-foreground">
                Manufacturing clients have operational data scattered across systems—production metrics, 
                supply chain KPIs, quality control, and inventory management.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">Wisconsin Manufacturing Concentration</h4>
              <p className="text-muted-foreground">
                Strong local market presence creates dense target opportunities in the Wisconsin manufacturing sector.
              </p>
            </div>
          </div>
        </div>

        {/* AI-Powered Dashboard Features */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            AI-Powered Manufacturing Dashboards Transform Operations Data
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Turn your operational data into actionable insights with AI-enhanced Power BI dashboards
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {dashboardFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Three-Tier Service Model */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Three-Tier Service Model Scales from Basics to Enterprise AI
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {serviceTiers.map((tier, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{tier.tier}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tier.features}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-primary/10 rounded-xl text-center">
            <p className="font-semibold text-foreground">
              <span className="text-primary">Competitive Edge:</span> Brew City Marketing has NO manufacturing 
              specialization—DesignsTouch owns this vertical in Wisconsin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
