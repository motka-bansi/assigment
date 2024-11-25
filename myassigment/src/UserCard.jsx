import React from 'react'

function UserCard(props) {
  return (
    <div>
      <h1>name {props.name}</h1>
      <h2>age {props.age}</h2>
      <h3>loction {props.location}</h3>
    </div>
  )
}

export default UserCard
