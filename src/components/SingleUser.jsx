import React from "react";
import { useNavigate } from "react-router-dom";
const SingleUser = ({ user, idx }) => {
  const characterId = user.url.split("/").slice(-2, -1)[0];
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  const selectedCharacter = (idx) => {
    navigate(`/people/${idx + 1}`);
  };
  const navigate = useNavigate();
  return (
    <div onClick={() => selectedCharacter(idx)} className="single-user">
      <img src={imageUrl} />
      <div className="user-info">
        <h2>{user.name}</h2>
      </div>
    </div>
  );
};
export default SingleUser;
