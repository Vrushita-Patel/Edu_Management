'use client'

import { ArrowRight, Star } from 'lucide-react'

interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold">
              <Star className="w-4 h-4" />
              Trusted by 2000+ Students
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Excel Academically,
              <br />
              <span className="gradient-text">Succeed Competitively!</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to <strong>SSG Classes</strong>, the most trusted destination for <strong>8th, 9th & 10th Foundation Coaching Classes in Pimpri</strong>, along with expert preparation for <strong>JEE Main</strong>, <strong>MHCET</strong>, <strong>PCM Personal Tuitions</strong>, and <strong>11th & 12th Science Classes</strong>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Led by <strong>Director Ashish Saxena (B.E. Electronics, 15+ years of experience)</strong>, we deliver concept-based learning and competitive exam readiness.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">2000+</p>
                <p className="text-sm text-muted-foreground">Students Trained</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">95%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={onGetStarted}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square relative">
              {/* Gradient card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
              
              {/* Feature cards floating */}
              <div className="absolute top-8 left-8 bg-white p-4 rounded-xl shadow-lg border border-border w-48">
                <p className="font-semibold text-primary">Expert Mentors</p>
                <p className="text-sm text-muted-foreground mt-2">15+ years of experience</p>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-lg border border-border w-48">
                <p className="font-semibold text-accent">Live Classes</p>
                <p className="text-sm text-muted-foreground mt-2">Interactive learning sessions</p>
              </div>

              <div className="absolute right-8 top-1/2 bg-white p-4 rounded-xl shadow-lg border border-border w-48 -translate-y-1/2">
                <p className="font-semibold text-primary">100% Results</p>
                <p className="text-sm text-muted-foreground mt-2">Students pass every year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
