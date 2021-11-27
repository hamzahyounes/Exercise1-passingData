import React from 'react';
import Book from './Book';


class BookList extends React.Component {


    render() { 
        let { books, changeShelf } = this.props;
        return ( <ol className="books-grid">
                    {books.map(book => (
                            <li key={book.id}>
                                <Book 
                                    id={book.id} 
                                    book={book} 
                                    books={books}
                                    changeShelf={changeShelf} />
                            </li>

                        )
                    
                    )}
                </ol>);
    }
}
 
export default BookList;
