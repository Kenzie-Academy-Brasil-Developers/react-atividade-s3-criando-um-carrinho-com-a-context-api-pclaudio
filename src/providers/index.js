import { CartProvider } from "./Cart";
import { CatalogueProvider } from "./Catalogue";

const Providers = ({ children }) => {
  return (
    <CatalogueProvider>
      <CartProvider>{children}</CartProvider>
    </CatalogueProvider>
  );
};

export default Providers;
