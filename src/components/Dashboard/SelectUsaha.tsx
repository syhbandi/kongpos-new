import { useQuery } from "@tanstack/react-query";
import { getUsaha } from "../../api/Login";
import { useRecoilState, useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { useEffect } from "react";
import { MdOutlineStore } from "react-icons/md";

const SelectUsaha = () => {
  const { no_hp } = useRecoilValue(userState);
  const [companyId, setCompanyId] = useRecoilState(companyIdState);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["usaha"],
    queryFn: () => getUsaha(no_hp),
  });

  useEffect(() => {
    if (data) {
      setCompanyId(data[0].company_id);
    }
  }, []);

  if (isLoading) return <>Memuat...</>;
  if (isError)
    return <div className="font-medium text-red-600">Terjadi kesalahan!</div>;

  return (
    <div className="flex-grow-1 md:flex-grow-0 flex items-center gap-2">
      <MdOutlineStore className="text-xl" />
      <select
        className=" outline-none cursor-pointer"
        value={companyId}
        onChange={({ target }) => setCompanyId(target.value)}
      >
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
