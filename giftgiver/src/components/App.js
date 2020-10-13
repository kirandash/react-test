import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper'

class App extends React.Component {
    constructor() {
        super();
        this.state = { gifts: [] };
    }

    addGift = () => {
        // local copy of state variable
        const { gifts } = this.state;
        // const ids = this.state.gifts.map(gift => gift.id);
        // const max_id = max_number(ids);
        // possible branching needs to be tested as well - thus: create separate utility fn
        // const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id)) + 1 })
        this.setState({ gifts });
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);

        this.setState({ gifts });
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {
                        this.state.gifts.map(gift => {
                            return (
                                <Gift 
                                    key={gift.id}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                />
                            )
                        })
                    }
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;
