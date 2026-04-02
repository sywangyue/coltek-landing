import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/hero/Hero';
import SpatialOverview from '@/components/sections/SpatialOverview';
import AirspaceOverview from '@/components/sections/AirspaceOverview';
import AIHardware from '@/components/sections/AIHardware';
import News from '@/components/sections/News';
import About from '@/components/sections/About';
import SocialBar from '@/components/sections/SocialBar';
import Contact from '@/components/sections/Contact';
import { resolveImageDir } from '@/lib/resolveImages';

export default function HomePage() {
  const overviewImages = resolveImageDir('images/overview');

  return (
    <main>
      <Navbar />
      <Hero />
      <SpatialOverview imageSrc={overviewImages['spatial']} />
      <AirspaceOverview imageSrc={overviewImages['airspace']} />
      <AIHardware />
      <News />
      <About />
      <SocialBar />
      <Contact />
      <Footer />
    </main>
  );
}
