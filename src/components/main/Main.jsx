import Main_List from "./Main_List";
import Product_map from "./Product_map";
import products from "./products";
import "./main.css";

const Main = () => {
  return (
    <main>
      <Main_List />
      <div className="icon">
        <Product_map products={products} />
      </div>
    </main>
  );
};

export default Main;
