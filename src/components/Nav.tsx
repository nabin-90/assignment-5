const Nav = () => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4">

        {/* Mobile Navbar */}
        <div className="relative flex h-20 items-center justify-between md:hidden">

          {/* Left - Hamburger */}
          <button className="flex flex-col gap-1.5">
            <span className="h-1 w-8 rounded bg-gray-500"></span>
            <span className="h-1 w-8 rounded bg-gray-500"></span>
            <span className="h-1 w-8 rounded bg-gray-500"></span>
          </button>

          {/* Center - Logo */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              <span className="text-lg font-bold text-white">
                DS
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Dev<span className="text-pink-500">Stack</span>
            </h2>
          </div>

          {/* Right - Buttons */}
          <div className="ml-auto flex items-center gap-3">
            <button className="text-sm font-medium text-gray-600">
              Sign In
            </button>

            <button className="rounded-full bg-pink-500 px-4 py-2 text-sm font-medium text-white">
              Sign Up
            </button>
          </div>

        </div>

        {/* Desktop Navbar */}
        <div className="hidden h-14 items-center justify-between md:flex">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500">
              <span className="text-[10px] font-bold text-white">
                DS
              </span>
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Dev <span className="text-pink-500">Stack</span>
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
              <a href="#technologies" className="text-gray-500 hover:text-pink-500">
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
            <button className="text-sm text-gray-600">
              Sign In
            </button>

            <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-medium text-white">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;