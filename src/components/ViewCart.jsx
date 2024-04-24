import Summary from "./Summary";

const ViewCart = ({
  cartItem,
  removeFromCart,
  quantity,
  totalPrice,
  checkout,
}) => {
  return (
    <div className="d-flex gap-4">
      <ul className="list-group gap-4 flex-grow-1">
        {cartItem.map((item, index) => (
          <li className="list-group-item border" key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(index)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
      <div className="border flex-grow-2 p-4 h-25">
        <Summary quantity={quantity} totalPrice={totalPrice} />
        <button className="btn btn-primary" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ViewCart;
