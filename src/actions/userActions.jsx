

export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users,
  });
  
  export const changeUserName = (idx, newName) => ({
    type: 'CHANGE_USER_NAME',
    payload: { idx, newName },
  });