import Container from "./Container";

export default function Market() {
  return (
    <section className="bg-[#F6F6F6] py-16">
      <Container>
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block relative">
              <span className="absolute inset-0 bg-gradient-to-r from-[#207280] to-[#3B9054] transform -rotate-3 rounded-[12px] shadow-md"></span>
              <span className="relative inline-block px-3 py-1 transform -rotate-3 text-white">
                Boutique d'accompagnement
              </span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
