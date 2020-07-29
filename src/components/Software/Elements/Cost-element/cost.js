import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
// import { } from 'react-bootstrap/Form';
import { Container, Form, FormControl, Button, ButtonGroup, Row, Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CostLines from './costLines';
import './cost.css';
// import styled from 'styled-components';

// const Styles = styled.div`

// `;

class Cost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Variable Cost Per Unit', // for testing purposes only - can be removed together with title line
            user: '',
            company: '',
            type: '',
            productName: '',
            productUnit: '',
            currency: '',
            varCost: 0,
            
            costElements: [
                {
                    costElId:1,
                    unitName: 'Unit1',
                    unitQuantity: 5,
                    unitPrice: 10,
                    costPerProductUnit: 20
                },
                {
                    costElId:2,
                    unitName: 'Unit2',
                    unitQuantity: 20,
                    unitPrice: 20,
                    costPerProductUnit: 30
                }
            ]

        };
        
        this.handleChange = this.handleChange.bind(this);
        this.addRow = this.addRow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        }
        
        //DEV TESTING ELEMENTS
        //     // UNSAFE - for Dev testing  only - remove before building production
        // UNSAFE_componentWillMount(prevProps, prevState) {
        //     console.log('WillMount', this.props, this.state, prevProps, prevState);
        // }
        // UNSAFE_componentDidUpdate(prevProps, prevState) {
        //     console.log('DidUpdate', this.props, this.state, prevProps, prevState);
        // }
        //     // END OF UNSAFE
        // shouldComponentUpdate(nextProps, nextState) {
        //     return false;   // switch True to False to enable or disable Javascript behaviour
        // }
        // END OF DEV TESTING ELEMENTS

        addRow(e){
            this.setState({

                costElements: this.state.costElements.concat("costPerProductUnit: 0")   // Adding new Empty value to create new Row. TODO: Give it a key

                }
            );
        }

        onSubmit(e){
            // Currently does not work
            e.preventDefault();
            alert('Change submitted to '+this.input.value);
        }
        
        handleChange(e) {
            // handle input changes
            this.setState({
                [e.target.name]: e.target.value
        });
        // console.log(e.target.value + e.target.productName)
    }
    
    showVarCostInput(e) {
        // show input form for variable cost if known
        const varCostInput = document.getElementById('varCostInput');
        const calcVarCost = document.getElementById('calcVarCost');
    
        varCostInput.hidden = false;
        calcVarCost.hidden = true;
    
        e.preventDefault();
    }
    
    calculateVarCost(e) {
        // show calculated variable cost if unknown
        const varCostInput = document.getElementById('varCostInput');
        const calcVarCost = document.getElementById('calcVarCost');
        
        varCostInput.hidden = true;
        calcVarCost.hidden = false;
    
        e.preventDefault();
    }
    
    handleSubmit(e) {
        alert('Change submitted');
        
        console.log('Handling submit')
        e.preventDefault();
    
        const {user, company, type, productName, productUnit, currency, varCost,
            unitName, unitQuantity, unitPrice, costPerProductUnit} = this.state;
    
        const userData = [user, company, type, productName, productUnit, currency, varCost];
    
        const productData = [unitName, unitQuantity, unitPrice, costPerProductUnit];
    
        console.log('submitted');
        fetch('http://localhost:3000/' , {
                method: "POST",
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(userData, productData)
            })
            .then((result) => result.json())
            .then((info) => {console.log("Info submited" & info);});
    }





    render() {

        return (

            <div className="App">
                
                <Row className="no-gutters">
                    <Col><h6>{this.state.title}</h6></Col>
                </Row>
                <hr />
                <Container>
                    <Form>
                        <InputGroup className="mb-3" id='userInfo' onSubmit={this.handleSubmit}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>User</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="userInfo"
                                placeholder="User Name"
                                as="input"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" id='company' onSubmit={this.handleSubmit}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Company</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="company"
                                placeholder="Company Name"
                                as="input"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" id='productType' onSubmit={this.handleSubmit}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Type</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="productType"
                                placeholder="Type"
                                as="input"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" id='productName' onSubmit={this.handleSubmit}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Product</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="productName"
                                placeholder="Product Name"
                                as="input"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" id='productUnit' onSubmit={this.handleSubmit}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Unit</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="productUnit"
                                placeholder="Product Unit"
                                as="input"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" id='currency' onSubmit={this.handleSubmit}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Currency</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="currency"
                                placeholder="Currency code"
                                as="input"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                        <Row className="mb-3">
                            <p>
                                Do you already know the Variable Cost Per 1 {this.state.productUnit} of {this.state.productName}?{' '}
                                <ButtonGroup size="sm">
                                    <Button variant="light" onClick={this.showVarCostInput}>Yes</Button>
                                    <Button variant="secondary" onClick={this.calculateVarCost}>No</Button>
                                </ButtonGroup>
                            </p>
                        </Row>

                        <InputGroup className="mb-3" id='varCostInput' onSubmit={this.handleSubmit}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Variable Cost Per 1 {this.state.productUnit} of {this.state.productName}</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Cost"
                                name={'varCost'}
                                type={'number'}
                                step={'0.001'}
                                onChange={this.handleChange}
                            />
                        </InputGroup>

                        <Row className="mb-3" id={'calcVarCost'} hidden={true}>
                            Variable Cost Per 1 {this.state.productUnit} of {this.state.productName}: {this.state.varCost}
                        </Row>

                        <Table responsive borderless striped hover variant="dark" size="sm"> {/* Review this using Complex Layout Bootstrap */}
                            <thead className="align-middle">
                                <tr>
                                    <th>Unit Name</th>
                                    <th>Unit Quantity Per 1 {this.state.productUnit} of {this.state.productName}</th>
                                    <th>Unit Price ({this.state.currency})</th>
                                    <th>Cost Per 1 {this.state.productUnit} of {this.state.productName}</th>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                                <CostLines
                                    costElements={this.state.costElements}
                                />
                            </tbody>
                        </Table>

                        <Button className="btn btn-primary" onClick={this.addRow}>Add New Row</Button>{' '}
                        <Button className="btn btn-primary" variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Cost;