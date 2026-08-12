'use client'

import { ArrowRight, Phone } from 'lucide-react'

interface CTAProps {
  onEnroll: () => void
}

export default function CTA({ onEnroll }: CTAProps) {
  return (
    <section className="section-padding bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Achieve Your Goals?
          </h2>
          
          <p className="text-lg text-blue-50 mb-8 leading-relaxed">
            Join thousands of successful students who have transformed their careers with our expert coaching. 
            Limited seats available for the next batch. Enroll today and get a free consultation with our head coach!
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-semibold mb-2">✓ Free Trial Class</p>
              <p className="text-blue-50 text-sm">Attend one class free, no commitment required</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-semibold mb-2">✓ Money-Back Guarantee</p>
              <p className="text-blue-50 text-sm">Unsatisfied? Get full refund within 7 days</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-semibold mb-2">✓ Lifetime Access</p>
              <p className="text-blue-50 text-sm">Access to recorded lectures forever</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onEnroll}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group text-lg"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+919876543210"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-50 text-sm mb-4">Trusted by leading organizations</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-2xl font-bold">5000+</p>
                <p className="text-blue-50 text-xs">Active Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-blue-50 text-xs">Years in Service</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-blue-50 text-xs">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
