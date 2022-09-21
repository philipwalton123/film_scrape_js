import axios from 'axios'
import {useState} from 'react'

export default function InputBar ({setRoles}) {

    const [text, setText] = useState()
    const [searching, setSearching] = useState(false)

    function handleFieldChange(event) {
        event.preventDefault()
        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSearching(true)
        axios.get(`http://localhost:8080/films/${text}`)
            .then((response)=>{
                setSearching(false)
                setRoles(response.data.roles)
            })
    }

    return (
    <div className="Input-bar">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for an actor" onChange={handleFieldChange}></input>
            <button>Go</button>
        </form>
        {searching ? <p>Searching...</p> : null}
    </div>
)
}