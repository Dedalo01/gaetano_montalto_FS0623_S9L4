import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };
  }

  getSearchQuery = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { fantasy } = this.props.bookList;
    let allBooksArr = [...fantasy.slice(0, 12)];

    if (this.state.searchQuery !== "") {
      const regex = new RegExp(this.state.searchQuery, "i");
      allBooksArr = allBooksArr.filter((book) => regex.test(book.title));
    }

    return (
      <main>
        <Container className="mb-5 d-flex justify-content-center">
          <input
            type="search"
            name="search"
            id="search"
            onChange={this.getSearchQuery}
            placeholder="search book name"
            value={this.state.searchQuery}
          />
        </Container>
        <Container>
          <Row>
            {(allBooksArr.length > 0 &&
              allBooksArr.map((book) => {
                return <SingleBook key={book.asin} singleBook={book} />;
              })) || (
              <div className="bg-danger border border-4 border-warning rounded p-4 mb-5">
                <h2 className="text-center text-white">
                  No book found with this title!
                </h2>
              </div>
            )}
          </Row>
        </Container>
      </main>
    );
  }
}

export default BookList;
