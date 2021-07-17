import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books,
      }));
    });
  }

  updateBookShelf = (booktoUpdate, shelf) => {
    BooksAPI.update(booktoUpdate, shelf).then(() => {
      //updatae book shelf
      booktoUpdate.shelf = shelf;
      //filter the books from the passed in book, update the bookshelf and add the book again to the books
      const newBooks = this.state.books
        .filter((book) => book.id !== booktoUpdate.id)
        .concat(booktoUpdate);

        //update the state with the new books
      this.setState(() => ({
        book: newBooks,
      }));

      //update search page after change the book shelf
      BooksAPI.getAll().then((books) => {
        this.setState(() => ({
          books: books,
        }));
      });
    });

   
  };

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => <ListBooks books={this.state.books} onUpdateBookShelf={this.updateBookShelf} />}
        />

        <Route
          path='/search'
          render={() => <SearchBooks books={this.state.books}  onUpdateBookShelf={this.updateBookShelf} />}
        />
      </div>
    );
  }
}

export default BooksApp;
