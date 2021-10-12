import { useContext } from "react";
import { CatalogueContext } from "../../providers/Catalogue";
import { CartContext } from "../../providers/Cart";

const Button = ({ type, item }) => {
  const { addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext);

  const { addToCart, removeFromCart } = useContext(CartContext);

  const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
