import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './TableRow.scss'

class TableRow extends Component {
    constructor(props) {
        super(props);

    }

    deletedata = (event) => {
        axios.delete('http://localhost:4000/business/delete/' + this.props.obj._id)
            .then((res) => {
                console.log('Business successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        alert("Business successfully deleted!")
        window.location.reload()
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.person_name}</td>   
                <td>{this.props.obj.business_name}</td>   
                <td>{this.props.obj.nic_no}</td>
                <td>
                    <Link to={"/update/" + this.props.obj._id} className="btn btn-primary">Update</Link>
                    <Button onClick={this.deletedata} size="sm" variant="danger">Delete</Button>
                </td>      
            </tr>
        );
    }
}

export default TableRow;