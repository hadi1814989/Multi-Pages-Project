import React from 'react'

const TeamReusable = ({img, name,position}) => {
  return (
    <div className="custom-card">
    <img className='team-img' src={img} alt="" />
    <h6>{name}</h6>
    <p>{position}</p>
  </div>
  )
}

export default TeamReusable