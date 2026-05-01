// app/components/Footer.js
import Link from 'next/link';

import logo from '@/assets/logo.png'
import Image from 'next/image';
 

const footerData = [
  {
    title: 'Navigation',
    links: ['Home', 'Solutions', 'Features', 'Case Studies'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Status', 'Integrations', 'Security'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Contact Us'],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 text-slate-800 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer content: Responsive Grid */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-5 md:gap-x-12">
          {/* Logo & Slogan Column (Spans 2 columns on desktop) */}
          <div className="flex flex-col items-center sm:items-start md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
             <Image src={logo} alt='Logo' height={30}></Image>
              <span className="text-xl font-bold tracking-tight text-slate-950">
                TILES PROJECT
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 max-w-md text-center sm:text-left">
              Building dynamic, structure-first systems at the core. Efficiency
              through visual precision and data mapping.
            </p>
          </div>

          {/* Quick Links Sections (Spans 3 columns on desktop) */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:col-span-3">
            {footerData.map(section => (
              <div
                key={section.title}
                className="flex flex-col items-center sm:items-start"
              >
                <h3 className="font-semibold tracking-wider text-xs uppercase text-slate-950">
                  {section.title}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {section.links.map(link => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social (Wraps dynamically) */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center justify-between gap-6 sm:flex-row text-sm text-slate-500">
          <div>  Tiles Inc. All rights reserved.</div>

          {/* Legal / Secondary Links */}
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-cyan-600">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-cyan-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
