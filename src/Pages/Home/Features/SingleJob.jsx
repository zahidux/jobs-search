import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import getAppliedJobs from "../../../GetAppliedJobs/GetAppliedJobs";
import { toast } from "react-toastify";

const SingleJob = ({ jobFeature }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    company,
    jobType,
    location,
    workPlace,
    salary,
  } = jobFeature;

  const appliedJobToDb = (id) => {
    let getJobs = getAppliedJobs();

    const isExists = getJobs[id];
    if (!isExists) {
      getJobs[id] = 1;
      toast.success("Apply successfully 👌!", {
        position: "top-right",
        autoClose: 2500,
      });
    } else {
      toast.info("Already Applied !!!", {
        position: "top-right",
        autoClose: 2500,
      });
    }
    localStorage.setItem(" ", JSON.stringify(getJobs));
  };
  return (
    <div className="p-8 bg-[#FFF] border-solid border-2 border-[#E8E8E8]  ">
      <img className="w-[111px] mb-8" src={companyLogo} alt="" />
      <h3 className="text-2xl text-[#474747] font-bold">{jobTitle}</h3>
      <h5 className="text-lg text-[#757575] font-semibold">{company}</h5>
      <div className="flex gap-2 py-2  text-[#7E90FE] ">
        <button className="border-solid border-2 border-[#7E90FE] py-2 px-5 rounded-md">
          {jobType}
        </button>
        <button className="border-solid border-2 border-[#7E90FE] py-2 px-5">
          {workPlace}
        </button>
      </div>
      <div className="flex gap-4 mb-5 text-lg text-[#757575] font-semibold">
        <div className="flex items-center gap-1">
          <CiLocationOn /> <p>{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <CiDollar /> <p className="">{salary}</p>
        </div>
      </div>
      <Link to={`/job-details/${id}`}>
        <button
          onClick={() => {
            appliedJobToDb(id);
          }}
          className="py-3 px-5 text-lg text-white font-bold bg-gradient-to-r from-[#7E90FE]  to-[#9873FF]  rounded-md"
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleJob;
