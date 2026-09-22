"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Target, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { siteConfig, timelineMilestones } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-brand-dark/40">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Story & Passion"
          title="Transforming Ideas & Dreams into Reality in"
          highlight="Kanjirappilly & Kottayam"
          description="Creative Events & Wedding Planners is a professional event planning and decoration company specializing in beautiful weddings, receptions, engagements, and special celebrations across Kerala."
        />

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" duration={0.8}>
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl">
                <Image
                  src="/assets/Image-30427.jpg"
                  alt={`${siteConfig.business_name} Grand Event Stage`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                    Personalized Event Styling
                  </span>
                  <p className="text-white font-serif text-lg font-bold">
                    Signature stages & decor crafted around your individual vision.
                  </p>
                </div>
              </div>

              {/* Floating Overlap Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-brand-gold/50 shadow-gold-glow hidden sm:block">
                <Image
                  src="/assets/Image-84520.jpg"
                  alt="Floral Decor & Lighting"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>

              {/* Years of Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 px-5 py-4 rounded-2xl bg-gradient-to-br from-brand-gold via-brand-goldDark to-brand-darker text-brand-darker font-bold shadow-2xl border border-brand-goldLight">
                <div className="font-serif text-3xl sm:text-4xl leading-none text-brand-darker">
                  10+
                </div>
                <div className="text-[11px] uppercase tracking-wider text-black font-semibold mt-1">
                  Years of Magic
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" duration={0.8}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-semibold text-brand-goldLight">
                <Sparkles className="w-3.5 h-3.5" />
                <span>10+ Years of Crafting Celebrations</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Every Celebration Begins with Your Unique Dream
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Based in <strong className="text-brand-goldLight">Kanjirappilly, Kottayam</strong>, Creative Events & Wedding Planners brings creativity, personalized planning, and elegant event styling together to create celebrations that reflect each client&apos;s unique personality.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                From traditional engagements, grand church weddings, and majestic Hindu Mandapams to joyful birthday parties and executive corporate gatherings, we ensure your special occasion is executed with meticulous care and unmatched elegance.
              </p>

              {/* Checklist points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Personalized Concept Design",
                  "Stage & Mandap Craftsmanship",
                  "Fresh & Exotic Floral Artistry",
                  "Dedicated Event Day Management",
                  "Transparent & Value Pricing",
                  "Kanjirappilly & Kottayam Experts",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <ScrollReveal delay={0.1}>
            <GlassCard variant="elevated" className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Mission</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                To transform ideas and dreams into memorable experiences through creative concepts, elegant decorations, and carefully planned event execution.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard variant="elevated" className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Vision</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                To be the most trusted and sought-after event styling studio across Kanjirappilly, Kottayam, and Central Kerala, recognized for artistic perfection and reliability.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <GlassCard variant="elevated" className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Value</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Total dedication to quality, clear and honest communication, personalized attention for every budget, and creating moments that bring families joy.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Milestone Timeline */}
        <div className="pt-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold block mb-2">
              Our Milestones
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              A Decade of Creating Magic
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {timelineMilestones.map((milestone, idx) => (
              <ScrollReveal key={milestone.year} delay={idx * 0.1}>
                <GlassCard className="p-6 h-full relative group hover:border-brand-gold/60">
                  <div className="text-xs font-mono font-bold text-brand-goldLight px-2.5 py-1 rounded-md bg-brand-gold/10 inline-block mb-3 border border-brand-gold/30">
                    {milestone.year}
                  </div>
                  <h5 className="font-serif text-base font-bold text-white mb-2 group-hover:text-brand-goldLight transition-colors">
                    {milestone.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {milestone.desc}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
