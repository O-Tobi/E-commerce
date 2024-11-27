import { BlackFriday } from "../utils";

const Hero = () => {
  return (
    <section className=" bg-secondary overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[700px]">
        <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
          <div className="absolute bottom-0 right-0 hidden lg:block">
            <img
              className="object-contain w-auto h-48"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
              alt=""
            />
          </div>

          <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
              Get it done.
              <br />
              Fast, Easy.
            </h1>
            <p className="mt-8 text-xl text-black">
              We help you to make your remote work life easier. Build a
              distruction free working experience.
            </p>

            <p className="mt-5 text-base text-black">
              Instant access . No credit card required
            </p>
          </div>

          <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
            <img
              className="w-32 h-32 md:w-40 md:h-40"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
              alt=""
            />
          </div>
        </div>

        <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full scale-150"
              src={BlackFriday}
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center">
                <svg
                  className="w-10 h-10 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
              </div>
              <p className="max-w-xs mt-1.5 text-xl text-white">
                Professionals have organized their desk via PostCra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
