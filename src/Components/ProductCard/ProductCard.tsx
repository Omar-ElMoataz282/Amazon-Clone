import { Link } from "react-router-dom";
import CharLimit from "../../Utils/CharLimit";
import Stars from "../Stars/Stars";
import type { DataTypesProductCard } from "../../Types/Types";

function ProductCard({
  id,
  image,
  title,
  price,
  discount,
  description,
  rate,
}: DataTypesProductCard) {
  //Calculate final price after discount
  const finalPrice = Number((price - discount).toFixed(2));

  //Set limit to description text
  const textDescriptionLimit = CharLimit(description, 90);

  //Set Integer Number To Gold Star
  const finalRate = Math.round(rate);

  return (
    <div className="h-100 bg-white rounded overflow-hidden">
      <Link
        to={`/product/${id}`}
        className="text-black h-100 d-flex flex-column justify-content-around"
      >
        <img
          src={image}
          alt="product-image"
          className="w-100 image-show"
          style={{ height: "200px" }}
        />

        <div className="p-3">
          <h4>{title}</h4>

          <h5 className="text-secondary">
            {finalPrice} <del>{finalPrice != price && price}</del>
          </h5>

          <p className="m-0 pb-2">{textDescriptionLimit}</p>

          <div>
            <Stars ratingNum={finalRate} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
