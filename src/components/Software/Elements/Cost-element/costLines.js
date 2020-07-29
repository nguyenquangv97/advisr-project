import React, { Component } from 'react'
import CostLine from './costLine'
import Table from 'react-bootstrap/Table';
import { Container, Form, FormControl, Button, ButtonGroup, Row, Col} from 'react-bootstrap';

class CostLines extends Component {
        
    render () {

        return this.props.costElements.map((costElement) => (        
            <CostLine 
                key = {costElement.costElId}
                costElement = {costElement} />
            
        ));
    }    

}

export default CostLines