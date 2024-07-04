const formmater = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

export const currencyFormat = (currency) => {
  return formmater.format(currency);
};
