import Accecibility from "@/components/Accecibility";
import Accompagnement from "@/components/Accompagnement";
import Contact from "@/components/Contact";
import Entreprise from "@/components/Entreprise";
import Footer from "@/components/Footer";
import Herotop from "@/components/Herotop";
import Market from "@/components/Market";
import Navbar from "@/components/Navbar";
import Opportunity from "@/components/Opportunity";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Herotop />
        <Entreprise />
        <Accecibility />
        <Accompagnement />
        <Market />
        <Opportunity />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
