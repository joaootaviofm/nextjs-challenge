import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-[#D7D7D7]">
      <Navbar />
      <Hero />
    </div>
  );
}
