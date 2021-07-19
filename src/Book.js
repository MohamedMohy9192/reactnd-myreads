import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
  };

  render() {
    const { onUpdateBookShelf, book, bookShelf } = this.props;

    const bookThumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';
    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookThumbnail})`,
            }}
          />
          <div className='book-shelf-changer'>
            <select
              value={bookShelf}
              onChange={(event) => {
                onUpdateBookShelf(book, event.target.value);
              }}
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
