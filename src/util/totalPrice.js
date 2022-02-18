export const totalPrice = (item) => {
  let prices = item?.products?.map((p) => p?.originalPrice * p?.quantity);
  const totalPrice = prices?.reduce(
    (previous, current) => (previous += current)
  );
  return totalPrice + Number(item?.delivery_charges);
};
export const orderHistoryTotalPrice = (item) => {
  let prices = item?.products?.map((p) => p?.price * p?.quantity);
  const totalPrice = prices?.reduce(
    (previous, current) => (previous += current)
  );
  return totalPrice + Number(item?.delivery_charges);
};
