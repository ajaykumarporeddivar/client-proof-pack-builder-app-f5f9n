import Link from 'next/link';
import { Inter } from 'next/font/google';
import {
  Sparkles,
  Award,
  CircleCheck,
  Zap,
  Lock,
  ArrowRight,
  ClipboardList,
  LayoutDashboard,
  Download,
  DollarSign,
  Users,
  Star,
  Gauge,
} from 'lucide-react';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Proof Pack Builder — Build client-ready proof packs effortlessly',
  description: 'The Client Proof Pack Builder enables small digital agency owners to efficiently transform disparate campaign results into compelling, client-ready proof packs, ensuring faster reporting and stronger client retention arguments.',
};

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
];

const features = [
  {
    icon: ClipboardList,
    name: 'Structured Campaign Data Intake',
    painPoint: 'Manual, scattered data compilation for client reporting leads to wasted hours and weak renewal arguments.',
    description: 'Effortlessly input campaign results and client details into a structured format, eliminating manual data aggregation and ensuring all necessary information is ready for proof pack generation.',
  },
  {
    icon: LayoutDashboard,
    name: 'Actionable Proof Pack Dashboard',
    painPoint: 'Lack of a centralized view means agency owners can\'t quickly identify critical reporting tasks or client needs.',
    description: 'Gain a clear, real-time overview of all proof packs in progress. Prioritize urgent reports, track statuses, and ensure timely client communication from a single, intuitive dashboard.',
  },
  {
    icon: Download,
    name: 'One-Click Client Report Exports',
    painPoint: 'Time-consuming, manual report generation prevents agencies from consistently delivering professional ROI proof to clients.',
    description: 'Generate polished, client-ready proof packs with a single click. Export professional reports that showcase ROI without tedious manual formatting or spreadsheet cleanup, solidifying client trust and renewals.',
  },
];

const roadmapFeatures = [
  { icon: Lock, name: 'Intake Automation', value: 'Automatically pull data from marketing platforms.', tier: 'Pro Tier' },
  { icon: Lock, name: 'Reporting Automation', value: 'Schedule and send reports automatically.', tier: 'Pro Tier' },
  { icon: Lock, name: 'Exports Automation', value: 'Automate delivery of proof packs to clients.', tier: 'Pro Tier' },
  { icon: Lock, name: 'Client Account Management', value: 'Streamline client-specific settings and access.', tier: 'Enterprise Tier' },
  { icon: Lock, name: 'Team Roles & Permissions', value: 'Granular control over team access and responsibilities.', tier: 'Enterprise Tier' },
  { icon: Lock, name: 'Real Database Persistence', value: 'Secure, scalable storage for all your data.', tier: 'Pro Tier' },
  { icon: Lock, name: 'Advanced Analytics', value: 'Deep insights and performance benchmarks.', tier: 'Enterprise Tier' },
  { icon: Lock, name: 'Billing & Entitlement Checks', value: 'Seamless subscription management and feature access.', tier: 'Pro Tier' },
];

const howItWorksSteps = [
  {
    number: 1,
    title: 'Input Your Campaign Data',
    description: 'Effortlessly add client and campaign details, including metrics like clicks, conversions, and spend, into our structured intake forms. It’s designed for speed and accuracy.',
  },
  {
    number: 2,
    title: 'Monitor & Prioritize on the Dashboard',
    description: 'Watch as Proof Pack Builder organizes your data into actionable insights on your centralized dashboard. See which reports are in progress and which are ready for client review.',
  },
  {
    number: 3,
    title: 'Export Client-Ready Proof Packs',
    description: 'With one click, transform your compiled data into a polished, professional proof pack. Deliver compelling ROI evidence that justifies your retainers and secures renewals.',
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '₹0',
    frequency: '/mo',
    description: 'Perfect for new agencies or freelancers exploring streamlined reporting.',
    features: [
      '1 Client Account',
      '3 Campaigns per client',
      '1 Proof Pack/month',
      'Watermarked Exports',
    ],
    cta: 'Get Started',
    href: '/dashboard',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹4,100',
    frequency: '/mo',
    description: 'Our most popular plan, designed for growing small digital agencies.',
    features: [
      '10 Client Accounts',
      '25 Campaigns per client',
      '15 Proof Packs/month',
      'Unwatermarked Exports',
      'Standard Support',
      'Unlock full roadmap in one click',
    ],
    cta: 'Start Pro Today',
    href: '/dashboard',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'Tailored for larger agencies with custom needs and advanced requirements.',
    features: [
      'Unlimited Clients & Campaigns',
      'Unlimited Proof Packs',
      'Priority Support & SLA',
      'Dedicated Account Manager',
      'Unlock full roadmap in one click',
    ],
    cta: 'Contact Us',
    href: 'mailto:sales@clientproofpack.com',
    highlight: false,
  },
];

