import { useContext } from "react";
import { CatalogueContext } from "../../providers/Catalogue";
import { CartContext } from "../../providers/Cart";
import Button from "../Button";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <ul>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <li key={index}>
            {item.name} <Button type={type} item={item} />
          </li>
        ))}

      {type === "cart" &&
        cart.map((item, index) => (
          <li key={index}>
            {item.name} <Button type={type} item={item} />
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
