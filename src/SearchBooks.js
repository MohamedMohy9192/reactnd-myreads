import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: '',
    searchBooks: [],
  };

  updateSearchQuery = (event) => {
    console.log('serachQuery', event);
    const searchQuery = event.target.value;
    this.setState(() => ({
      searchQuery: searchQuery,
    }));

    if (searchQuery && searchQuery !== ' ') {
      BooksAPI.search(searchQuery.trim(), 20).then((books) => {
        if (books.length > 0) {
          this.setState(() => ({
            searchBooks: books,
          }));
        } else {
          this.setState(() => ({
            searchBooks: [],
          }));
        }
      });
    }
  };

  render() {
    const { searchQuery, searchBooks } = this.state;
    const { onUpdateBookShelf, books } = this.props;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              value={searchQuery}
              placeholder='Search by title or author'
              onChange={(event) => this.updateSearchQuery(event)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {searchBooks.map((searchBook) => {
              console.log('searchBookBefore', searchBook);
              let newBookShelf = 'none';
              for (const book of books) {
                if (book.id === searchBook.id) {
                  newBookShelf = book.shelf;
                  break;
                }
              }

              return (
                <li key={searchBook.id}>
                  <Book
                    onUpdateBookShelf={onUpdateBookShelf}
                    book={searchBook}
                    bookShelf={newBookShelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
