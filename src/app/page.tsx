import Image from "next/image";
import Banner from "../components/BannerCanvas"
import Navbar from '@/components/Navbar';
import SelectedWorks from '@/components/SelectedWorks';
import Dedicate from '@/components/Dedicate';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner/>
    </div>
    <Navbar/>
    <SelectedWorks />
    <Dedicate/>
      <TestimonialSection/>
      <SelectedWorks />
      <CTASection/>
      <Footer/>
    </>
  );
}


// In your page
