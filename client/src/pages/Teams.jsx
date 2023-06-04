import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Teams = () => {

    const [teams, setTeams] = useState(
        [{teamName:''}]
    )

    useEffect(() => {
        const fetchAllTeams = async () => {
          try {
            const res = await axios.get("https://react-crud-5j5i.onrender.com/teams")
            setTeams(res.data)
            console.log('run')
          } catch (error) {
            console.log(error)
          }
        }
        fetchAllTeams();
      }, [])

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("https://react-crud-5j5i.onrender.com/teams/"+id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    console.log(teams)

  return (
    <div>
        <h1>Team Rosters</h1>
        <div className="add">
            <button><Link to="/add">Add Team</Link></button>
        </div>
        <div className="teams">
            {teams.map((team, index) => (
                <div key={index} className="team">
                    <h3>{team.teamName}</h3>
                    <button onClick={() => handleDelete(team._id)}>Delete</button>
                    <button><Link to={`/update/${team._id}`}>Update</Link></button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Teams