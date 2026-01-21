import { Button } from "@/components/ui/button";
import { Star, Shield, Zap, Award, TrendingUp, Users } from "lucide-react";
import heroSportsBg from "@/assets/hero-sports-bg.jpg";

const HeroSection = () => {
  const scrollToPlatforms = () => {
    const element = document.getElementById("plateformes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSportsBg}
          alt="Paris sportifs en action"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Top 3 Plateformes 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6 animate-slide-up">
            LES MEILLEURS{" "}
            <span className="text-gradient-primary">PARIS SPORTIFS</span>{" "}
            EN FRANCE
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Comparez les plateformes de paris sportifs légales et agréées ANJ. 
            Profitez des meilleures cotes et bonus pour vos pronostics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" onClick={scrollToPlatforms}>
              Découvrir les Plateformes
            </Button>
            {/* <Button variant="outline" size="xl">
              Comparer les Bonus
            </Button> */}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Shield, label: "100% Légal", sublabel: "Agréé ANJ" },
              { icon: Zap, label: "Inscription Rapide", sublabel: "5 minutes" },
              { icon: TrendingUp, label: "Meilleures Cotes", sublabel: "Comparées" },
              { icon: Users, label: "+500K", sublabel: "Parieurs" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl glass-effect"
              >
                <badge.icon className="w-6 h-6 text-primary mb-2" />
                <span className="font-semibold text-foreground text-sm">{badge.label}</span>
                <span className="text-muted-foreground text-xs">{badge.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
