import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { ModelType } from "../../../constants/Types/modelTypes";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getModels } from "../../../api/model";
import Select from "../../../components/Form/Select";

const Model = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [models, setModels] = useState<ModelType[]>([]);

  const query = useQuery({
    queryKey: ["model"],
    queryFn: () =>
      getModels(
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
      setModels(query.data?.data);
    }
  }, [query.data]);

  return (
    <Select
      label="Model"
      name="kd_model"
      options={models
        .filter((model) => model.status !== "0")
        .map((model) => ({ value: model.kd_model, label: model.nama }))}
    />
  );
};

export default Model;
