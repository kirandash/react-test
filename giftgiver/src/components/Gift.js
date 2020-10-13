import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

class Gift extends Component {
    constructor() {
        super();

        this.state = { person: '', present: '' };
    }
    render() {
        return (
            <div>
                <FormGroup>
                    <Form.Label>Person</Form.Label>
                    <FormControl 
                        className='input-person' 
                        onChange={event => this.setState({ person: event.target.value })}
                    />
                </FormGroup>
            </div>
        )
    }
}

export default Gift;
