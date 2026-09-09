import React from 'react'


export default function UserCard(props) {
const { name, age, role, photo, skills } = props.props;
const cardClass = role === 'Admin' ? 'user-card admin-card' : 'user-card standard-card';
  
return (
<div className={cardClass}>
    <p>Saxeli: {props.props.name}</p>
    <p>Asaki: {props.props.age}</p>
    <p>Roli: {props.props.role}</p>
    <p>Skills:{props.props.skills}</p>
    <img src={props.props.photo}/>
</div>

)
}

 
      
        
      


