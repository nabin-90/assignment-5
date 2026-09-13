import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto flex max-w-[1160px]
          flex-col items-center justify-between
          gap-10
          px-5 py-10
          sm:px-6 sm:py-12
          md:flex-row
          md:py-14
          lg:px-0
        "
      >
        {/* Left Content */}
        <div className="w-full max-w-[590px] text-center md:text-left">
          <h1
            className="
              text-[36px]
              font-extrabold
              leading-[1.15]
              tracking-[-1px]
              text-[#111827]
              sm:text-[44px]
              md:text-[48px]
              lg:text-[52px]
            "
          >
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto mt-5 max-w-[550px]
              text-[15px]
              leading-[1.7]
              text-slate-600
              sm:text-[16px]
              md:mx-0
            "
          >
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex flex-col gap-3
              sm:flex-row sm:flex-wrap
              md:justify-start
              justify-center
            "
          >
            {/* Explore Button */}
            <button
              className="
                rounded-lg
                bg-linear-to-r from-orange-500 to-pink-500
                px-5 py-3
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              Explore Technologies
            </button>

            {/* Learn More Button */}
            <button
              className="
                rounded-lg
                border border-slate-200
                bg-white
                px-8 py-3
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
        <div className="shrink-0">
          <img
            src={bannerImage}
            alt="Development stack illustration"
            className="
              w-[280px]
              object-contain
              sm:w-[320px]
              md:w-[330px]
              lg:w-[390px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;