import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hook/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <button className="btn" onClick={handleGoogleSignIn}>
        <FaGoogle className="mr-4"></FaGoogle>
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
