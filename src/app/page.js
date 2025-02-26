import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#D7D7D7] overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
