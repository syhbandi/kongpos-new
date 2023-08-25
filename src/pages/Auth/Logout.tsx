import { useSetRecoilState } from "recoil";
import { userState } from "../../atom/User";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
const Logout = () => {
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    localStorage.removeItem("KONGPOS_AUTH");
    setUser("");
  });

  return <Navigate to={"/login"} replace={true} />;
};

export default Logout;
