/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice.js";
import DeleteItem from "../cart/DeleteItem.jsx";
import { useSelector } from "react-redux";
import UpdateItemQuantity from "../cart/UpdateItemQuantity.jsx";
function MenuItem({ product }) {
  const { id, name, price, description, pictureUrl } = product;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const item = {
      productId: id,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItem(item));
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={pictureUrl} alt={name} className={`h-24 `} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {/* {description.join(", ")} */}
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm">{formatCurrency(price)}</p>
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                productId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem productId={id} />
            </div>
          )}
          {!isInCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
