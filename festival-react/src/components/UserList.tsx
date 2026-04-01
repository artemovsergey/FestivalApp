import { useEffect, useState } from "react";
import type { User } from "../models/user";
import axios from "axios";
import { UserCard } from "./UserCard";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5245/api/Users");
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex gap-3 m-2 p-2">
      {users.map((u) => (
        <UserCard u={u} key={u.id} />
      ))}
    </div>
  );
};
