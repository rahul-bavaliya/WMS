import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-lg">WMS Platform</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Multi-Industry Work Order Management
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Run Your Field Service
            <span className="text-blue-600"> Anywhere, Offline</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered work order management for HVAC, Auto Garage, Manufacturing, and more.
            Works offline on mobile — syncs when you&apos;re back online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Start Free Trial
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl hover:bg-gray-50 transition border border-gray-200"
            >
              View Features
            </Link>
          </div>
        </div>

        {/* Industries */}
        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">
            Trusted by service businesses
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['HVAC / Plumbing', 'Auto Garage', 'Manufacturing', 'Scrap Yards', 'Maintenance'].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Pricing Preview */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600">
              Start at $79/month. No hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Starter', price: '$79', features: ['Work Orders', '1 Branch', 'Mobile App', 'Customer Portal'] },
              { name: 'Growth', price: '$179', features: ['3 Branches', 'Analytics', 'Payroll (10 staff)', 'Basic AI'] },
              { name: 'Pro', price: '$299', features: ['10 Branches', 'Full AI', 'Telematics', '50 staff payroll'] },
              { name: 'Enterprise', price: '$499', features: ['Unlimited', 'Custom AI', 'Unlimited Telematics', 'Dedicated Support'] },
            ].map((plan) => (
              <div key={plan.name} className="border rounded-2xl p-6 hover:border-blue-300 transition">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
