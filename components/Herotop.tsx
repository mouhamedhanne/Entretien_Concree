import { Button } from "./buttons/CTAbutton";
import Polygon from "@/public/assets/Polygon.svg";
import Image from "next/image";

export default function Herotop() {
  return (
    <section className="max-w-7xl h-full m-auto relative pb-6 sm:pb-24">
      <div className="relative z-10">
        <div className="flex justify-center items-center">
          <div className="h-full w-full mt-8 text-4xlsm:mt-16 px-4 sm:px-0">
            <h1 className="font-extrabold text-3xl sm:text-5xl text-center">
              La plateform qui vous aide à <br className="hidden sm:inline" />{" "}
              développer votre
              <span className="inline-block relative mt-2 sm:mt-0">
                <span className="absolute inset-0 bg-gradient-to-r from-[#207280] to-[#3B9054] transform -rotate-3 rounded-[12px] shadow-md"></span>
                <span className="relative inline-block px-2 pt-2 pb-4 transform -rotate-3 text-white">
                  entreprise
                </span>
              </span>
            </h1>
            <p className="text-center mt-4 sm:mt-6 text-sm sm:text-base">
              Bienvenue sur Wekomkom, votre carrefour de succès entrepreneurial.
              Trouvez <br className="hidden sm:inline" /> les meilleures
              opportunités pour votre entreprise et connectez-vous avec des
              <br className="hidden sm:inline" /> mentors, des investisseurs et
              des partenaires potentiels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-4 sm:mt-6">
              <Button
                type="primary"
                size="large"
                className="text-white rounded-[2rem] w-full sm:w-auto"
              >
                Trouver une opportunité
              </Button>
              <Button
                type="outline"
                size="large"
                className="rounded-[2rem] flex items-center justify-center w-full sm:w-auto"
              >
                Découvrir en vidéo
                <Image src={Polygon} alt="Polygon" className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-16 hidden sm:block">
          <div className="absolute left-0 -top-[11rem] w-1/5 space-y-4 ">
            <div className="bg-gray-200 h-60 w-[200px] ml-auto px-2 py-2 rounded-[12px] shadow-md">
              <div className="bg-white rounded-[8px]">
                <div className="relative w-full h-[5.3rem] mb-3">
                  <Image
                    src="/card-hero/hero-1.svg"
                    alt="Description de l'image"
                    width={300}
                    height={96}
                    objectFit="cover"
                    className=""
                  />
                  <span
                    className="absolute top-2 left-3 bg-gradient-to-r from-[#207280] to-[#3B9054]
                        py-1 px-2 text-center text-[9px] text-white rounded-[6px]"
                  >
                    Bon d'accompagnement
                  </span>
                </div>
                <div className="px-2 pb-2">
                  <span className="font-bold text-[12px] mb-2">
                    Définir son offre commercial
                  </span>
                  <p className="text-[12px] mb-3">
                    Objectifs : Attirer des clients potentiels. Convaincre les
                    clients d'acheter vos produits...
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex justify-between items-center space-x-1">
                      <Image
                        src="/card-hero/logo-concree.svg"
                        alt="logo concree"
                        width={20}
                        height={20}
                        className=""
                      />
                      <span className="text-[11px] font-bold">Concree SAS</span>
                    </div>

                    <Button type="secondary" size="small" className="">
                      550 000 FCFA
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-gradient-to-r from-[#207280] to-[#3B9054] 
                 w-[200px] h-28 ml-auto rounded-[12px] shadow-md flex flex-col 
                 justify-center text-white pl-3"
            >
              <span className="font-extrabold text-3xl">+45</span>
              <p>Offres d'accompagnement</p>
            </div>
          </div>

          <div className="w-3/5 mx-auto flex justify-center space-x-4">
            <div className="w-1/4 h-48 rounded-lg shadow-md overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center rounded-[12px]"
                style={{
                  backgroundImage: "url('/card-hero/hero-2.svg')",
                }}
              ></div>
            </div>

            <div className="bg-[#E7EBEF] w-1/4 h-48 rounded-[12px] shadow-md px-2 py-4 ">
              <span className="font-extrabold text-3xl bg-gradient-to-r from-[#207280] to-[#3B9054] bg-clip-text text-transparent">
                +2500
              </span>
              <p className="text-[12px] mt-1">
                Entrepreneurs, structures d’accompagnement et professionnels
                passionnés de l’entrepreneuriat !
              </p>
              <div className="flex justify-center">
                <Button
                  type="outline"
                  size="small"
                  className="mt-4 rounded-[2rem] text-[14px] hover:bg-primary_button hover:text-white"
                >
                  Rejoindre maintenant
                </Button>
              </div>
            </div>

            <div className="w-1/4 h-48 rounded-lg shadow-md overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center rounded-[12px]"
                style={{
                  backgroundImage: "url('/card-hero/hero-3.svg')",
                }}
              ></div>
            </div>
          </div>

          <div className="absolute right-0 -top-[11rem] w-1/5 space-y-4">
            <div className="bg-gray-200 h-60 w-[200px] px-2 py-2 mr-auto rounded-[12px] shadow-md">
              <div className="bg-white rounded-[8px]">
                <div className="w-full h-[6rem] ">
                  <Image
                    src="/card-hero/hero-4.svg"
                    alt="Description de l'image"
                    width={190}
                    height={10}
                    objectFit="cover"
                  />
                </div>
                <div className="px-2 py-1">
                  <span className="text-[10px] rounded-md bg-gray-200 p-1 mt-4">
                    Bon d’accompagnement
                  </span>
                  <p className="font-bold text-[10px] mt-2 text-[#0958A5] leading-none ">
                    Trouvez l'Opportunité qui Boostera Votre Entreprise
                  </p>
                  <p className="text-[11px]">
                    Découvrez Comm'une Opportunité, la plateforme de mise en
                    relation ..
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <Image
                      src="/card-hero/logo-concree.svg"
                      alt="Description de l'image"
                      width={20}
                      height={20}
                      className=""
                    />
                    <span className="text-[12px]">Par Concree SAS</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-gradient-to-r from-[#207280] to-[#3B9054] 
                 w-[200px] h-28 mr-auto rounded-[12px] shadow-md flex flex-col 
                 justify-center text-white pl-3"
            >
              <span className="font-extrabold text-3xl">+1532</span>
              <p>Entreprises enregistrées</p>
            </div>
          </div>
        </div>

        {/***/}

        <div className="sm:hidden mt-8 space-y-4">
          <div className="bg-gray-200 p-4 rounded-[12px] shadow-md">
            <div className="bg-white rounded-[8px] p-4">
              <div className="relative w-full h-40 mb-3">
                <Image
                  src="/card-hero/hero-1.svg"
                  alt="Description de l'image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-[8px]"
                />
                <span className="absolute top-2 left-3 bg-gradient-to-r from-[#207280] to-[#3B9054] py-1 px-2 text-center text-xs text-white rounded-[6px]">
                  Bon d'accompagnement
                </span>
              </div>
              <span className="font-bold text-sm mb-2 block">
                Définir son offre commercial
              </span>
              <p className="text-sm mb-3">
                Objectifs : Attirer des clients potentiels. Convaincre les
                clients d'acheter vos produits...
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/card-hero/logo-concree.svg"
                    alt="logo concree"
                    width={20}
                    height={20}
                  />
                  <span className="text-xs font-bold">Concree SAS</span>
                </div>
                <Button type="secondary" size="small">
                  550 000 FCFA
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#207280] to-[#3B9054] p-4 mx-8 rounded-[12px] shadow-md text-white text-center">
            <span className="font-extrabold text-3xl">+45</span>
            <p>Offres d'accompagnement</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-[12px] shadow-md">
            <div className="bg-white rounded-[8px] p-4">
              <div className="relative w-full h-40 mb-3">
                <Image
                  src="/card-hero/hero-1.svg"
                  alt="Description de l'image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-[8px]"
                />
                <span className="absolute top-2 left-3 bg-gradient-to-r from-[#207280] to-[#3B9054] py-1 px-2 text-center text-xs text-white rounded-[6px]">
                  Bon d'accompagnement
                </span>
              </div>
              <span className="font-bold text-sm mb-2 block">
                Définir son offre commercial
              </span>
              <p className="text-sm mb-3">
                Objectifs : Attirer des clients potentiels. Convaincre les
                clients d'acheter vos produits...
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/card-hero/logo-concree.svg"
                    alt="logo concree"
                    width={20}
                    height={20}
                  />
                  <span className="text-xs font-bold">Concree SAS</span>
                </div>
                <Button type="secondary" size="small">
                  550 000 FCFA
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#207280] to-[#3B9054] p-4 mx-8 rounded-[12px] shadow-md text-white text-center">
            <span className="font-extrabold text-3xl">+1532</span>
            <p>Entreprises enregistrées</p>
          </div>
        </div>

        {/** */}
      </div>
      <div className="absolute hidden sm:block bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] h-[160px] bg-[#F7F9FC] rounded-[100%_100%_0_0] z-0"></div>
    </section>
  );
}

{
  /*
  <div className="flex justify-center items-center">
          <div className="h-full w-full  mt-16">
            <h1 className="font-extrabold text-5xl text-center">
              La plateform qui vous aide à <br /> développer votre
              <span className="inline-block relative">
                <span className="absolute inset-0 bg-gradient-to-r from-[#207280] to-[#3B9054] transform -rotate-3 rounded-[12px] shadow-md"></span>
                <span className="relative inline-block px-2 pt-2 pb-4 transform -rotate-3 text-white">
                  entreprise
                </span>
              </span>
            </h1>
            <p className="text-center mt-6">
              Bienvenue sur Wekomkom, votre carrefour de succès entrepreneurial.
              Trouvez <br /> les meilleures opportunités pour votre entreprise
              et connectez-vous avec des <br /> mentors, des investisseurs et
              des partenaires potentiels.
            </p>
            <div className="flex justify-center items-center space-x-3 mt-4">
              <Button
                type="primary"
                size="large"
                className="text-white rounded-[2rem]"
              >
                Trouver une opportunité
              </Button>
              <Button
                type="outline"
                size="large"
                className="rounded-[2rem] flex items-center"
              >
                Découvrir en vidéo
                <Image src={Polygon} alt="Polygon" className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
   */
}
