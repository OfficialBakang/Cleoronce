import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useServices } from "@/hooks/use-services";
import { Scissors } from "lucide-react";

// Fallback data in case the API is empty or failing, to guarantee a beautiful UI
const FALLBACK_SERVICES = [
  {
    id: 1,
    name: "Knotless Braids",
    description: "Painless, lightweight, and versatile. Our knotless box braids protect your natural hair while giving you a flawless look.",
    price: "From $85",
    imageUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    category: "Braids"
  },
  {
    id: 2,
    name: "Wig Installation",
    description: "Flawless lace melting and styling. Get a natural-looking hairline that lasts for weeks with our premium installs.",
    price: "From $65",
    imageUrl: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&q=80",
    category: "Wigs"
  },
  {
    id: 3,
    name: "Natural Hair Styling",
    description: "Silk presses, twist-outs, and updos that embrace and elevate your natural texture with hydrating products.",
    price: "From $45",
    imageUrl: "https://images.unsplash.com/photo-1512496115851-a90fb38ba796?w=800&q=80",
    category: "Natural"
  },
  {
    id: 4,
    name: "Deep Treatments",
    description: "Revive damaged or dry hair with our steam hydration and protein treatments, customized for your curl pattern.",
    price: "From $30",
    imageUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
    category: "Treatments"
  }
];

export default function Services() {
  const { data: services, isLoading } = useServices();
  
  // Use API data if available, otherwise use gorgeous fallback data
  const displayServices = services && services.length > 0 ? services : FALLBACK_SERVICES;

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Our Signature Services</h2>
            <p className="text-muted-foreground text-lg">
              Premium styling at student-friendly prices. Explore our most popular treatments designed for your crown.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayServices.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div className="bg-background rounded-3xl overflow-hidden shadow-lg shadow-black/5 border border-border/50 group hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-foreground shadow-sm">
                    {service.price}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2 block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button 
                    className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Scissors className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-180" />
                    Book This Style
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
