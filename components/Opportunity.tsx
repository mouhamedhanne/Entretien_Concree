import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function Opportunity() {
  return (
    <section className="py-10">
      <Container>
        <div className="flex justify-center">
          <span className="inline-block relative">
            <span className="absolute inset-0 bg-[#0958A5]/50  transform -rotate-3 rounded-[12px] shadow-md"></span>
            <span className="relative inline-block px-3 py-1 transform -rotate-3 text-blue-500">
              Opportunités
            </span>
          </span>
        </div>
        <div>
          <h2 className="font-extrabold mt-3 text-3xl text-center">
            Des opportunites partagés tout les jours
          </h2>
        </div>

        <div className="w-full mt-10">
          <div className="flex justify-between items-center mx-[4rem]">
            <h6 className="font-extrabold text-[15px]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 w-full -space-x-12 mx-[3.8rem] mt-6">
          <div
            className="bg-[#F7F9FC] flex items-center py-1 px-1
               space-x-4 border border-[#EBEBEB] rounded-[8px] max-w-md"
          >
            <div className="">
              <Image
                src="/card-hero/hero-4.svg"
                alt="illustration"
                width={130}
                height={50}
                className=""
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
              <h6 className="font-bold text-[12px] mt-2 text-primary_button">
                Trouvez l'Opportunité qui Boostera Votre <br /> Entreprise
              </h6>
              <p className="text-[11px]">
                Découvrez Comm'une Opportunité, la plateforme de mise <br /> en
                relation entre porteurs de projet et communes de <br /> France.
                Outil gratuit pour les entrepreneurs...
              </p>
              <div className="flex items-center mt-1 space-x-5">
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
          {/** Card 2 */}
          <div
            className="bg-[#F7F9FC]  flex items-center py-1 px-1
               space-x-4 border border-[#EBEBEB] rounded-[8px] max-w-md"
          >
            <div>
              <Image
                src="/card-hero/hero-4.svg"
                alt="illustration"
                width={130}
                height={50}
                className=""
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
              <h6 className="font-bold text-[12px] mt-2 text-primary_button">
                Trouvez l'Opportunité qui Boostera Votre <br /> Entreprise
              </h6>
              <p className="text-[11px]">
                Découvrez Comm'une Opportunité, la plateforme de mise <br /> en
                relation entre porteurs de projet et communes de <br /> France.
                Outil gratuit pour les entrepreneurs...
              </p>
              <div className="flex items-center mt-1 space-x-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 w-full -space-x-12 mx-[3.8rem] mt-4">
          {/**Card 3 */}
          <div
            className="bg-[#F7F9FC]  flex items-center py-1 px-1
               space-x-4 border border-[#EBEBEB] rounded-[8px] max-w-md"
          >
            <div>
              <Image
                src="/card-hero/hero-4.svg"
                alt="illustration"
                width={130}
                height={50}
                className=""
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
              <h6 className="font-bold text-[12px] mt-2 text-primary_button">
                Trouvez l'Opportunité qui Boostera Votre <br /> Entreprise
              </h6>
              <p className="text-[11px]">
                Découvrez Comm'une Opportunité, la plateforme de mise <br /> en
                relation entre porteurs de projet et communes de <br /> France.
                Outil gratuit pour les entrepreneurs...
              </p>
              <div className="flex items-center mt-1 space-x-5">
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
          {/**Card 4 */}
          <div
            className="bg-[#F7F9FC]  flex items-center py-1 px-1
               space-x-4 border border-[#EBEBEB] rounded-[8px] max-w-md"
          >
            <div>
              <Image
                src="/card-hero/hero-4.svg"
                alt="illustration"
                width={130}
                height={50}
                className=""
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
              <h6 className="font-bold text-[12px] mt-2 text-primary_button">
                Trouvez l'Opportunité qui Boostera Votre <br /> Entreprise
              </h6>
              <p className="text-[11px]">
                Découvrez Comm'une Opportunité, la plateforme de mise <br /> en
                relation entre porteurs de projet et communes de <br /> France.
                Outil gratuit pour les entrepreneurs...
              </p>
              <div className="flex items-center mt-1 space-x-5">
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
      </Container>
    </section>
  );
}
