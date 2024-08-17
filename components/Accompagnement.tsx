import Image from "next/image";
import Container from "./Container";

export default function Accompagnement() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex justify-center">
          <span className="inline-block relative">
            <span className="absolute inset-0 bg-[#F4C790]  transform -rotate-3 rounded-[12px] shadow-md"></span>
            <span className="relative inline-block px-3 py-1 transform -rotate-3 text-[#323F49]">
              Structure d'accompagnement
            </span>
          </span>
        </div>
        <div>
          <h2 className="font-extrabold mt-3 text-3xl text-center">
            Digitalisez et promouvez vos <br /> offres d’accompagnement
          </h2>
          <p className="text-center text-[14px] mt-2">
            Accédez à une vaste communauté de porteurs de projets, d'entreprises
            et de <br /> partenaires d'appui. Créez et gérez des offres de
            services sur mesure, et suivez <br /> vos prestations étape par
            étape en toute simplicité
          </p>
        </div>

        <div className="flex justify-center space-x-4 w-full mt-8">
          <div className="bg-white w-[40%] px-4 pt-4 pb-4 rounded-[8px]  border border-[#AAB9C5] box-border">
            <div>
              <h4 className="font-extrabold text-2xl mb-5">
                Gestion simplifiée et partagée <br /> de votre structure
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
                  Création d’offres illimitées
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
                  Publication de vos offres et <br /> opportunités
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
                  Mise en place et gestion de votre <br /> équipe
                  d’accompagnement
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
                  Tracking et reporting de vos <br /> accompagnements
                </li>
              </ul>
            </div>
          </div>

          {/** */}
          <div className="bg-white w-[56%] px-4 pt-4 rounded-[8px] border border-[#AAB9C5] box-border">
            <div className="relative">
              <Image
                src="/assets/Arrow.svg"
                alt="illustration dashboard"
                width={90}
                height={90}
                className="absolute -top-4 right-2"
              />
              <h4 className="font-extrabold text-2xl">
                Parmi les structures déjà sur <br /> Wekomkom
              </h4>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5 justify-center items-center">
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <Image
                  src="/accompagnement/impacthub.svg"
                  alt="illustration"
                  width={90}
                  height={30}
                />
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <Image
                  src="/accompagnement/ignite.svg"
                  alt="illustration"
                  width={90}
                  height={30}
                />
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <Image
                  src="/accompagnement/jokkolabs.svg"
                  alt="illustration"
                  width={90}
                  height={30}
                />
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <Image
                  src="/accompagnement/akassaa.svg"
                  alt="illustration"
                  width={90}
                  height={30}
                />
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <Image
                  src="/accompagnement/hidma.svg"
                  alt="illustration"
                  width={90}
                  height={30}
                />
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <Image
                  src="/accompagnement/fellta.svg"
                  alt="illustration"
                  width={90}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        {/** */}
        <div className="flex justify-center space-x-4 w-full mt-8">
          <div className="bg-white w-[60%] px-4 pt-4 rounded-[8px] border border-[#AAB9C5] box-border">
            <div className="relative">
              <Image
                src="/assets/icon-soulign.svg"
                alt="illustration dashboard"
                width={150}
                height={90}
                className="absolute top-7 left-[13rem]"
              />
              <h4 className="font-extrabold text-2xl">
                Votre plateforme WEKOMKOM <br /> c’est plus de :
              </h4>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5 justify-center items-center">
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <span className="font-extrabold text-3xl text-primary_button">
                  +1532
                </span>

                <p className="text-xs mt-1">Entreprises enregistrées</p>
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <span className="font-extrabold text-3xl text-primary_button">
                  +200
                </span>
                <p className="text-xs mt-1">Opportunités partagées</p>
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <span className="font-extrabold text-3xl text-primary_button">
                  +148
                </span>
                <p className="text-xs mt-1">Offres créées</p>
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <span className="font-extrabold text-3xl text-primary_button">
                  +75
                </span>
                <p className="text-xs mt-1">Structures d’accompagnement</p>
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <span className="font-extrabold text-3xl text-primary_button">
                  +75
                </span>
                <p className="text-xs mt-1">Structures d’accompagnement</p>
              </div>
              <div className="bg-[#F7F9FC] p-3 rounded-md">
                <span className="font-extrabold text-3xl text-primary_button">
                  +75
                </span>
                <p className="text-xs mt-1">Structures d’accompagnement</p>
              </div>
            </div>
          </div>

          {/**card */}
          <div className="w-[36%] px-4 pt-4 pb-4 rounded-[8px] bg-gradient-to-r from-[#207280] to-[#3B9054]">
            <div className="block space-y-4">
              <div className="flex justify-center items-start">
                <Image
                  src="/accompagnement/collab-illustration.svg"
                  alt="collab illustration"
                  width={300}
                  height={30}
                />
              </div>
              <div>
                <button
                  className="flex justify-center items-center px-8 py-2 
                      bg-white text-primary_button rounded-[2rem]"
                >
                  Créer votre structure maintenant
                  <Image
                    src="/assets/arrow.svg"
                    alt="icon"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
