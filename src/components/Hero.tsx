import { BlackFriday } from "../utils";

const Hero = () => {
  return (
    <section className="overflow-hidden gb-mg">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[300px]">
        {/* first half of the main hero image */}
        <div className="relative w-full md:rounded-badge flex overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
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
              <div className="flex flex-col items-center">
            
                <h2 className="font-bold text-white text-2xl md:text-4xl ml-2.5">Clearance Sales</h2>
                <p className="max-w-xs mt-1.5 text-xl text-white">
                Buy one or two from us!
              </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* second half of the main hero image */}
        <div className="relative flex flex-col lg:px-2 lg:order-2 h-full md:ml-2 lg:w-7/12">
          {/* First Container */}
          <div className="flex-1 md:rounded-badge pt-16 md:my-2 px-4 lg:pt-24 pb-16 lg:py-16 bg-black flex-col text-center items-center justify-center">
            <h1 className="font-bold text-white ">Big holiday sale</h1>
            <h2 className="text-orange-400 italic">Up to -50%</h2>
          </div>

          

          {/* Second Container hidden on sm*/}
          <div className="flex-1 rounded-badge hidden md:flex items-center justify-between">
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
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                alt=""
              />
            </div>

            
          </div>

          {/* hero carousel for sm */}
          <div className="flex md:hidden align-center justify-center m-3 py-2">
              <div className="carousel carousel-center rounded-box h-96">
                <div className="carousel-item h-full">
                  <img src={BlackFriday} />
                </div>
                <div className="carousel-item h-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                </div>
                <div className="carousel-item h-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                </div>
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
