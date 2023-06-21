import HeroVideo from "./HeroVideo";

const Hero = () => {
  return (
    <div className="relative w-full h-full ">
      <HeroVideo />
      <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white">Your Text Here</h1>
        <p className="text-lg text-white">Some description about the video</p>
      </div>
    </div>
  );
};

export default Hero;
