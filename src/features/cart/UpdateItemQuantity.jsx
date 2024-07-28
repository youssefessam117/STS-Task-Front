/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice.js";

export default function UpdateItemQuantity({ productId, currentQuantity }) {
  const dispatch = useDispatch();
  console.log(currentQuantity);
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type={"round"}
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type={"round"}
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </Button>
    </div>
  );
}
