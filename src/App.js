import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box.container";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchFieldValue = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldValue);
  };

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    console.log("Change has been made to the parameterized useEffect");
    setFilteredMonsters(newfilteredMonsters);
  }, [searchField, monsters]);

  useEffect(() => {
    console.log("Effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <h1>Monsters Monastry</h1>

      <SearchBox onChangeHandler={onSearchChange}></SearchBox>

      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
