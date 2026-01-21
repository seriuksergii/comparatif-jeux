import Layout from "@/components/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              POLITIQUE DE <span className="text-gradient-primary">CONFIDENTIALITÉ</span>
            </h1>
            <p className="text-muted-foreground">Dernière mise à jour : Janvier 2026</p>
          </header>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Nous accordons une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et 
                protégeons vos informations lorsque vous utilisez notre site.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">2. Données Collectées</h2>
              <p className="text-muted-foreground mb-4">Nous pouvons collecter les types d'informations suivants :</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Données de navigation (adresse IP, type de navigateur, pages visitées)</li>
                <li>Données d'utilisation anonymisées via des cookies</li>
                <li>Informations que vous nous fournissez volontairement (formulaire de contact)</li>
              </ul>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">3. Utilisation des Données</h2>
              <p className="text-muted-foreground mb-4">Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Améliorer l'expérience utilisateur sur notre site</li>
                <li>Analyser les tendances de navigation</li>
                <li>Répondre à vos demandes de contact</li>
                <li>Assurer la sécurité de notre site</li>
              </ul>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">4. Vos Droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">5. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique ou pour exercer vos droits, 
                contactez-nous à : <a href="mailto:contact@comparatif-jeux.com" className="text-primary hover:underline">contact@comparatif-jeux.com</a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PrivacyPolicyPage;
