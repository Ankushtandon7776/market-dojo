import Image from 'next/image';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import Button from '@/components/Button';

export default function Courses() {
  const courses = [
    {
      title: "Stock Market Basics",
      description: "Perfect for beginners. Learn the fundamentals of stock market, how to read charts, understand market dynamics, and build a strong foundation for your trading journey. Covers candlestick patterns, support & resistance, and basic trading psychology.",
      price: "₹9,999",
      duration: "6 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
    },
    {
      title: "Advanced Technical Analysis",
      description: "Master advanced charting techniques, indicators, and price action strategies used by professional traders worldwide. Deep dive into Elliott Wave Theory, Fibonacci retracements, and multi-timeframe analysis for precision trading.",
      price: "₹12,999",
      duration: "10 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop"
    },
    {
      title: "Options Trading Masterclass",
      description: "Deep dive into options strategies, risk management, and how to generate consistent income through options trading. Learn spreads, straddles, strangles, and advanced hedging techniques with real market examples.",
      price: "₹14,999",
      duration: "12 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&h=400&fit=crop"
    },
    {
      title: "Intraday Trading Strategies",
      description: "Master the art of day trading with proven strategies for scalping and momentum trading. Learn to identify high-probability setups, manage risk effectively, and maximize profits in volatile intraday markets.",
      price: "₹11,999",
      duration: "8 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop"
    },
    {
      title: "Swing Trading Blueprint",
      description: "Learn to capitalize on multi-day price movements with our comprehensive swing trading course. Covers trend identification, position sizing, and strategies for holding trades for 2-10 days for optimal gains.",
      price: "₹10,999",
      duration: "7 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop"
    },
    {
      title: "Risk Management Mastery",
      description: "Protect your capital and trade with confidence. Learn professional risk management techniques, position sizing strategies, and how to create a robust trading plan that keeps you profitable in any market condition.",
      price: "₹8,999",
      duration: "5 weeks",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
    },
    {
      title: "Futures Trading Complete Guide",
      description: "Explore the world of futures trading with comprehensive training on index futures, commodity futures, and currency futures. Learn leverage management, hedging strategies, and how to trade futures contracts effectively.",
      price: "₹13,999",
      duration: "10 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop"
    },
    {
      title: "Algorithmic Trading Introduction",
      description: "Enter the world of automated trading. Learn to develop, backtest, and deploy trading algorithms. Covers Python basics, trading APIs, strategy development, and risk management in algorithmic trading systems.",
      price: "₹15,999",
      duration: "14 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Cryptocurrency Trading",
      description: "Understand the unique dynamics of crypto markets. Learn about blockchain technology, crypto technical analysis, DeFi protocols, and strategies for trading Bitcoin, Ethereum, and altcoins profitably and safely.",
      price: "₹12,999",
      duration: "9 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-b-[32px] bg-navy text-white px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src="/trading-classroom.jpg"
            alt="Stock market trading floor"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-dark/80 to-navy-dark/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_60%)]" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Market Dojo Courses</p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Transform Your Trading with <span className="text-gold">Expert Courses</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base text-gray-200 md:text-lg">
              From beginner to advanced, find the perfect course to accelerate your trading journey. Learn from industry experts with proven track records.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-white/90">
            {['Expert Mentors', 'Live Sessions', 'Lifetime Access', 'Certificate'].map((item) => (
              <span key={item} className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Book a Free Demo</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                Meet the Mentors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-600">
                Showing <span className="font-semibold text-[#0A1E3D]">{courses.length} courses</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-[#0A1E3D] text-white rounded-full text-sm font-medium hover:bg-[#1a3a5f] transition-all">
                All Levels
              </button>
              <button className="px-4 py-2 bg-white text-[#0A1E3D] border border-gray-300 rounded-full text-sm font-medium hover:border-[#F8B400] hover:text-[#F8B400] transition-all">
                Beginner
              </button>
              <button className="px-4 py-2 bg-white text-[#0A1E3D] border border-gray-300 rounded-full text-sm font-medium hover:border-[#F8B400] hover:text-[#F8B400] transition-all">
                Intermediate
              </button>
              <button className="px-4 py-2 bg-white text-[#0A1E3D] border border-gray-300 rounded-full text-sm font-medium hover:border-[#F8B400] hover:text-[#F8B400] transition-all">
                Advanced
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                price={course.price}
                duration={course.duration}
                level={course.level}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1E3D] mb-4">
              What's Included in Every Course
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the complete learning experience with comprehensive resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#F8B400] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0A1E3D] mb-2">Video Lessons</h3>
              <p className="text-sm text-gray-600">HD quality recorded sessions</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#F8B400] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0A1E3D] mb-2">Assignments</h3>
              <p className="text-sm text-gray-600">Practice with real scenarios</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#F8B400] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0A1E3D] mb-2">Community</h3>
              <p className="text-sm text-gray-600">Private Discord group access</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#F8B400] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0A1E3D] mb-2">Certificate</h3>
              <p className="text-sm text-gray-600">Course completion certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A1E3D] to-[#1a3a5f] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Course to Choose?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free consultation call with our experts and get personalized course recommendations
          </p>
          <Link href="/contact">
            <Button size="lg">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
