import { Helmet } from "react-helmet-async";
import Cover from "../../Component/Shared/Cover";
import menuImg from "../../assets/assets/menu/banner3.jpg";
import pizzaImg from "../../assets/assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/assets/menu/salad-bg.jpg";
import soupImg from "../../assets/assets/menu/soup-bg.jpg";
import dessertImg from "../../assets/assets/menu/dessert-bg.jpeg";
import useMenu from "../../Hook/useMenu";
import SectionTitle from "../../Component/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's offer"}
      ></SectionTitle>
      <MenuCategory
        items={offered}
        title={"offered"}
        coverImg={menuImg}
      ></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"dessert"}
        coverImg={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
