import React from 'react'
import FindIssHeader from '../../components/FindIssHeader/FindIssHeader'
import Nav from '../../components/Nav/Nav'

const Header = ({message}) => {
  return (
    <div>
        <FindIssHeader message={message}/>
        <Nav/>
    </div>
  )
}

export default Header