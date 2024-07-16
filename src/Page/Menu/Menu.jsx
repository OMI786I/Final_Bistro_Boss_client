import { Helmet } from "react-helmet-async";
import Cover from "../../Component/Shared/Cover";
import menuImg from "../../assets/assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
    </div>
  );
};

export default Menu;
