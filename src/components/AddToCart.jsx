const AddToCart = ({ product, addToCart }) => {
  return (
    <button className="btn btn-primary" onClick={() => addToCart(product)}>
      ADD
    </button>
  );
};

export default AddToCart;
