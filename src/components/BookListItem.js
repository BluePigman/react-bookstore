import React, { useState } from 'react';

import './BookListItem.css'; 

const BookListItem = ({ book, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({ ...book });

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    setEditedBook({ ...book });
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    onEdit(editedBook);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="book">
      {isEditing ? (
        <div className="edit-popup">
          <h2>Edit Book</h2>
          <form>
            <input type="text" name="name" value={editedBook.name} placeholder="Name" onChange={handleChange} />
            <input type="number" name="price" value={editedBook.price} placeholder="Price" onChange={handleChange} />
            <input type="text" name="category" value={editedBook.category} placeholder="Category" onChange={handleChange} />
            <input type="text" name="description" value={editedBook.description} placeholder="Description" onChange={handleChange} />
            <button type="button" onClick={handleEdit}>Save</button>
          </form>
        </div>
      ) : (
        <div className="book-details">
          <h2>{book.name}</h2>
          <p>Price: ${book.price}</p>
          <p>Category: {book.category}</p>
          <p>Description: {book.description}</p>
          <div className="book-actions">
            <button onClick={toggleEditing}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookListItem;
