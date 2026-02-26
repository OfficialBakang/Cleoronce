import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarCheck } from "lucide-react";

export default function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* beautiful black woman with braids portrait */}
        <img 
          src="https://pixabay.com/get/g9420d0ded9c0e4dababdacf2a82a54d0c47a2c37026780581af922b25b13d91d0e7fc10f05d82b7cf8b9ad9b58c3c05230cf95ade681b1dfb08937407b4b2abe_1280.jpg" 
          alt="Beautiful natural hair salon" 
          className="w-full h-full object-cover object-top scale-105 animate-in zoom-in duration-1000"
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col md:items-start items-center text-center md:text-left w-full">
        <FadeIn delay={0.1} className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6 border border-primary/20 backdrop-blur-sm">
            Top Rated Campus Salon
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-6">
            Affordable <br/>
            <span className="text-primary italic">Campus</span> Hair Salon
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl font-light">
            Braids, Wig Installs & Natural Hair Care — Look flawless for class without breaking the bank. Book instantly online.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button 
              size="lg" 
              onClick={handleBooking}
              className="w-full sm:w-auto rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 group"
            >
              <CalendarCheck className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book Appointment
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto rounded-full px-8 py-6 text-base bg-background/50 backdrop-blur-sm border-border hover:bg-background/80 transition-all hover:-translate-y-1 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
              Chat on WhatsApp
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
