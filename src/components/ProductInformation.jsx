import AddToCart from "./AddToCart";

const ProductInformation = ({ product, addToCart }) => {
  const { name, price, description } = product;

  return (
    <li className="list-group-item">
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{description}</p>
      <AddToCart product={product} addToCart={addToCart} />
    </li>
  );
};

export default ProductInformation;
