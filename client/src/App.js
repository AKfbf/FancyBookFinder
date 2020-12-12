import styles from "./App.module.scss";
import Search from "./components/Search/Search";
import BooksList from "./components/BooksList/BooksList";
import { useState } from "react";
import FancyHeader from "./components/FancyHeader/FancyHeader";

function App() {
  const [booksData, setBooksData] = useState([]);

  return (
    <div className={styles.App}>
      <FancyHeader />
      <Search updateBooksData={setBooksData} />
      <BooksList booksData={booksData} />
    </div>
  );
}

export default App;
