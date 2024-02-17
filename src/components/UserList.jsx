import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeUserName } from "../actions/userActions";
import { createAsyncThunk } from "@reduxjs/toolkit";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const reduxUsers = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUsers = async () => {
    let allCharacters = [];

    let response = await axios.get("https://swapi.dev/api/people");
    let data = response.data.results;
    allCharacters = [...allCharacters, ...data];

    while (response.data.next) {
      response = await axios.get(response.data.next);
      data = response.data.results;
      allCharacters = [...allCharacters, ...data];
    }
    setUsers(allCharacters);
    dispatch(setUsers(allCharacters));
  };

  useEffect(() => {
    fetchUsers();
  }, [dispatch]);

  const selectedCharacter = (idx) => {
    navigate(`/people/${idx + 1}`);
  };

  const changeNameFunc = (idx) => {
    dispatch(changeUserName(idx, "Yeni isim")); // Redux store'daki karakterin ismini değiştir
  };

  return (
    <div className="user-list">
      <ul>
        {users.map((user, idx) => (
          <li key={idx} onClick={() => selectedCharacter(idx)}>
            {" "}
            <SingleUser user={user} key={idx} />
            <button onClick={() => changeNameFunc(idx)}>İsim Değiştir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
