import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Features from "../Features/Features";

const Home = () => {
    return (
        <nav>
            <Helmet>
                <title>JS - Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <Features/>
        </nav>
    );
};

export default Home;