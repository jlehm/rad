import React from 'react'
import './SearchClearInputButton.css'

const SearchClearInputButton = ({searchInput, triggerSearchClearInputButton}) => {
  return (
    (!searchInput)?null:(<div className="searchClearInputButton" onClick={triggerSearchClearInputButton}>clear</div>)
  )
}

export default SearchClearInputButton
