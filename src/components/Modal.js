import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cart/cartSlice";
import { closeModal } from "../redux/features/modal/modalSlice";
import styled from "styled-components";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <ModalContainer
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      <ModalItem>
        <H4>remove all items from your shopping cart?</H4>
        <ModalFooter>
          <Button
            type="button"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </Button>
          <Button
            cancel
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </Button>
        </ModalFooter>
      </ModalItem>
    </ModalContainer>
  );
};

const ModalContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalItem = styled.div`
  background: #ffffff;
  max-width: 400px;
  border-radius: 10px;
  padding: 2rem 1rem;
  text-align: center;
`;
const H4 = styled.h4`
  margin-bottom: 0;
  line-height: 1.5;
`;
const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${(props) => (props.cancel ? "#e63946" : "#1d3557")};
  color: #ffffff;
  border: ${(props) =>
    props.cancel ? "1px solid #e63946" : "1px solid #1d3557"};
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  /* &:hover {
    background: #1d3557;
    color: #ffffff;
    border-color: #1d3557;
  } */
`;

export default Modal;
