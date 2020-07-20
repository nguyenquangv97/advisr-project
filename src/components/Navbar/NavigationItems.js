import React from 'react';

import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom'
import classes from './navigationItems.module.css';

const navigationItem = (props) => (
    <Nav
        className={classes.middle}
		activeKey='/'
        onSelect={(selectedKey) => {
            switch (selectedKey) {
                case 'home': props.history.push('/'); break;
                case 'login': props.history.push('/auth'); break;
                case 'logout': props.history.push('/logout'); break;
                case 'data': props.history.push('/data'); break;
                default: props.history.push('/');
                    
            }
           
        }}>
		<Nav.Item>
            <Nav.Link eventKey='home'>Home</Nav.Link>
		</Nav.Item>
        <Nav.Item>
            {props.isAuthenticated
                ? <Nav.Link eventKey='logout'>Logout</Nav.Link> 
                : <Nav.Link eventKey='login'>Login</Nav.Link>
            }
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey='data'>View data</Nav.Link>
		</Nav.Item>
        
	</Nav>
);

export default withRouter(navigationItem);
