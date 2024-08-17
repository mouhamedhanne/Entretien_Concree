import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { Button } from "./buttons/CTAbutton";

export default function Market() {
  return (
    <section className="bg-[#F6F6F6] py-16">
      <Container>
        <div className="relative w-full">
          <div className="flex justify-center">
            <span className="inline-block relative">
              <span className="absolute inset-0 bg-gradient-to-r from-[#207280] to-[#3B9054] transform -rotate-3 rounded-[12px] shadow-md"></span>
              <span className="relative inline-block px-3 py-1 transform -rotate-3 text-white">
                Boutique d'accompagnement
              </span>
            </span>
          </div>
          <div className="flex justify-center">
            <h4 className="font-extrabold text-[1.6rem] ml-[3rem] mt-2">
              Trouvez les offres promues par nos structures <br /> dans la
              boutique d’accompagnement
            </h4>
          </div>
          <Image
            src="/assets/market.svg"
            alt="market illustration"
            width={130}
            height={50}
            className="absolute top-0 left-[5rem]"
          />
        </div>

        <div className="w-full mt-10">
          <div className="flex justify-between items-center mx-[4rem]">
            <h6 className="font-extrabold text-[15px]">
              Les offres d’accompagnement à la une !
            </h6>
            <Link
              href="/boutique"
              className="flex justify-center items-center text-primary_button font-bold text-[15px]"
            >
              Accéder à la boutique
              <Image
                src="/assets/arrow.svg"
                alt="icon"
                width={20}
                height={20}
                className="ml-2"
              />
            </Link>
          </div>

          <div className="flex justify-center space-x-5 mx-[3.8rem] mt-6">
            {/** Card 1 */}
            <div className="bg-white rounded-b-[12px]">
              <div className="relative w-full">
                <Image
                  src="/card-hero/hero-1.svg"
                  alt="Description de l'image"
                  width={300}
                  height={96}
                  objectFit="cover"
                  className="rounded-t-[12px]"
                />
                <span
                  className="absolute top-2 left-3 bg-gradient-to-r from-[#207280] to-[#3B9054]
                        py-1 px-2 text-center text-[9px] text-white rounded-[6px]"
                >
                  Bon d'accompagnement
                </span>
              </div>
              <div className="px-2 pb-2">
                <span className="font-bold text-[13px] ">
                  Définir son offre commercial
                </span>
                <p className="text-[12px] mb-3 mt-2">
                  Objectifs : Attirer des clients potentiels. <br /> Convaincre
                  les clients d'acheter vos produits <br /> ou services.
                  Fidéliser vos clients existants. A..
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex justify-between items-center space-x-1">
                    <Image
                      src="/card-hero/logo-concree.svg"
                      alt="logo concree"
                      width={30}
                      height={20}
                      className=""
                    />
                    <span className="text-[12px]">Concree SAS</span>
                  </div>

                  <Button type="secondary" size="small" className="text-[15px]">
                    550 000 FCFA
                  </Button>
                </div>
              </div>
            </div>

            {/** Card 2 */}
            <div className="bg-white rounded-b-[12px]">
              <div className="relative w-full">
                <Image
                  src="/card-hero/hero-1.svg"
                  alt="Description de l'image"
                  width={300}
                  height={96}
                  objectFit="cover"
                  className="rounded-t-[12px]"
                />
                <span
                  className="absolute top-2 left-3 bg-gradient-to-r from-[#207280] to-[#3B9054]
                        py-1 px-2 text-center text-[9px] text-white rounded-[6px]"
                >
                  Bon d'accompagnement
                </span>
              </div>
              <div className="px-2 pb-2">
                <span className="font-bold text-[12px] ">
                  Définir son offre commercial
                </span>
                <p className="text-[12px] mb-3 mt-2">
                  Objectifs : Attirer des clients potentiels. <br /> Convaincre
                  les clients d'acheter vos produits <br /> ou services.
                  Fidéliser vos clients existants. A..
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex justify-between items-center space-x-1">
                    <Image
                      src="/card-hero/logo-concree.svg"
                      alt="logo concree"
                      width={30}
                      height={20}
                      className=""
                    />
                    <span className="text-[12px] ">Concree SAS</span>
                  </div>

                  <Button type="secondary" size="small" className="text-[15px]">
                    550 000 FCFA
                  </Button>
                </div>
              </div>
            </div>

            {/** Card 3 */}
            <div className="bg-white rounded-b-[12px]">
              <div className="relative w-full">
                <Image
                  src="/card-hero/hero-1.svg"
                  alt="Description de l'image"
                  width={300}
                  height={96}
                  objectFit="cover"
                  className="rounded-t-[12px]"
                />
                <span
                  className="absolute top-2 left-3 bg-gradient-to-r from-[#207280] to-[#3B9054]
                        py-1 px-2 text-center text-[9px] text-white rounded-[6px]"
                >
                  Bon d'accompagnement
                </span>
              </div>
              <div className="px-2 pb-2">
                <span className="font-bold text-[12px] ">
                  Définir son offre commercial
                </span>
                <p className="text-[12px] mb-3 mt-2">
                  Objectifs : Attirer des clients potentiels. <br /> Convaincre
                  les clients d'acheter vos produits <br /> ou services.
                  Fidéliser vos clients existants. A..
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex justify-between items-center space-x-1">
                    <Image
                      src="/card-hero/logo-concree.svg"
                      alt="logo concree"
                      width={30}
                      height={20}
                      className=""
                    />
                    <span className="text-[12px] ">Concree SAS</span>
                  </div>

                  <Button type="secondary" size="small" className="text-[15px]">
                    550 000 FCFA
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
