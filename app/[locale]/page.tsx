import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/hero/Hero';
import SpatialOverview from '@/components/sections/SpatialOverview';
import AirspaceOverview from '@/components/sections/AirspaceOverview';
import AIHardware from '@/components/sections/AIHardware';
import News from '@/components/sections/News';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import SpatialProducts from '@/components/spatial/SpatialProducts';
import SpatialShowcase from '@/components/spatial/SpatialShowcase';
import SpatialIndustries from '@/components/spatial/SpatialIndustries';
import AirspaceProducts from '@/components/airspace/AirspaceProducts';
import AirspaceShowcase from '@/components/airspace/AirspaceShowcase';
import AirspaceIndustries from '@/components/airspace/AirspaceIndustries';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SpatialOverview />
      <AirspaceOverview />
      <AIHardware />
      <News />
      <About />
      <Contact />

      {/* ── Business detail sections ── */}
      <div className="border-t border-border" />
      <SpatialProducts />
      <SpatialShowcase />
      <SpatialIndustries />

      <div className="border-t border-border" />
      <AirspaceProducts />
      <AirspaceShowcase />
      <AirspaceIndustries />

      <Footer />
    </main>
  );
}
