import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProdukKontrak } from "../../api/kontrak";
import { toast } from "react-toastify";

type Props = {
  satuan: string;
  kdSatuan: string;
  status: string;
  produk: string;
};

const SatuanDetail = ({ satuan, status, produk, kdSatuan }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateProdukKontrak,
    onSuccess: () => {
      toast.success("Update status produk berhasil");
      queryClient.invalidateQueries({ queryKey: ["produkKontrak"] });
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    mutation.mutate({
      params: {
        comp_id: companyId,
        kd_barang: produk,
        kd_satuan: kdSatuan,
        mbs_status: e.target.checked ? "2" : "1",
        status_barang: e.target.checked ? "2" : "1",
      },
      access_token,
    });
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={produk + kdSatuan}
        defaultChecked={status === "2" ? true : false}
        className="h-4 w-4 cursor-pointer mr-2 disabled:opacity-50 disabled:cursor-not-allowed peer"
        onChange={onChange}
        disabled={mutation.isLoading}
      />
      <label
        htmlFor={produk + kdSatuan}
        className="cursor-pointer peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
      >
        {satuan}
      </label>
    </div>
  );
};

export default SatuanDetail;
