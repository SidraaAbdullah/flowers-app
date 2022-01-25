import React from "react";
import Cart from "../components/cart";
import { EmptyCart } from "../components/cart/components";
import { useSelector } from "react-redux";

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.addToCart);

  return cartItems.length ? (
    <Cart navigation={navigation} cartItems={cartItems} />
  ) : (
    <EmptyCart navigation={navigation} />
  );
};

export { CartScreen };
