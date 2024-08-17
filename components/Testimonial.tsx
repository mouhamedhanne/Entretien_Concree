import Image from "next/image";
import Container from "./Container";

export default function Testimonial() {
  return (
    <section className="mt-8 mb-32">
      <Container>
        <div className="flex justify-center">
          <span className="inline-block relative">
            <span className="absolute inset-0 bg-[#A4F4E7]  transform -rotate-3 rounded-[12px] shadow-md"></span>
            <span className="relative inline-block px-3 py-1 transform -rotate-3 text-[#323F49]">
              Témoignage
            </span>
          </span>
        </div>
        <div>
          <h2 className="font-extrabold mt-3 text-4xl text-center">
            Ils parlent de nous !
          </h2>
          <p className="text-center mt-3 text-[15px]">
            Découvrez les témoignages de nos utilisateurs.
          </p>
        </div>

        <div className="flex justify-center space-x-4 w-full mt-12">
          <div className="relative bg-[#0958A5]/30 w-[64%] flex space-x-5 items-start px-10 pt-4 rounded-[8px]">
            <div className="mt-4">
              <div className="flex justify-center">
                <Image
                  src="/testimonial/amadou.svg"
                  alt="temoignage 1"
                  width={190}
                  height={50}
                />
              </div>
              <p className="font-bold text-center text-[13px] mt-2">
                Amadou Diop
              </p>
              <p className="text-[11px] text-center text-primary_button">
                Fondateur/Green Solutions
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[13px] text-[#323F49]">
                Wekomkom m'a vraiment impressionné. Les formations et les <br />
                ateliers proposés ont été extrêmement bénéfiques pour <br />
                développer mes compétences en gestion d'entreprise. Le <br />
                réseau de mentors et les conseils personnalisés m'ont <br />
                vraiment aidé à progresser dans mon parcours <br />
                entrepreneurial.
              </p>
            </div>
            <Image
              src="/assets/arrow-left.svg"
              alt="icon"
              width={40}
              height={40}
              className="absolute top-[7rem] -left-4"
            />
            <Image
              src="/testimonial/quotes-icon.svg"
              alt="icon"
              width={130}
              height={40}
              className="absolute bottom-4 right-10"
            />
          </div>

          {/**item */}
          <div className="relative w-[28%] px-4 pt-4 pb-4 rounded-[8px] bg-[#0958A5]/30">
            <div>
              <div className="flex justify-center mt-4">
                <Image
                  src="/testimonial/cheikh.svg"
                  alt="temoignage 1"
                  width={190}
                  height={50}
                />
              </div>
              <p className="font-bold text-center text-[13px] mt-2">
                Cheikh Fall
              </p>
              <p className="text-[11px] text-center text-primary_button">
                EduConnect/ Directeur des <br /> Opérations
              </p>
            </div>
            <Image
              src="/assets/arrow-right.svg"
              alt="icon"
              width={40}
              height={40}
              className="absolute top-[7rem] right-4"
            />
          </div>
        </div>

        <div className="mt-12">
          <h6 className="font-extrabold mt-[8rem] text-2xl text-center">
            Ils ont choisi notre plateforme
          </h6>
          <div className="flex justify-center items-center space-x-9 mt-5">
            <Image
              src="/testimonial/usaid.svg"
              alt="icon"
              width={100}
              height={30}
            />
            <Image
              src="/testimonial/ppi.svg"
              alt="icon"
              width={100}
              height={30}
            />
            <Image
              src="/accompagnement/impacthub.svg"
              alt="icon"
              width={100}
              height={30}
            />
            <Image
              src="/accompagnement/ignite.svg"
              alt="icon"
              width={100}
              height={30}
            />
            <Image
              src="/accompagnement/jokkolabs.svg"
              alt="icon"
              width={100}
              height={30}
            />
            <Image
              src="/testimonial/phantome.svg"
              alt="icon"
              width={50}
              height={30}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