const testimonials = [
  {
    quote: "Client Proof Pack Builder has transformed how we report. We used to spend hours manually compiling data, now it's done in minutes. Our clients love the professional reports, and renewals are easier than ever!",
    rating: 5,
    name: 'Emily Chen',
    role: 'Founder & Owner, Apex Digital',
  },
  {
    quote: "The dashboard is a game-changer. I can instantly see what reports are due and prioritize our team's work. It's truly a purpose-built tool that understands agency workflow.",
    rating: 5,
    name: 'David Lee',
    role: 'Lead Account Manager, OptiGrowth Marketing',
  },
  {
    quote: "Finally, a tool that automates the most tedious part of our job! The one-click export is flawless, and the quality of the proof packs has significantly boosted our client retention.",
    rating: 5,
    name: 'Sarah Kim',
    role: 'Operations Director, Stellar Campaigns',
  },
];

export default function LandingPage() {
  return (
    <div className={`relative ${inter.className}`}>
      {/* Nav Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-zinc-900 font-bold text-xl">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-semibold">
              CP
            </div>
            <span>Client Proof Pack Builder</span>
          </Link>
          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-zinc-600 hover:text-zinc-900 transition-colors">
                {item.name}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="bg-zinc-900 text-white font-semibold rounded-lg px-4 py-2 hover:bg-zinc-700 transition-colors flex items-center gap-2"
            >
              Open Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/20 mb-4">
              <Sparkles className="h-4 w-4 mr-1" /> AI-Powered Agency Reports
            </span>
            <h1 className="font-black text-5xl md:text-7xl tracking-tight leading-none text-white mt-4">
              Stop Drowning in Manual Client Reports
            </h1>
            <p className="text-zinc-400 text-xl mt-4 max-w-3xl mx-auto">
              The Client Proof Pack Builder autonomously transforms scattered campaign data into polished, client-ready reports, freeing your agency to focus on strategy and growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl hover:bg-zinc-100 transition-all text-lg"
              >
                Start Free Today &rarr;
              </Link>
              <Link
                href="/dashboard"
                className="border border-zinc-600 text-zinc-300 rounded-xl px-8 py-4 hover:bg-zinc-800 hover:border-zinc-500 transition-colors text-lg"
              >
                See It Live &rarr;
              </Link>
            </div>

            {/* Hero Visual: CSS-only UI mockup */}
            <div className="relative rounded-2xl bg-zinc-800/50 border border-zinc-700 p-6 max-w-3xl mx-auto mt-16 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-700/70 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-zinc-500 text-sm">
                  <div className="w-24 h-5 bg-zinc-700 rounded-md"></div>
                  <div className="w-5 h-5 bg-zinc-700 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-700 rounded-lg p-3">
                  <div className="h-3 w-3/4 bg-zinc-600 rounded mb-2"></div>
                  <div className="h-5 w-1/2 bg-indigo-500 rounded animate-pulse"></div>
                </div>
                <div className="bg-zinc-700 rounded-lg p-3">
                  <div className="h-3 w-3/4 bg-zinc-600 rounded mb-2"></div>
                  <div className="h-5 w-1/2 bg-emerald-500 rounded"></div>
                </div>
                <div className="bg-zinc-700 rounded-lg p-3">
                  <div className="h-3 w-3/4 bg-zinc-600 rounded mb-2"></div>
                  <div className="h-5 w-1/2 bg-zinc-500 rounded"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-zinc-700 rounded w-full"></div>
                <div className="h-4 bg-zinc-700 rounded w-11/12"></div>
                <div className="h-4 bg-zinc-700 rounded w-full"></div>
                <div className="h-4 bg-zinc-700 rounded w-10/12 animate-pulse"></div>
                <div className="h-4 bg-zinc-700 rounded w-full"></div>
              </div>
              <div className="mt-6 flex justify-end">
                <div className="w-24 h-9 bg-indigo-500 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-zinc-800/30 border-y border-zinc-700/50 py-8">
          <div className="container mx-auto px-6 flex flex-wrap justify-around items-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="font-black text-4xl text-white">10,000+</span>
              <span className="text-zinc-400 text-sm">Agency Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-black text-4xl text-white">99.9%</span>
              <span className="text-zinc-400 text-sm">Uptime Reliability</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-black text-4xl text-white">2 hours</span>
              <span className="text-zinc-400 text-sm">to first pack</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-black text-4xl text-white">4.9<Star className="inline-block h-6 w-6 fill-amber-400 text-amber-400 -mt-1 ml-1" /></span>
              <span className="text-zinc-400 text-sm">Customer Rating</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-24 px-6">
          <div className="container mx-auto">
            <h2 className="text-zinc-900 font-black text-4xl text-center tracking-tight">
              The 3 workflows that solve your client reporting pain
            </h2>
            <p className="text-zinc-500 mt-3 text-center max-w-2xl mx-auto text-lg">
              Client Proof Pack Builder automates the most time-consuming aspects of agency reporting, so you can focus on delivering results.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-zinc-50 rounded-2xl border border-zinc-100 p-8 hover:shadow-md transition-shadow flex flex-col items-start text-left"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 p-3 mb-6">
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-xl text-zinc-900 tracking-tight mb-2">{feature.name}</h3>
                  <p className="text-zinc-600 text-base mb-4">
                    <span className="font-semibold text-zinc-700">Solves:</span> {feature.painPoint}
                  </p>
                  <p className="text-zinc-600 text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locked Roadmap / Selling Points Section */}
        <section className="bg-zinc-950 text-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-white font-black text-4xl tracking-tight mb-4">
              Unlock the full roadmap in one click
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
              Upgrade your plan to instantly access advanced features that will further automate and scale your agency's reporting capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {roadmapFeatures.map((feature, index) => (
                <div key={index} className="bg-zinc-800 rounded-xl p-6 flex flex-col items-start border border-zinc-700/50">
                  <div className="flex items-center mb-3">
                    <Lock className="h-5 w-5 text-zinc-400 mr-2" />
                    <h3 className="font-semibold text-lg text-white">{feature.name}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-3 text-left">{feature.value}</p>
                  <div className="flex items-center justify-between w-full mt-auto pt-2 border-t border-zinc-700/50">
                    <span className="text-indigo-400 text-xs font-medium px-2 py-1 bg-indigo-900/30 rounded-md">{feature.tier}</span>
                    <span className="text-zinc-500 text-xs italic">Available after upgrade</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="#pricing"
              className="mt-16 inline-flex items-center bg-indigo-600 text-white font-bold rounded-lg px-8 py-4 shadow-md hover:bg-indigo-700 transition-colors text-lg"
            >
              Unlock full roadmap
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-zinc-50 py-24 px-6">
          <div className="container mx-auto">
            <h2 className="text-zinc-900 font-black text-4xl text-center tracking-tight mb-16">
              How Client Proof Pack Builder works
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex-1 flex flex-col items-center text-center max-w-sm">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-xl text-zinc-900 tracking-tight mt-6 mb-3">{step.title}</h3>
                  <p className="text-zinc-600 text-base">{step.description}</p>
                  {index < howItWorksSteps.length - 1 && (
                    <ArrowRight className="h-8 w-8 text-zinc-400 mt-8 md:hidden" />
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:flex justify-around items-center mt-12 px-20">
              {howItWorksSteps.slice(0, howItWorksSteps.length - 1).map((_, index) => (
                <ArrowRight key={index} className="h-10 w-10 text-zinc-300 mx-8 -mt-24" />
              ))}
            </div>
          </div>
        </section>


        {/* Pricing Section */}
        <section id="pricing" className="bg-white py-24 px-6">
          <div className="container mx-auto">
            <h2 className="text-zinc-900 font-black text-4xl text-center tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-zinc-500 mt-3 text-center max-w-2xl mx-auto text-lg mb-16">
              Choose the plan that fits your agency's needs, starting with a free tier to experience the power of automated proof packs.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col bg-white border border-zinc-200 rounded-xl shadow-sm p-8
                  ${tier.highlight ? 'scale-105 ring-2 ring-indigo-500 shadow-xl z-10' : ''}`}
                >
                  {tier.highlight && (
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`font-bold text-2xl tracking-tight mb-2 ${tier.highlight ? 'text-indigo-600' : 'text-zinc-900'}`}>
                    {tier.name}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-6">{tier.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-extrabold text-zinc-900">{tier.price}</span>
                    <span className="text-zinc-500 text-xl font-semibold ml-2">{tier.frequency}</span>
                  </div>
                  <ul className="space-y-3 text-zinc-600 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CircleCheck className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className={`mt-8 block text-center font-bold rounded-lg px-6 py-3 transition-colors text-lg
                    ${tier.highlight
                        ? 'bg-zinc-900 text-white hover:bg-zinc-700'
                        : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-200'
                      }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-zinc-50 py-24 px-6">
          <div className="container mx-auto">
            <h2 className="text-zinc-900 font-black text-4xl text-center tracking-tight mb-16">
              What agency owners are saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-zinc-200 rounded-xl shadow-sm p-8">
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-zinc-600 text-lg italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="font-