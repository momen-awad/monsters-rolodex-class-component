
import "./search-box.styles.css";

const SearchBox = ({placeholder, className, onChangeHandler}) => {

    return (
    <input 
    className={className} 
    type='search' 
    placeholder={placeholder}
    onChange={onChangeHandler}
    />
    );
    
}

export default SearchBox;