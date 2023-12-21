import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React from "react";
import CommentArea from "./CommentArea";

/* const SingleBook = (props) => {
  const { singleBook } = props;
  return (
    <Col
      key={singleBook.asin}
      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
    >
      <Card>
        <Card.Img variant="top" src={singleBook.img} />
        <Card.Body>
          <Card.Title>{singleBook.title}</Card.Title>
          <Card.Text className="btn btn-warning">
            {singleBook.category}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">{singleBook.price}$</Card.Footer>
      </Card>
    </Col>
  );
}; */

const asinExample = "0316438960";

class SingleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    const { singleBook } = this.props;
    return (
      <Col
        key={singleBook.asin}
        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
      >
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={singleBook.img} />
          <Card.Body>
            <Card.Title>{singleBook.title}</Card.Title>
            <Card.Text className="btn btn-warning">
              {singleBook.category}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end">{singleBook.price}$</Card.Footer>
        </Card>
        {this.state.selected && <CommentArea asin={singleBook.asin} />}
      </Col>
    );
  }
}

export default SingleBook;
