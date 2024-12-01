import { Sales, Swirl, SmallImages } from "../utils";
import SmallImageMap from "../utils/SmallImageMap";

const Hero = () => {
  return (
    <section className="overflow-hidden gb-mg">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[300px]">
        {/* first half of the main hero image */}
        <div className="relative w-full md:rounded-badge flex overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full scale-150"
              src={Sales}
              alt=""
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-white text-2xl md:text-4xl ml-2.5">
                  Clearance Sales
                </h2>
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
              <img className="object-contain w-auto h-48" src={Swirl} alt="" />
            </div>

            {SmallImages.map((img, index) => (
              <SmallImageMap key={index} imageName={img}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
