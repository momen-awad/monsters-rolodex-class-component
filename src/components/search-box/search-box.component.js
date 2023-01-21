import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {

    render() {
        let {placeholder, className, onChangeHandler} = this.props;
        return (
        <input 
        className={className} 
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHandler}
        />
        );
    }
}

export default SearchBox;