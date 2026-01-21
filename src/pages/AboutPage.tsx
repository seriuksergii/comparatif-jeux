import Layout from "@/components/layout/Layout";
import { Users, Target, Award, Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <article className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              À PROPOS DE <span className="text-gradient-primary">NOUS</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Nous sommes une équipe passionnée de sport et d'analyse, dédiée à vous 
              guider vers les meilleures plateformes de paris sportifs en France.
            </p>
          </header>

          {/* Mission */}
          <section className="mb-20">
            <div className="gradient-card rounded-3xl p-8 md:p-12 border border-border">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                    NOTRE MISSION
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Notre objectif est simple : vous aider à faire des choix éclairés dans 
                    l'univers des paris sportifs. Nous analysons, testons et comparons les 
                    plateformes pour vous présenter uniquement les meilleures options.
                  </p>
                  <p className="text-muted-foreground">
                    Chaque plateforme que nous recommandons est agréée par l'Autorité Nationale 
                    des Jeux (ANJ), garantissant ainsi votre sécurité et la légalité de vos paris.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, label: "Objectivité", value: "100%" },
                    { icon: Users, label: "Utilisateurs", value: "500K+" },
                    { icon: Award, label: "Années d'expertise", value: "8+" },
                    { icon: Shield, label: "Sites testés", value: "50+" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-6 rounded-xl glass-effect text-center">
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-display text-2xl text-foreground">{stat.value}</p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
              NOS VALEURS
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Transparence",
                  description: "Nous vous expliquons clairement nos critères de sélection et nos méthodes d'évaluation.",
                },
                {
                  title: "Indépendance",
                  description: "Nos avis sont objectifs et ne sont pas influencés par les plateformes que nous présentons.",
                },
                {
                  title: "Responsabilité",
                  description: "Nous promouvons le jeu responsable et sensibilisons aux risques liés aux paris.",
                },
              ].map((value) => (
                <div key={value.title} className="p-6 rounded-2xl glass-effect">
                  <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
