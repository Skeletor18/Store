const Product_map = (props) => {
  return props.products.map((item) => {
    return (
      <div className="product_map">
        <div className="img">
          <img src={item.image} alt="false" />
        </div>
        <b>{item.price}</b>
        <span>{item.name}</span>
        <button>Купить</button>
      </div>
    );
  });
};

export default Product_map;
