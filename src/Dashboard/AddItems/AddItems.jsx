import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";
import { FaUtensilSpoon } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
                  {...register("category")}
                  className="select select-bordered w-full "
                >
                  <option disabled selected>
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
