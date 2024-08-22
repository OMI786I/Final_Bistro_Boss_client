import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Component/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaUtensilSpoon } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();

  const { name, category, recipe, price, _id } = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        //success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading={"Update Item"}
        subHeading={"Refresh Info"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name")}
              className="input input-bordered w-full "
            ></input>
          </div>
          <div className="flex gap-6">
            {/**category */}
            <div>
              {" "}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">category</span>
                </label>
                <select
                  defaultValue={category}
                  {...register("category")}
                  className="select select-bordered w-full "
                >
                  <option disabled value={"default"}>
                    Select a category
                  </option>
                  <option value={"salad"}>Salad</option>
                  <option value={"pizza"}>Pizza</option>
                  <option value={"soup"}>Soup</option>
                  <option value={"dessert"}>dessert</option>
                  <option value={"drinks"}>drinks</option>
                </select>
              </div>
            </div>
            {/**price */}

            <div>
              <div className="form-control w-full my-6 ">
                <label className="label">
                  <span className="label-text">price</span>
                </label>
                <input
                  type="number"
                  defaultValue={price}
                  placeholder="Price"
                  {...register("price")}
                  className="input input-bordered w-full "
                ></input>
              </div>
            </div>
          </div>
          <div>
            {/**recipe details */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
              <textarea
                defaultValue={recipe}
                {...register("recipe")}
                className="textarea textarea-bordered -24"
              ></textarea>
            </div>
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Update Menu Item <FaUtensilSpoon></FaUtensilSpoon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
