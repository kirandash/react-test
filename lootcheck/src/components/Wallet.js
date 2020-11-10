import React, { Component } from 'react'
import { connect } from 'react-redux'

// Exporting the non-connected version as well for testing
export class Wallet extends Component {
    render() {
        return (
            <div>
                <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
            </div>
        )
    }
}

// Exporting connected component for use by other components
export default connect(state => { balance: state }, null)(Wallet)
