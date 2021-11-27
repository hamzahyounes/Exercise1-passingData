import React from 'react';
import BookList from './BookList';

class BookShelf extends React.Component {
    render() { 
        const {shelfTitle, books, changeShelf} = this.props;
        return <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <BookList changeShelf={changeShelf} books={books} />
        </div>
      </div>;
    }
}
 
export default BookShelf;