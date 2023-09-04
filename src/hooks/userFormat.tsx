export const userFormatRupiah = (kepeng: number) => {
  if (!kepeng) return null;
  return new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(kepeng);
};

export const useFormatNumber = (kepeng: number) => {
  if (!kepeng) return null;
  return new Intl.NumberFormat("ID").format(kepeng);
};

export const useFormatTanggal = (tanggal: string) => {
  if (!tanggal) return null;
  return new Intl.DateTimeFormat("ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(tanggal));
};
