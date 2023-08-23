import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import HireForm from "./components/HireForm"

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person)
    }
}, [])

  if (!person) return <p>Loading...</p>


  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
