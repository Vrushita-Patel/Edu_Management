'use client'

import { BookOpen, Users, Zap, Trophy, Clock, Video } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Structured course content covering all exam topics with detailed explanations and practice materials.'
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Highly qualified instructors with proven track record of producing top rankers and successful students.'
  },
  {
    icon: Zap,
    title: 'Interactive Classes',
    description: 'Engaging live sessions with doubt-solving, instant feedback, and personalized attention to each student.'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Consistent success with 95% pass rate and multiple state toppers every year from our institute.'
  },
  {
    icon: Clock,
    title: 'Flexible Schedules',
    description: 'Multiple batch timings available to accommodate student preferences and academic commitments.'
  },
  {
    icon: Video,
    title: 'Online Support',
    description: 'Recorded lectures, online doubt forums, and 24/7 access to study materials and resources.'
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive coaching with expert guidance, modern teaching methods, and proven results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
