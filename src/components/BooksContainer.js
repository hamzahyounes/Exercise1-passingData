import React from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';
import Header from './Header'

const shelfNames = ["currentlyReading", "wantToRead", 'read']
const shelfTitles = ["Currently Reading", "Want To Read", "Read"]

let BooksContainer = props => {
    let { books, changeShelf } = props;
    let index = 0;
    return ( <div className="list-books">
      <Header />

    <div className="list-books-content">
        {shelfNames.map(
                        shelfName => 
                            <BookShelf 
                                key={shelfName} 
                                shelfName={shelfName} 
                                shelfTitle = {shelfTitles[index++]}
                                books={books.filter(book => book.shelf === shelfName)} 
                                changeShelf={changeShelf} />)}
    </div>
    <div className="open-search">
      <Link to="/search">
        <button >Add a book</button>
      </Link>
    </div>
  </div> );
}
 
export default BooksContainer;