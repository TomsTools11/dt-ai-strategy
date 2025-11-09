import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src={APP_LOGO} 
              alt="DesignsTouch" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("power-bi")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Data Visualization
            </button>
            <button
              onClick={() => scrollToSection("chatbots")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              AI Chatbots
            </button>
            <button
              onClick={() => scrollToSection("voice-ai")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Voice AI
            </button>
          </div>

          <div>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
