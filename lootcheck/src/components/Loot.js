import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
    componentDidMount() {
        if(this.props.fetchBitcoin){
            this.props.fetchBitcoin();
        }else {
            // Do nothing
        }
    }

    computeBitcoin() {
        const { bitcoin } = this.props;

        // Guard clause
        if(Object.keys(bitcoin).length === 0) return '';

        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    }

    render() {
        return (
            <div>
                <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
            </div>
        )
    }
}

export default connect(state => state, { fetchBitcoin })(Loot);
