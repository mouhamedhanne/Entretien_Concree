import { Button } from "./buttons/CTAbutton";
import Polygon from "@/public/assets/Polygon.svg";
import Image from "next/image";

export default function Herotop() {
  return (
    <section className="max-w-7xl h-full m-auto relative mb-24">
      <div>
        <div className="flex justify-center items-center">
          <div className="h-full w-full  mt-16">
            <h1 className="font-extrabold text-5xl text-center">
              La plateform qui vous aide à <br /> développer votre{" "}
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
              <Button type="primary" className="text-white rounded-[2rem]">
                Trouver une opportunité
              </Button>
              <Button
                type="outline"
                className="rounded-[2rem] flex items-center"
              >
                Découvrir en vidéo
                <Image src={Polygon} alt="Polygon" className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        {/* Nouvelle structure pour les cards */}
        <div className="relative mt-16">
          {/* Colonne de gauche */}
          <div className="absolute left-0 -top-[8rem] w-1/5 space-y-4 ">
            <div className="bg-gray-200 h-48 rounded-lg shadow-md"></div>
            <div
              className="bg-gradient-to-r from-[#207280] to-[#3B9054] 
                 w-4/5 h-28 ml-auto rounded-[12px] shadow-md flex flex-col 
                 justify-center text-white pl-3"
            >
              <span className="font-extrabold text-3xl">+45</span>
              <p>Offres d'accompagnement</p>
            </div>
          </div>

          {/* Colonne centrale */}
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
                  className="mt-4 rounded-[2rem] text-[14px] "
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
          {/* Colonne de droite */}
          <div className="absolute right-0 -top-[8rem] w-1/5 space-y-4">
            <div className="bg-gray-200 h-48 rounded-lg shadow-md"></div>
            <div
              className="bg-gradient-to-r from-[#207280] to-[#3B9054] 
                 w-4/5 h-28 mr-auto rounded-[12px] shadow-md flex flex-col 
                 justify-center text-white pl-3"
            >
              <span className="font-extrabold text-3xl">+1532</span>
              <p>Entreprises enregistrées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /**
   * #E7EBEF
   <span
              className="inline-block bg-yellow-300 px-2 py-1 
                  transform -rotate-2 translate-x-1 -translate-y-1"
            >
              entreprise
            </span>
   */
}
