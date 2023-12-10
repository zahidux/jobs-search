import { Link } from "react-router-dom";
import UseCategory from "../../../Hook/UseCategory";
import SectionTitle from "../../SectionTitle/SectionTitle";
import SingleCategory from "./SingleCategory";

const Category = () => {
  const [categoryData] = UseCategory();

  return (
    <section className="container">
      <SectionTitle
        heading={"Job Category List"}
        subHeading={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      ></SectionTitle>
      <div className=" mx-auto grid md:grid-cols-4 mt-8">
        {categoryData.map((jobs) => (
          <SingleCategory key={jobs.id} jobs={jobs}></SingleCategory>
        ))}
      </div>
      <div className="text-center text-red-700 mt-9">
        <Link to={"/server"}>
          <button>See Server</button>
        </Link>
      </div>
    </section>
  );
};

export default Category;
