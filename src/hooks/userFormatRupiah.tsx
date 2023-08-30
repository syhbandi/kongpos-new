const userFormatRupiah = (kepeng: number) => {
  return new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
  }).format(kepeng);
};

export default userFormatRupiah;
