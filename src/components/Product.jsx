export const Product = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    category,
    image,
    rating: { rate, count }
  } = product;
  return (
    <div className="product">
      <h5>
        {id} {title}
      </h5>
      <img src={image} alt="" srcset="" />
      <p>{description}</p>
      <p>
        <span>Price : </span> {price}
      </p>
      <p>
        <span>Category : </span> {category}
      </p>
      <p>
        <span>Rating : </span> {rate + ` (${count}) `}{" "}
      </p>
    </div>
  );
};
