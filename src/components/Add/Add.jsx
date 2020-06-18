import React, { Component } from 'react';
import axios from 'axios';
import './Add.scss'

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person_name: '',
            business_name: '',
            nic_no: ''
        }
    }

    onSubmitHandler = (event) => {
        //alert(JSON.stringify(this.state))
        event.preventDefault();
        // console.log(`the value ${this.state.person_name}, and ${this.state.nic_no}, and ${this.state.business_name}`)
        if(this.state.person_name == '' || this.state.business_name == '' || this.state.nic_no == null){
            alert('Please enter all details.')
        }else{
            const obj = {
                person_name : this.state.person_name,
                business_name : this.state.business_name,
                nic_no : this.state.nic_no
            };
            axios.post('http://localhost:4000/business/add',obj).then(res => console.log(res.data));
            this.setState({
                person_name:'',
                business_name:'',
                nic_no: ''
            })
        }
    }

    onChangeHandler = (event) => {
        const {name,value} = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="add">
                <h1>Add New Business</h1>
                <form>
                    <div className="form-group">
                        <label>Add persion Name : </label>
                        <input name="person_name" type="text" className="form-control" onChange={this.onChangeHandler} value={this.state.person_name} />
                    </div>
                    <div className="form-group">
                        <label>Add Buisness Name : </label>
                        <input name="business_name" type="text" className="form-control" onChange={this.onChangeHandler} value={this.state.business_name} />
                    </div>
                    <div className="form-group">
                        <label>Add NIC number : </label>
                        <input name="nic_no" type="number" className="form-control" onChange={this.onChangeHandler} value={this.state.nic_no} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Register Buisness" onClick={this.onSubmitHandler} />
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;