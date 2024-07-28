/* eslint-disable react/prop-types */
import React from "react";
import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice.js";

export default function DeleteItem({ productId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(productId))}>
      Delete
    </Button>
  );
}
