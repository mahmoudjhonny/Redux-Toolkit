import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List Of Users</h2>
      {users.loading && <diV>Loading...</diV>}
      {!users.loading && users.error ? <div>Error: {users.error}</div> : null}
      {!users.loading && users.users.length ? (
        <ul>
          {users.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
