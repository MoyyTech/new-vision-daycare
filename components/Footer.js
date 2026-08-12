import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent-red w-10 h-10 rounded-full flex items-center justify-center font-bold">
                NV
              </div>
              <div>
                <span className="font-bold text-xl">New Vision</span>
                <span className="block text-sm text-navy-300 -mt-1">Daycare</span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">
              A Christian-based group family daycare dedicated to nurturing children in a loving, safe, and educational environment.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-navy-200 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-accent-red flex-shrink-0" />
                <span>1173 E 49th Street<br />Brooklyn, NY 11234</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-red flex-shrink-0" />
                <a href="tel:3473651822" className="hover:text-white transition">
                  (347) 365-1822
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-red flex-shrink-0" />
                <a href="mailto:nerviasgroupfamilydaycare@gmail.com" className="hover:text-white transition">
                  nerviasgroupfamilydaycare@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hours of Operation</h3>
            <div className="flex items-start gap-3 text-navy-200 text-sm">
              <Clock size={18} className="mt-0.5 text-accent-red flex-shrink-0" />
              <div>
                <p className="font-medium text-white">Monday – Friday</p>
                <p>7:30 AM – 5:30 PM</p>
                <p className="mt-3 text-navy-400">Closed on weekends & major holidays</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-10 pt-6 text-center text-navy-400 text-sm">
          <p>© {new Date().getFullYear()} New Vision Daycare. All rights reserved.</p>
          <p className="mt-1">“Direct your children onto the right path, and when they are older, they will not leave.” — Proverbs 22:6</p>
        </div>
      </div>
    </footer>
  );
}