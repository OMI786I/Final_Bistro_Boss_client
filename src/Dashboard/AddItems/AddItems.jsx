import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
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
                  defaultValue={"default"}
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
            Add Item <FaUtensilSpoon></FaUtensilSpoon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
