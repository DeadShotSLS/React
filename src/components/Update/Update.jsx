import React, { Component } from 'react';
import axios from 'axios';
import './Update.scss'

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person_name: '',
            business_name: '',
            nic_no: ''
        }
        
    }
    componentDidMount() {
        axios.get('http://localhost:4000/business/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    person_name: res.data.person_name,
                    business_name: res.data.business_name,
                    nic_no: res.data.nic_no
                })

        })
        .catch(function (error) {
            console.log(error);
        })
        console.log(`the value ${this.state.person_name}, and ${this.state.nic_no}, and ${this.state.business_name}`)
    }
    
    onSubmitHandler = (event) => {
        event.preventDefault();
        if(this.state.person_name == '' || this.state.business_name == '' || this.state.nic_no == null){
            alert('Please enter all details.')
        }else{
            const obj = {
                person_name : this.state.person_name,
                business_name : this.state.business_name,
                nic_no : this.state.nic_no
            };
            axios.post('http://localhost:4000/business/update/'+ this.props.match.params.id, obj)
                .then(res => console.log(res.data));    
            this.props.history.push('/')
            
        }
    }
    // onChangeHandler = (event) => {
    //     const {name,value} = event.target;

    //     this.setState({
    //         [name]: value
    //     })
    // }

    onChangePersonName = (event) => {
        this.setState({
            person_name: event.target.value
        });
    }

    onChangeBusinessName = (event) => {
        this.setState({
            business_name: event.target.value
        });
    }

    onChangeNicNo = (event) => {
        this.setState({
            nic_no: event.target.value
        });
    }

    render() {
        return (
            <div className="update">
                <h1>Update Business</h1>
                <form>
                    <div className="form-group">
                        <label>New persion Name : </label>
                        <input name="person_name" type="text" className="form-control" onChange={this.onChangePersonName} value={this.state.person_name} />
                    </div>
                    <div className="form-group">
                        <label>New Buisness Name : </label>
                        <input name="business_name" type="text" className="form-control" onChange={this.onChangeBusinessName} value={this.state.business_name} />
                    </div>
                    <div className="form-group">
                        <label>New NIC number : </label>
                        <input name="nic_no" type="number" className="form-control" onChange={this.onChangeNicNo} value={this.state.nic_no} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="update Buisness" onClick={this.onSubmitHandler} />
                    </div>
                </form>
            </div>
        );
    }
}

export default Update;