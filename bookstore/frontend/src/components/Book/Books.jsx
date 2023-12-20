import React, { useEffect, useState } from "react";
import Book from "./Book.jsx";
import axios from "axios";
import "./Book.css";

const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.books;
    //     return response.data.books
  } catch (err) {
    console.log("Error fetching data ", err);
    throw err;
  }
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler()
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => {
        console.error("Error setting books ", err);
      });
  }, []);

  console.log(books);

  return (
    <div>
      <ul>
        {books &&
          books.map((book) => (
            <li key={book._id}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
