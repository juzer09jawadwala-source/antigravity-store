"use client";

import { motion } from "framer-motion";
import { Package, Shield, CreditCard, Video } from "lucide-react";

const CARDS = [
  {
    icon: Package,
    title: "Zero Hassle Delivery",
    desc: "We handle all logistics and paperwork. Relax and wait for your device to arrive safely at your door.",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    icon: Shield,
    title: "Official Apple Warranty",
    desc: "100% genuine products. Valid at any authorized Apple Service Provider in India.",
    colSpan: "col-span-1",
  },
  {
    icon: CreditCard,
    title: "Secure Pre-order",
    desc: "Lock in your device today. Our team handles everything until dispatch.",
    colSpan: "col-span-1",
  },
  {
    icon: Video,
    title: "Guaranteed Authentic",
    desc: "Every device is fully verified and securely packaged before dispatch for ultimate transparency.",
    colSpan: "col-span-1 md:col-span-2",
  },
];

export default function TrustHub() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Smart Buyers Choose Us</h2>
          <p className="text-slate-400 text-lg">Engineered for complete peace of mind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.05] transition-colors ${card.colSpan}`}
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
