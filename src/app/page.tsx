// Component Import
import { Navbar } from "@/app/Components/Navbar";

// Section
import { Hero } from "@/app/Section/Beranda/Hero/Hero";


export default function Home() {
  return (
    <div>
      {/* navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <Hero />


    </div>
  );
}
