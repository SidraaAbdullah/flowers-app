import React from "react";
import Cart from "../components/cart";
import { EmptyCart } from "../components/cart/components";
import { useSelector } from "react-redux";

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.addToCart);
  
  //REMOVE DUPLICATE OBJECT FROM CART ITEMS
  const values = cartItems
    .reduce((map, obj) => map.set(obj._id, obj), new Map())
    .values();
  const uniqueCartItems = [...values];

  return uniqueCartItems.length ? (
    <Cart navigation={navigation} cartItems={uniqueCartItems} />
  ) : (
    <EmptyCart navigation={navigation} />
  );
};

export { CartScreen };
