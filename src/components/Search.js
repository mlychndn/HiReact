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
        className="my-3 mx-2 px-3 w-80 h-9 shadow-md bg-yellow-50"
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={getSearchValue}
        onKeyDown={getRestaurant}
      />
      <button
        className="mx-5 my-5 py-1  text-xl rounded-full w-28 h-9 bg-orange-400 text-white text-center hover:bg-slate-500"
        onClick={getFilteredRestaurant}
      >
        Search
      </button>
    </>
  );
};

export default Search;
