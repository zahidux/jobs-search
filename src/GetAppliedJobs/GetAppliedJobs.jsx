const getAppliedJobs = () => {
  let AppliedJobs = {};

  const storeAppliedJobs = localStorage.getItem("applied-job");
  if (storeAppliedJobs) {
    AppliedJobs = JSON.parse(storeAppliedJobs);
  }
  return AppliedJobs;
};

export default getAppliedJobs;
