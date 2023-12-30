import { useEffect, useState } from "react"
import { getAllTypeUsers } from "../api/typeusers.api";
import { UserCard } from "./UserCard";
import axios from "axios";

export function SpecialtysList() {

      const [Specialtys, setSpecialtys] = useState([]);
      useEffect(() => {
          axios.get('http://127.0.0.1:8000/users/api/v1/specialty/')
              .then(({ data }) => {
                  setSpecialtys(_specialtys => {
                      return data
                  });
              })
      }, [])

    return <div>
        {Specialtys.map(Specialty => (
            <SpecialtyCard key={Specialty.id} Specialty={Specialty} />
        ))}
    </div>
}