import React from "react";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "../icons";
import {
  removeItem,
  increase,
  decrease,
} from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <Cart>
      <Image>
        <img src={img} alt={title} />
      </Image>

      <div>
        <h4>{title}</h4>
        <Price>${price}</Price>
        <ButtonRemove
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </ButtonRemove>
      </div>
      <div>
        <AmountButton
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <Icon>
            <ChevronUp />
          </Icon>
        </AmountButton>
        <Amount>{amount}</Amount>
        <AmountButton
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <Icon>
            <ChevronDown />
          </Icon>
        </AmountButton>
      </div>
    </Cart>
  );
};

const Cart = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
  border-bottom: 1px solid #645cff33;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }
`;
const Image = styled.div`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;
const Price = styled.h4`
  color: #617d98;
`;
const Amount = styled.p`
  text-align: center;
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: 2;
`;
const AmountButton = styled.button`
  width: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const Icon = styled.div`
  color: #645cff;
  background-color: #645cff59;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 3px;
  transition: all 0.2s linear;
  &:hover {
    color: #a29dff;
  }
`;
const ButtonRemove = styled.button`
  color: #e63946;
  background-color: #e6394647;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  letter-spacing: 0.1rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: bold;
  margin-top: 0.2rem;
`;

export default CartItem;
