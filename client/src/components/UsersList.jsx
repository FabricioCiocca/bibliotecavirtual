import { useEffect, useState } from "react"
import { getAllTypeUsers } from "../api/typeusers.api";
import { UserCard } from "./UserCard";
import axios from "axios";

export function UsersList() {

      const [Users, setUsers] = useState([]);
      useEffect(() => {
          axios.get('http://127.0.0.1:8000/users/api/v1/users/')
              .then(({ data }) => {
                  setUsers(_users => {
                      return data
                  });
              })
      }, [])

    return <div>
        {Users.map(User => (
            <UserCard key={User.id} User={User} />
        ))}
    </div>
}