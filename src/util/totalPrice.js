export const totalPrice = (items) => {
  let prices = items.map((p) => p?.originalPrice * p?.quantity);
  const totalPrice = prices?.reduce(
    (previous, current) => (previous += current)
  );
  return totalPrice;
};
export const orderHistoryTotalPrice = (items) => {
  let prices = items.map((p) => p?.price * p?.quantity);
  const totalPrice = prices?.reduce(
    (previous, current) => (previous += current)
  );
  return totalPrice;
};
