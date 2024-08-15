import Entreprise from "@/components/Entreprise";
import Herotop from "@/components/Herotop";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Herotop />
        <Entreprise />
      </main>
    </>
  );
}
