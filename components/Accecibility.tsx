import Image from "next/image";
import Container from "./Container";
import { Button } from "./buttons/CTAbutton";

export default function Accecibility() {
  return (
    <section className="bg-[#0958A5]/30 py-20">
      <Container>
        <div className="flex justify-center">
          <span className="inline-block relative">
            <span className="absolute inset-0 bg-[#A4F4E7]  transform -rotate-3 rounded-[12px] shadow-md"></span>
            <span className="relative inline-block px-3 py-1 transform -rotate-3 text-secondary_button">
              Accécibilité
            </span>
          </span>
        </div>
        <div>
          <h2 className="font-extrabold mt-2 text-3xl text-center">
            Une <span className="text-primary_button">expérience</span> unique
            de <br /> l’écosystème entrepreneurial
          </h2>
        </div>
        <div className="w-full px-[8rem]">
          <div
            className="bg-white w-full flex justify-center items-center space-x-6 px-2 py-4 mt-8 rounded-[12px] 
               "
          >
            <div>
              <Image
                src="/slider/slide-1.svg"
                alt="slider 1"
                width={300}
                height={150}
              />
            </div>
            <div>
              <h4 className="font-extrabold text-2xl mb-3 text-primary_button">
                Boutique d’Accompagnement
              </h4>
              <p className="text-[16px] leading-loose mb-4">
                La Boutique d'Accompagnement de Wekomkom est votre <br />
                guichet unique pour accéder à une gamme complète de <br />
                services et de ressources conçus pour propulser votre <br />
                entreprise.
              </p>
              <Button
                type="outline"
                className="rounded-[2rem] flex items-center"
              >
                Boutique
                <Image
                  src="/assets/arrow.svg"
                  alt="illustration"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
