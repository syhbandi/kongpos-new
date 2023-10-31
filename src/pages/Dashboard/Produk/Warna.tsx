import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { WarnaType } from "../../../constants/Types/warnaTypes";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWarnas } from "../../../api/warna";
import Select from "../../../components/Form/Select";

const Warna = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [warnas, setWarnas] = useState<WarnaType[]>([]);

  const query = useQuery({
    queryKey: ["warna"],
    queryFn: () =>
      getWarnas(
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
      setWarnas(query.data.data);
    }
  }, [query.data]);

  return (
    <Select
      label="Warna"
      name="kd_warna"
      options={
        warnas
          ? warnas
              .filter((warna) => warna.status !== "0")
              .map((warna) => ({
                value: warna.kd_warna,
                label: warna.nama,
              }))
          : []
      }
    />
  );
};

export default Warna;
