import Hero from '@/components/sections/Hero';
import LinkedInPost from '@/components/sections/LinkedInPost';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import ProfileDemo from '@/components/sections/ProfileDemo';
import Pricing from '@/components/sections/Pricing';
import Newsletter from '@/components/sections/Newsletter';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import ChatbotWidget from '@/components/ChatbotWidget';

export default function Home() {
  return (
    <>
      <Hero />
      <LinkedInPost />
      <Features />
      <Testimonials />
      <ProfileDemo />
      <Pricing />
      <Newsletter />
      <FAQ />
      <CTA />
      <ChatbotWidget />
    </>
  );
}