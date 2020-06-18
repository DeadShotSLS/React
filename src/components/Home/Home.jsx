import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {business : []};
    }
    componentDidMount() {
        axios.get('http://localhost:4000/business')
            .then(response => {
                this.setState({business: response.data});
            })
            .catch(function (error){
                console.log(error)
            })
    }
    tabRow(){
        return this.state.business.map(function(object,i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div className="home-body">
                <div className="home">
                    <h1>Business List</h1>
                    <table className="table table-striped"></table>
                        <thead>
                            <tr>
                                <th>Person</th>  
                                <th>Business Name</th>  
                                <th>NIC No</th>
                                <th colSpan="2">Action</th>  
                            </tr>
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                </div>
            </div>
        );
    }
}

export default Home;