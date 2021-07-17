import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
  };

  state = {
    bookShelf: ''
  }

  render() {
    const { onUpdateBookShelf, book, bookShelf} = this.props;

    //console.log('bookIn Book', book);
    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <div className='book-shelf-changer'>
            <select
              value={bookShelf}
              onChange={(event) => {
                onUpdateBookShelf(book, event.target.value)
                console.log('event.target.value',  event.target.value)
              }
             }
            >
              <option value='move' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
      </div>
    );
  }
}

export default Book;
