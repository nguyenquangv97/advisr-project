import React, {Component} from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Form, FormControl, Button, ButtonGroup, Row, Col} from 'react-bootstrap';
// import PropTypes from 'prop-types'

class CostLine extends Component {
    
    render () {
        const {costElId, unitName, unitQuantity, unitPrice, costPerProductUnit} = this.props.costElement; // Deconstructing

        return(
        
                <tr>
                    <td>
                        <InputGroup id='unitName' onSubmit={this.handleSubmit}>
                            <FormControl
                                className="unitName"
                                placeholder="Name"
                                as="input"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup id='unitQuantity' onSubmit={this.handleSubmit}>
                            <FormControl
                                className="unitQuantity"
                                step="0.001"
                                placeholder="Quantity"
                                as="input"
                                type="number"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup id='unitPrice' onSubmit={this.handleSubmit}>
                            <FormControl
                                className="unitPrice"
                                step="0.001"
                                placeholder="Price"
                                as="input"
                                type="number"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                    </td>
                    <td>
                    <InputGroup id='costPerProductUnit' onSubmit={this.handleSubmit}>
                            <FormControl
                                className="costPerProductUnit"
                                step="0.001"
                                placeholder={costPerProductUnit}
                                as="input"
                                type="number"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                    </td>
                </tr>
        )
    }
}

export default CostLine
