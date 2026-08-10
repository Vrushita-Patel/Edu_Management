'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Riya Patil',
    role: 'Foundation Course Student',
    content: 'SSG coaching helped me build strong basics in math and science, making board exams much easier. The teachers are patient and explain every concept clearly. Great environment!',
    rating: 5,
    image: '/students/riya.png'
  },
  {
    name: 'Amit Joshi',
    role: 'JEE Main - Selected',
    content: 'The personalized attention in PCM tuitions boosted my confidence and helped me crack JEE Main. The doubt-solving sessions were incredibly helpful. Highly recommended!',
    rating: 5,
    image: '/students/amit.png'
  },
  {
    name: 'Priya Sharma',
    role: '12th Science Student',
    content: 'Best coaching institute in Pimpri. The mock tests and regular feedback sessions were instrumental in my success. The mentors genuinely care about student progress.',
    rating: 5,
    image: '/students/priya.png'
  },
  {
    name: 'Vikram Desai',
    role: 'JEE Advanced Aspirant',
    content: 'Starting my engineering entrance journey here was the best decision. The faculty has deep subject knowledge and the environment is very supportive and motivating.',
    rating: 5,
    image: '/students/vikram.png'
  },
  {
    name: 'Anjali Singh',
    role: '10th Foundation Course',
    content: 'The structured approach and comprehensive curriculum made complex topics easy to understand. I felt confident during the board exams thanks to the rigorous preparation here.',
    rating: 5,
    image: '/students/anjali.png'
  },
  {
    name: 'Neha Verma',
    role: 'Mathematics Specialist',
    content: 'The intensive mathematics course helped me go from struggling to scoring 98%. Teachers are patient, concepts are clear, and the success rate speaks for itself!',
    rating: 5,
    image: '/students/neha.png'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Students Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our students say about SSG Coaching - Real experiences from students who have successfully completed our courses and achieved their goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-border hover:shadow-lg transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-4 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Stats */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 p-8 rounded-2xl border border-blue-200">
            <p className="text-sm text-muted-foreground mb-2">Trusted by Students</p>
            <p className="text-5xl font-bold text-primary mb-2">4.9/5</p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground">Based on 500+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}
