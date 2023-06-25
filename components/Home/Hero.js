import HeroVideo from "./HeroVideo";

const Hero = () => {
  return (
    <div className="relative w-full h-full ">
      <HeroVideo />

      {/* <div className="absolute top-[15%] left-[15%]   bg-slate-300">
        <div className="h-[500px]  w-[400px]  bg-zinc-900"></div>
      </div> */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="max-w-screen-2xl w-full h-full mx-auto">
          <div className="h-3/4  w-1/3  bg-zinc-900">
            {/* <div className="text-white relative top-[33%] -right-[45%] text-9xl  font-bold"> */}
            <div className="text-white relative top-[20%] -right-[25%] text-[110px]  font-bold">
              CHIMTITAN
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white">Your Text Here</h1>
        <p className="text-lg text-white">Some description about the video</p>
      </div> */}
    </div>
  );
};

export default Hero;
