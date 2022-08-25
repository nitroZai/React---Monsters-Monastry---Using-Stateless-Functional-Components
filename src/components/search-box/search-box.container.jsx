import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="Enter the monster name"
      onChange={props.onChangeHandler}
    ></input>
  );
};

export default SearchBox;
