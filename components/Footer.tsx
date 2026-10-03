import Link from "next/link";
import { MessageCircle, Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "919167868179";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20JOON%20STORES,%20I%20have%20an%20enquiry%20regarding%20iPhone%2018%20Pro.`;
  const email = "juzer09jawadwala@gmail.com";

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-24 md:pb-12 text-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white mb-4 block group">
                JOON STORES <span className="text-[#00D4FF] group-hover:text-cyan-300 transition-colors">Dub-Ind</span>
              </Link>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm mb-6">
                Your premier bridge for authentic, sealed Apple devices. Direct Dubai to India logistics with comprehensive worldwide warranty and personal concierge support.
              </p>
            </div>

            {/* Direct Quick Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20 text-emerald-400" />
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#00D4FF]" />
                <span>Email Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
          
          {/* Quick Links / Policies */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">
              Customer Care
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#accessories" className="hover:text-white transition-colors">
                  Official Accessories
                </Link>
              </li>
              <li>
                <Link href="#order-summary" className="hover:text-white transition-colors">
                  Device Configuration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Warranty & Customs Verification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping & Delivery FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">
              Contact Details
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">WhatsApp Support</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 font-medium transition-colors"
                  >
                    +91 9167868179
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00D4FF] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">Direct Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-[#00D4FF] font-medium transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">Logistics Corridor</span>
                  <span className="text-slate-300">Dubai (UAE) ⇄ Mumbai & Pan-India</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs md:text-sm">
            © {new Date().getFullYear()} JOON STORES Dub-Ind. All rights reserved. Not affiliated with Apple Inc.
          </p>
          <div>
            <p className="text-slate-400 font-medium tracking-wide text-xs">
              JOON STORES Dub-Ind — Seamless Direct Imports & Authentic Experience.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
