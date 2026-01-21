import Layout from "@/components/layout/Layout";
import { Cookie, Settings, Shield } from "lucide-react";

const CookiePolicyPage = () => {
  return (
    <Layout>
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              POLITIQUE DE <span className="text-gradient-primary">COOKIES</span>
            </h1>
            <p className="text-muted-foreground">Dernière mise à jour : Janvier 2026</p>
          </header>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl text-foreground">Qu'est-ce qu'un Cookie ?</h2>
              </div>
              <p className="text-muted-foreground">
                Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez 
                un site web. Les cookies nous permettent de mémoriser vos préférences et d'améliorer 
                votre expérience de navigation.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl text-foreground">Types de Cookies Utilisés</h2>
              </div>
              
              <h3 className="font-semibold text-foreground mt-4 mb-2">Cookies Essentiels</h3>
              <p className="text-muted-foreground mb-4">
                Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Cookies Analytiques</h3>
              <p className="text-muted-foreground mb-4">
                Nous aident à comprendre comment les visiteurs interagissent avec le site 
                (pages visitées, temps passé, etc.).
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Cookies de Performance</h3>
              <p className="text-muted-foreground">
                Permettent d'améliorer les performances et la vitesse de chargement du site.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-2xl glass-effect">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl text-foreground">Gestion des Cookies</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. 
                La plupart des navigateurs vous permettent de :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Voir quels cookies sont stockés sur votre appareil</li>
                <li>Supprimer les cookies individuellement ou en totalité</li>
                <li>Bloquer les cookies de certains sites</li>
                <li>Bloquer tous les cookies</li>
                <li>Supprimer automatiquement les cookies à la fermeture du navigateur</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl glass-effect">
              <h2 className="font-display text-2xl text-foreground mb-4">Durée de Conservation</h2>
              <p className="text-muted-foreground">
                Les cookies de session sont supprimés à la fermeture de votre navigateur. 
                Les cookies persistants restent sur votre appareil pendant une durée maximale 
                de 13 mois conformément à la réglementation française.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CookiePolicyPage;
