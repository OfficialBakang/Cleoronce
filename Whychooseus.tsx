import { FadeIn } from "@/components/animations/FadeIn";
import { Wallet, Star, Clock, MousePointerClick } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Wallet className="w-6 h-6 text-primary" />,
      title: "Student-Friendly Prices",
      description: "Look expensive without spending your entire allowance. Special campus discounts available."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Professional Stylists",
      description: "Experienced braiders and stylists who understand and care for every hair texture."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Long-Lasting Styles",
      description: "Quality techniques and products ensure your protective style looks fresh for weeks."
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-primary" />,
      title: "Easy Online Booking",
      description: "Secure your spot in seconds. No endless texting back and forth required."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground leading-tight">
                Why Students Trust Us <br/> With Their Hair
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                We believe that self-care shouldn't be stressful or overly expensive. 
                Our salon was built specifically with the campus lifestyle in mind — 
                fast, affordable, and consistently flawless.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-medium text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
            <FadeIn direction="left" className="h-full">
              {/* salon interior or happy client */}
              <img 
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy client" 
                className="w-full h-full object-cover"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl opacity-60"></div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
