import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import bookCategories from "./data/books.json";

function App() {
  return (
    <>
      <MyNav storeName="Dragon's Book Store" />
      <Welcome storeName="Dragon's Book Store" />
      <BookList bookList={bookCategories} />
      <MyFooter />
    </>
  );
}

export default App;
