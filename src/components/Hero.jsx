const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-black h-[400px] max-w-7xl">
      <div className="leading-7 text-white max-w-[48%]">
        <h2 className="bg-blue-300 max-w-56 text-center font-bold text-3xl mb-5 rounded-md py-3 uppercase">
          Front End
        </h2>
        <h3 className="font-bold text-2xl mb-2 uppercase">TITULO</h3>
        <p className="max-w-[80%] text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel
          natus voluptate quos quae. Quidem porro sequi deleniti obcaecati
        </p>
      </div>
      <div className="w-[48%] h-[50%] bg-blue-300">video random</div>
    </div>
  );
};

export default Hero;
