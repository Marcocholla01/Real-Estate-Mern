import React from 'react'

function FacebookOauth() {
    const handleFacebookClick= async() =>{

    }
  return (
    <button
      type="button"
      onClick={handleFacebookClick}
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      continue with facebook
    </button>
  )
}

export default FacebookOauth