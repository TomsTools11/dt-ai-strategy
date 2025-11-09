export default function Hero() {

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" style={{paddingTop: '150px', paddingBottom: '80px'}}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight px-4 py-2.5 max-w-5xl mx-auto">
            AI Integration Strategies for Power BI Data Visualization, AI Chatbots, and Voice AI.
          </h1>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
