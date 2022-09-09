import React from 'react'

const InputSearch = ({setInputSearch}) => {

    const handleChange = e => {
        setInputSearch(e.target.value.trim())
    }

  return (
    <div className='inputSearch'>
        <label>Search</label>
        <input onChange={handleChange} type="text" />
    </div>
  )
}

export default InputSearch