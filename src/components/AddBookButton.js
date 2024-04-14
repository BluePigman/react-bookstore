import React, { useState } from 'react';

const AddBookButton = ({ onAdd }) => {
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [newBook, setNewBook] = useState({
    name: '',
    price: '',
    category: '',
    description: ''
  });

  const handleAddBook = () => {
    setIsAddingBook(true);
  };

  const handleCloseAddBook = () => {
    setIsAddingBook(false);
    setNewBook({
      name: '',
      price: '',
      category: '',
      description: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, category, description } = newBook;
    if (name && price && category && description) {
      const newBookItem = {
        name,
        price,
        category,
        description
      };
      onAdd(newBookItem);
      handleCloseAddBook();
    } else {
      console.log("All fields are required");
    }
  };

  return (
    <div>
      <button onClick={handleAddBook}>Add Book</button>
      {isAddingBook && (
        <div className="add-book-popup">
          <h2>Add New Book</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newBook.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newBook.price}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newBook.category}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newBook.description}
              onChange={handleChange}
              required
            />
            <button type="submit">Add</button>
            <button type="button" onClick={handleCloseAddBook}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddBookButton;
