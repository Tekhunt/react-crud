import React, { useState, useEffect } from "react";
import { Input, Icon } from "semantic-ui-react";
import styled from "styled-components";

const data = [
  {
    club: "ATM",
    player: "Suarez",
  },
  {
    club: "Real",
    player: "Banzema",
  },
  {
    club: "Barca",
    player: "Atsu",
  },
  {
    club: "Sevilla",
    player: "Martial",
  },
  {
    club: "Bayern",
    player: "Lewi",
  },
  {
    club: "PSG",
    player: "Mbappe",
  },
  {
    club: "Chelsea",
    player: "Lukaku",
  },
  {
    club: "Arsenal",
    player: "Saka",
  },
  {
    club: "Man City",
    player: "KDB",
  },
  {
    club: "UTD",
    player: "CR7",
  },
  {
    club: "Liverpool",
    player: "Salah",
  },
];

const Container = styled.div`
hr{
    color: gray;
}
`
const MapWrapper = styled.div`
    background-color: #FFFF;
    width: 150px;
    /* height: fit-content; */
    height: 200px;
    color: blue;
    padding: 8px;
    border-radius: 4px;
    overflow: hidden;
    overflow-y: auto;
`
const Search = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordCount, setWordCount] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
      const searchTerm = e.target.value;
      setWordCount(searchTerm)
      setInputValue(searchTerm)

      const filter = data.filter(value => {
          return value.player.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
      })
      if (searchTerm == '') {
          setFilteredData([])
      } else{
          setFilteredData(filter)
      }

  }
  const clearWords = () => {
    setInputValue('')
  }

  return (
    <Container>
      <Input onChange={handleInput} value={inputValue} focus placeholder="Search..." />
      { 
      wordCount.length != 0?  <Icon onClick={clearWords} name="cut" /> :  <Icon name="search" />
        }
      <MapWrapper>
          {inputValue != "" && 
      filteredData.slice(0,4).map((value, key) => {

        return <div key={key} className='mapped'>
            <p>{value.club}: {value.player}</p>
            <hr />
        </div>;
      })
      }
      </MapWrapper>
    </Container>
  );
};

export default Search;
