import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';

const pillars = [
  {
    title: 'Live Trading Floor',
    detail: 'Trade alongside mentors as they execute live orders, interpret charts, and react to breaking news.',
    icon: (
      <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6h16v2H4zM4 10h10v2H4zM4 14h16v2H4zM4 18h10v2H4z" />
      </svg>
    )
  },
  {
    title: 'Actionable Research',
    detail: 'Receive curated setup alerts, idea dossiers, and weekly annotated heatmaps that keep you one step ahead.',
    icon: (
      <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 3h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h12V5H6zm2 3h8v2H8V8zm0 4h8v2H8v-2z" />
      </svg>
    )
  },
  {
    title: 'Mentorship Circle',
    detail: 'Weekly 1:1 reviews, community challenges, and accountability calls to keep your mindset sharp.',
    icon: (
      <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a4.5 4.5 0 10-4.486-4.912A5 5 0 007 19h10a5 5 0 00-1.514-3.912A4.5 4.5 0 0012 12zm0-2a2 2 0 110-4 2 2 0 010 4zm-6 5a3 3 0 016 0H6z" />
      </svg>
    )
  }
];

const timeline = [
  {
    title: 'Onboarding Pulse',
    subtext: 'Private welcome call + trading DNA assessment.',
    badge: 'Week 1'
  },
  {
    title: 'Strategy Building',
    subtext: 'Focus on price action, macro positioning, and risk scripting.',
    badge: 'Weeks 2-5'
  },
  {
    title: 'Momentum Execution',
    subtext: 'Live trade rooms, review loops, and capital protection drills.',
    badge: 'Weeks 6-8'
  }
];

const heroStats = [
  { value: '5+', label: 'Live trading rooms weekly' },
  { value: '250+', label: 'Certified mentors' },
  { value: '98%', label: 'Students who stay active' }
];

const highlightCards = [
  {
    title: 'Community Pulse',
    description: 'Slack community, Discord alerts, and alumni meetups that keep the learning energy alive.',
    accent: 'from-fuchsia-500/80 to-orange-400/80'
  },
  {
    title: 'Tools & Tech',
    description: 'Built-in scanners, journal templates, and custom dashboards for seamless execution.',
    accent: 'from-sky-500/80 to-cyan-400/80'
  }
];

const featuredCourses = [
  {
    title: 'Professional Trading Blueprint',
    description: 'Move from theory to execution with live risk management, options overlays, and daily huddles.',
    price: '₹87,000',
    duration: '10 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&h=400&fit=crop'
  },
  {
    title: 'Options Alpha Lab',
    description: 'Decode volatility, protect capital, and craft income strategies through live trade audits.',
    price: '₹94,000',
    duration: '12 weeks',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
  },
  {
    title: 'Fundamentals to Futures',
    description: 'Blend fundamental research with derivatives execution so you can trade confidently across timeframes.',
    price: '₹65,000',
    duration: '8 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop'
  }
];

const testimonials = [
  {
    name: 'Ananya Mehta',
    role: 'Quant Researcher',
    content: 'The live floor taught me how to read liquidity and order flow better than any course I have taken.',
    rating: 5
  },
  {
    name: 'Sahil Rathi',
    role: 'Full-time Trader',
    content: 'Every week feels like a power session. The accountability and mentorship are unmatched.',
    rating: 5
  },
  {
    name: 'Rhea Kapoor',
    role: 'Startup Founder',
    content: 'Market Dojo gave me the confidence to protect capital and draw up systematic strategies.',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-b-[32px] bg-gradient-to-br from-navy to-navy-dark text-white px-6 py-16 md:px-10 lg:px-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,180,0,0.35),_transparent_55%)]" />
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#F8B400]/40 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-2/3 space-y-8">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
              <Image
                src="/market-dojo-logo.jpg"
                alt="Market Dojo logo"
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
                priority
              />
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/80">Master the Market</p>
                <p className="text-xs uppercase tracking-[0.6em] text-gold">Train Like a Warrior</p>
              </div>
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Craft confident trades with live guidance, sharp research, and nonstop support.
            </h1>
            <p className="text-lg text-gray-200 md:text-xl">
              We combine a live trading floor with curated coursework, so you never have to trade alone. Jump into the flow, get real-time feedback, and grow your skillset faster than traditional classrooms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses">
                <Button size="lg">Explore Courses</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white">
                  Book a Free Demo
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <p className="text-sm text-gray-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 space-y-6">
            <div className="rounded-3xl border border-white/20 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-gold">Live floor now</p>
              <div className="mt-4 text-2xl font-bold">Markets are open & mentors are live</div>
              <p className="text-sm text-gray-200 mt-2">Join a room, tag a mentor, and share your view. Every session ends with a debrief so you know what to do next.</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-gold to-navy font-semibold text-navy flex items-center justify-center">24</div>
                <div>
                  <p className="text-sm text-gray-200">Active seats today</p>
                  <p className="text-lg font-bold">Live room passes</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-gold/80 to-orange-500/80 p-6 text-navy shadow-2xl">
              <p className="text-sm uppercase tracking-[0.4em]">Next call</p>
              <div className="mt-2 text-2xl font-bold">Trade Review Lab</div>
              <p className="text-sm text-navy/80 mt-1">Every Thursday · 8:00 PM IST · mentors on camera</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">The Market Dojo Way</p>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Structure + execution, every week</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A blend of live trading floors, hands-on mentorship, and curated coursework builds confident traders, not just students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-navy mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight cards */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-2">
          {highlightCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[32px] p-8 shadow-2xl text-white bg-gradient-to-br ${card.accent}`}
            >
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Community</p>
              <h3 className="mt-4 text-2xl font-bold">{card.title}</h3>
              <p className="mt-3 text-sm text-white/80">{card.description}</p>
              <div className="mt-6 flex items-center gap-3 text-sm font-semibold">
                <span>See what&#39;s happening ↗</span>
                <span aria-hidden="true">•</span>
                <span>Live rooms</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning timeline */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Learning Rhythms</p>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Every phase blends theory with intense trade rehearsal</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 rounded-3xl border border-gray-200 p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{item.badge}</p>
                  <h3 className="text-2xl font-bold text-navy">{item.title}</h3>
                  <p className="text-gray-600">{item.subtext}</p>
                </div>
                <div className="text-sm font-semibold text-gray-500">Live room + recorded vault</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Featured Journeys</p>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Hands-on courses designed for real results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the cohort that matches your experience level and get curated mentorship through every trade.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/courses">
              <Button size="lg">Browse all programs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Success Notes</p>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Students who now trade with authority</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Real voices from our community describe how we turn confusion into clarity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[40px] bg-gradient-to-br from-navy to-navy-dark px-6 py-16 text-white">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold">Ready?</p>
          <h2 className="text-3xl font-bold md:text-4xl">Turn knowledge into momentum this quarter.</h2>
          <p className="text-lg text-gray-200 max-w-2xl">
            Book a discovery call, audition a live room, or join a course. We will tailor a path that matches your courage to trade.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg">Book a Strategy Call</Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                Preview Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
