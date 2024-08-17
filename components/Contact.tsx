import Image from "next/image";
import Container from "./Container";

export default function Contact() {
  return (
    <section className="bg-[#0958A5]/30 py-20">
      <Container>
        <div className="flex justify-center">
          <span className="inline-block relative">
            <span className="absolute inset-0 bg-[#F4C790]  transform -rotate-3 rounded-[12px] shadow-md"></span>
            <span className="relative inline-block px-3 py-1 transform -rotate-3 text-[#323F49]">
              Contact
            </span>
          </span>
        </div>
        <div>
          <h2 className="font-extrabold mt-3 text-4xl text-center">
            Nous répondons à toutes vos <br /> questions !
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h6 className="font-bold text-[1.5rem] mb-8">Écrivez-nous !</h6>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Prénom *"
                  className="w-full p-2 border rounded-[2rem]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nom *"
                  className="w-full p-2 border rounded-[2rem]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email *"
                  placeholder="Email"
                  className="w-full p-2 border rounded-[2rem]"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message *"
                  className="w-full p-2  border rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary_button text-white p-2 rounded-[2rem] hover:bg-primary_button/90"
              >
                Envoyer un message
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-8">
                <h6 className="font-bold text-[1.5rem] ">Newsletter</h6>
                <p className="text-[14px] text-[#323F49]">
                  Restez informé des dernières opportunités sur wekomkom.
                </p>
              </div>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Nom complet *"
                    className="w-full p-2 border rounded-[2rem]"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Adresse email *"
                    className="w-full p-2 border rounded-[2rem]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary_button text-white p-2 rounded-[2rem] hover:bg-primary_button/90"
                >
                  S’abonner à la newsletter
                </button>
              </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h6 className="font-bold text-[1.5rem] mb-8">Contact</h6>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-4 font-bold">
                    <Image
                      src="/assets/phone.svg"
                      alt="icon"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <span>+221 77 779 83 83 / 33 867 80 43</span>
                  </li>
                  <li className="flex items-center space-x-4 font-bold">
                    <Image
                      src="/assets/whatsapp.svg"
                      alt="icon"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <span>
                      <a
                        href="https://chat.whatsapp.com/EBf3ma0P0MiAmIs3mVfRuP"
                        target="_blank"
                      >
                        Rejoindre la communauté Whatsapp
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 font-bold">
                    <Image
                      src="/assets/mail.svg"
                      alt="icon"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <span>contact@wekomkom.com</span>
                  </li>
                  <li className="flex items-center space-x-4 font-bold">
                    <Image
                      src="/assets/location.svg"
                      alt="icon"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    <span>Karack Amitié 3, à côté pharmacie selma</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
