const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1080px] px-6 pt-12 md:px-0 md:pt-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 text-center md:text-left">

            {/* Logo */}
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-[18px] font-bold text-white">
                DS
              </div>

              <h2 className="text-[28px] font-bold">
                <span className="text-slate-900">Dev</span>
                <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-7 text-slate-500 md:mx-0 md:max-w-[360px] md:text-[12px] md:leading-5">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-7 text-[16px] font-medium text-slate-600 md:justify-start md:text-[12px] md:gap-5">
              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                GitHub
              </a>

              <span className="text-slate-400 md:hidden">•</span>

              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                Twitter
              </a>

              <span className="text-slate-400 md:hidden">•</span>

              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 hover:text-pink-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="text-[12px] text-slate-500 hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-[12px] text-slate-500 hover:text-pink-500"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-[12px] text-slate-500 hover:text-pink-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-[12px] text-slate-500 hover:text-pink-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 hover:text-pink-500"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[12px] text-slate-500 hover:text-pink-500"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-100">
          <div className="flex items-center justify-between gap-4 py-6 text-[14px] text-slate-400 md:text-[11px]">

            {/* Copyright */}
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex shrink-0 gap-5 md:gap-6">
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