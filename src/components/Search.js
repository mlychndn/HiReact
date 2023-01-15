import { useState } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const { allRestaurant, filterHandler } = props;

  const getRestaurant = (e) => {
    if (e.key === "Enter") {
      getFilteredRestaurant();
    }
  };

  const getFilteredRestaurant = () => {
    const searchVal = searchText;
    setSearchText("");

    // allRestaurant.forEach((restaurant) => {
    //   console.log(restaurant.data.name);
    // });
    const filteredRestaurant = allRestaurant.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchVal.toLowerCase())
    );

    filterHandler(filteredRestaurant);
  };

  const getSearchValue = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <input
        className="input-search"
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={getSearchValue}
        onKeyDown={getRestaurant}
      />
      <button className="search-btn" onClick={getFilteredRestaurant}>
        Search
      </button>
    </>
  );
};

export default Search;
