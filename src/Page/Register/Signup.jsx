import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {" "}
      <div className="hero bg-base-200 min-h-screen bg-[url('/public/image_assets/others/authentication.png')] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <img src="/public/image_assets/others/authentication2.png"></img>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-1/2">
            <h1 className="font-bold text-3xl text-center">Signup</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  name="name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </form>
            <p>
              <small>
                Already have an account?{" "}
                <Link className="text-blue-700 underline" to={"/login"}>
                  Login in{" "}
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
