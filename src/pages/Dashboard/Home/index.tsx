import { useRecoilValue } from "recoil";
import { userState } from "../../../atom/User";

const Home = () => {
  const user = useRecoilValue(userState);
  return (
    <>
      <h1 className="text-2xl font-semibold font-poppins mb-5">Dashboard</h1>
      <h1 className="text-3xl  mb-5">
        Selamat datang, <strong>{user?.nama_user}</strong>!
      </h1>
    </>
  );
};

export default Home;
