import { personType } from "../types"

const Person: React.FC<{person: personType}> = ({person}) => {
  return (
    <div className='card'>
      <h3>{person.name}</h3>
      <p>Birth-year - {person.birth_year}</p>
      <p>Genger - {person.gender}</p>
    </div>
  )
}

export default Person