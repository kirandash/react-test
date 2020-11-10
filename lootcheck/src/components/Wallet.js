import React, { Component } from 'react'
import { connect } from 'react-redux'

// Exporting the non-connected version as well for testing
export class Wallet extends Component {
    constructor() {
        super();
        this.state = { balance: undefined };
    }

    updateBalance = event => {
        this.setState({ 
            balance: parseInt(event.target.value, 10)
         });
    }

    render() {
        return (
            <div>
                <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
                <br/>
                <input className="input-wallet" onChange={this.updateBalance} />
            </div>
        )
    }
}

// Exporting connected component for use by other components
export default connect(state => {return { balance: state }}, null)(Wallet)
// Note: Can not return an object implicitly. we must use return explicitly
