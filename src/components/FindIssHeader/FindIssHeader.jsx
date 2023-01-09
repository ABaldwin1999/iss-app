import React from 'react'
import './FindIssHeader.scss'
const FindIssHeader = ({message}) => {
const headerMessage = (`Hello to the International Space Station! ${message}`).split("").map((character)=>{
  if(character===" "){
    return(<h2 className='header__blank'>{character} </h2>)
  }
  else{
  return(<h2 className='header__text'>{character} </h2>)
  }
})

  return (
    <div className='header'>{headerMessage}</div>
  )
}

export default FindIssHeader