'use stric'

import React, {PropTypes} from 'react'

const Search = ({handleSearch}) => (
  <div className='search'>
    <input type='search'
      placeholder='Digite o nome do usuário no GitHub'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
