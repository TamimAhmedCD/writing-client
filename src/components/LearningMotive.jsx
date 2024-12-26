const LearningMotive = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10 bg-[#5955d10e] p-5 rounded-xl">
      <div className="md:flex gap-10">
        <img
          src="https://img.freepik.com/premium-photo/e-learning-online-education-home-3d-illustration_68747-295.jpg"
          alt=""
          className="w-4/12 rounded-xl hidden md:block object-cover"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-light-accent text-[36px] lg:text-5xl font-bold">You can Learn Anything.</h1>
          <p className="text-xl lg:text-2xl lg:w-3/4 mt-4 text-light-primary-color text-opacity-70">&quot;When I got out of university, I couldn&apos;t get a job. But now, I have a job and I am in love with computer science because of Academy.&quot;</p>
          <p className="font-medium text-xl mt-3">Aubree Joyce</p>
        </div>
      </div>
    </div>
  );
}

export default LearningMotive;
