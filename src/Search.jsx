import React from 'react'
import { SearchBox } from './SearchBox'
import WORDS from './WORDS'

const Search = () => {
  return (
    <div>
      <center>
        <h3 style={{margin: "0 0 20px 0"}}>
          Search for a word to practice your pronunciation:
        </h3>
      </center>
        <SearchBox />
    </div>
  )
}

export default Search