import Image from "next/image";
import Container from "./Container";

export default function Entreprise() {
  return (
    <section className="bg-[#F7F9FC] py-28">
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
          <h2 className="font-extrabold text-4xl text-center">
            Lancer votre entreprise et bénéficier <br /> d’un écosystème de
            qualité.
          </h2>
        </div>

        <div className="flex justify-center space-x-4 w-full mt-8">
          <div className="bg-white w-2/4  px-8 pt-3 ">
            <div className="relative">
              <Image
                src="/assets/Arrow.svg"
                alt="illustration dashboard"
                width={70}
                height={70}
                className="absolute top-1 right-1"
              />
              <h4 className="font-extrabold text-[20px]">
                Une vitrine attractive pour <br /> votre business !
              </h4>
            </div>
            <div className="flex justify-center">
              <Image
                src="/entreprise/entreprise.svg"
                alt="illustration dashboard"
                width={400}
                height={90}
                className=""
              />
            </div>
          </div>
          {/** */}
          <div className="bg-white w-1/4 px-4 pt-3 ">
            <div>
              <h4 className="font-extrabold text-2xl">
                Une vitrine attractive pour <br /> votre business !
              </h4>
            </div>
            <div>
              <Image
                src="/entreprise/entreprise.svg"
                alt="illustration dashboard"
                width={300}
                height={90}
                className=""
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
