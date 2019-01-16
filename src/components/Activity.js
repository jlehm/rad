import React from 'react'
import Rating from './Rating.js'
import './Activity.css'

const Activity = (props) => {
  const image = props.thumb
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div className="activity">
      <div className="activityThumb" style={style}></div>
      <div className="activityTitle">{props.title}</div>
      <div className="activityText">{props.text}</div>
      <Rating rating={props.rating} />
      <div className="activityPrice">{props.price}</div>
    </div>
  )
}

export default Activity
