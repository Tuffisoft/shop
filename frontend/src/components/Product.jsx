import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div>
      <Card className="mh-90">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="card-img-top p-3 h-20"
            alt={product.name}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </Card.Body>
        <Card.Text>{product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card>
    </div>
  );
}
