import React from 'react'

export default function Search({ search, setsearch, handlesearch }) {
  return (
    <div className='search-engine'>
      <input type='text' placeholder='Enter city Name' value={search} name='search' onChange={(event) => setsearch(event.target.value)} />
    <button onClick={handlesearch}>search</button>
    </div>
  )
};
