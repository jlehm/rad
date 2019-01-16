import React from 'react'
import './Category.css'

const Category = props => {
  let {image, label} = props.data;
  const style = {
    background: 'black',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    width: '240px',
    display: 'inline-block',
    margin: '10px',
  }
  return(
    <div className="category" style={style}>
      <div className="categoryLabel">{label}</div>
    </div>
  )
}

export default Category
