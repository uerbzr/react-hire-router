import { Link } from "react-router-dom"
function PeopleListItem(props) {
  const { person } = props
  console.log(person)
  return (
    <li>

      <h3>
      
       <Link to={`/view/${person.id.value}`} state={{person}}>       
        {person.name.first} {person.name.last}
       </Link> 
      </h3>
     
    </li>
  )
}

export default PeopleListItem
