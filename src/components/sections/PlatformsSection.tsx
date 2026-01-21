import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Gift, Smartphone, Shield, TrendingUp } from "lucide-react";
import netbetLogo from "@/assets/netbet.webp";
import bwinLogo from "@/assets/bwin.webp";
import unibetLogo from "@/assets/unibet.webp";

interface Platform {
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  description: string;
  features: string[];
  sports: string[];
  badge?: string;
}

const platforms: Platform[] = [
  {
    name: "BetSport Pro",
    logo: netbetLogo,
    rating: 4.9,
    bonus: "Jusqu'à 150€ offerts",
    description: "La référence des paris sportifs en France avec les meilleures cotes sur le football et le tennis.",
    features: ["App mobile intuitive", "Retrait rapide 24h", "Service client 24/7", "Streaming live"],
    sports: ["Football", "Tennis", "Basketball", "Rugby"],
    badge: "Choix #1",
  },
  {
    name: "SportWin France",
    logo: bwinLogo,
    rating: 4.8,
    bonus: "100€ de freebets",
    description: "Spécialiste des paris en direct avec des cotes boostées sur la Ligue 1 et les compétitions européennes.",
    features: ["Paris en direct", "Cotes boostées", "Promotions hebdo", "Cash out"],
    sports: ["Football", "Tennis", "Hockey", "MMA"],
    badge: "Meilleur Live",
  },
  {
    name: "PariFoot Expert",
    logo: unibetLogo,
    rating: 4.7,
    bonus: "100% du 1er pari remboursé",
    description: "Expert des pronostics football avec des analyses détaillées et des statistiques avancées.",
    features: ["Stats avancées", "Pronostics experts", "Communauté active", "Multiples bonus"],
    sports: ["Football", "Cyclisme", "Tennis", "E-sport"],
    badge: "Bonus Top",
  },
];

const PlatformsSection = () => {
  return (
    <section id="plateformes" className="py-20" aria-labelledby="platforms-title">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Comparatif 2026
          </span>
          <h2 id="platforms-title" className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            TOP 3 DES PLATEFORMES
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sélectionnées pour leur fiabilité, leurs cotes compétitives et leur expérience utilisateur exceptionnelle.
          </p>
        </header>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <article
              key={platform.name}
              className={`relative gradient-card rounded-2xl p-6 border border-border transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2 ${
                index === 0 ? "lg:scale-105 glow-primary" : ""
              }`}
            >
              {/* Badge */}
              {platform.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                    index === 0 ? "gradient-primary text-primary-foreground" : "gradient-accent text-accent-foreground"
                  }`}>
                    {platform.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="pt-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-8 w-auto max-w-[140px] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="sr-only">{platform.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <span className="font-semibold text-foreground">{platform.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{platform.description}</p>
              </div>

              {/* Bonus */}
              <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-1">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary uppercase">Bonus de bienvenue</span>
                </div>
                <p className="font-display text-xl text-foreground">{platform.bonus}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase">Points forts</h4>
                <ul className="space-y-2">
                  {platform.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sports */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase">Sports disponibles</h4>
                <div className="flex flex-wrap gap-2">
                  {platform.sports.map((sport) => (
                    <span
                      key={sport}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button
                variant={index === 0 ? "hero" : "outline"}
                className="w-full"
              >
                Visiter le site
                <ExternalLink className="w-4 h-4" />
              </Button>
            </article>
          ))}
        </div>

        {/* Trust Indicators */}
        <footer className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span>Sites agréés ANJ</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-primary" />
            <span>Applications mobiles</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Cotes vérifiées quotidiennement</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PlatformsSection;
