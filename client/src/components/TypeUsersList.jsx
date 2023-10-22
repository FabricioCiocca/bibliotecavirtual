import { useEffect, useState } from "react"
import { getAllTypeUsers } from "../api/typeusers.api";
import { TypeUserCard } from "./TypeUserCard";

export function TypeUsersList() {
   
    const [typeUsers, setTypeUsers] = useState([]);
   
    useEffect(() => {
        async function loadTypeUsers(){
            const res = await getAllTypeUsers();
            setTypeUsers(res.data);
        }
        loadTypeUsers();
    }, []);

    return <div>
        {typeUsers.map(typeUser => (
            <TypeUserCard key={typeUser.id} typeUser={typeUser} />
        ))}
    </div>
}