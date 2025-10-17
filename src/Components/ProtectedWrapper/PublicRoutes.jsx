import { Navigate, NavLink, Outlet } from "react-router-dom";
import { useProfile } from "../../Contexts/ProfileContext";


const PublicRoutes = ({ children }) => {
    const { getProfileData ,loading} = useProfile();

  if (getProfileData) {
   return <Navigate to="/" replace />;
  } else {
    return <><Outlet/></>;
  }
};

export default PublicRoutes;
