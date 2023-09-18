export const userFormatRupiah = (kepeng: number) => {
  return new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(kepeng);
};

export const useFormatNumber = (kepeng: number) => {
  return new Intl.NumberFormat("ID").format(kepeng);
};

export const useFormatTanggal = (tanggal: string, noTime?: boolean) => {
  if (!tanggal) return null;

  if (noTime)
    return new Intl.DateTimeFormat("ID", { dateStyle: "long" }).format(
      new Date(tanggal)
    );

  return new Intl.DateTimeFormat("ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(tanggal));
};
