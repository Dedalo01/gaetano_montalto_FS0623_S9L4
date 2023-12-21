import Container from "react-bootstrap/Container";

const Welcome = (props) => {
  return (
    <Container fluid id="hero" className="p-5 text-center mb-5">
      <h1 className="display-5 fw-bold">{props.storeName}</h1>
      <p className="text-white">Come here to find the newest books!</p>
    </Container>
  );
};

export default Welcome;
