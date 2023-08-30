export const userFormatRupiah = (kepeng: number) => {
  return new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(kepeng);
};

export const useFormatNumber = (kepeng: number) => {
  return new Intl.NumberFormat("ID").format(kepeng);
};

export const useFormatTanggal = (tanggal: string) => {
  return new Intl.DateTimeFormat("id", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(tanggal));
};