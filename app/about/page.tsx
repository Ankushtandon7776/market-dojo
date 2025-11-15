import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-b-[32px] bg-gradient-to-br from-navy to-navy-dark text-white px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,180,0,0.12),_transparent_55%)]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="relative z-10 container mx-auto flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-2/3 space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <Image
                src="/market-dojo-logo.jpg"
                alt="Market Dojo logo"
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-gold/80">Market Dojo</p>
                <p className="text-sm uppercase tracking-[0.35em] text-white/70">Master the Market</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
              MarketDojo: Dehradun’s first live trading floor institute
            </h1>
            <p className="text-sm text-gray-200 md:text-base lg:text-lg leading-relaxed max-w-3xl">
              We’re not just a classroom — we’re a dojo, “a place where data meets discipline, and traders are trained like warriors.” We combine the intensity of live market action with structured, hands‑on education — turning learners into disciplined, data‑driven traders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses">
                <Button size="lg">Explore Courses</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">Meet the Team</Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-white/10 shadow-2xl backdrop-blur">
              <img
                src="/trading-classroom.jpg"
                alt="Trading classroom"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/70" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">What We Do at MarketDojo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3">Live market coaching, hands‑on strategy building, and immersive trading education inside Dehradun’s first live trading floor.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-navy mb-2">Live Trading Floor Access</h3>
              <p className="text-gray-600">Trade alongside mentors during actual market hours with real‑time feedback.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-navy mb-2">Intensive Coaching Programs</h3>
              <p className="text-gray-600">Our 1‑month TradePath course blends technicals, risk, and psychology.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-navy mb-2">Mentorship & Strategy Labs</h3>
              <p className="text-gray-600">Build, test and refine strategies with seasoned professionals.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-navy mb-2">Workshops & Masterclasses</h3>
              <p className="text-gray-600">Deep dives into algo, options, volume analysis, and discipline.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-navy mb-2">Community & Collaboration</h3>
              <p className="text-gray-600">A tribe of serious traders that share, grow, and stay accountable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn at MarketDojo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Learn at MarketDojo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3">Learning here isn’t passive — it’s immersive. You don’t just study charts. You trade them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Technical Analysis Mastery</h4>
              <p className="text-gray-600 text-sm">Candlestick patterns, chart setups, indicators, and price action.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Trading Psychology</h4>
              <p className="text-gray-600 text-sm">Discipline, emotional control, and mindset training.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Strategy Execution</h4>
              <p className="text-gray-600 text-sm">Intraday, swing, and quant‑based approaches.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Risk Management</h4>
              <p className="text-gray-600 text-sm">Position sizing, stop‑loss logic, and capital protection.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Live Market Coaching</h4>
              <p className="text-gray-600 text-sm">Real‑time decision‑making during actual trading hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Mentoring at MarketDojo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3">More than guidance — it’s transformation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-semibold text-navy mb-2">1:1 Strategy Coaching</h4>
              <p className="text-gray-600 text-sm">Build, test, and refine your approach with expert feedback.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-semibold text-navy mb-2">Live Market Guidance</h4>
              <p className="text-gray-600 text-sm">Execute trades in real time with mentor support.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-semibold text-navy mb-2">Psychology & Discipline</h4>
              <p className="text-gray-600 text-sm">Stay focused, manage emotions, and trade with clarity.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-semibold text-navy mb-2">Performance Reviews</h4>
              <p className="text-gray-600 text-sm">Regular assessments to track progress and improve precision.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-semibold text-navy mb-2">Accountability & Support</h4>
              <p className="text-gray-600 text-sm">Structured mentorship and goal tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3">Tools, insights, and support to grow — inside and beyond the classroom.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Trading Playbooks</h4>
              <p className="text-gray-600 text-sm">Step‑by‑step guides on intraday, swing, and quant strategies.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Market Analysis Reports</h4>
              <p className="text-gray-600 text-sm">Weekly breakdowns of sectors, setups, and price action.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Video Tutorials</h4>
              <p className="text-gray-600 text-sm">Mentor‑led sessions on technicals, risk, and psychology.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Psychology Worksheets</h4>
              <p className="text-gray-600 text-sm">Build emotional control, focus, and consistency.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Charting Tools & Simulators</h4>
              <p className="text-gray-600 text-sm">Practice strategies in a risk‑free environment.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Community Access</h4>
              <p className="text-gray-600 text-sm">Collaborate, share insights, and grow together.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Intro / Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed">
                We are MarketDojo — Dehradun’s first live trading floor institute, built for those who refuse to settle for theory. We are traders, mentors, and educators who believe that real learning happens in real time. Our dojo isn’t a classroom — it’s a battleground where data meets discipline, and strategies are forged through live market exposure.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded by professionals with deep expertise in intraday, swing, and quant trading, MarketDojo blends technical mastery with immersive coaching. We train serious learners to become confident, execution‑ready traders equipped with the mindset, tools, and discipline to thrive in any market.
              </p>
              <p className="text-gray-900 font-semibold">We don’t teach trading. We build traders.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy">Why MarketDojo?</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Real‑time market exposure with live coaching</li>
                <li>• Hands‑on training in intraday, swing, and quant strategies</li>
                <li>• Premium mentorship from seasoned professionals</li>
                <li>• Exclusive access to Dehradun’s only trading floor</li>
                <li>• Limited seats for focused mentorship (serious learners only)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>MarketDojo was born from a simple truth: trading mastery isn’t taught — it’s trained.</p>
                <p>Dehradun had no institute where aspiring traders could sit on a real floor, face real markets, and make real decisions — with expert mentors by their side. So we built one.</p>
                <p>Founded by seasoned traders and creative visionaries, MarketDojo is North India’s first live trading floor institute — a space where education meets execution. Every chart, every trade, every session is designed to sharpen instincts, build discipline, and forge independent thinkers.</p>
                <p className="font-semibold text-gray-900">We don’t do lectures. We do live markets. We don’t hand out shortcuts. We build edge.</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/trading-classroom.jpg"
                alt="Trading classroom"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-navy p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">1st</div>
                <div className="text-sm font-semibold">Live Floor in Dehradun</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To transform aspiring traders into disciplined market professionals — through immersive, real‑time coaching on Dehradun’s first live trading floor. We don’t teach theory. We build instinct.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To build India’s most trusted ecosystem for trading education — where discipline meets data, and ambition meets execution. We envision real‑time mentorship, live market exposure, and tools that help every serious trader thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-navy mb-2">Discipline Over Drama</h4>
              <p className="text-gray-600 text-sm">Decisions rooted in strategy, not impulse.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-navy mb-2">Real‑Time Learning</h4>
              <p className="text-gray-600 text-sm">We learn by doing inside live markets.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h4 className="font-bold text-navy mb-2">Mentorship That Matters</h4>
              <p className="text-gray-600 text-sm">Personalized coaching with accountability.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-navy mb-2">Integrity in Execution</h4>
              <p className="text-gray-600 text-sm">Transparency, risk ethics, and respect for capital.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 3h8v2H6V6zm0 4h8v2H6v-2z" />
                </svg>
              </div>
              <h4 className="font-bold text-navy mb-2">Community of Excellence</h4>
              <p className="text-gray-600 text-sm">We lift each other to higher standards.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3h14v2H3zM3 7h10v2H3zM3 11h14v2H3zM3 15h10v2H3z" />
                </svg>
              </div>
              <h4 className="font-bold text-navy mb-2">Innovation with Intent</h4>
              <p className="text-gray-600 text-sm">Tools and algos that sharpen edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from industry veterans with decades of combined trading experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                alt="Mentor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-2">Vikram Sharma</h3>
                <p className="text-gold font-semibold mb-3">Chief Trading Strategist</p>
                <p className="text-gray-600 text-sm mb-4">
                  15+ years in equity markets. Former senior analyst at leading investment firms. Specializes in technical analysis and swing trading.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="LinkedIn profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                alt="Mentor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-2">Priya Menon</h3>
                <p className="text-gold font-semibold mb-3">Options Trading Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  12+ years specializing in derivatives and options. Helped thousands master complex options strategies with simplified approach.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="LinkedIn profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                alt="Mentor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-2">Arjun Kapoor</h3>
                <p className="text-gold font-semibold mb-3">Risk Management Specialist</p>
                <p className="text-gray-600 text-sm mb-4">
                  18+ years in risk management and portfolio optimization. Expert in helping traders protect capital while maximizing returns.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="LinkedIn profile">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-navy to-navy-light text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of successful traders and take the first step towards financial freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto">
                View Our Courses
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-navy">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
