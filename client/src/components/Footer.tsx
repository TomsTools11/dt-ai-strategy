import { APP_LOGO } from "@/const";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container py-16">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can strengthen your market position and drive growth.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.location.href = 'mailto:info@designstouch.com'}
          >
            Request a Consultation
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src={APP_LOGO} 
              alt="DesignsTouch" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Delivering Digital Innovation through AI-powered solutions for Data Visualization, 
              Chatbots, and Voice AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Our AI Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("power-bi")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Power BI + Data Visualization
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("chatbots")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Chatbot Integration
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("voice-ai")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Voice AI Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>201 Sixth Street, Ste 401</p>
                  <p>Racine, Wisconsin 53403</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>930 E Knapp St. #25</p>
                  <p>Milwaukee, WI 53202</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:414-928-5111" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  414.928.5111
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@designstouch.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@designstouch.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DesignsTouch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
