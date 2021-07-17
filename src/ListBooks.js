import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  };

  render() {
    const { onUpdateBookShelf, books } = this.props;

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Currently Reading</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {books
                    .filter((book) => book.shelf === 'currentlyReading')
                    .map((book) => (
                      <li key={book.id}>
                        {
                          <Book
                            onUpdateBookShelf={onUpdateBookShelf}
                            book={book}
                            bookShelf='currentlyReading'
                          />
                        }
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Want to Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {books
                    .filter((book) => book.shelf === 'wantToRead')
                    .map((book) => (
                      <li key={book.id}>
                        {
                          <Book
                            onUpdateBookShelf={onUpdateBookShelf}
                            book={book}
                            bookShelf='wantToRead'
                          />
                        }
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {books
                    .filter((book) => book.shelf === 'read')
                    .map((book) => (
                      <li key={book.id}>
                        {
                          <Book
                            onUpdateBookShelf={onUpdateBookShelf}
                            book={book}
                            bookShelf='read'
                          />
                        }
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Link className='open-search' to='/search'>
          <button> Add a book</button>
        </Link>
      </div>
    );
  }
}

export default ListBooks;
