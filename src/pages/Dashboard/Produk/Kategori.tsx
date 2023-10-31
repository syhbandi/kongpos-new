import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { KategoriType } from "../../../constants/Types/kategoriTypes";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getKategoris } from "../../../api/kategori";
import Select from "../../../components/Form/Select";

const Kategori = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [kategoris, setKategoris] = useState<KategoriType[]>([]);

  const query = useQuery({
    queryKey: ["kategori"],
    queryFn: () =>
      getKategoris(
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
      setKategoris(query.data.data);
    }
  }, [query.data]);

  return (
    <Select
      label="Kategori"
      name="kd_kategori"
      options={
        kategoris
          ? kategoris
              .filter((kategori) => kategori.status !== "0")
              .map((kategori) => ({
                value: kategori.kd_kategori,
                label: kategori.nama,
              }))
          : []
      }
    />
  );
};

export default Kategori;
