import React from 'react'

 const SingleUser = ({user}) => {
  const characterId = user.url.split('/').slice(-2, -1)[0];
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`
  return (
    <div className="single-user" >
        <img src={imageUrl} />
        <div className="user-info">
            <h2>{user.name}</h2>
        </div>
    </div>
  )
}
export default SingleUser