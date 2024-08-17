import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary_button">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white pt-4 pb-12">
          <div>
            <Image
              src="/assets/wekomkom-footer.svg"
              alt="Logo"
              width={150}
              height={50}
            />
            <p className="mt-4 text-[11px]">
              Wekomkom est une plateforme digitale <br /> dédiée à
              l'accompagnement et à la valorisation de l'entrepreneuriat en
              Afrique. Nous connectons les entrepreneurs talentueux avec les
              ressources, les mentors et les investisseurs dont ils ont besoin
              pour concrétiser leurs rêves et propulser leurs entreprises vers
              le succès.
            </p>
          </div>

          {/* Colonne 2: Menu */}
          <div className="ml-[5rem]">
            <h3 className="text-[16px] font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/opportunity" className="text-[14px]">
                  Opportunités
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="text-[14px]">
                  Boutique
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-[14px]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Liens Utiles */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="/" className="">
                  Conditions générales d’utilisation
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Politiques de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Documentation utile
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Devenir partenaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Réseaux Sociaux et Téléchargement Mobile */}
          <div>
            <h3 className="text-[16px] mb-4">
              Wekomkom est disponible sur mobile
            </h3>
            <div className="mb-4 space-y-3">
              <Image
                src="/assets/playstore.svg"
                alt="icon"
                width={130}
                height={10}
              />
              <Image
                src="/assets/appstore.svg"
                alt="icon"
                width={130}
                height={40}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Télécharger l'app</h3>
            <div className="flex space-x-2"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
