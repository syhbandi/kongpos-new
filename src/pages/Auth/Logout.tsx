import { useSetRecoilState } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
const Logout = () => {
  const setUser = useSetRecoilState(userState);
  const setCId = useSetRecoilState(companyIdState);

  useEffect(() => {
    localStorage.removeItem("KONGPOS_AUTH");
    localStorage.removeItem("KONGPOS_CID");
    setUser("");
    setCId("");
  });

  return <Navigate to={"/login"} replace={true} />;
};

export default Logout;
