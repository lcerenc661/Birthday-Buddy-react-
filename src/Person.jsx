import React from 'react'

const Person = ({person}) => {
  return (
    <article className='person'>
      <img src={person.image} alt={person.name} className='img' />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
      
    </article>
  )
}

export default Person
