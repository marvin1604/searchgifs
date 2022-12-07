import React from 'react'

const gifs = ({title, url, id}) => {
  return (
    <a href={id}>
      <h3>{title}</h3>
      <img alt={title} src={url}/>
    </a> 
  )
}

export default gifs