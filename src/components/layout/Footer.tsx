import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import logo1 from "@/assets/1.webp";
import logo2 from "@/assets/2.webp";
import logo3 from "@/assets/3.webp";
import logo4 from "@/assets/4.webp";
import logo5 from "@/assets/5.webp";
import logo6 from "@/assets/6.webp";
import logo7 from "@/assets/7.webp";
import eighteenPlus from "@/assets/18.webp";

const Footer = () => {
  const legalLinks = [
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
    { href: "/termes-conditions", label: "Termes et conditions" },
    { href: "/politique-cookies", label: "Politique de cookies" },
    { href: "/jeu-responsable", label: "Jouez de manière responsable" },
  ];

  const organizationLogos = [
    { src: logo1, alt: "GamCare", url: "https://www.gamcare.org.uk/" },
    { src: logo2, alt: "ANJ", url: "https://www.anj.fr/" },
    { src: logo3, alt: "Joueurs Info Service", url: "https://www.joueurs-info-service.fr/" },
    { src: logo4, alt: "ADICTEL", url: "https://www.adictel.org/" },
    { src: logo5, alt: "BeGambleAware", url: "https://www.begambleaware.org/" },
    { src: logo6, alt: "Médiateur des jeux", url: "https://www.mediateur-des-jeux.fr/" },
    { src: logo7, alt: "Gaming Therapy", url: "https://www.gamingtherapy.org/" },
  ];

  return (
    <footer className="relative text-foreground overflow-hidden gradient-hero sports-pattern border-t border-border">
      <div className="relative container mx-auto px-4 py-12">
        {/* Top section: 18+ icon and legal links */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-12 pb-8 border-b border-border">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card/30">
            <img
              src={eighteenPlus}
              alt="18+"
              className="h-9 w-9 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 ml-auto justify-end">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Middle section: Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Info importante !</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tous les jeux ici sont réservés aux adultes de plus de 18 ans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Utilisation des cookies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                On utilise des cookies pour rendre ta visite ici plus agréable, voir ce qui intéresse nos visiteurs et te montrer des trucs sympas. En restant sur le site, tu valides l'emploi des cookies.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-lg font-bold mb-3">Jeu responsable</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              N'oubliez jamais qu'il y a des risques quand on joue de l'argent. Le jeu doit rester un plaisir et ne pas devenir un problème. Jouer de manière responsable, c'est savoir combien de temps et d'argent on y consacre. Maîtrisez votre jeu et ne misez jamais de l'argent dont vous avez besoin pour vivre. Ne jouez qu'avec l'argent que vous pouvez vous permettre de perdre.
            </p>
          </div>
        </div>

        {/* Bottom section: Organization logos in rounded border */}
        <div className="border border-border rounded-xl p-6 md:p-8 bg-card/20">
          <div className="space-y-6">
            {/* Top row: 4 logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              {organizationLogos.slice(0, 4).map((logo, index) => (
                <a
                  key={index}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-16 w-full"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 items-center justify-items-center max-w-2xl mx-auto">
              {organizationLogos.slice(4, 7).map((logo, index) => (
                <a
                  key={index + 4}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-16 w-full"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
