import Layout from "@/components/layout/Layout";
import { AlertTriangle, Phone, Clock, Shield, Heart, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResponsibleGamingPage = () => {
  return (
    <Layout>
      <article className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Jouez de manière responsable</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              JEU <span className="text-gradient-accent">RESPONSABLE</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Les paris sportifs doivent rester un divertissement. Nous vous accompagnons 
              pour parier de façon responsable et maîtrisée.
            </p>
          </header>

          {/* Warning Section */}
          <section className="mb-16">
            <div className="gradient-card rounded-3xl p-8 border border-accent/30 bg-accent/5">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-4">AVERTISSEMENT IMPORTANT</h2>
                  <p className="text-muted-foreground mb-4">
                    Les paris sportifs comportent des risques financiers et peuvent engendrer une dépendance. 
                    Ne pariez jamais plus que ce que vous pouvez vous permettre de perdre.
                  </p>
                  <p className="text-foreground font-medium">
                    Les paris sont strictement réservés aux personnes majeures (18 ans et plus).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Grid */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
              CONSEILS POUR PARIER RESPONSABLEMENT
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Fixez des limites de temps",
                  description: "Définissez une durée maximale pour vos sessions de paris et respectez-la.",
                },
                {
                  icon: Shield,
                  title: "Établissez un budget",
                  description: "Déterminez un montant que vous pouvez perdre sans impact sur votre quotidien.",
                },
                {
                  icon: Heart,
                  title: "Restez lucide",
                  description: "Ne pariez jamais sous l'influence de l'alcool ou lors de périodes de stress.",
                },
                {
                  icon: HelpCircle,
                  title: "Reconnaissez les signes",
                  description: "Soyez attentif aux comportements problématiques comme le fait de chasser les pertes.",
                },
                {
                  icon: Phone,
                  title: "Demandez de l'aide",
                  description: "N'hésitez pas à contacter les lignes d'aide si vous ressentez une perte de contrôle.",
                },
                {
                  icon: AlertTriangle,
                  title: "Prenez des pauses",
                  description: "Faites des pauses régulières et utilisez les outils d'auto-exclusion si nécessaire.",
                },
              ].map((tip) => (
                <div key={tip.title} className="p-6 rounded-2xl glass-effect">
                  <tip.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-xl text-foreground mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Help Resources */}
          <section>
            <div className="gradient-card rounded-3xl p-8 md:p-12 border border-border text-center">
              <h2 className="font-display text-3xl text-foreground mb-6">BESOIN D'AIDE ?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Si vous pensez avoir un problème avec les jeux d'argent, plusieurs ressources 
                sont à votre disposition pour vous aider.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:contact@comparatif-jeux.com">
                  <Button variant="hero">
                    contact@comparatif-jeux.com
                  </Button>
                </a>
                <a href="https://www.anj.fr" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    Site de l'ANJ
                  </Button>
                </a>
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                Accédez aux ressources d'aide directement via les liens ci-dessus pour obtenir un accompagnement personnalisé.
              </p>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default ResponsibleGamingPage;
