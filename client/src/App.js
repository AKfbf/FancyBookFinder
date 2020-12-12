import styles from "./App.module.scss";
import Search from "./components/Search/Search";
import BooksList from "./components/BooksList/BooksList";
import { useState, useEffect } from "react";
import FancyHeader from "./components/FancyHeader/FancyHeader";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [bookItemHeight, setBookItemHeight] = useState(0);
  const [apiCallCounter, setApiCallCounter] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = async () => {
    if (window.scrollY > bookItemHeight && !apiCallCounter) {
      setApiCallCounter(apiCallCounter + 1);
    } else if (window.scrollY > apiCallCounter * 2 * bookItemHeight) {
      setApiCallCounter(apiCallCounter + 1);
    }
  };

  return (
    <div className={styles.App}>
      <FancyHeader />
      <Search
        booksData={booksData}
        updateBooksData={setBooksData}
        apiCallCounter={apiCallCounter}
        setApiCallCounter={setApiCallCounter}
      />
      <BooksList booksData={booksData} setItemHeight={setBookItemHeight} />
    </div>
  );
}

export default App;
