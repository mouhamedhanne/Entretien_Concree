import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function Opportunity() {
  return (
    <section className="py-10">
      <Container>
        <div className="flex justify-center">
          <span className="inline-block relative">
            <span className="absolute inset-0 bg-[#0958A5]/50 transform -rotate-3 rounded-[12px] shadow-md"></span>
            <span className="relative inline-block px-3 py-1 transform -rotate-3 text-blue-500">
              Opportunités
            </span>
          </span>
        </div>
        <div>
          <h2 className="font-extrabold mt-3 text-2xl sm:text-3xl text-center">
            Des opportunités partagées tous les jours
          </h2>
        </div>

        <div className="w-full mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-[4rem]">
            <h6 className="font-extrabold text-[15px] mb-2 sm:mb-0">
              Nos dernières opportunités
            </h6>
            <Link
              href="/opportunity"
              className="flex justify-center items-center text-primary_button font-bold text-[15px]"
            >
              Toutes les opportunités
              <Image
                src="/assets/arrow.svg"
                alt="icon"
                width={20}
                height={20}
                className="ml-2"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full sm:-space-x-12 sm:space-y-0 space-y-4 -mx-[0.2rem] sm:mx-[3.8rem] mt-6">
          <div
            className="bg-[#F7F9FC] flex flex-col sm:flex-row items-center py-4 sm:py-1 px-4 sm:px-1
              space-y-4 sm:space-y-0 sm:space-x-4 border border-[#EBEBEB] rounded-[8px] max-w-full sm:max-w-md"
          >
            <div className="w-full sm:w-auto">
              <Image
                src="/card-hero/hero-4.svg"
                alt="illustration"
                width={130}
                height={50}
                className="w-full sm:w-auto"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/card-hero/logo-concree.svg"
                  alt="logo concree"
                  width={30}
                  height={20}
                  className=""
                />
                <span className="text-[12px]">Par Concree SAS</span>
              </div>
              <h6 className="font-bold text-[13px] mt-2 text-primary_button">
                Trouvez l'Opportunité qui Boostera Votre Entreprise
              </h6>
              <p className="text-[12px]">
                Découvrez Comm'une Opportunité, la
                <br className="hidden sm:inline" /> plateforme de mise en
                relation entre porteurs <br className="hidden sm:inline" /> de
                projet et communes de France. Outil gratuit pour les
                entrepreneurs...
              </p>
              <div className="flex flex-wrap items-center mt-1 space-x-5">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/time-icon.svg"
                    alt="logo concree"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">31 Juillet 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/time-icon.svg"
                    alt="logo concree"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">6 mois</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/localisation-icon.svg"
                    alt="icon"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">Dakar, Sénégal</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-[#F7F9FC] flex flex-col sm:flex-row items-center py-4 sm:py-1 px-4 sm:px-1
              space-y-4 sm:space-y-0 sm:space-x-4 border border-[#EBEBEB] rounded-[8px] max-w-full sm:max-w-md"
          >
            <div className="w-full sm:w-auto">
              <Image
                src="/card-hero/hero-4.svg"
                alt="illustration"
                width={130}
                height={50}
                className="w-full sm:w-auto"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/card-hero/logo-concree.svg"
                  alt="logo concree"
                  width={30}
                  height={20}
                  className=""
                />
                <span className="text-[12px]">Par Concree SAS</span>
              </div>
              <h6 className="font-bold text-[13px] mt-2 text-primary_button">
                Trouvez l'Opportunité qui Boostera Votre Entreprise
              </h6>
              <p className="text-[12px]">
                Découvrez Comm'une Opportunité, la
                <br className="hidden sm:inline" /> plateforme de mise en
                relation entre porteurs <br className="hidden sm:inline" /> de
                projet et communes de France. Outil gratuit pour les
                entrepreneurs...
              </p>
              <div className="flex flex-wrap items-center mt-1 space-x-5">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/time-icon.svg"
                    alt="logo concree"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">31 Juillet 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/time-icon.svg"
                    alt="logo concree"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">6 mois</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/localisation-icon.svg"
                    alt="icon"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">Dakar, Sénégal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full sm:-space-x-12 sm:space-y-0 space-y-4  -mx-[0.2rem] sm:mx-[3.8rem] mt-4">
          <div
            className="bg-[#F7F9FC] flex flex-col sm:flex-row items-center py-4 sm:py-1 px-4 sm:px-1
              space-y-4 sm:space-y-0 sm:space-x-4 border border-[#EBEBEB] rounded-[8px] max-w-full sm:max-w-md"
          >
            <div className="w-full sm:w-auto">
              <Image
                src="/card-hero/hero-4.svg"
                alt="illustration"
                width={130}
                height={50}
                className="w-full sm:w-auto"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/card-hero/logo-concree.svg"
                  alt="logo concree"
                  width={30}
                  height={20}
                  className=""
                />
                <span className="text-[12px]">Par Concree SAS</span>
              </div>
              <h6 className="font-bold text-[13px] mt-2 text-primary_button">
                Trouvez l'Opportunité qui Boostera Votre Entreprise
              </h6>
              <p className="text-[12px]">
                Découvrez Comm'une Opportunité, la
                <br className="hidden sm:inline" /> plateforme de mise en
                relation entre porteurs <br className="hidden sm:inline" /> de
                projet et communes de France. Outil gratuit pour les
                entrepreneurs...
              </p>
              <div className="flex flex-wrap items-center mt-1 space-x-5">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/time-icon.svg"
                    alt="logo concree"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">31 Juillet 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/time-icon.svg"
                    alt="logo concree"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">6 mois</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/localisation-icon.svg"
                    alt="icon"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">Dakar, Sénégal</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-[#F7F9FC] flex flex-col sm:flex-row items-center py-4 sm:py-1 px-4 sm:px-1
              space-y-4 sm:space-y-0 sm:space-x-4 border border-[#EBEBEB] rounded-[8px] max-w-full sm:max-w-md"
          >
            <div className="w-full sm:w-auto">
              <Image
                src="/card-hero/hero-4.svg"
                alt="illustration"
                width={130}
                height={50}
                className="w-full sm:w-auto"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/card-hero/logo-concree.svg"
                  alt="logo concree"
                  width={30}
                  height={20}
                  className=""
                />
                <span className="text-[12px]">Par Concree SAS</span>
              </div>
              <h6 className="font-bold text-[13px] mt-2 text-primary_button">
                Trouvez l'Opportunité qui Boostera Votre Entreprise
              </h6>
              <p className="text-[12px]">
                Découvrez Comm'une Opportunité, la
                <br className="hidden sm:inline" /> plateforme de mise en
                relation entre porteurs <br className="hidden sm:inline" /> de
                projet et communes de France. Outil gratuit pour les
                entrepreneurs...
              </p>
              <div className="flex flex-wrap items-center mt-1 space-x-5">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/time-icon.svg"
                    alt="logo concree"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">31 Juillet 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/time-icon.svg"
                    alt="logo concree"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">6 mois</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/assets/localisation-icon.svg"
                    alt="icon"
                    width={30}
                    height={20}
                    className=""
                  />
                  <span className="text-[12px]">Dakar, Sénégal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** */}
      </Container>
    </section>
  );
}
