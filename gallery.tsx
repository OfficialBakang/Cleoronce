import { FadeIn } from "@/components/animations/FadeIn";
import { useGallery } from "@/hooks/use-gallery";

// High-quality fallback images
const FALLBACK_GALLERY = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80", styleName: "Boho Braids", price: "$120" },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1620002093390-1c0ea6143f2f?w=600&q=80", styleName: "Sleek Ponytail", price: "$55" },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1549429711-b1e06d152a55?w=600&q=80", styleName: "HD Lace Frontal", price: "$90" },
  { id: 4, imageUrl: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=600&q=80", styleName: "Fulani Braids", price: "$110" },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1605497787865-e6d4fd2828ff?w=600&q=80", styleName: "Silk Press", price: "$60" },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1583001809873-e84b8f041e24?w=600&q=80", styleName: "Bantu Knots", price: "$75" },
];

export default function Gallery() {
  const { data: gallery, isLoading } = useGallery();
  
  const displayGallery = gallery && gallery.length > 0 ? gallery : FALLBACK_GALLERY;

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Our Work</h2>
            <p className="text-muted-foreground text-lg">
              Get inspired by some of our favorite recent transformations. Hover to see style details.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayGallery.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-sm bg-background">
                <img 
                  src={item.imageUrl} 
                  alt={item.styleName} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-2xl font-medium mb-1">{item.styleName}</h3>
                    <p className="text-primary font-semibold">{item.price}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
