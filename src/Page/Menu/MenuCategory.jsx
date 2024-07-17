import { Link } from "react-router-dom";
import MenuItem from "../../Component/MenuItem";
import Cover from "../../Component/Shared/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  console.log(title);

  if (!items || !title || !coverImg) {
    return <span className="loading loading-spinner loading-lg"></span>;
  } else
    return (
      <div className="pt-8">
        {title && <Cover img={coverImg} title={title}></Cover>}

        <div className="grid md:grid-cols-2 gap-10 my-16">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/order/${title}`}>
          <button className="btn">Order Now</button>
        </Link>
      </div>
    );
};

export default MenuCategory;
