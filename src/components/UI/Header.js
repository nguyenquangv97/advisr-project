import React from 'react';
import { Link } from 'react-router-dom';

// Currently Header is specific to Cost page. Need to turn into function to make dynamic
function Header(props) {
  return (
    <header style={headerStyle}>
      <h5>{props.title}</h5>
      <Link style={linkStyle} to="/">Home</Link>{' | '} 
      <Link style={linkStyle} to={`${props.link1}`}>{props.linkname1}</Link>  {/* Add loop for number of links */}
      <h6 style={subTitleStyle}>{props.subtitle}</h6>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '3px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '5px'
}

const subTitleStyle = {
  margin: '8px',
  padding: '5px',
  color: 'black',
  background: '#868ab5'
}

export default Header;