import Layout from "@/components/layout/Layout";

const TermsPage = () => {
  return (
    <Layout>
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              TERMES ET <span className="text-gradient-primary">CONDITIONS</span>
            </h1>
            <p className="text-muted-foreground">Dernière mise à jour : Janvier 2026</p>
          </header>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">1. Objet du Site</h2>
              <p className="text-muted-foreground">
                Ce site a pour vocation de fournir des informations comparatives sur les plateformes 
                de paris sportifs légales en France. Nous ne proposons pas de services de paris 
                directement mais orientons les utilisateurs vers des opérateurs agréés par l'ANJ.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">2. Conditions d'Accès</h2>
              <p className="text-muted-foreground mb-4">
                L'accès à ce site est réservé aux personnes majeures (18 ans et plus). 
                En utilisant ce site, vous confirmez avoir l'âge légal requis.
              </p>
              <p className="text-muted-foreground">
                Les paris sportifs sont interdits aux mineurs. Les personnes sous interdiction 
                de jeux ne doivent pas accéder aux plateformes recommandées.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">3. Responsabilité</h2>
              <p className="text-muted-foreground mb-4">
                Les informations fournies sur ce site sont à titre indicatif. Nous nous efforçons 
                de maintenir ces informations à jour mais ne pouvons garantir leur exactitude absolue.
              </p>
              <p className="text-muted-foreground">
                Nous ne sommes pas responsables des pertes financières résultant de l'utilisation 
                des plateformes de paris sportifs vers lesquelles nous redirigeons.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">4. Propriété Intellectuelle</h2>
              <p className="text-muted-foreground">
                Tous les contenus présents sur ce site (textes, images, logos) sont protégés 
                par le droit d'auteur. Toute reproduction non autorisée est interdite.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">5. Liens Externes</h2>
              <p className="text-muted-foreground">
                Ce site contient des liens vers des sites tiers. Nous ne contrôlons pas le contenu 
                de ces sites et déclinons toute responsabilité quant à leur contenu.
              </p>
            </section>

            <section className="p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">6. Droit Applicable</h2>
              <p className="text-muted-foreground">
                Les présentes conditions sont régies par le droit français. Tout litige sera 
                soumis à la compétence exclusive des tribunaux français.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default TermsPage;
