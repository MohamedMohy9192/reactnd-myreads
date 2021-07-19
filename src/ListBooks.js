import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  };

  shelves = [
    { currentlyReading: 'Currently Reading' },
    { wantToRead: 'Want to Read' },
    { read: 'Read' },
  ];

  render() {
    const { onUpdateBookShelf, books } = this.props;

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          {this.shelves.map((shelf, index) => {
            const booksOnShelf = books.filter(
              (book) => book.shelf === (Object.keys(shelf)).toString()
            );

            console.log('booksOnShelf', booksOnShelf);
            return (
              <div className='bookshelf' key={index}>
                <h2 className='bookshelf-title'>{Object.values(shelf)}</h2>
                <div className='bookshelf-books'>
                  <ol className='books-grid'>
                    {booksOnShelf.map((book) => (
                      <li key={book.id}>
                        {
                          <Book
                            onUpdateBookShelf={onUpdateBookShelf}
                            book={book}
                            bookShelf={book.shelf}
                          />
                        }
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>
        <Link className='open-search' to='/search'>
          <button> Add a book</button>
        </Link>
      </div>
    );
  }
}

export default ListBooks;
