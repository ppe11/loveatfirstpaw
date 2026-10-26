'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, MapPin, PawPrint, ShieldCheck, Sparkles } from 'lucide-react';
import { assets } from '../assets/assets';

const steps = [
  {
    number: '01',
    title: 'Tell us what fits',
    description: 'Take a quick quiz about your lifestyle, home, and the companion you have in mind.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Meet your matches',
    description: 'Explore pets and nearby shelters that fit what you are looking for.',
    icon: PawPrint,
  },
  {
    number: '03',
    title: 'Make a connection',
    description: 'Save your favourites and take the next step toward a new best friend.',
    icon: Heart,
  },
];

const LandingPage = () => {
  return (
    <div className="overflow-hidden bg-[#fffaf5] text-[#18224b]">
      <section className="relative isolate flex min-h-screen items-center px-6 pb-12 pt-24 sm:px-10 lg:px-[10%] lg:pb-16">
        <div aria-hidden="true" className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-[#ffd8c3]/60 blur-3xl" />
        <div aria-hidden="true" className="absolute right-0 top-10 -z-10 h-80 w-80 rounded-full bg-[#dce8ff]/70 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f6c8a8] bg-white/75 px-4 py-2 text-sm font-semibold text-[#b8562d] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Pet adoption, made personal
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-[#111a4d] sm:text-5xl lg:text-6xl">
              Find the pet who feels like <span className="text-[#ed6a38]">home.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Love At First Paw helps you discover adoptable pets, explore nearby shelters, and find a companion that fits your life.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/quiz" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed6a38] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#d95727]">
                Find your match <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pets_all" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cdd6ee] bg-white/80 px-6 py-3.5 text-sm font-bold text-[#17245b] transition hover:-translate-y-0.5 hover:border-[#8da1dc] hover:bg-white">
                Browse pets
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#ed6a38]" /> Nearby shelters</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#ed6a38]" /> Petfinder-powered listings</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }} className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#ffd6bf] via-[#fff0e6] to-[#cedcff] -rotate-3" />
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-[#c3b6ac]/35">
              <Image src={assets.home_cat} alt="Orange cat looking for a home" className="h-[21rem] w-full object-cover sm:h-[27rem]" priority />
            </div>

            <div className="absolute -left-5 bottom-10 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe3d1] text-[#ed6a38]"><Heart className="h-5 w-5 fill-current" /></div>
              <div><p className="text-sm font-bold text-[#17245b]">Made for matching</p><p className="text-xs text-slate-500">A quiz built around you</p></div>
            </div>

            <div className="absolute -right-4 top-12 rounded-2xl border border-white/80 bg-[#17245b] px-4 py-3 text-white shadow-lg">
              <p className="flex items-center gap-2 text-sm font-bold"><PawPrint className="h-4 w-4 text-[#ffbd9e]" /> Ready to meet</p>
              <p className="mt-1 text-xs text-white/70">Your next best friend</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-[10%]">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed6a38]">A kinder way to search</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111a4d] sm:text-4xl">From curious to connected.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="rounded-3xl border border-[#e8eaf3] bg-[#fffdfb] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e8dcd2]/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#ed6a38]">{step.number}</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf1ff] text-[#243577]"><Icon className="h-5 w-5" /></div>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-[#17245b]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
