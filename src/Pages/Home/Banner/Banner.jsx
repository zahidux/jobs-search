import heroImg from "./../../../assets/images/hero-img.png";

const Banner = () => {
  return (
    <section className=" container grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <h2 className="text-5xl font-extrabold text-[#1A1919]">
          One Step <br /> Closer To Your <br />
          <span className="text-sky-400"> Dream Job</span>
        </h2>
        <p className="text-lg font-medium text-[#757575] my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="shadow hover:shadow-lg hover:bg-teal-400 bg-sky-500/75 py-5 px-7 text-lg font-extrabold text-white rounded-lg">
          Get Started
        </button>
      </div>
      <img className="" src={heroImg} alt="" />
    </section>
  );
};

export default Banner;
