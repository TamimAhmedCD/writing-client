const Hero = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="mt-5 md:mt-16 text-center md:w-4/5 md:mx-auto">
        <h1 className="md:text-5xl text-3xl font-bold text-light-primary-color leading-tight">
          Heartfelt
          <span className="bg-gradient-to-t from-[#443ea3] to-[#9895ffbb] text-transparent bg-clip-text">
            {" "}
            Reflections
          </span>
          : Stories of Love, Loss, and Growth
        </h1>
        <p className="text-gray-600 mt-5">
          Writing Welcomes to ultimate source for fresh perspectives! Explore{" "}
          <br /> curated content to enlighten, entertain and engage global
          readers.
        </p>
      </div>
      <div className="border-t-[2px] my-10"></div>
    </div>
  );
};

export default Hero;
