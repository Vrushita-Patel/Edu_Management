'use client'

import { Award, TrendingUp } from 'lucide-react'

const results = [
  {
    year: '2024',
    rank: 'All India Rank 12',
    exam: 'SSC CGL',
    student: 'Rahul Kumar',
    score: '97/100'
  },
  {
    year: '2024',
    rank: 'State Rank 3',
    exam: 'SSC 10+2 Level',
    student: 'Priya Sharma',
    score: '95/100'
  },
  {
    year: '2023',
    rank: 'All India Rank 28',
    exam: 'SSC CGL',
    student: 'Amit Patel',
    score: '96/100'
  },
  {
    year: '2023',
    rank: 'Top 5 in State',
    exam: 'Banking Exams',
    student: 'Anjali Singh',
    score: '98/100'
  },
]

export default function Results() {
  return (
    <section id="results" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Our Success Stories
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Student Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating the success of our students who have achieved top ranks and positions in competitive exams.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    {result.exam}
                  </p>
                  <h3 className="text-xl font-bold text-primary">{result.rank}</h3>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-foreground">
                  <span className="font-semibold">{result.student}</span>
                  <span className="text-muted-foreground ml-2">({result.year})</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Score: <span className="font-bold text-foreground">{result.score}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <p className="text-4xl font-bold text-primary mb-2">2,847</p>
            <p className="text-muted-foreground">Students Selected</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <p className="text-4xl font-bold text-purple-600 mb-2">87%</p>
            <p className="text-muted-foreground">First Attempt Success</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <p className="text-4xl font-bold text-green-600 mb-2">156</p>
            <p className="text-muted-foreground">Top Rankers</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <p className="text-4xl font-bold text-orange-600 mb-2">₹5Cr+</p>
            <p className="text-muted-foreground">Total Package</p>
          </div>
        </div>
      </div>
    </section>
  )
}
