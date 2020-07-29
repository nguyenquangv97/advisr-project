import React, { Component } from 'react';
import './costSummary.css';

class CostSummary extends Component {
    constructor() {
        super();
        this.state= {
            costElements: []
        }
    }

    componentDidMount() {
        fetch('/api/costElements')
            .then (res => res.json())
            .then (costElements => this.setState({costElements}, () => console.log('Cost elements fetched',costElements)));
    }

    render() {
        return (
            <div>
                <h1>Cost Summary</h1>

                <ul>
                    {this.state.costElements.map(costElements => 
                        <li key={costElements.id}>{costElements.firstName} {costElements.lastName}</li>
                    )}
                </ul>                  
            </div>
        );
    }
}

export default CostSummary;