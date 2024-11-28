import { BlackFriday } from "../utils";

const Hero = () => {
  return (
    <section className="overflow-hidden gb-mg">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[700px]">
        {/* first half of the main hero image */}
        <div className="relative w-full md:rounded-badge overflow-hidden sm:order-2 lg:order-1 h-96 lg:h-auto lg:w-5/12">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full scale-150"
              src={BlackFriday}
              alt=""
            />
          </div>

          {/* Dark overlay */}
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

        {/* second half of the main hero image */}
        <div className="relative flex flex-col lg:px-2 sm:order-1 lg:order-2 h-full md:ml-2 bg-black lg:w-7/12">
          {/* First Container */}
          <div className="flex-1 md:rounded-badge pt-16 md:mb-2 px-4 lg:pt-24 pb-16 lg:py-16 bg-red-500 flex-col text-center items-center justify-center">
            <h1 className="font-bold text-white ">Big holiday sale</h1>
            <h2 className="text-white">Up to -50%</h2>
          </div>

          {/* Second Container */}
          <div className="flex-1 rounded-badge bg-blue-500 hidden lg:flex items-center justify-between">
            {/* swirl shii */}
          <div className="absolute bottom-0 right-0 hidden lg:block z-0">
            <img
              className="object-contain w-auto h-48"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
              alt=""
            />
          </div>

            <div className="w-4/12 relative px-1 shadow-lg">
              <img
                className="object-cover rounded-box w-full h-full"
                src={BlackFriday}
                alt=""
              />
            </div>

            <div className="w-4/12 relative px-1 shadow-lg">
              <img
                className="object-cover rounded-box w-full h-full"
                src={BlackFriday}
                alt=""
              />
            </div>

            <div className="w-4/12 relative px-1 shadow-lg">
              <img
                className="object-cover rounded-box w-full h-full"
                src={BlackFriday}
                alt=""
              />
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
            <img
              className="w-32 h-32 md:w-40 md:h-40"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
              alt=""
            />
          </div> */
}
