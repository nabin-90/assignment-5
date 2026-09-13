const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4">

        {/* Mobile Navbar */}
        <div className="grid h-20 grid-cols-[auto_1fr_auto] items-center gap-2 md:hidden">
          {/* Left - Hamburger */}
          <button className="flex flex-col gap-1.5">
            <span className="h-1 w-8 rounded bg-gray-500"></span>
            <span className="h-1 w-8 rounded bg-gray-500"></span>
            <span className="h-1 w-8 rounded bg-gray-500"></span>
          </button>

          {/* Center - Logo */}
          <div className="flex min-w-0 items-center justify-center gap-2">
            <div className="brand-gradient-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <span className="text-lg font-bold text-white">DS</span>
            </div>

            <h2 className="whitespace-nowrap text-lg font-bold text-gray-900">
              Dev
              <span className="brand-gradient-text">Stack</span>
            </h2>
          </div>

          {/* Right - Buttons */}
          <div className="flex items-center gap-2">
            <button className="whitespace-nowrap text-xs text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-pink-500">
              Sign In
            </button>

            <button className="brand-gradient-bg whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              Sign Up
            </button>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden h-14 items-center justify-between md:flex">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="brand-gradient-bg flex h-6 w-6 items-center justify-center rounded-md">
              <span className="text-[10px] font-bold text-white">DS</span>
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Dev{" "}
              <span className="brand-gradient-text">Stack</span>
            </h2>
          </div>

          {/* Navigation */}
          <ul className="flex items-center gap-7 text-sm">
            <li>
              <a href="#" className="text-gray-500 hover:text-pink-500">
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="text-gray-500 hover:text-pink-500"
              >
                Technologies
              </a>
            </li>

            <li>
              <a href="#projects" className="text-gray-500 hover:text-pink-500">
                Projects
              </a>
            </li>

            <li>
              <a href="#about" className="text-gray-500 hover:text-pink-500">
                About
              </a>
            </li>

            <li>
              <a href="#contact" className="text-gray-500 hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <button className="text-sm text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-pink-500">
              Sign In
            </button>

            <button className="brand-gradient-bg rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;