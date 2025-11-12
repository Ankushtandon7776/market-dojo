import Link from 'next/link';
import Button from '@/components/Button';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-navy via-navy-light to-navy text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 hero-bg"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master the Art of <span className="text-gold">Stock Market Trading</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn trading from experts through live sessions, recorded courses, and mentorship. Transform your financial future with Market Dojo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Book Free Demo
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">10,000+</div>
                <div className="text-sm md:text-base text-gray-300 mt-1">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">50+</div>
                <div className="text-sm md:text-base text-gray-300 mt-1">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">4.8★</div>
                <div className="text-sm md:text-base text-gray-300 mt-1">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Market Mojo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose Market Dojo?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to become a successful trader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Expert Mentors</h3>
              <p className="text-gray-600">
                Learn from industry veterans with 15+ years of real trading experience in Indian and global markets.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Live Sessions</h3>
              <p className="text-gray-600">
                Interactive live classes with Q&A sessions, market analysis, and real-time trading demonstrations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Lifetime Access</h3>
              <p className="text-gray-600">
                Get lifetime access to course materials, updates, and exclusive trading community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your trading journey with our most sought-after courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              title="Stock Market Basics"
              description="Perfect for beginners. Learn the fundamentals of stock market, how to read charts, and build a strong foundation for your trading journey."
              price="₹9,999"
              duration="6 weeks"
              level="Beginner"
              image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
            />
            <CourseCard
              title="Advanced Technical Analysis"
              description="Master advanced charting techniques, indicators, and price action strategies used by professional traders worldwide."
              price="₹12,999"
              duration="10 weeks"
              level="Intermediate"
              image="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop"
            />
            <CourseCard
              title="Options Trading Masterclass"
              description="Deep dive into options strategies, risk management, and how to generate consistent income through options trading."
              price="₹14,999"
              duration="12 weeks"
              level="Advanced"
              image="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&h=400&fit=crop"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real success stories from traders who transformed their lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              role="Full-time Trader"
              content="Market Dojo changed my life completely. From knowing nothing about stocks to making consistent profits every month. The mentors are incredibly supportive and knowledgeable."
              rating={5}
            />
            <TestimonialCard
              name="Priya Sharma"
              role="IT Professional & Part-time Trader"
              content="I was skeptical about online courses, but Market Dojo exceeded all expectations. The live sessions and practical approach helped me gain confidence in trading."
              rating={5}
            />
            <TestimonialCard
              name="Amit Patel"
              role="Business Owner"
              content="Best investment I ever made! The options trading course is comprehensive and the community support is amazing. Highly recommend to anyone serious about trading."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-navy to-navy-light text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Trading Journey Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their financial future with Market Dojo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Courses
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-navy">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
