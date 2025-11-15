import Image from 'next/image';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import Button from '@/components/Button';

export default function Courses() {
  const courses = [
    {
      title: "TradePath Program",
      description: "A 1‑month intensive designed to transform beginners into confident, execution‑ready traders. Built around live market coaching, hands‑on strategy building, and structured feedback loops.",
      price: "Contact for fee",
      duration: "1 Month",
      level: "Beginner to Intermediate",
      image: "/trading-classroom.jpg"
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
            <p className="text-xs uppercase tracking-[0.45em] text-gold/80">MarketDojo</p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              TradePath: Learn by doing on a live trading floor
            </h1>
            <p className="mx-auto max-w-3xl text-base text-gray-200 md:text-lg">
              Dehradun’s first live trading floor program for serious learners. Real trades. Real strategies. Real results.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-white/90">
            {['Live Market Coaching', 'Intraday, Swing, Quant', 'Risk Frameworks', 'Psychology & Discipline'].map((item) => (
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

      {/* Program Snapshot */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="text-3xl font-bold text-navy">1 Month</div>
              <p className="text-gray-600">Duration</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="text-3xl font-bold text-navy">10 Seats</div>
              <p className="text-gray-600">Per batch</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="text-3xl font-bold text-navy">Live Floor</div>
              <p className="text-gray-600">Access included (1 month)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <CourseCard
                title={courses[0].title}
                description={courses[0].description}
                price={courses[0].price}
                duration={courses[0].duration}
                level={courses[0].level}
                image={courses[0].image}
              />
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-navy mb-4">What’s Included</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                  <li>• Daily live market sessions</li>
                  <li>• Technical analysis mastery</li>
                  <li>• Risk management frameworks</li>
                  <li>• Strategy building & execution</li>
                  <li>• Trading psychology & discipline</li>
                </ul>
                <p className="mt-4 text-navy font-semibold">Bonus: Free access to MarketDojo’s trading floor for 1 month</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-navy mb-4">Why Choose Us</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ First‑of‑its‑kind in Dehradun</li>
                  <li>✅ Real trades. Real strategies. Real results.</li>
                  <li>✅ Limited seats for focused mentorship</li>
                  <li>✅ Designed for serious learners, not hobbyists</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-navy mb-3">What you’ll practice</h3>
                <p className="text-gray-700">Intraday, swing, and quant‑based execution with live mentor feedback.</p>
              </div>
            </div>
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
              <h3 className="font-bold text-[#0A1E3D] mb-2">Live Market Coaching</h3>
              <p className="text-sm text-gray-600">Execute during actual market hours</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#F8B400] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0A1E3D] mb-2">Strategy Labs</h3>
              <p className="text-sm text-gray-600">Build and refine setups</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#F8B400] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0A1E3D] mb-2">Mentorship</h3>
              <p className="text-sm text-gray-600">Guidance + performance reviews</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#F8B400] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#0A1E3D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0A1E3D] mb-2">Simulation Labs</h3>
              <p className="text-sm text-gray-600">Test before you go live</p>
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
