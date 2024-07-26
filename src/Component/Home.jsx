import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Card from "./Card";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <div>
      <Helmet>
        <title>Bistro </title>
      </Helmet>
      <Banner></Banner>
      <Card></Card>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
