import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class Search extends React.Component {

  state= {
    query: '',
    books: [],
    error: false,
  }


  handleFetching =async (query) => {
    if(query.length === 0) {
      this.setState({ books: [], error: false});
      return;
    };

    const response = await BooksAPI.search(query);

    if(response.error) {
      this.setState({ books: [], error: true});
      return;
    };
    
    // Comparing books in the response with the books from the main page and adding appropriate shelf value
    const booksWithShelf = response.map((book) => {
      const bookShelf = this.props.booksOnMain.find((b) => b.id === book.id);
      return { ...book, shelf: bookShelf ? bookShelf.shelf : 'none' };
    });

    this.setState({ books: booksWithShelf, error: false });
  }

  handleSearch = (e) => {
    this.setState({ query: e.target.value}, () => {
      this.handleFetching(this.state.query.toLowerCase())
    });
  }


    render() { 
      const { query, books, error } = this.state;
      const {changeShelf, booksOnMain} = this.props;
        return <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => this.handleSearch(e)}
            />
          </div>
        </div>
        
        <div className="search-books-results">
          
          <ol className="books-grid">
            {error && <p>There are no matches.</p>}
            {query === '' || books.map(book => 
              <li key={book.id}>
                <Book 
                  book={book} 
                  changeShelf={changeShelf}
                  tempShelf={'none'}
                  booksOnMain={booksOnMain} />
              </li>
            )}
          </ol>
        </div>
      </div>;
    }
}
 
export default withRouter(Search) ;