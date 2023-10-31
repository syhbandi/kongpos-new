import { useQuery } from "@tanstack/react-query";
import { getUsaha } from "../../api/Login";
import { useRecoilState, useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { MdOutlineStore } from "react-icons/md";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const SelectUsaha = () => {
  const navigate = useNavigate();
  const { no_hp } = useRecoilValue(userState);
  const [companyId, setCompanyId] = useRecoilState(companyIdState);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["usaha"],
    queryFn: () => getUsaha(no_hp),
  });

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("KONGPOS_CID", e.target.value);
    setCompanyId(e.target.value);
    navigate("/dashboard", { replace: true });
  };

  if (isLoading) return <Spinner />;
  if (isError)
    return <div className="font-medium text-red-600">Terjadi kesalahan!</div>;

  return (
    <div className="flex-grow-1 md:flex-grow-0 flex items-center gap-2">
      <MdOutlineStore className="text-xl" />
      <select
        className=" outline-none cursor-pointer"
        id="pilih-usaha"
        value={companyId}
        onChange={onChange}
      >
        <option value="">Pilih usaha</option>
        {data.map((usaha: any) => (
          <option key={usaha?.company_id} value={usaha.company_id}>
            {usaha?.nama_usaha}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectUsaha;
