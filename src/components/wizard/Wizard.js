import React, { Component } from 'react';
import Dashboard from '../dashboard/Dashboard';
import { Link } from 'react-router-dom';


class Wizard extends Component {
    constructor () {
        super();
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }
    }

    render() {
        return (
            <div>
                <div>
                <input placeholder="Property Name" onChange= {()=> this.onChange } />
                </div>
                <div>
                <input placeholder="Address"/>
                </div>
                
                <input placeholder="City"/>
                <input placeholder="State"/>
                <input placeholder="Zipcode"/>
                
                <Link to='../dashboard'>
                <button>
                    Cancel
                </button>
                </Link>
            </div>
        )
    }
}

export default Wizard;