import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useSearchParams, useParams } from 'react-router-dom'

const Update = () => {

    const { id } = useParams();


    const navigate = useNavigate();

    const [teams, setTeams] = useState({
        teamName: '',
    })

    const handleClick = async () => {
        try {
            console.log(teams)
            navigate('/')
            const res = await axios.put("http://localhost:5000/teams/" +id, teams)
        } catch (error) {

        }
    }

    console.log(teams)

    const handleChange = (e) => {
        setTeams(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className='form'>
            <h1>Update Team</h1>
            <input type="text" onChange={handleChange} placeholder='team name' name='teamName' />
            <button className='formButton' onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update