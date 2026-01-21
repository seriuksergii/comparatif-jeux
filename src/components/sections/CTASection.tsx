import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Star } from "lucide-react";

const CTASection = () => {
  const scrollToPlatforms = () => {
    const element = document.getElementById("plateformes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20" aria-labelledby="cta-title">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden gradient-card border border-border p-8 md:p-12 lg:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center glow-primary animate-float">
                <Trophy className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow text-center lg:text-left">
              <h2 id="cta-title" className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                PRÊT À COMMENCER ?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-6">
                Rejoignez plus de 500 000 parieurs français qui font confiance à nos recommandations 
                pour des paris sportifs sécurisés et responsables.
              </p>
              
              {/* Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
                <span className="ml-2 text-muted-foreground">4.8/5 basé sur 12 000+ avis</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <Button variant="hero" size="xl" className="group" onClick={scrollToPlatforms}>
                Voir les Plateformes
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
