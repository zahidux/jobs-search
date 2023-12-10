import React from "react";
import { Helmet } from "react-helmet";
import vector1 from "../../../assets/images/Vector-1.png";
import vector from "../../../assets/images/Vector.png";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UseFeatures from "../../../Hook/UseFeatures";
import "./JobDetails.css";
import { CiDollar } from "react-icons/ci";
import { PiSubtitlesBold } from "react-icons/pi";
import phoneImg from "../../../assets/images/icons/phone.png";
import emailImg from "../../../assets/images/icons/email.png";
import LocationIcon from "../../../assets/images/icons/Location Icon.png";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [featuresData] = UseFeatures();
  const [singleJob, setSingleJob] = useState({});
  useEffect(() => {
    const findJob = featuresData.find((job) => job.id === id);
    setSingleJob(findJob);
  }, [featuresData.length]);

  const {
    jobResponsibility,
    jobDescription,
    requirements,
    experiences,
    salary,
    jobTitle,
    phone,
    email,
    address,
  } = singleJob;

  return (
    <section className="-mt-20">
      <Helmet>
        <title>JS - Applied Jobs</title>
      </Helmet>
      <div className="pt-52 pb-36 bg-[#f1f6f8] relative overflow-hidden ">
        <h1 className="text-3xl text-[#1A1919] font-bold text-center">
          Job Details
        </h1>
        <img className="absolute -top-0 -right-40" src={vector1} alt="" />
        <img className="absolute left-0 bottom-0" src={vector} alt="" />
      </div>
      <div className=" container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="my-32 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-6 md:col-span-2">
            <p className="text-darkGray font-medium leading-8">
              <span className="text-dark font-extrabold">
                Job Description:{" "}
              </span>
              {jobDescription}
            </p>

            <p className="text-darkGray font-medium leading-8">
              <span className="text-dark font-extrabold">
                Job Responsibility:{" "}
              </span>
              {jobResponsibility}
            </p>

            <div>
              <p className="text-dark font-extrabold mb-4">
                Educational Requirements:{" "}
              </p>
              <p className="text-darkGray font-medium leading-8">
                {requirements}
              </p>
            </div>
            <div>
              <p className="text-dark font-extrabold mb-4">
                Educational Experiences:{" "}
              </p>
              <p className="text-darkGray font-medium leading-8">
                {experiences}
              </p>
            </div>
          </div>
          <div className="jobDetailsCart p-8">
            <div>
              <h3 className="text-lg text-[#1A1919] font-bold">Job Details</h3>
              <hr className="text-[#7E90FE] my-5" style={{ opacity: 0.3 }} />
              <div className="">
                <div className="flex items-center gap-2">
                  <CiDollar />
                  <p className="text-darkGray font-medium">
                    <span className="text-lightDark font-extrabold">
                      Salary :
                    </span>{" "}
                    {salary}
                  </p>
                </div>
                <div className="flex gap-2 mt-4 mb-8">
                  <PiSubtitlesBold />
                  <p className="text-darkGray font-medium">
                    <span className="text-lightDark font-extrabold">
                      Job Title :
                    </span>{" "}
                    {jobTitle}
                  </p>
                </div>
                <hr className="text-[#7E90FE] my-5" style={{ opacity: 0.3 }} />
              </div>
            </div>
            {/* Contact Information */}
            <div>
              <div>
                <h4 className="text-lg text-dark font-extrabold mt-8">
                  Contact Information
                </h4>
                <div className="border-b border-[#7E90FE] opacity-30 my-6"></div>

                <div className="flex items-center gap-2 mb-4">
                  <img src={phoneImg} alt="phone" />
                  <p className="text-darkGray font-medium">
                    <span className="text-lightDark font-extrabold">
                      Phone :{" "}
                    </span>
                    {phone}
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <img src={emailImg} alt="Email" />
                  <p className="text-darkGray font-medium">
                    <span className="text-lightDark font-extrabold">
                      Email :{" "}
                    </span>{" "}
                    {email}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <img src={LocationIcon} alt="LocationIcon" />
                  <p className="text-darkGray font-medium">
                    <span className="text-lightDark font-extrabold">
                      Address :{" "}
                    </span>{" "}
                    {address}
                  </p>
                </div>
              </div>
            </div>
            <Link to={"/applyNow"}>
              <button className="w-full mt-8 shadow hover:shadow-xl hover:bg-teal-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 px-7 text-xl font-extrabold text-white rounded-lg">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
