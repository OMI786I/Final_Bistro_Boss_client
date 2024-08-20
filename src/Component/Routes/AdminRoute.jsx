import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";
import useAuth from "../../Hook/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default AdminRoute;
