import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const DetailedUser = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    let response = await axios.get(`https://swapi.dev/api/people/${id}`);
    let data = response.data;
    setUser(data);
  };

  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="detailed-user">
        <img src={imageUrl} alt="" />
        <div className="detailed-info">
          <h1>{user.name}</h1>
          <p>Height : {user.height}</p>
          <p>Mass : {user.mass}</p>
          <p>Hair Color : {user.hair_color}</p>
          <p>Skin Color : {user.skin_color}</p>
          <p>Eye Color : {user.eye_color}</p>
          <p>Birth Year : {user.birth_year}</p>
          <p>Gender : {user.gender}</p>
        </div>
      </div>
    </>
  );
};
