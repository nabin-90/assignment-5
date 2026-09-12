import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-[445px] max-w-[1160px] items-center justify-between gap-10 px-6 py-12 lg:px-0">
        
        {/* Left Content */}
        <div className="max-w-[590px]">
          <h1 className="text-[42px] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#111827] sm:text-[52px]">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-[550px] text-[16px] leading-[1.7] text-slate-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              className="
                rounded-lg
                bg-linear-to-r from-orange-500 to-pink-500
                px-4 py-2.5
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              Explore Technologies
            </button>

            <button
              className="
                rounded-lg
                border border-slate-200
                bg-white
                px-11 py-2.5
                text-sm font-medium text-slate-600
                transition-all duration-300
                hover:border-slate-300
                hover:bg-slate-50
              "
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden shrink-0 md:block">
          <img
            src={bannerImage}
            alt="Development stack illustration"
            className="w-[350px] object-contain lg:w-[390px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;