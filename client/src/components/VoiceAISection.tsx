import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Headphones, CheckCircle2, Clock, TrendingUp, Users, Zap } from "lucide-react";

export default function VoiceAISection() {
  const transformations = [
    {
      icon: Phone,
      number: "1",
      title: "24/7 Intelligent Lead Qualification",
      description: "Voice AI agent answers all inbound calls, qualifies prospects based on service needs and budget, and routes only high-quality, pre-vetted leads to the human sales team."
    },
    {
      icon: Calendar,
      number: "2",
      title: "Automated Consultation Scheduling",
      description: "Enable the Voice AI agent to book qualified leads directly into the sales team's calendars, eliminating the time-consuming back-and-forth of manual scheduling."
    },
    {
      icon: Headphones,
      number: "3",
      title: "Client Support Triage",
      description: "Empower the Voice AI to identify existing clients versus new leads and route support requests to the correct resource or ticketing system."
    }
  ];

  const businessImpacts = [
    "Significant reduction in administrative overhead",
    "Increased lead conversion rates by providing instant, 24/7 responses",
    "Freed-up team time to focus on high-value, billable client work"
  ];

  const leadQualificationApps = [
    {
      title: "Service Triage",
      description: "Asks, \"Are you calling about a new project or support for an existing one?\""
    },
    {
      title: "Needs Assessment",
      description: "Asks, \"Are you interested in a new website, SEO, or another service?\""
    },
    {
      title: "Scope & Budget",
      description: "Asks, \"Can you tell me a bit about your business and your approximate budget?\""
    },
    {
      title: "Intelligent Routing",
      description: "Identifies and flags high-value leads for immediate sales team follow-up while filtering out low-intent calls"
    }
  ];

  const qualificationImpacts = [
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduction in time spent by senior staff on initial, unqualified calls"
    },
    {
      icon: TrendingUp,
      title: "Improved Conversion",
      description: "Captures and qualifies leads 24/7, providing the instant response modern customers expect"
    },
    {
      icon: Users,
      title: "Lead Quality",
      description: "The sales team only receives leads that are pre-vetted, making their conversations more efficient and effective"
    }
  ];

  const schedulingApps = [
    {
      title: "Calendar Integration",
      description: "Integrates directly with team calendars (Google Calendar, Microsoft 365)"
    },
    {
      title: "Automated Booking",
      description: "Books the appointment in real-time, sends calendar invite to both prospect and team member, adds prospect details to meeting notes"
    },
    {
      title: "Self-Service Rescheduling",
      description: "Can handle rescheduling requests automatically"
    }
  ];

  const schedulingImpacts = [
    {
      title: "Efficiency Gains",
      description: "Significant reduction in time spent on manual scheduling and coordination"
    },
    {
      title: "Faster Sales Cycle",
      description: "Compresses the time from \"initial interest\" to \"booked meeting\" from days to minutes"
    },
    {
      title: "Improved Prospect Experience",
      description: "Delivers an impressive, modern, and frictionless booking process"
    }
  ];

  const supportTriageApps = [
    {
      title: "Intent Recognition",
      description: "The agent can be trained to understand different support intents: \"technical,\" \"billing,\" \"marketing report,\" or \"website change\""
    },
    {
      title: "Urgency-Based Escalation",
      description: "Urgent Issues: (\"My site is down!\") Immediately escalate to support technician. Non-Urgent Issues: (\"I have a question on my invoice\") Route to billing department or create a support ticket"
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation and Quick Wins",
      timeline: "Months 1-2",
      description: "Implement Intelligent Lead Intake and Automated Consultation Scheduling. Map your ideal lead qualification questions. Select a Voice AI platform that integrates with your phone system and calendars.",
      metrics: ["Time saved on manual qualification and scheduling", "Number of qualified consultations booked by the AI"]
    },
    {
      phase: "Phase 2",
      title: "Expansion & Support",
      timeline: "Months 3-4",
      description: "Implement Client Support Triage. Add logic to identify existing clients. Build conversational paths for different support types (technical, billing, etc.). Integrate with your internal ticketing or support process.",
      metrics: ["Reduction in support calls handled by the sales team", "Client satisfaction with the support process"]
    },
    {
      phase: "Phase 3",
      title: "Advanced Integration",
      timeline: "Months 6+",
      description: "Add outbound capabilities and full CRM integration. Have the Voice AI agent place automated outbound calls for appointment reminders, reducing no-shows. Integrate the agent fully with your CRM.",
      metrics: ["Reduction in client no-show rate", "Data completeness and accuracy in CRM"]
    }
  ];

  const successFactors = [
    {
      number: "1",
      title: "Start with a Clear Goal",
      description: "The goal for Phase 1 is not to build an AI that can do everything. The goal is to stop your sales team from spending time on low-value qualification calls and manual scheduling."
    },
    {
      number: "2",
      title: "Define Your \"Happy Path\"",
      description: "Formally script the ideal qualification conversation. Identify the 3-5 questions that must be answered to make a lead \"qualified.\""
    },
    {
      number: "3",
      title: "Team Training & Trust",
      description: "The sales team must be trained to trust the AI's \"warm handoff.\" They will be receiving calendar invites for fully qualified, booked-and-confirmed leads."
    },
    {
      number: "4",
      title: "Embrace the \"Bouncer\" Model",
      description: "The Voice AI agent acts as a 24/7 \"bouncer\" for your sales team. It politely filters out everyone who isn't a good fit and \"rolls out the red carpet\" for your ideal clients."
    }
  ];

  return (
    <section id="voice-ai" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Service #3</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Voice AI Integration Strategy
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforming Lead Generation and Client Management
          </p>
        </div>

        {/* Three Main Transformations */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Voice AI Transforms Lead Generation and Client Management
          </h3>
          
          <div className="space-y-6 mb-12">
            {transformations.map((transform, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <transform.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-primary">{transform.number}</span>
                        <CardTitle className="text-xl">{transform.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{transform.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-primary/10 p-8 rounded-xl">
            <h4 className="text-xl font-bold mb-4">Anticipated Business Impact</h4>
            <div className="space-y-3">
              {businessImpacts.map((impact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunity #1: Intelligent Lead Qualification */}
        <div className="mb-20 bg-muted/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Opportunity #1: 24/7 Intelligent Lead Qualification
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-background p-6 rounded-xl border-2 border-border">
              <h4 className="text-lg font-bold mb-3 text-foreground">Current State</h4>
              <p className="text-muted-foreground">
                A prospect calls and may speak to a human, fill out a webform and wait, or go to voicemail 
                after hours. A human must then manually conduct an initial qualification call.
              </p>
            </div>
            <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary">
              <h4 className="text-lg font-bold mb-3 text-primary">AI-Enhanced State</h4>
              <p className="text-foreground">
                The Voice AI agent answers instantly, 24/7. It uses conversational AI to gather key qualifying 
                information before a human is involved, ensuring only high-quality leads reach the sales team.
              </p>
            </div>
          </div>

          <h4 className="text-xl font-bold mb-6">Specific Applications</h4>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
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
            {qualificationImpacts.map((impact, index) => (
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

        {/* Opportunity #2: Automated Scheduling */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Opportunity #2: Automated Consultation Scheduling
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            After the Voice AI agent qualifies a lead, it immediately books the consultation on the relevant 
            team member's calendar. The agent says, "Based on your interest in a new e-commerce site, you should 
            speak with our specialist, Maria. She has availability tomorrow at 10:00 AM or 2:30 PM. Would either 
            of those times work for you?"
          </p>
          
          <h4 className="text-xl font-bold mb-6">Specific Applications</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {schedulingApps.map((app, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <h4 className="text-xl font-bold mb-6">Business Impact</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {schedulingImpacts.map((impact, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{impact.title}</CardTitle>
                  <CardDescription>{impact.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Opportunity #3: Support Triage */}
        <div className="mb-20 bg-muted/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Opportunity #3: Inbound Client Support Triage
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-background p-6 rounded-xl border-2 border-border">
              <h4 className="text-lg font-bold mb-3 text-foreground">Current State</h4>
              <p className="text-muted-foreground">
                An existing client with a support issue calls the same number as new leads. A human must manually 
                identify them, understand the issue, and route them to the right person or ticketing system.
              </p>
            </div>
            <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary">
              <h4 className="text-lg font-bold mb-3 text-primary">AI-Enhanced State</h4>
              <p className="text-foreground">
                The agent's first question is, "Thanks for calling DesignsTouch. Are you a new or existing client?" 
                If "existing," the agent can ask for their name or business name and the nature of their call.
              </p>
            </div>
          </div>

          <h4 className="text-xl font-bold mb-6">Specific Applications</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {supportTriageApps.map((app, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Implementation Roadmap
          </h3>
          
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{phase.phase}: {phase.title}</CardTitle>
                        <span className="text-sm px-3 py-1 bg-muted rounded-full">{phase.timeline}</span>
                      </div>
                      <CardDescription className="text-base mb-4">{phase.description}</CardDescription>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">Metrics to Track:</p>
                        <ul className="space-y-1">
                          {phase.metrics.map((metric, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Critical Success Factors */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Four Critical Success Factors for Voice AI Implementation
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {successFactors.map((factor, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-lg font-bold">
                      {factor.number}
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{factor.title}</CardTitle>
                      <CardDescription className="text-base">{factor.description}</CardDescription>
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
