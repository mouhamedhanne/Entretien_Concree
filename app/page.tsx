import Accecibility from "@/components/Accecibility";
import Accompagnement from "@/components/Accompagnement";
import Entreprise from "@/components/Entreprise";
import Herotop from "@/components/Herotop";
import Market from "@/components/Market";
import Navbar from "@/components/Navbar";

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
      </main>
    </>
  );
}
