import { Helmet } from "react-helmet";
import "./AppliedJobs.css";
import vector1 from "../../assets/images/Vector-1.png";
import vector from "../../assets/images/Vector.png";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const AppliedJobs = () => {
  const featuresData = useLoaderData();

  const [allAppliedJob, setAllAppliedJob] = useState(featuresData);
  const [showDropDown, setShowDropDown] = useState(false);

  const filterByWorkPlace = (place) => {
    if (place !== "all") {
      const filterJob = featuresData.filter(
        (job) => job.workPlace.toLowerCase() === place.toLowerCase()
      );
      setAllAppliedJob(filterJob);
    } else {
      setAllAppliedJob(featuresData);
    }
  };
  return (
    <section>
      <Helmet>
        <title>JS - Applied Jobs</title>
      </Helmet>
      <div className="pt-52 pb-36 bg-[#f1f6f8] relative overflow-hidden ">
        <h1 className="text-3xl text-[#1A1919] font-bold text-center">
          Applied Jobs
        </h1>
        <img className="absolute -top-0 -right-40" src={vector1} alt="" />
        <img className="absolute left-0 bottom-0" src={vector} alt="" />
      </div>
      <div
        className={`flex flex-col gap-2 absolute text-white text-center p-3 right-0 w-[150px] bg-[#7E90FE] rounded-lg shadow-lg shadow-[#9873FF] transition-all duration-300 ease-in-out z-30 ${
          showDropDown ? "opacity-100 top-[64px]" : "opacity-0 top-24"
        }`}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <button onClick={() => filterByWorkPlace("remote")} className="border">
          Remote
        </button>

        <button onClick={() => filterByWorkPlace("on-site")} className="border">
          On-site
        </button>

        <button onClick={() => filterByWorkPlace("all")} className="border">
          All
        </button>
      </div>
      <div>
        {allAppliedJob?.map((allAppliedJob) => (
          <li>{allAppliedJob}</li>
        ))}
      </div>
    </section>
  );
};

export default AppliedJobs;
