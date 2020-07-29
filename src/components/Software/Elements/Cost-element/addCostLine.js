import React, { Component } from 'react';

class addCostLine extends Component {

    state = {
        title:'';
    }

    addRow(e) {
        // add input row to table for calculating variable cost
        const inputs = [
            ['unitName', 'text'], 
            ['unitQuantity', 'number'],
            ['unitPrice', 'number'], 
            ['costPerProductUnit', 'number']
        ];
        const row = document.createElement('tr'); // Change to append new format
        
        const table = document.getElementById('tbody'); // Change to append new format
        table.appendChild(row);
        
        for (let i = 0; i < inputs.length; i++) {
            let name = inputs[i][0];
            let type = inputs[i][1];
            
            let newInput = document.createElement('input');
            newInput.setAttribute('name', name);
            newInput.setAttribute('type', type);
            newInput.setAttribute('onChange', this.handleChange);
            
            if (type === 'number') {
                newInput.setAttribute('step', '0.001');
            }
            
            row.insertCell(i).appendChild(newInput);
        }
        
        e.preventDefault();
    }


    render() {
        return (
            <div>




            </div>
        );
    }
}

export default addCostLine;