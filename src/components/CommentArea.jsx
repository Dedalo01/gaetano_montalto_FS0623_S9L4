import React from "react";
const MY_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZmYzNDBkOGEyMDAwMThhNDhiNDQiLCJpYXQiOjE3MDMxNzA0MjYsImV4cCI6MTcwNDM4MDAyNn0.zDZOzrINXtWsLUdcsClFt4Hvcpot3ys_MVrrLjkFzn4";
const URL_BOOK_COMMENTS = "https://striveschool-api.herokuapp.com";
const payload = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${MY_KEY}`,
  },
};

class CommentArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: true,
      isError: false,
    };
  }

  getBookComments = async (bookAsin) => {
    const dynamic_url =
      "https://striveschool-api.herokuapp.com/api/comments/" + bookAsin;
    try {
      const res = await fetch(dynamic_url, payload);
      console.log(res);
      if (!res.ok)
        throw new Error("Error while retrieving comments for this book.");

      const data = await res.json();
      console.log(data);
      this.setState({
        comments: data,
        isLoading: false,
      });

      console.log(this.state);
    } catch (err) {
      console.log("ERROR:", err);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount = async () => {
    this.getBookComments(this.props.asin);
    /*  console.log("componentDidMount");
    const dynamic_url =
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin;
    //const dynamic_url2 = `https://striveschool-api.herokuapp.com/api/books/${this.props.asin}/comments`;
    try {
      const res = await fetch(dynamic_url, payload);

      if (!res.ok)
        throw new Error("Error while retrieving comments for this book.");

      const data = await res.json();
      console.log(data);

      this.setState({
        comments: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("ERROR:", err);
      this.setState({
        isLoading: false,
        isError: true,
      });
    } */
    //console.log(this.state);
  };

  render() {
    return (
      <div>
        <h3>Comments</h3>
        <div></div>
      </div>
    );
  }
}

export default CommentArea;
