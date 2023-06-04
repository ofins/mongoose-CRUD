import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Add = () => {
    const navigate = useNavigate();

    const [teams, setTeams] = useState({
        teamName: '',
        // players:{
        //     name:'',
        //     number:null,
        // }
    })


    const handleChange = (e) => {
        setTeams(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            navigate("/");
            const res = await axios.post("https://react-crud-5j5i.onrender.com/teams", teams)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='form'>
            <h1>Add New Team</h1>
            <input type="text" onChange={handleChange} placeholder='team name' name='teamName' />
            <button className='formButton' onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add