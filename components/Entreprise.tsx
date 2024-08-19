import Image from "next/image";
import Container from "./Container";
import { Button } from "./buttons/CTAbutton";

export default function Entreprise() {
  return (
    <section className="bg-[#F7F9FC] pb-16 sm:pb-28 pt-8 sm:pt-10">
      <Container>
        <div className="flex justify-center">
          <span className="inline-block relative">
            <span className="absolute inset-0 bg-blue-300/90  transform -rotate-3 rounded-[12px] shadow-md"></span>
            <span className="relative inline-block px-3 py-1 transform -rotate-3 text-secondary_button">
              entreprise
            </span>
          </span>
        </div>
        <div>
          <h2 className="font-extrabold mt-2 text-2xl sm:text-4xl text-center px-4 sm:px-0">
            Lancer votre entreprise et bénéficier
            <br className="hidden sm:inline" /> d'un écosystème de qualité.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 w-full mt-8 px-4 sm:px-0">
          <div className="bg-white w-full sm:w-[56%] px-4 pt-4 rounded-[8px] border border-[#AAB9C5] box-border mb-4 sm:mb-0">
            <div className="relative">
              <Image
                src="/assets/Arrow.svg"
                alt="illustration dashboard"
                width={90}
                height={90}
                className="absolute -top-4 right-4 sm:right-20 w-16 sm:w-auto"
              />
              <h4 className="font-extrabold text-xl sm:text-2xl">
                Une vitrine attractive pour <br /> votre business !
              </h4>
            </div>
            <div className="flex justify-center mt-5">
              <Image
                src="/entreprise/entreprise.svg"
                alt="illustration dashboard"
                width={400}
                height={90}
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          <div className="bg-white w-full sm:w-[40%] px-4 pt-4 pb-4 rounded-[8px]  border border-[#AAB9C5] box-border">
            <div>
              <h4 className="font-extrabold text-xl sm:text-2xl">
                Des opportunités inédites pour <br /> votre entreprise !
              </h4>
            </div>
            <div className="mt-2">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="relative mr-3">
                    <Image
                      src="/assets/circle.svg"
                      alt="illustration"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/assets/check.svg"
                      alt="illustration"
                      className="w-6 h-6 absolute top-2 -right-4 transform 
                              -translate-x-1/2 -translate-y-1/2"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm sm:text-base">
                    Bénéficier d'offres d'accompagnement
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="relative mr-3">
                    <Image
                      src="/assets/circle.svg"
                      alt="illustration"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/assets/check.svg"
                      alt="illustration"
                      className="w-6 h-6 absolute top-2 -right-4 transform 
                                -translate-x-1/2 -translate-y-1/2"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm sm:text-base">
                    Obtenir des bons d’accompagnement
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="relative mr-3">
                    <Image
                      src="/assets/circle.svg"
                      alt="illustration"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/assets/check.svg"
                      alt="illustration"
                      className="w-6 h-6 absolute top-2 -right-4 transform 
                                -translate-x-1/2 -translate-y-1/2"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm sm:text-base">
                    Rester informée des meilleures opportunités
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="relative mr-3">
                    <Image
                      src="/assets/circle.svg"
                      alt="illustration"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/assets/check.svg"
                      alt="illustration"
                      className="w-6 h-6 absolute top-2 -right-4 transform 
                                -translate-x-1/2 -translate-y-1/2"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm sm:text-base">
                    Trouver des investisseurs et des <br /> partenaires
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="relative mr-3">
                    <Image
                      src="/assets/circle.svg"
                      alt="illustration"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/assets/check.svg"
                      alt="illustration"
                      className="w-6 h-6 absolute top-2 -right-4 transform 
                                -translate-x-1/2 -translate-y-1/2"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm sm:text-base">
                    Développer votre réseau
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 w-full mt-8 px-4 sm:px-0">
          <div className="bg-white w-full sm:w-[44%] px-4 pt-4 pb-4 rounded-[8px] border border-[#AAB9C5] box-border mb-4 sm:mb-0">
            <div>
              <h4 className="font-extrabold text-xl sm:text-2xl">
                Un écosystème diversifié vous <br /> offrant un cadre idéal
              </h4>
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F7F9FC] p-3 rounded-md">
                  <span className="font-extrabold text-2xl sm:text-3xl text-primary_button">
                    +1532
                  </span>
                  <p className="text-xs mt-1">Entreprises enregistrées</p>
                </div>
                <div className="bg-[#F7F9FC] p-3 rounded-md">
                  <span className="font-extrabold text-2xl sm:text-3xl text-primary_button">
                    +200
                  </span>
                  <p className="text-xs mt-1">Opportunités partagées</p>
                </div>
                <div className="bg-[#F7F9FC] p-3 rounded-md">
                  <span className="font-extrabold text-2xl sm:text-3xl text-primary_button">
                    +148
                  </span>
                  <p className="text-xs mt-1">Offres créées</p>
                </div>
                <div className="bg-[#F7F9FC] p-3 rounded-md">
                  <span className="font-extrabold text-2xl sm:text-3xl text-primary_button">
                    +75
                  </span>
                  <p className="text-xs mt-1">Structures d’accompagnement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-full sm:w-[52%] hidden sm:block px-2 pt-4 rounded-[8px] border border-[#AAB9C5] box-border">
            <div className="flex flex-col  sm:flex-row items-center sm:-space-x-12">
              <div className="w-full sm:w-[49%] grid grid-rows-2 -space-y-2">
                <div className="relative overflow-hidden flex justify-center">
                  <Image
                    src="/entreprise/professionnel.svg"
                    alt="Entrepreneur"
                    width={190}
                    height={100}
                    objectFit="contain"
                    className="rounded-[20px]"
                  />
                  <span className="absolute bottom-3 left-10 right-0 text-white font-bold text-[13px]">
                    Étudiant, Professionnel
                  </span>
                </div>
                <div className="overflow-hidden flex justify-center">
                  <Image
                    src="/entreprise/entrepreneur.svg"
                    alt="Professionnel"
                    width={250}
                    height={100}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <div className="relative overflow-hidden flex justify-center">
                  <Image
                    src="/entreprise/porteur-projet.svg"
                    alt="Porteur de projet"
                    width={180}
                    height={30}
                    objectFit="contain"
                    className="rounded-[12px]"
                  />
                  <span className="absolute bottom-2 left-12 right-0 text-white font-bold text-[13px]">
                    Porteur de projet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-[14px] mt-8">
          <div className="relative bg-white w-full px-2 py-16 sm:py-20 rounded-[8px] border border-[#AAB9C5] box-border overflow-hidden">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] h-[160px] bg-[#F7F9FC] rounded-[100%_100%_0_0] z-0"></div>
            <div className="relative max-w-2xl mx-auto text-center z-10">
              <h2 className="font-extrabold text-2xl sm:text-3xl mb-4 bg-gradient-to-r from-[#207280] to-[#3B9054] bg-clip-text text-transparent">
                Prêt à vous lancer ?
              </h2>
              <p className="text-sm sm:text-[16px] mb-6 px-4 sm:px-0">
                Créez votre entreprise maintenant et profitez de toutes
                <br className="hidden sm:inline" />
                les opportunités qu'offre WEKOMKOM.
              </p>
              <Button
                type="primary"
                size="large"
                className="text-white rounded-[2rem] w-full sm:w-auto"
              >
                Créer votre entreprise maintenant
              </Button>
            </div>

            <Image
              src="/assets/wekomkom-icon.svg"
              alt="illustration"
              width={45}
              height={45}
              className="absolute top-2 left-3 w-8 sm:w-auto"
            />
            <Image
              src="/assets/connect-icon.svg"
              alt="illustration"
              width={120}
              height={120}
              className="absolute top-5 right-4 sm:right-[4rem] w-20 sm:w-auto"
            />
            <Image
              src="/assets/boost-icon.svg"
              alt="illustration"
              width={100}
              height={100}
              className="absolute bottom-5 left-8 hidden sm:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
