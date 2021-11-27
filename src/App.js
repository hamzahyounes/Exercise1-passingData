import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksContainer from './components/BooksContainer'
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    booksIds: [],
    query: ''
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({books}); 
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
  }
  
  getCurrentBooks= () => {
    return this.state.books;
  }

  getBooksIds = () => {
    let ids = [];
    this.state.books.forEach(book => {
      ids.push(book.id)
    })
    return ids;
  }

  render() {
    const { books } = this.state;
    return (

        <div className="app">
          
              <Switch>
                  <Route exact path="/">
                    <BooksContainer books={books} changeShelf={this.changeShelf} />
                  </Route>
                  <Route path="/search">
                    <Search 
                      changeShelf={this.changeShelf} 
                      handleSearch={this.handleSearch}
                      booksOnMain={this.state.books} />
                  </Route>
              </Switch>
        </div>
    )
  }
}

export default BooksApp;


