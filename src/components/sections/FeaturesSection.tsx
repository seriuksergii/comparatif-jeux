import { Shield, Clock, Award, Headphones, TrendingUp, CreditCard } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sécurité Maximale",
    description: "Plateformes agréées par l'ANJ avec protection des données et paiements sécurisés.",
  },
  {
    icon: TrendingUp,
    title: "Meilleures Cotes",
    description: "Comparaison en temps réel pour vous garantir les cotes les plus avantageuses.",
  },
  {
    icon: Clock,
    title: "Retraits Rapides",
    description: "Recevez vos gains en moins de 24 heures avec les méthodes de paiement populaires.",
  },
  {
    icon: CreditCard,
    title: "Bonus Exclusifs",
    description: "Accédez à des offres de bienvenue uniques et des promotions régulières.",
  },
  {
    icon: Award,
    title: "Expertise Française",
    description: "Des plateformes conçues pour le marché français avec support en français.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Assistance client disponible à tout moment par chat et email pour répondre à vos questions.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative" aria-labelledby="features-title">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nos Avantages
          </span>
          <h2 id="features-title" className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            POURQUOI NOUS CHOISIR
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous sélectionnons uniquement les meilleures plateformes pour une expérience de paris optimale.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group p-6 rounded-2xl glass-effect transition-all duration-300 hover:bg-muted/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
