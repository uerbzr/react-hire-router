import { Link } from "react-router-dom"
function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
      
       <Link to={`/view/${person.id}`} state={{person}}>
       
       {person.name.first} {person.name.last}
       </Link> 
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
