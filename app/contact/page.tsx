'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log('Form submitted:', formData);
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1E3D] via-[#1a3a5f] to-[#0A1E3D] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get in Touch with <span className="text-[#F8B400]">Market Dojo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have a question about courses, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="bg-[#F8B400] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A1E3D] mb-3">Email Us</h3>
              <p className="text-gray-600 mb-2">For general inquiries</p>
              <a href="mailto:contact@marketdojo.com" className="text-[#F8B400] hover:underline font-medium">
                contact@marketdojo.com
              </a>
              <p className="text-gray-600 mt-3 mb-2">For support</p>
              <a href="mailto:support@marketdojo.com" className="text-[#F8B400] hover:underline font-medium">
                support@marketdojo.com
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="bg-[#F8B400] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A1E3D] mb-3">Call Us</h3>
              <p className="text-gray-600 mb-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <a href="tel:+919876543210" className="text-[#F8B400] hover:underline font-medium text-lg">
                +91 98765 43210
              </a>
              <p className="text-gray-600 mt-3">Sat: 10:00 AM - 4:00 PM</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="bg-[#F8B400] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A1E3D] mb-3">Visit Us</h3>
              <p className="text-gray-600">
                Market Dojo HQ<br />
                123 Financial District<br />
                Lower Parel, Mumbai<br />
                Maharashtra 400013, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Form Side */}
                <div className="lg:col-span-3 p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-[#0A1E3D] mb-3">Send us a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#0A1E3D] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8B400] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#0A1E3D] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8B400] focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#0A1E3D] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8B400] focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#0A1E3D] mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8B400] focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="course-inquiry">Course Inquiry</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#0A1E3D] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F8B400] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>

                {/* Info Side */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#0A1E3D] to-[#1a3a5f] p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6">Quick Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#F8B400] mb-2">Response Time</h4>
                      <p className="text-gray-300 text-sm">We typically respond within 24 hours during business days.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#F8B400] mb-2">Office Hours</h4>
                      <p className="text-gray-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-gray-300 text-sm">Saturday: 10:00 AM - 4:00 PM IST</p>
                      <p className="text-gray-300 text-sm">Sunday: Closed</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#F8B400] mb-2">Follow Us</h4>
                      <div className="flex space-x-4 mt-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#F8B400] hover:text-[#0A1E3D] transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#F8B400] hover:text-[#0A1E3D] transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#F8B400] hover:text-[#0A1E3D] transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#F8B400] hover:text-[#0A1E3D] transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                      <p className="text-sm text-gray-300 italic">
                        "Your success is our priority. We're here to support your trading journey every step of the way."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-white">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3748520344765!2d72.82229631490058!3d18.99515098717478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7e0c5c2c45%3A0x7e7be1c44a5d9c0!2sLower%20Parel%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Market Dojo Location"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Quick answers to common questions
            </p>

            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-semibold text-[#0A1E3D] cursor-pointer list-none flex justify-between items-center">
                  <span>How do I enroll in a course?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Simply browse our courses page, select the course you're interested in, and click "Enroll Now". You'll be guided through the payment process and will get instant access to the course materials.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-semibold text-[#0A1E3D] cursor-pointer list-none flex justify-between items-center">
                  <span>Do you offer refunds?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! We offer a 7-day money-back guarantee. If you're not satisfied with the course within the first 7 days, contact us for a full refund.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-semibold text-[#0A1E3D] cursor-pointer list-none flex justify-between items-center">
                  <span>Are the courses suitable for beginners?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely! We have courses designed specifically for beginners, as well as intermediate and advanced traders. Each course clearly indicates the skill level required.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-semibold text-[#0A1E3D] cursor-pointer list-none flex justify-between items-center">
                  <span>Do I get lifetime access to the courses?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! Once you enroll in a course, you get lifetime access to all course materials, including any future updates and additions.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
