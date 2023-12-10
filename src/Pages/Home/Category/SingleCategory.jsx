const SingleCategory = ({ jobs }) => {
  // console.log(jobs)
  const { img, name, availableJobs } = jobs;
  return (
    <div>
      <div className="p-10">
        <img className="p-8" src={img} alt="" />
        <p className="text-lg font-bold text-[#474747]">{name}</p>
        <small className="text-lg font-medium text-[#A3A3A3]">
          {availableJobs}
        </small>
      </div>
    </div>
  );
};

export default SingleCategory;
