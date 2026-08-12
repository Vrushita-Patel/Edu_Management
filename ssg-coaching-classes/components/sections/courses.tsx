'use client'

import { Clock, Users, BookOpen, CheckCircle } from 'lucide-react'

interface CoursesProps {
  onEnroll: () => void
}

const courses = [
  {
    id: 1,
    name: '8th, 9th & 10th Foundation Classes',
    duration: 'Full Year',
    batch: 'Ongoing',
    students: 120,
    highlights: ['Math & Science', 'Board exam prep', 'Competitive readiness', 'Concept clarity'],
    price: 'Contact for pricing',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    name: '11th & 12th Science Classes',
    duration: 'Full Year',
    batch: 'Ongoing',
    students: 85,
    highlights: ['PCM tuitions', 'Advanced concepts', 'Mock tests', 'Doubt sessions'],
    price: 'Contact for pricing',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    name: 'JEE Main Preparation',
    duration: '12 months',
    batch: 'Ongoing',
    students: 65,
    highlights: ['Advanced techniques', 'Mock tests', 'Time management', 'One-on-one mentoring'],
    price: 'Contact for pricing',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    name: 'MHTCET Coaching',
    duration: '6 months',
    batch: 'Ongoing',
    students: 50,
    highlights: ['Medical entrance', 'Engineering entrance', 'Strategy training', 'Performance tracking'],
    price: 'Contact for pricing',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 5,
    name: 'PCM Personal Tuitions',
    duration: 'Flexible',
    batch: 'Anytime',
    students: 75,
    highlights: ['One-to-one learning', 'Customized plan', 'Weak areas focus', 'Flexible timing'],
    price: 'Contact for pricing',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 6,
    name: 'NEET Preparation',
    duration: '12 months',
    batch: 'Ongoing',
    students: 45,
    highlights: ['Medical entrance focus', 'Biology & Chemistry', 'Mock tests', 'Personalized guidance'],
    price: 'Contact for pricing',
    color: 'from-teal-500 to-teal-600'
  },
]

export default function Courses({ onEnroll }: CoursesProps) {
  return (
    <section id="courses" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Best coaching classes in Pimpri for strong foundation and competitive exams. We offer comprehensive programs from 8th standard through advanced competitive exam preparation.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all group"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${course.color} h-2`} />
              
              <div className="p-6 space-y-4">
                {/* Course Name */}
                <h3 className="font-serif font-bold text-lg text-foreground">
                  {course.name}
                </h3>

                {/* Meta Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students} Students Enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.batch}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Highlights */}
                <div className="space-y-2">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="pt-4 space-y-3">
                  <p className="text-2xl font-bold text-primary">{course.price}</p>
                  <button
                    onClick={onEnroll}
                    className="w-full btn-accent text-sm"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need help choosing a course?</p>
          <button onClick={onEnroll} className="btn-primary">
            Talk to Our Counselor
          </button>
        </div>
      </div>
    </section>
  )
}
