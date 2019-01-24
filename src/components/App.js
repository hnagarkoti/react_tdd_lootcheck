import React, { Component } from 'react';
import Wallet from './Wallet';

class App extends Component {
    render(){
        return(
            <div>
                <h2>LootCheck</h2>
                <hr />
                <Wallet />
            </div>
        )
    }
}

export default App;