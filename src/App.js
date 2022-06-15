import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CartContainer from "./components/CartContainer";
import { calculateTotal, getCartItems } from "./redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
