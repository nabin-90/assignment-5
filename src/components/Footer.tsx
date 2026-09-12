const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1080px] px-6 pt-14 md:px-0">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-[10px] font-bold text-white">
                DS
              </div>

              {/* Brand Name */}
              <h2 className="text-[17px] font-bold">
                <span className="text-slate-900">Dev</span>
                <span className="text-pink-500"> Stack</span>
              </h2>
            </div>

            <p className="mt-3 max-w-[360px] text-[12px] leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-[12px] font-medium text-slate-600">
              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="footer-link hover:text-pink-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link hover:text-pink-500 transition">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="footer-link hover:text-pink-500 transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="footer-link hover:text-pink-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link hover:text-pink-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="footer-link hover:text-pink-500 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="footer-link hover:text-pink-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link hover:text-pink-500 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 border-t border-slate-100">
          <div className="flex flex-col gap-4 py-7 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            
            {/* Copyright */}
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors hover:text-slate-600"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition-colors hover:text-slate-600"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;