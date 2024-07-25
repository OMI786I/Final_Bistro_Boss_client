import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  console.log(import.meta.env.VITE_apiKey);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateCapthca = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen bg-[url('/public/image_assets/others/authentication.png')] ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <img src="/public/image_assets/others/authentication2.png"></img>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-1/2">
          <h1 className="font-bold text-3xl text-center">Login</h1>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate></LoadCanvasTemplate>
              </label>
              <input
                type="captcha"
                placeholder="type the text above"
                className="input input-bordered"
                name="password"
                ref={captchaRef}
                required
              />
              <button
                onClick={handleValidateCapthca}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={disabled}>
                Login
              </button>
            </div>
          </form>
          <p>
            <small>
              New Here? <Link to={"/register"}>Create an account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
