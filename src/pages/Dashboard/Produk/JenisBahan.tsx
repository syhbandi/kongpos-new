import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { JenisBahanType } from "../../../constants/Types/jenisBahanTypes";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getJenisBahans } from "../../../api/jenisBahan";
import Select from "../../../components/Form/Select";

const JenisBahan = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [jenisbahans, setJenisBahans] = useState<JenisBahanType[]>([]);

  const query = useQuery({
    queryKey: ["jenisBahan"],
    queryFn: () =>
      getJenisBahans(
        {
          company_id: companyId,
          length: "",
          limit: "",
          order_col: "",
          order_type: "",
          search: "",
        },
        access_token
      ),
  });

  useEffect(() => {
    if (query.data) {
      setJenisBahans(query.data?.data);
    }
  }, [query.data]);

  return (
    <Select
      label="Jenis Bahan"
      name="kd_jenis_bahan"
      options={jenisbahans
        .filter((jenisbahan) => jenisbahan.status !== "0")
        .map((jenisbahan) => ({
          value: jenisbahan.kd_jenis_bahan,
          label: jenisbahan.nama,
        }))}
    />
  );
};

export default JenisBahan;
