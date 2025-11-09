import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Zap, Clock, Target, TrendingUp, CheckCircle2, Rocket } from "lucide-react";

export default function ChatbotsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Internal Transformation",
      description: "Utilizing an AI chatbot on designstouch.com to intelligently pre-qualify, route, and educate the wide variety of inbound leads you attract (from startups to government agencies)."
    },
    {
      icon: TrendingUp,
      title: "New Service Offering",
      description: "Establishing a new, high-margin \"AI Conversational Strategy\" service to upsell to your extensive existing and future client base, moving beyond a simple technical add-on to a strategic business tool."
    }
  ];

  const recommendations = [
    {
      number: "1",
      title: "Develop an AI Lead Qualification Bot",
      description: "Implement an intelligent chatbot on your own website to pre-qualify prospects, route high-value leads, and automate consultation scheduling."
    },
    {
      number: "2",
      title: "Create an \"AI Knowledge Base Bot\"",
      description: "Deploy an AI assistant trained on your extensive blog, service pages, and case studies to act as a 24/7 technical pre-sales resource."
    },
    {
      number: "3",
      title: "Package and Upsell \"AI-Powered Chatbots\"",
      description: "Formalize a new service line that leverages your internal success and existing partnerships (e.g., LiveChat) to become an AI implementation partner for your clients."
    }
  ];

  const leadQualificationApps = [
    {
      title: "Triage & Qualification",
      description: "The bot can ask key questions: \"Are you a startup, an established business, or a non-profit?\" \"Are you looking for a new website, SEO services, or a mobile app?\""
    },
    {
      title: "Intelligent Routing",
      description: "Based on answers, the bot can escalate leads appropriately: A \"government agency\" lead can be flagged for a senior strategist."
    },
    {
      title: "Automated Scheduling",
      description: "For qualified leads (e.g., correct industry, budget threshold met), the bot can integrate directly with calendars to schedule a consultation, eliminating email back-and-forth."
    }
  ];

  const businessImpacts = [
    {
      icon: Zap,
      title: "Faster Speed-to-Lead",
      description: "Engage high-value prospects immediately, before they leave your site or contact a competitor"
    },
    {
      icon: Target,
      title: "Automated Filtering",
      description: "Automatically filter out unqualified or \"tire-kicker\" leads, allowing your team to focus on serious prospects"
    },
    {
      icon: Clock,
      title: "Reduced Administrative Burden",
      description: "Significantly reduce time spent by sales and strategy teams on initial qualification and scheduling"
    }
  ];

  const serviceApplications = [
    {
      title: "E-commerce AI Assistant",
      description: "For Shopify and e-commerce clients, AI bots that act as 24/7 personal shoppers, check order status, and handle return requests."
    },
    {
      title: "B2B Lead Gen Bot",
      description: "Replicate the exact AI Lead Qualification bot for your B2B clients (e.g., Manufacturers or Professional Services clients)."
    },
    {
      title: "Knowledge-Base Bot",
      description: "Package and sell the AI Scoping Assistant as a \"Support & Knowledge Bot,\" trained on your client's own documentation, products, and FAQs."
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Internal Pilot",
      timeline: "Months 1-3",
      description: "Implement the AI-Powered Lead Qualification Bot on designstouch.com. Define and codify clear logic for qualifying and routing leads. Integrate with sales-team calendars for automated booking."
    },
    {
      phase: "Phase 2",
      title: "Service Packaging & Launch",
      timeline: "Months 4-6",
      description: "Formally package the \"AI Strategy & Chatbot Implementation\" service. Create service tiers (Basic Chat Setup, B2B Lead-Gen Bot, E-commerce AI Assistant). Use the success of your own site's bot as the primary marketing tool."
    },
    {
      phase: "Phase 3",
      title: "Advanced Integration",
      timeline: "Months 6+",
      description: "Develop and deploy the AI-Powered Service Scoping Assistant. Build the RAG (Retrieval-Augmented Generation) system. Add \"AI Knowledge-Base Bot\" as a new premium tier."
    }
  ];

  return (
    <section id="chatbots" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Service #2</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            AI Chatbot Integration Strategy
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform Lead Generation and Create New Revenue Streams
          </p>
        </div>

        {/* Dual Benefit */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Dual Benefit: Internal Transformation and New Service Offering
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Three Strategic Recommendations */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Three Strategic Recommendations for AI Chatbot Integration
          </h3>
          
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      {rec.number}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{rec.title}</CardTitle>
                      <CardDescription className="text-base">{rec.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Opportunity #1: Lead Qualification */}
        <div className="mb-20 bg-background rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Opportunity #1: AI-Powered Lead Qualification and Routing
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-muted/50 p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-3 text-foreground">Current State</h4>
              <p className="text-muted-foreground">
                All visitors, regardless of intent or value, are funneled to a static contact form, 
                creating a manual filtering bottleneck.
              </p>
            </div>
            <div className="bg-primary/10 p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-3 text-primary">AI-Enhanced State</h4>
              <p className="text-foreground">
                A 24/7 AI chatbot proactively engages visitors, categorizes their needs, and funnels 
                them to the correct resource or team member.
              </p>
            </div>
          </div>

          <h4 className="text-xl font-bold mb-6">Specific Applications</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {leadQualificationApps.map((app, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <h4 className="text-xl font-bold mb-6">Business Impact</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {businessImpacts.map((impact, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <impact.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold mb-2">{impact.title}</h5>
                  <p className="text-sm text-muted-foreground">{impact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunity #3: AI Strategy Service */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Opportunity #3: AI Strategy and Chatbot Implementation Service
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Create a formal "AI Conversational Strategy" package. This moves the service from a simple 
            "chat widget" to a strategic, revenue-generating business tool for your clients.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {serviceApplications.map((app, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-primary/10 p-6 rounded-xl">
            <h4 className="font-bold mb-4 text-lg">Business Impact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  <strong>Creates a New, Recurring Revenue Stream:</strong> Transform AI chatbot implementation 
                  from a one-time technical add-on into an ongoing strategic service
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  <strong>Deepens Client Relationships:</strong> Offer ongoing AI optimization and strategy, 
                  creating stronger client partnerships
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  <strong>Differentiates DesignsTouch from Competitors:</strong> Stand out from competitors 
                  who only offer basic web design
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Implementation Roadmap
          </h3>
          
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{phase.phase}: {phase.title}</CardTitle>
                        <span className="text-sm px-3 py-1 bg-muted rounded-full">{phase.timeline}</span>
                      </div>
                      <CardDescription className="text-base">{phase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
