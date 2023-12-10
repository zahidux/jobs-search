import UseFeatures from "../../../Hook/UseFeatures";
import SectionTitle from "../../SectionTitle/SectionTitle";
import SingleJob from "./SingleJob";

const Features = () => {
  const [featuresData] = UseFeatures();

  return (
    <div className="container " id="features-job">
      <SectionTitle
        heading={"Featured Jobs"}
        subHeading={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5 items-start">
        {featuresData.map((jobFeature) => (
          <SingleJob key={jobFeature.id} jobFeature={jobFeature}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default Features;
