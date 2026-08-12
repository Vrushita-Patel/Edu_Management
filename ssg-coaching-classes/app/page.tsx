'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import Courses from '@/components/sections/courses'
import Results from '@/components/sections/results'
import Testimonials from '@/components/sections/testimonials'
import CTA from '@/components/sections/cta'
import Footer from '@/components/footer'
import InquiryModal from '@/components/inquiry-modal'

export default function Home() {
  const [showInquiry, setShowInquiry] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navigation onInquiry={() => setShowInquiry(true)} />
      <Hero onGetStarted={() => setShowInquiry(true)} />
      <Features />
      <Courses onEnroll={() => setShowInquiry(true)} />
      <Results />
      <Testimonials />
      <CTA onEnroll={() => setShowInquiry(true)} />
      <Footer />
      <InquiryModal open={showInquiry} onOpenChange={setShowInquiry} />
    </div>
  )
}
