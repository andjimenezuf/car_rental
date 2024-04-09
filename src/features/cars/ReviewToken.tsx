import React from 'react'
import { useState } from 'react'

const ReviewToken = () => {

  let review = Math.random() * 5;
  if (review < 1) {
    review++;
  }

  function getBackgroundColor() {
    let color;
    if (review > 3) {
      color = "green"
    } else {
      color = "#b09933";
    }

    return color;
  }

  function getTextColor() {
    let textColor; 
    if (review > 3) {
      textColor = "white";
    } else {
      textColor = "black";
    }

    return textColor
  }
  
  const style = {
    display: "flex",
    height: "55px",
    width: "55px",
    borderRadius: "100px",
    borderWidth: 5,
    borderColor: "white",
    color: getTextColor(),
    background: getBackgroundColor(),
    marginLeft: 0,
    marginTop: 0
  }

  const paraStyle = {
    marginLeft: 11, 
    marginTop: 7,
    fontSize: 25
  }
  
  return (
    <div style={style}>
      <p style={paraStyle}>{review.toFixed(1)}</p>
    </div>
  )
}

export default ReviewToken
