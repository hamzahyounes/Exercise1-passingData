import React from 'react';
import { withRouter } from 'react-router';

class Book extends React.Component {
    
    handleChangeShelf = (e) => {
         this.props.changeShelf(this.props.book, e.target.value)
         console.log(this.props)
    }

    handleImgUrl = () => {
        const {imageLinks} = this.props.book;
        if(imageLinks) return imageLinks.thumbnail;
        else return '';
    }

    handleReview = (book) => {
        this.props.history.push(`books/${book.id}`)
    }

    handleBookExsitence = book => {
        if(this.props.history.location.pathname === '/search') {
            if(this.props.booksIds.indexOf(book.id) >= 0) return 'read';
            else return "none"
        }
        
    }    

    render() { 
        let { book } = this.props;
        let imgurl = this.handleImgUrl();
        let authors = book.authors;
        let title = book.title;

        
        return (
                <div className="book">

                    <div className="book-top">
                        <div 
                        className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: 'url(' + imgurl + ')'}}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={book.shelf} onChange={e => this.handleChangeShelf(e)}>
                                <option value="move" disabled >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option  value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors && authors.join(', ')}</div>
                </div>

            
        )}
}
 
export default withRouter(Book); 