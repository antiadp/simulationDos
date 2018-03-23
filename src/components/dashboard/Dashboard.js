import React, { Component } from 'react';
import axios from 'axios';
import House from '../house/House'
import Wizard from '../wizard/Wizard';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
    }

    render() {
        return (
            <div>dashboard
                <Link to='../wizard'>
                    <button>
                    Add New Property
                    </button>
                </Link>
            <div>
                
                <House/>
                
                </div>
            </div>
            
        )
    }
}

export default Dashboard;