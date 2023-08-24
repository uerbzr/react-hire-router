import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HireForm(props, updateHiredPeople) {
  const [wage, setWage] = useState(0)
console.log('hire form props', props)
  const person = props.person;
  const navigate = useNavigate()

  if(props.person.wage>0)
  {
    setWage(props.person.wage)
  }
  function handleSubmit(event) {
    event.preventDefault()    
    const hiredPerson = { ...person, wage: wage }
    props.updateHiredPeople(hiredPerson)
    console.log('hired', hiredPerson)
    navigate('/') 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
