import React from 'react'

const Inner = () => {

  function label({ type, placeholder, name }) {
    return (
      <label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
        />
     </label>
    )
  }

  return (
    <>

    </>
  )
}

export default Inner
