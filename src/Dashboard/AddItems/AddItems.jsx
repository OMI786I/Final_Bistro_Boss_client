import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";

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
          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
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
        </form>
      </div>
    </div>
  );
};

export default AddItems;
