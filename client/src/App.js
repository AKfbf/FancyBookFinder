import styles from "./App.module.scss";
import Search from "./components/Search/Search";
import BooksList from "./components/BooksList/BooksList";
import { useState } from "react";

function App() {
  const [booksData, setBooksData] = useState([]);

  return (
    <div className={styles.App}>
      <Search updateBooksData={setBooksData} />
      <BooksList booksData={booksData} />
    </div>
  );
}

export default App;
