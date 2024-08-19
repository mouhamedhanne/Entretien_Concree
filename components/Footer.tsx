import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary_button">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white pt-4 pb-8">
          <div>
            <Image
              src="/assets/wekomkom-footer.svg"
              alt="Logo"
              width={150}
              height={50}
              className="mx-auto sm:mx-0"
            />
            <p className="mt-4 text-[11px] text-center sm:text-left">
              Wekomkom est une plateforme digitale{" "}
              <br className="hidden sm:inline" /> dédiée à l'accompagnement et à
              la valorisation de l'entrepreneuriat en Afrique. Nous connectons
              les entrepreneurs talentueux avec les ressources, les mentors et
              les investisseurs dont ils ont besoin pour concrétiser leurs rêves
              et propulser leurs entreprises vers le succès.
            </p>
          </div>

          <div className="sm:ml-[4rem]">
            <h3 className="text-[16px] font-semibold mb-4 text-center sm:text-left">
              Menu
            </h3>
            <ul className="space-y-2 text-center sm:text-left">
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

          <div>
            <h3 className="text-[16px] font-semibold mb-4 text-center sm:text-left">
              Liens Utiles
            </h3>
            <ul className="space-y-2 text-[14px] text-center sm:text-left">
              <li>
                <Link href="/" className="">
                  Conditions générales d'utilisation
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

          <div>
            <h3 className="text-[16px] mb-4 text-center sm:text-left">
              Wekomkom est disponible sur mobile
            </h3>
            <div className="mb-4 space-y-3 flex flex-col items-center sm:items-start">
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
            <h5 className="text-[16px] mb-4 text-center sm:text-left">
              Suivez-nous sur nos réseaux
            </h5>
            <div className="flex space-x-2 justify-center sm:justify-start">
              <Image
                src="/assets/linkedin.svg"
                alt="icon"
                width={20}
                height={10}
              />
              <Image
                src="/assets/facebook.svg"
                alt="icon"
                width={20}
                height={10}
              />
              <Image src="/assets/x.svg" alt="icon" width={20} height={10} />
              <Image
                src="/assets/instagram.svg"
                alt="icon"
                width={20}
                height={10}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="border-b border-[#B5CDE4] w-full mt-[2px]"></div>
      <div className="text-white text-center text-[15px] py-5">
        Created by Concree © 2024 Wekomkom. Tous droits réservés
      </div>
    </footer>
  );
}
