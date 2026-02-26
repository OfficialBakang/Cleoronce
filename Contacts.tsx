import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Map */}
          <FadeIn direction="right" className="h-[400px] lg:h-auto min-h-[400px] w-full rounded-[2rem] overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11234.331256338874!2d-122.42873155!3d37.7719602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1563821033282!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </FadeIn>

          {/* Right Column: Contact Details */}
          <FadeIn direction="left" className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">
              Visit Us On Campus
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Student Union Building, Room 204<br/>
                    University Campus Walk<br/>
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Fri: 9:00 AM - 7:00 PM<br/>
                    Saturday: 10:00 AM - 5:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background rounded-2xl border border-border">
              <h4 className="font-medium mb-2">Have a question about a style?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Send us a picture on WhatsApp for a quick consultation and price quote.
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                className="w-full sm:w-auto rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </Button>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
