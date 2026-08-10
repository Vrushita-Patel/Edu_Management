'use client'

import Link from 'next/link'
import { Share2, ExternalLink, Rss, LinkIcon, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">SSG Classes</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building Foundations. Creating Engineers. Shaping Futures. Premier coaching institute in Pimpri dedicated to helping students excel in academics and competitive exams with expert guidance and proven methodologies.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Rss className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Courses</a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">Results</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">Admin Portal</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Vastu Udyog CHSL No 10<br />Office No 101&102<br />Ajmera Main road<br />Masulkar colony<br />Pimpri, Pune</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div className="flex flex-col">
                  <a href="tel:08308636336" className="hover:text-white transition-colors">
                    08308636336
                  </a>
                  <a href="tel:09657011125" className="hover:text-white transition-colors">
                    09657011125
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} SSG Classes. All rights reserved. Developed by Discovery Media</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
