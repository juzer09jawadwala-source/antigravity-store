import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-4 block">
              ANTIGRAVITY <span className="text-[#00D4FF]">2.0</span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Your destination for the latest, authentic Apple devices. Experience premium technology with zero hassle.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">Refunds & Cancellations</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">WhatsApp Concierge</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">support@antigravity.dev</Link></li>
              <li><span className="text-emerald-500 font-medium">Fast Nationwide Delivery</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Antigravity 2.0. All rights reserved. Not affiliated with Apple Inc.
          </p>
          <div className="text-center md:text-right">
            <p className="text-white font-bold tracking-widest text-sm uppercase opacity-50">
              Antigravity 2.0 — Engineered for Smart Buyers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
