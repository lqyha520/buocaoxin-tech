import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProductSection from '@/components/ProductSection'
import SolutionSection from '@/components/SolutionSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <SolutionSection />
      <AboutSection />
      <ContactSection />
    </>
  )
} 