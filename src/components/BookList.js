import React, { useState } from 'react';
import BookListItem from './BookListItem';
import AddBookButton from './AddBookButton'; 
import { v4 as uuidv4 } from 'uuid'; 

const BookList = () => {
  const [books, setBooks] = useState([
    { id: uuidv4(), name: "Book 1", price: "10", category: "Action", description: "Description 1" },
    { id: uuidv4(), name: "Pug in a Restaraunt", price: "110", category: "Adventure", description: "This book is about a dog who loves to eat." }
  ]);

  const [selectedBook, setSelectedBook] = useState(null); 

  const handleEdit = (editedBook) => {
    const updatedBooks = books.map(book => {
      if (book.id === editedBook.id) {
        return editedBook;
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleAddBook = (newBook) => {
    const newBookItem = {
      id: uuidv4(),
      ...newBook
    };
    setBooks([...books, newBookItem]);
  };

  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="BookList">
      <h1>Book List</h1>
      <AddBookButton onAdd={handleAddBook} />
      {books.map(book => (
        <BookListItem
          key={book.id}
          book={book}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onOpenModal={handleOpenModal}
        />
      ))}
    </div>
  );
};

export default BookList;
