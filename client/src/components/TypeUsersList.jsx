import { useEffect, useState } from "react"
import { getAllTypeUsers } from "../api/typeusers.api";
import { TypeUserCard } from "./TypeUserCard";
import axios from "axios";


export function TypeUsersList() {

   /* const [typeUsers, setTypeUsers] = useState([]);

    useEffect(() => {
        async function loadTypeUsers() {
            const res = await getAllTypeUsers();
            setTypeUsers(_typeusers => {
                return res.data
            });
        };
        loadTypeUsers();
    }, []);*/

      const [typeUsers, setTypeUsers] = useState([]);
      useEffect(() => {
          axios.get('http://127.0.0.1:8000/users/api/v1/typeUsers/')
              .then(({ data }) => {
                  setTypeUsers(_typeusers => {
                      return data
                  });
              })
      }, [])

    return <div>
        {typeUsers.map(typeUser => (
            <TypeUserCard key={typeUser.id} typeUser={typeUser} />
        ))}
    </div>
}