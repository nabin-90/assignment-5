const Nav = () => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="h-14 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">
                DS
              </span>
            </div>

            <h2 className="text-gray-900 font-bold text-lg">
              Dev <span className="text-pink-500">Stack</span>
            </h2>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-7 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-500 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="text-gray-500 hover:text-pink-500 transition"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-gray-500 hover:text-pink-500 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-gray-500 hover:text-pink-500 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-500 hover:text-pink-500 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <button className="hidden sm:block text-sm text-gray-600 hover:text-gray-900">
              Sign In
            </button>

            <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-5 py-2 rounded-full transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;