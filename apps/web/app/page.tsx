import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">ServiQ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
              Features
            </Link>
            <Link href="#industries" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
              Industries
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-200 transition-all"
            >
              Get Started
            </Link>
          </nav>
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50/50 to-white"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              AI-Powered Field Service Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Manage Your Field Crew
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              From work orders to invoicing — run your entire service business from one platform.
              Works offline, syncs when connected. Built for HVAC, Auto Garage, Manufacturing & more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/register"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-200 transition-all flex items-center justify-center gap-2"
              >
                Start Free Trial
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#demo"
                className="px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl hover:bg-gray-50 transition border border-gray-200 shadow-sm"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: "10K+", label: "Work Orders Monthly" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "4.9★", label: "Customer Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none h-20 bottom-0 top-auto"></div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Work Order Dashboard</div>
                        <div className="text-gray-400 text-sm">Real-time updates</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {['Open', 'In Progress', 'Completed'].map((status) => (
                        <span key={status} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          {status}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { title: "Total Jobs", value: "247", color: "blue" },
                      { title: "Pending", value: "32", color: "amber" },
                      { title: "In Progress", value: "18", color: "indigo" },
                      { title: "Completed", value: "197", color: "green" },
                    ].map((card) => (
                      <div key={card.title} className={`bg-${card.color}-900/50 border border-${card.color}-700/50 rounded-lg p-4`}>
                        <div className="text-gray-400 text-xs mb-1">{card.title}</div>
                        <div className="text-2xl font-bold text-white">{card.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">
            Trusted by service businesses across 5 industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['HVAC Pro Services', 'AutoFix Garage', 'TechMaint Co', 'FieldForce', 'ServiceMax'].map((brand) => (
              <span key={brand} className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A complete toolkit for managing your field service business — from first call to final invoice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📋",
                title: "Smart Work Orders",
                description: "AI auto-classifies jobs, assigns technicians, and tracks SLA deadlines automatically.",
                color: "blue"
              },
              {
                icon: "📍",
                title: "GPS Tracking",
                description: "Live technician locations on Google Maps. Route optimization saves hours daily.",
                color: "green"
              },
              {
                icon: "📱",
                title: "Offline Mobile App",
                description: "Technicians complete full jobs offline. Photos, signatures, parts — all sync when online.",
                color: "indigo"
              },
              {
                icon: "💰",
                title: "Auto Invoicing",
                description: "Invoice generated the moment job is complete. Stripe integration for instant payments.",
                color: "emerald"
              },
              {
                icon: "🤖",
                title: "AI Assistant",
                description: "Claude AI diagnoses faults from photos, suggests parts, and writes job notes.",
                color: "violet"
              },
              {
                icon: "📊",
                title: "Analytics Dashboard",
                description: "Track technician performance, parts usage, and branch profitability in real-time.",
                color: "cyan"
              },
              {
                icon: "🔧",
                title: "Scheduling & Dispatch",
                description: "Drag-and-drop calendar with conflict detection. Assign jobs in seconds.",
                color: "sky"
              },
              {
                icon: "🔔",
                title: "Smart Notifications",
                description: "SMS, email, and push notifications keep customers and technicians informed.",
                color: "amber"
              },
              {
                icon: "📄",
                title: "Contract Management",
                description: "Generate contracts from templates. E-signature with PDF export.",
                color: "teal"
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Built for Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized features for each vertical — not a one-size-fits-all solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "❄️", name: "HVAC / Plumbing / Electrical", desc: "Skill-based assignment, refrigerant tracking, license expiry alerts" },
              { icon: "🚗", name: "Auto Garage", desc: "VIN scan, vehicle inspection checklists, service history timeline" },
              { icon: "🏭", name: "Manufacturing", desc: "OEE calculation, downtime logging, machine health scoring" },
              { icon: "🪙", name: "Scrap Yards", desc: "Material tracking, buy/sell transactions, AI material detection" },
              { icon: "🔩", name: "Maintenance Shops", desc: "Asset management, PM schedules, health score predictions" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{industry.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition">{industry.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{industry.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Live in 3 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Create Your Account", desc: "Sign up in 2 minutes. Connect your Microsoft SSO for team access." },
              { step: "02", title: "Add Your Team & Customers", desc: "Import existing data or start fresh. Set up branches, staff, and rate cards." },
              { step: "03", title: "Go Live", desc: "Create your first work order. Technicians get notified on their mobile app instantly." },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-8xl font-bold text-blue-100 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative pt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start at $79/month. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$79',
                desc: 'Perfect for solo service businesses',
                features: ['Work Orders', '1 Branch', 'Mobile App', 'Customer Portal', 'Email Support'],
                highlight: false
              },
              {
                name: 'Growth',
                price: '$179',
                desc: 'For growing service companies',
                features: ['Everything in Starter', '3 Branches', 'Analytics Dashboard', 'Payroll (10 staff)', 'Basic AI Features'],
                highlight: false
              },
              {
                name: 'Pro',
                price: '$299',
                desc: 'Most popular for scaling businesses',
                features: ['Everything in Growth', '10 Branches', 'Full AI Suite', 'Telematics (10 machines)', '50 staff payroll'],
                highlight: true
              },
              {
                name: 'Enterprise',
                price: '$499',
                desc: 'For large multi-location operations',
                features: ['Everything in Pro', 'Unlimited Branches', 'Custom AI Training', 'Unlimited Telematics', 'Dedicated Support'],
                highlight: false
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-200 scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlight ? 'text-blue-100' : 'text-gray-500'}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <svg className={`w-5 h-5 ${plan.highlight ? 'text-blue-200' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlight ? 'text-white' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`block text-center px-6 py-3 font-semibold rounded-lg transition ${
                    plan.highlight
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of service businesses already using ServiQ to grow their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-200 transition-all"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition border border-white/20"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="font-bold text-xl text-white">ServiQ</span>
              </div>
              <p className="text-sm leading-relaxed">
                AI-powered work order management for field service businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="#industries" className="hover:text-white transition">Industries</Link></li>
                <li><Link href="#" className="hover:text-white transition">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">About</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 ServiQ Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
